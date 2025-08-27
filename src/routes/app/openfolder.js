import { DirID, DirName,currentFiles } from './store.js';


export async function openFolder(folderID) {	
    const response = await fetch(`/api/get-files?folder=${folderID}`);
	if (!response.ok) {
		const error = await response.json();
		alert('Error fetching files: ' + error.message);
		return;
	}
	const data = await response.json();
	currentFiles.set(data);

    DirID.update((DirID) => [...DirID, folderID]);
    
}
