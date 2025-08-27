<script>
	import { currentFiles, Dir } from './store.js';
	import { openFolder } from './openfolder.js';
	import { onMount } from 'svelte';

	onMount(() => {
		openFolder(['']);
	});
</script>

<h1 class="text-3xl font-bold">
	DIR: {#each $Dir as dir}
		{dir}/
	{/each}
</h1>
<button class="cursor-pointer rounded border border-gray-300 p-1 hover:bg-gray-100">
	New File
</button>
<button class="cursor-pointer rounded border border-gray-300 p-1 hover:bg-gray-100">
	New Folder
</button>

<div class="flex flex-col">
	{#each $currentFiles as file}
		{#if file.id == null}
			<a class="cursor-pointer underline" onclick={() => openFolder([...$Dir, file.name])}>
				name: {file.name}
			</a>
		{:else}
			<div>
				name: {file.name}
			</div>
		{/if}
	{/each}
</div>
