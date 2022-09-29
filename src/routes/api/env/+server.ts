import { env } from '$env/dynamic/private';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	return json({
		success: true,
		context: env.CONTEXT,
		secondContext: process.env.CONTEXT,
		URL: env.URL,
		secondURL: process.env.URL
	});
};
