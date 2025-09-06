<script>
	import { popup, moveOrDeleteLocation } from '../store.js';
	import { deleteFile } from '../scripts/delete.js';
</script>

<div
	onclick={() => popup.set(null)}
	class="fixed top-0 left-0 z-20 h-screen w-screen backdrop-blur-xs"
></div>

<div
	class="absolute top-1/2 left-1/2 z-30 flex w-full max-w-100 -translate-x-1/2 -translate-y-1/2 transform flex-col gap-2 rounded border-2 bg-gray-300 p-3 dark:bg-gray-800"
>
	<span>Are you sure?</span>

	<div class="flex gap-2">
		<button
			class="mt-3 w-full cursor-pointer rounded border-2 px-3 py-1 transition hover:border-indigo-600"
			onclick={() => popup.set(null)}
			>CANCEL
		</button>
		<button
			class="mt-3 w-full cursor-pointer rounded border-2 px-3 py-1 transition hover:border-indigo-600"
			onclick={() => {
				deleteFile($moveOrDeleteLocation);
			}}
			>DELETE
		</button>
	</div>
</div>
