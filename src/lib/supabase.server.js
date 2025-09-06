import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY } from '$env/static/private';

export const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

const { data: buckets, error: listErr } = await supabase.storage.listBuckets();

if (listErr) {
	console.error('Error listing buckets:', listErr);
} else {
	const exists = buckets.some((b) => b.name === 'files');
	if (!exists) {
		const { data: newBucket, error: createErr } = await supabase.storage.createBucket('files', {});
		if (createErr) {
			console.error('Error creating bucket:', createErr);
		} else {
			console.log('Bucket created:', newBucket);
		}
	}
}
