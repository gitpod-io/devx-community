import { json, type RequestHandler } from '@sveltejs/kit';
import Analytics from 'analytics-node';
import { env } from '$env/dynamic/private';
import { generateHash } from '$lib/utils/analytics';
import type { AnalyticsPayload } from '$lib/types/analytics';

const writeKey = env.ANALYTICS_WRITE_KEY || '';

const analytics = new Analytics(writeKey);

export const POST: RequestHandler = async ({ request }) => {
	const body = (await request.json()) as AnalyticsPayload;
	const ip = request.headers.get('x-forwarded-for')?.split(',')[0];
	if (!ip) {
		return json({ message: 'no x-forwarded-for header provided' }, { status: 400 });
	}
	const agent = request.headers.get('user-agent') || '';

	const date = new Date();
	const today = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

	const toHashString = ip + agent + today;

	const hash = await generateHash(toHashString);

	if (!writeKey) {
		return json(null, { status: 204 });
	}
	switch (body.type) {
		case 'event':
			if (!body.eventName) return json({ message: 'Please provide eventName' }, { status: 400 });
			analytics.track({
				anonymousId: hash,
				event: body.eventName,
				properties: body.props,
				context: body.context
			});
			break;
		case 'identity':
			if (!body.traits) return json({ message: 'Please provide traits' }, { status: 400 });
			if (!body.userID) return json({ message: 'Please provide userID' }, { status: 400 });
			analytics.identify({
				userId: body.userID,
				traits: body.traits,
				context: body.context
			});
			break;
		case 'page':
			analytics.page({
				properties: body.props,
				context: body.context
			});
			break;
		default:
			return json({ message: 'please provide valid type' }, { status: 400 });
	}

	return json(null, { status: 200 });
};
