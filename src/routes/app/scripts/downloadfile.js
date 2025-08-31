import { Dir, Files } from '../store.js';
import toast from 'svelte-5-french-toast';

export async function downloadFile(Path) {
	let downloadFilePromise = new Promise(async (resolve, reject) => {
		let filePath = Path.filter(Boolean).join('/');

		const response = await fetch(`/api/download-file?file=${filePath}`);

		if (!response.ok) {
			const error = await response.json();
			alert('Error fetching files: ' + error.message);
			reject(error);
		}

		const { url } = await response.json();

		window.open(url, '_blank');

		resolve();
	});

	toast.promise(downloadFilePromise, {
		loading: 'Fetching file...',
		success: 'File fetched successfully!',
		error: 'Error fetching file.',
	});
}
