// eslint-disable @typescript-eslint/no-explicit-any
export interface AnalyticsPayload {
	type: 'event' | 'identity' | 'page';
	userID?: string;
	props?: any;
	traits?: any;
	context?: any;
	eventName?: string;
}
