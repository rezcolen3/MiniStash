<h1 class="text-3xl font-bold">
	DIR: <a class="cursor-pointer underline" onclick={() => openFolder([''])}>
		(ROOT)
	</a>{#each $Dir as dir, i}
		<a class="cursor-pointer underline" onclick={() => openFolder($Dir.slice(0, i + 1))}>
			{dir}
		</a>/{/each}
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
