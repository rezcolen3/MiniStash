<script>
	import { currentFiles,DirName } from './store.js';
	import { openFolder } from './openfolder.js';
	import { onMount } from 'svelte';

	onMount(() => {
		openFolder(null);
	});
</script>

<h1 class="text-3xl font-bold">DIR: {#each $DirName as dir}
	{dir}/
{/each}</h1>
<button class="cursor-pointer rounded border border-gray-300 p-1 hover:bg-gray-100">
	Go Down one folder
</button>
<button class="cursor-pointer rounded border border-gray-300 p-1 hover:bg-gray-100">
	New File
</button>
<button class="cursor-pointer rounded border border-gray-300 p-1 hover:bg-gray-100">
	New Folder
</button>

<div class="flex flex-col items-center">
	{#each $currentFiles as file}
		<div class="border-b border-gray-300 py-2">
			ID: {file.id}
			NAME: {file.file_name}
			PARENT: {file.parent_folder_id}
			IS FOLDER: {file.is_folder}

			{#if file.is_folder}
				<button class="cursor-pointer rounded border border-gray-300 p-1 hover:bg-gray-100">
					Open Folder
				</button>
			{/if}
		</div>
	{/each}
</div>
