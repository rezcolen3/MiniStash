<script>
	import Navig from './components/navig.svelte';
	import Files from './components/files.svelte';

	import { openFolder } from './scripts/openfolder.js';
	import { onMount } from 'svelte';
	onMount(() => {
		openFolder(['']);
	});

	import { popup } from './store';
	import NewFile from './components/new-file.svelte';
	import NewFolder from './components/new-folder.svelte';
	import Move from './components/move.svelte';
	import Delete from './components/delete.svelte';
</script>

<div
	class="absolute top-3 right-3 bottom-3 left-3 flex flex-col gap-3 rounded border-2 border-gray-300 p-3 text-gray-300"
>
	<Navig />

	<hr class="rounded border-gray-500" />

	<Files />

	{#if $popup === 'new-file'}
		<NewFile />
	{:else if $popup === 'new-folder'}
		<NewFolder />
	{:else if $popup === 'move'}
		<Move />
	{:else if $popup === 'delete'}
		<Delete />
	{/if}
</div>
