import { supabase } from '$lib/supabase.server.js';

export async function POST({ request }) {
	const formData = await request.formData();
	const folder = formData.get('folder');

	const { data, error } = await supabase.storage.from('files').upload(`${folder}/.initfolderfileignore`, null, {
		contentType: '',
		upsert: true,
	});

    //await supabase.storage.from('files').remove(['object-path-2', `${folder}/.initfolderfileignore`])

	if (error) {
		return new Response(JSON.stringify({ error: error.message }), { status: 500 });
	}

	return new Response(JSON.stringify({ path: data.path }), { status: 200 });
}
