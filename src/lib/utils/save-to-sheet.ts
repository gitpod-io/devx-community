import gs from 'google-spreadsheet';

export default async (sheetInfo: { title: string; data: any }): Promise<boolean | string> => {
	try {
		const doc = new gs.GoogleSpreadsheet(process.env.FEEDBACK_SHEET_ID);
		await doc.useServiceAccountAuth({
			client_email: process.env.FEEDBACK_GOOGLE_SERVICE_ACCOUNT_EMAIL,
			private_key: Buffer.from(process.env.FEEDBACK_GOOGLE_PRIVATE_KEY_BASE64, 'base64').toString(
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
