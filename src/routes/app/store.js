import { writable } from 'svelte/store';

export let Dir = writable(['']);
export let Files = writable([]);

export let popup = writable(null);

export let moveOrDeleteLocation = writable(null);
