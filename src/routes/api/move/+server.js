import { supabase } from '$lib/supabase.server.js';

export async function POST({ request }) {
	const formData = await request.formData();

	let oldLocation = formData.get('oldLocation');
	let newLocation = formData.get('newLocation');

	const { data, error } = await supabase.storage
		.from('files')
		.move(oldLocation, newLocation);

	
	if (error) {
		return new Response(JSON.stringify({ error: error.message }), { status: 500 });
	}

	return new Response(JSON.stringify({ data: data }), { status: 200 });
}
