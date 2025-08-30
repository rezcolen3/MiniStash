import toast from 'svelte-5-french-toast';
import { get } from 'svelte/store';
import { Dir, popup } from '../store.js';
import { openFolder } from './openfolder';

export async function handleUpload(file, filelocation) {
	popup.set(null);

	let uploadPromise = new Promise(async (resolve, reject) => {
		const formData = new FormData();
		formData.append('file', file);
		formData.append('filelocation', filelocation);

		console.log(formData);

		const res = await fetch('/api/new-file', {
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

	toast.promise(uploadPromise, {
		loading: 'Uploading...',
		success: 'File uploaded successfully!',
		error: 'Failed to upload file.',
	});
}
