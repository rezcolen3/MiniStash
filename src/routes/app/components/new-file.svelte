<script>
	import { popup, Dir } from '../store.js';
	import { handleUpload } from '../scripts/newfile.js';
	import toast from 'svelte-5-french-toast';

	let file;
	let filename;
</script>

<div
	onclick={() => popup.set(null)}
	class="fixed top-0 left-0 z-20 h-screen w-screen backdrop-blur-xs"
></div>

<div
	class="absolute top-1/2 left-1/2 z-30 flex w-full max-w-100 -translate-x-1/2 -translate-y-1/2 transform flex-col gap-2 rounded border-2 bg-gray-800 p-3"
>
	<div>
		<label for="file-upload">File</label>
		<div
			class="relative flex h-40 cursor-pointer flex-col items-center justify-center gap-3 rounded border-2 p-3 text-center transition hover:border-indigo-600"
		>
			<span>
				Drag & Drop files here or
				<span class="underline">browse</span>
			</span>

			<span> {file ? `Selected file: ${file.name}` : 'No file selected yet'} </span>
			<input
				type="file"
				id="file-upload"
				class="absolute top-0 left-0 h-full w-full cursor-pointer opacity-0"
				onchange={(e) => {
					file = e.target.files[0];
					if (!filename) {
                        filename = file.name;
                    }
				}}
			/>
		</div>
	</div>

	<div>
		<label for="filename">File Name</label>
		<input
			bind:value={filename}
			placeholder="image.png"
			type="text"
			class="w-full rounded border-2 px-3 py-1 transition focus:border-indigo-600 focus:outline-0"
			name=""
			id="filename"
		/>
	</div>

	<button
		class="mt-3 w-full cursor-pointer rounded border-2 px-3 py-1 transition hover:border-indigo-600"
		onclick={() => {
			if (file && filename) {
				handleUpload(file, `${$Dir.filter(Boolean).join('/')}/${filename}`);
			} else {
				toast.error('Please select a file and enter a filename.');
			}
		}}>Upload</button
	>
</div>
