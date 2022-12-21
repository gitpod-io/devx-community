import gs from 'google-spreadsheet';
import { env } from '$env/dynamic/private';

export default async (sheetInfo: { title: string; data: any }): Promise<boolean | string> => {
	try {
		const doc = new gs.GoogleSpreadsheet(process.env.FEEDBACK_SHEET_ID);
		await doc.useServiceAccountAuth({
			client_email: env.FEEDBACK_GOOGLE_SERVICE_ACCOUNT_EMAIL as string,
			private_key: Buffer.from(env.FEEDBACK_GOOGLE_PRIVATE_KEY_BASE64 as string, 'base64').toString(
				'utf8'
			)
		});
		await doc.loadInfo();
		const sheet = doc.sheetsByTitle[sheetInfo.title];
		const sheetInfoData = sheetInfo.data[0];

		const rows = await sheet.getRows();
		const existingEmails: string[] = [];
		rows.map((row) => {
			const data = row._rawData[0];
			existingEmails.push(data);
		});
		if (existingEmails.includes(sheetInfoData)) {
			return 'duplicate';
		}
		await sheet.addRow([sheetInfo.data]);
		return true;
	} catch (error) {
		console.error(error);
		return false;
	}
};
