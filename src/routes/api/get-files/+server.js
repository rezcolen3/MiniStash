import { supabase } from '$lib/supabase.server.js';

export async function GET(request) {
    const url = new URL(request.url);
    const params = url.searchParams;
    const folder = params.get('folder');
 
    const parentFolderId = folder !== null && folder !== 'null' && folder !== '' ? parseInt(folder) : null;
    let { data: files, error } = await supabase
        .from('files')
        .select('*')
        .is('parent_folder_id', parentFolderId);

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
