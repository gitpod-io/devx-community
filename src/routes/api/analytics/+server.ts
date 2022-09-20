import { json, type RequestHandler } from '@sveltejs/kit';
import Analytics from 'analytics-node';
import { env } from '$env/dynamic/private';
import { generateHash } from '$lib/utils/analytics';

const writeKey = env.ANALYTICS_WRITE_KEY || '';

const analytics = new Analytics(writeKey);

export const POST: RequestHandler = async ({ request }) => {
	const ip = request.headers.get('x-forwarded-for')?.split(',')[0];
	if (!ip) {
		return json({ message: 'no x-forwarded-for header provided' }, { status: 400 });
	}
	const agent = request.headers.get('user-agent') || '';

	const date = new Date();
	const today = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

	const toHashString = ip + agent + today;

	const hash = generateHash(toHashString);

	if (writeKey) {
		analytics.track({
			anonymousId: hash,
			event: 'Button Click'
		});
	}
	return json(null, { status: 200 });
};
