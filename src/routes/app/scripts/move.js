import toast from 'svelte-5-french-toast';
import { get } from 'svelte/store';
import { Dir, popup } from '../store.js';
import { openFolder } from './openfolder';

export async function move(oldLocation, newLocation) {
	popup.set(null);

	let movePromise = new Promise(async (resolve, reject) => {
		const formData = new FormData();
		formData.append('oldLocation', oldLocation);
		formData.append('newLocation', newLocation);

		console.log(formData);

		const res = await fetch('/api/move', {
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
		loading: 'Moving...',
		success: 'Moved successfully!',
		error: 'Failed to move.',
	});
}
