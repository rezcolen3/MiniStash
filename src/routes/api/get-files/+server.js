import { supabase } from '$lib/supabase.server.js';

export async function GET(request) {
	const url = new URL(request.url);
	const params = url.searchParams;
	const folder = params.get('folder');

	const { data: files, error } = await supabase.storage.from('files').list(folder);

	if (!error) {
		return new Response(JSON.stringify({ status: 'ok', files }), {
			headers: { 'Content-Type': 'application/json' },
		});
	}

	return new Response(JSON.stringify({ status: 'error', message: error.message }), {
		status: 500,
		headers: { 'Content-Type': 'application/json' },
	});
}
