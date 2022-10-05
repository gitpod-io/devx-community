// eslint-disable @typescript-eslint/no-explicit-any

import type { AnalyticsPayload, PageProps } from '../types/analytics';
import crypto from 'node:crypto';

declare global {
	interface Window {
		prevPages?: string[];
	}
}

export const generateHash = async (value: string) => {
	const hash = crypto.createHash('sha512').update(value).digest('hex');
	return hash;
};

const getPageProps = (): PageProps => {
	return {
		path: window.location.pathname,
		url: window.location.href,
		search: window.location.search,
		title: document.title,
		referrer: window.prevPages ? window.prevPages[window.prevPages.length - 1] : undefined
	};
};

export const trackEvent = async (eventName: string, props: any) => {
	const pageProps = getPageProps();

	const body: AnalyticsPayload = {
		type: 'event',
		eventName,
		props: props,
		context: { page: pageProps }
	};

	await fetch('/api/analytics', {
		method: 'POST',
		body: JSON.stringify(body)
	});
};

export const trackIdentity = async (traits: any) => {
	const body: AnalyticsPayload = {
		type: 'identity',
		traits: traits,
		context: { page: getPageProps() }
	};

	await fetch('/api/analytics', {
		method: 'POST',
		body: JSON.stringify(body)
	});
};

export const trackPage = async () => {
	const pageProps = getPageProps();
	const body: AnalyticsPayload = {
		type: 'page',
		props: pageProps,
		context: { page: pageProps }
	};

	await fetch('/api/analytics', {
		method: 'POST',
		body: JSON.stringify(body)
	});
};
