import toast from 'svelte-5-french-toast';
import { get } from 'svelte/store';
import { Dir, popup } from '../store.js';
import { openFolder } from './openfolder';

export async function deleteFile(Location) {
	popup.set(null);

	let movePromise = new Promise(async (resolve, reject) => {
		const formData = new FormData();
		formData.append('location', Location);

		console.log(formData);

		const res = await fetch('/api/delete', {
			method: 'POST',
			body: formData,
		});

		const result = await res.json();

		if (res.ok) {
			openFolder(get(Dir));
			resolve(result);
		} else {
			reject(result);
		}
	});

	toast.promise(movePromise, {
		loading: 'Deleting...',
		success: 'Deleted successfully!',
		error: 'Failed to Delete.',
	});
}
