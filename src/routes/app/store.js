import { writable } from 'svelte/store';

export let currentFiles = writable([]);
export let Dir = writable([""]);