import save from '$lib/utils/save-to-sheet';

async function saveToSheet(data: any) {
	const isSaved = await save({
		title: 'DevX Community - Signups',
		data
	});

	if (isSaved === 'duplicate') {
		return {
			statusCode: 409,
			body: 'duplicate'
		};
	} else {
		return {
			statusCode: isSaved ? 200 : 500,
			body: JSON.stringify(data) + ' added'
		};
	}
}

export const post = async ({ request }: any) => {
	const body = await request.json();
	const email = body!;

	try {
		const saveResponse = await saveToSheet(email);

		return {
			status: saveResponse.statusCode,
			body: saveResponse.body
		};
	} catch (err) {
		console.error(err);
		return {
			status: 500,
			body: err
		};
	}
};
