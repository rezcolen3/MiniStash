import { Dir, Files } from '../store.js';
import toast from 'svelte-5-french-toast';

export async function openFolder(Path) {
	let openFolderPromise = new Promise(async (resolve, reject) => {
		Files.set([]);
		Dir.set(Path);
		let filePath = Path.filter(Boolean).join('/');

		const response = await fetch(`/api/get-files?folder=${filePath}`);
		if (!response.ok) {
			const error = await response.json();
			alert('Error fetching files: ' + error.message);
			reject(error);
		}
		const data = await response.json();
		const parsedData = data.files
			.filter((file) => file.name !== '.initfolderfileignore')
			.map((file) => ({
				name: file.name,
				is_folder: file.id === null,
				id: file.id,
			}));
		Files.set(parsedData);
		resolve();
	});

	toast.promise(openFolderPromise, {
		loading: 'Opening folder...',
		success: 'Folder opened successfully!',
		error: 'Error opening folder.',
	});
}
