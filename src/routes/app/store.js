import { writable } from 'svelte/store';

export let currentFiles = writable([]);
export let DirID = writable([]);
export let DirName = writable(["", "projects", "ysws"]);