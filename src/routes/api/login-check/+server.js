import { supabase } from '$lib/supabase.server.js';

export async function GET(request) {
	const url = new URL(request.url);
	const params = url.searchParams;
	const key = params.get('key');

	let { data: users, error } = await supabase
		.from('users')
		.select('*')
		.eq('key', key)

	if (!error) {
		return new Response(JSON.stringify({ status: 'ok', users }), {
			headers: { 'Content-Type': 'application/json' },
		});
	}

	return new Response(JSON.stringify({ status: 'error', message: error.message }), {
		headers: { 'Content-Type': 'application/json' },
	});
}
