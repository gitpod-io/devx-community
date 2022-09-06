import save from '$lib/utils/save-to-sheet';
import { json } from '@sveltejs/kit';

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

export const POST = async ({ request }: any) => {
	console.log(request);
	const body = await request.json();
	const email = body;

	try {
		const saveResponse = await saveToSheet(email);

		return json(saveResponse.body, {
			status: saveResponse.statusCode
		});
	} catch (err) {
		console.error(err);
		return json(err, {
			status: 400
		});
	}
};
