import { supabase } from '$lib/supabase.server.js';

export async function POST({ request }) {
	const formData = await request.formData();

	let Location = formData.get('location');

	const { data, error } = await supabase.storage.from('files').remove([Location]);

	if (error) {
		return new Response(JSON.stringify({ error: error.message }), { status: 500 });
	}

	return new Response(JSON.stringify({ data: data }), { status: 200 });
}
