import toast from 'svelte-5-french-toast';
import { get } from 'svelte/store';
import { Dir, popup } from '../store.js';
import { openFolder } from './openfolder';

export async function createfolder(folder) {
	popup.set(null);

	let createfolderPromise = new Promise(async (resolve, reject) => {
		const formData = new FormData();
		formData.append('folder', folder);

		console.log(formData);

		const res = await fetch('/api/new-folder', {
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

	toast.promise(createfolderPromise, {
		loading: 'Creating folder...',
		success: 'Folder created successfully!',
		error: 'Failed to create folder.',
	});
}
