import { supabase } from '$lib/supabase.server.js';

export async function POST({ request }) {
	const formData = await request.formData();
	const file = formData.get('file');
	const filelocation = formData.get('filelocation');

	const { data, error } = await supabase.storage
		.from('files')
		.upload(filelocation, file, {
			contentType: file.type,
			upsert: true,
		});

	if (error) {
		return new Response(JSON.stringify({ error: error.message }), { status: 500 });
	}

	return new Response(JSON.stringify({ path: data.path }), { status: 200 });
}
