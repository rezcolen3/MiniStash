<script>
	import { openFolder } from './scripts/openfolder.js';
	import { onMount } from 'svelte';
	import Navig from './components/navig.svelte';

	onMount(() => {
		openFolder(['']);
	});
</script>

<div class="m-3 h-full rounded border-2 border-gray-300 p-3 text-gray-500">
	<Navig />
</div>
