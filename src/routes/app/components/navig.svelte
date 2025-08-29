<script>
	import { openFolder } from "../scripts/openfolder.js";
	import { Dir } from "../store.js";
</script>
<div class="flex justify-between">
	<h1 class="flex items-center gap-2 text-3xl font-bold">
		<i class="nf-fa-folder_open nf"></i>
		<span class="font-[Space_Grotesk]"> DIRECTORY:</span>
		<div>
			{#each $Dir as dir, i}
				<a
					class="cursor-pointer font-['Jersey_10'] underline transition hover:text-black dark:hover:text-white"
					onclick={() => openFolder($Dir.slice(0, i + 1))}
					>
					{dir}
				</a>/
			{/each}
		</div>
	</h1>
	<div class="gap-2 text-3xl">
		<button
			class="cursor-pointer transition hover:scale-110 hover:text-black dark:hover:text-white"
			aria-label="Create new folder"
		>
			<i class="nf nf-cod-new_folder"></i>
		</button>
		<button
			class="cursor-pointer transition hover:scale-110 hover:text-black dark:hover:text-white"
			aria-label="Create new file"
		>
			<i class="nf nf-cod-new_file"></i>
		</button>
	</div>
</div>
