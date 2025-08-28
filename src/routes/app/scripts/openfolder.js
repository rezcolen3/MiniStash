import { Dir, currentFiles } from '../store.js';

export async function openFolder(Path) {
	Dir.set(Path);
	let filePath = Path.filter(Boolean).join('/');

	const response = await fetch(`/api/get-files?folder=${filePath}`);
	if (!response.ok) {
		const error = await response.json();
		alert('Error fetching files: ' + error.message);
		return;
	}
	const data = await response.json();
	currentFiles.set(data.files);
}
