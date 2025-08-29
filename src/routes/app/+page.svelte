<script>
	import Navig from './components/navig.svelte';
	import Files from './components/files.svelte';

	import { openFolder } from './scripts/openfolder.js';
	import { onMount } from 'svelte';
	onMount(() => {
		openFolder(['']);
	});
</script>

<div class="m-3 flex h-full flex-col gap-3 rounded border-2 border-gray-300 p-3 text-gray-300">
	<Navig />

	<hr class="rounded border-gray-500" />

	<Files />
</div>
