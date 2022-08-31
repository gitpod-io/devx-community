<script lang="ts">
	import Nav from '$lib/components/nav.svelte';
	import '../app.css';
</script>

<Nav />

<main>
	<slot />
</main>

<style lang="postcss">
	main {
		@apply mx-auto max-w-7xl pt-xx-large lg:px-large xl:px-0;
	}
</style>
