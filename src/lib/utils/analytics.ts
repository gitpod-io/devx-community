// eslint-disable @typescript-eslint/no-explicit-any

import { genSalt, hash } from 'bcryptjs';
import type { AnalyticsPayload } from '../types/analytics';
export const generateHash = async (value: string) => {
	const salt = await genSalt(10);
	const hashedValue = await hash(value, salt);
	return hashedValue;
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
