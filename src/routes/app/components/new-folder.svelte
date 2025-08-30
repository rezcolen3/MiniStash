<script>
	import { popup, Dir } from '../store.js';
	import { createfolder } from '../scripts/createfolder.js';
	import toast from 'svelte-5-french-toast';

	let foldername;
</script>

<div
	onclick={() => popup.set(null)}
	class="fixed top-0 left-0 z-20 h-screen w-screen backdrop-blur-xs"
></div>

<div
	class="absolute top-1/2 left-1/2 z-30 flex w-full max-w-100 -translate-x-1/2 -translate-y-1/2 transform flex-col gap-2 rounded border-2 bg-gray-800 p-3"
>

	<div>
		<label for="foldername">Folder Name</label>
		<input
			bind:value={foldername}
			placeholder="super important folder"
			type="text"
			class="w-full rounded border-2 px-3 py-1 transition focus:border-indigo-600 focus:outline-0"
			id="foldername"
		/>
	</div>

	<button
		class="mt-3 w-full cursor-pointer rounded border-2 px-3 py-1 transition hover:border-indigo-600"
		onclick={() => {
			if (foldername) {
				createfolder(`${$Dir.filter(Boolean).join('/')}/${foldername}`);
			} else {
				toast.error('Please enter a folder name.');
			}
		}}>Create</button
	>
</div>
