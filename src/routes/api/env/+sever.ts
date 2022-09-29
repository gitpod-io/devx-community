import { env } from '$env/dynamic/private';
import { json } from '@sveltejs/kit';

export const POST = async () => {
	return json({ context: env.CONTEXT });
};
