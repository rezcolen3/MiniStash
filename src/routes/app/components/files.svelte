<script>
	import { downloadFile } from '../scripts/downloadfile.js';
	import { openFolder } from '../scripts/openfolder.js';
	import { Files, Dir, popup, moveOrDeleteLocation } from '../store.js';

	let menuClicked = false;
</script>

<div class="flex-1 overflow-y-auto">
	{#each $Files as file}
		<a
			class="relative flex w-full cursor-pointer items-center justify-between rounded p-2 hover:bg-gray-300 dark:hover:bg-gray-600"
			href="javascript:void(0)"
			onclick={() => {
				if (!menuClicked) {
					if (file.is_folder) {
						openFolder([...$Dir, file.name]);
					} else {
						downloadFile([...$Dir, file.name]);
					}
				} else {
					menuClicked = false;
				}
			}}
		>
			<div class="flex items-center gap-2">
				<i class="nf text-sm {file.is_folder ? 'nf-fa-folder' : 'nf-fa-file'} text-gray-500"></i>
				<span class="font-medium">
					{file.name}
				</span>
			</div>
			<div class="flex gap-1">
				<button
					onclick={() => {
						menuClicked = true;
						popup.set('move');
						moveOrDeleteLocation.set([...$Dir, file.name].filter(Boolean).join('/'));
					}}
					aria-label="More options"
					class="flex h-6 w-6 cursor-pointer flex-col items-center justify-center rounded p-1 text-sm text-gray-500 hover:bg-gray-400 dark:hover:bg-gray-700"
				>
					<i class="nf {file.is_folder ? 'nf-md-folder_move' : 'nf-md-file_move'}"></i>
				</button>
				<button
					onclick={() => {
						menuClicked = true;
						popup.set('delete');
						moveOrDeleteLocation.set([...$Dir, file.name].filter(Boolean).join('/'));
					}}
					aria-label="More options"
					class="flex h-6 w-6 cursor-pointer flex-col items-center justify-center rounded p-1 text-sm text-gray-500 hover:bg-gray-400 dark:hover:bg-gray-700"
				>
					<i class="nf nf-md-delete"></i>
				</button>
			</div>
		</a>
	{/each}
</div>
