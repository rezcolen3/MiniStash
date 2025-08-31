import { supabase } from '$lib/supabase.server.js';

export async function GET(request) {
	const url = new URL(request.url);
	const params = url.searchParams;
	const file = params.get('file');

	const { data, error } = await supabase.storage
		.from('files')
		.createSignedUrl(file, 3600);

	if (!error) {
		return new Response(JSON.stringify({ status: 'ok', url: data.signedUrl }), {
			headers: { 'Content-Type': 'application/json' },
		});
	}

	return new Response(JSON.stringify({ status: 'error', message: error.message }), {
		status: 500,
		headers: { 'Content-Type': 'application/json' },
	});
}
