import { env } from '$env/dynamic/private';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	return json({
		success: true,
		context: env.CONTEXT,
		branch: env.BRANCH,
		URL: env.URL,
		PRIME_URL: env.DEPLOY_PRIME_URL
	});
};
