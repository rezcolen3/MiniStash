<script>
	import { Files } from '../store.js';
</script>

{#each $Files as file}
	<div class="flex cursor-pointer items-center justify-between rounded p-2 hover:bg-gray-700">
		<a
			class="flex items-center gap-2"
			onclick={() => {
				if (file.is_folder) {
					openFolder([...$Dir, file.name]);
				}
			}}
		>
			<i class="nf text-sm {file.is_folder ? 'nf-fa-folder' : 'nf-fa-file'} text-gray-500"></i>
			<span class="font-medium">
				{file.name}
			</span>
		</a>
	</div>
{/each}
