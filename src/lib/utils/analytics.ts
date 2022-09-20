import { createHash } from 'crypto';
export const generateHash = (value: string) => {
	return createHash('sha512').update(value).digest('hex');
};
