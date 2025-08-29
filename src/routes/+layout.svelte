<script>
	import {Toaster} from 'svelte-5-french-toast'

	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Toaster position="bottom-end" />

<div class="h-screen flex flex-col">
	{@render children?.()}
</div>