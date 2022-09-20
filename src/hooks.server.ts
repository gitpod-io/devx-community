import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
// import Analytics from 'analytics-node';
// import { env } from '$env/dynamic/private';

// const analytics = new Analytics(env.ANALYTICS_WRITE_KEY || '');

const trackCookieless: Handle = async ({ event, resolve }) => {
	console.log(new Date().toISOString());
	return await resolve(event);
};

export const handle: Handle = sequence(trackCookieless);
