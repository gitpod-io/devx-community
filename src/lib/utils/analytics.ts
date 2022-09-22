// eslint-disable @typescript-eslint/no-explicit-any

import type { AnalyticsPayload } from '../types/analytics';
import crypto from 'node:crypto';

export const generateHash = async (value: string) => {
	const hash = crypto.createHash('sha512').update(value).digest('hex');
	return hash;
};

export const trackEvent = async (eventName: string, props: any) => {
	const body: AnalyticsPayload = {
		type: 'event',
		eventName,
		props
	};
	await fetch('/api/analytics', {
		method: 'POST',
		body: JSON.stringify(body)
	});
};

export const trackIdentity = async (userID: string, traits: any) => {
	const body: AnalyticsPayload = {
		userID,
		type: 'identity',
		traits: traits
	};

	await fetch('/api/analytics', {
		method: 'POST',
		body: JSON.stringify(body)
	});
};

export const trackPage = async (props: any) => {
	const body: AnalyticsPayload = {
		type: 'page',
		props: props
	};
	await fetch('/api/analytics', {
		method: 'POST',
		body: JSON.stringify(body)
	});
};
