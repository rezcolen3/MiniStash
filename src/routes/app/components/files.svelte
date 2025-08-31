<script>
	import { openFolder } from '../scripts/openfolder.js';
	import { Files, Dir } from '../store.js';

	let menuClicked = false;
</script>

<div class="flex-1 overflow-y-auto">
	{#each $Files as file}
		<a
			class="flex w-full cursor-pointer items-center justify-between rounded p-2 hover:bg-gray-600"
			href="javascript:void(0)"
			onclick={() => {
				

				if (!menuClicked) {
					if (file.is_folder) {
						openFolder([...$Dir, file.name]);
					} else {
						alert(`Opening file: ${file.name}`);
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
			<div>
				<button
					onclick={() => {
						menuClicked = true;
						alert(`More options for: ${file.name}`);
					}}
					aria-label="More options"
					class="p-1 text-sm text-gray-50 rounded h-6 w-6 flex flex-col items-center justify-center hover:bg-gray-700 cursor-pointer"
				>
					<i class="nf nf-md-dots_vertical"></i>
				</button>
			</div>
		</a>
	{/each}
</div>
