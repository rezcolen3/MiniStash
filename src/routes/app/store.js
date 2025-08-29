import { writable } from 'svelte/store';

export let Dir = writable(['']);
export let Files = writable([]);

/*
let test = [
		{ name: 'file 1', is_folder: false, id: 4324 },
		{ name: 'file 90', is_folder: false, id: 4324 },
		{ name: 'file 564', is_folder: false, id: 4324 },
		{ name: 'folder 1', is_folder: true, id: 4324 },
		{ name: 'folder 6857', is_folder: true, id: 4324 },
	];

['', 'files', 'projects']
*/
