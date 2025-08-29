<script>
	let test = [
		{ name: 'file 1', is_folder: false, id: 4324 },
		{ name: 'file 90', is_folder: false, id: 4324 },
		{ name: 'file 564', is_folder: false, id: 4324 },
		{ name: 'folder 1', is_folder: true, id: 4324 },
		{ name: 'folder 6857', is_folder: true, id: 4324 },
	];
</script>

{#each test as file}
	<div class="flex cursor-pointer items-center justify-between rounded p-2 hover:bg-gray-700">
		<div class="flex items-center gap-2">
			<i class="nf text-sm {file.is_folder ? 'nf-fa-folder' : 'nf-fa-file'} text-gray-500"></i>
			<span class="font-medium">
				{file.name}
			</span>
		</div>
	</div>
{/each}
