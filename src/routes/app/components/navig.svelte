<div class="flex justify-between">
	<h1 class="text-3xl font-bold">
		<span class="font-[Space_Grotesk]">DIRECTORY:</span>
		{#each ['', 'files', 'projects'] as dir}
			<button
				class="cursor-pointer font-['Jersey_10'] underline transition hover:text-black dark:hover:text-white"
			>
				{dir}
			</button>/
		{/each}
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
