<script lang="ts">
	import Nav from '$lib/components/layout/nav.svelte';
	import '../app.css';
</script>

<Nav />

<main>
	<slot />
</main>

<style lang="postcss">
	main {
		@apply mx-auto max-w-7xl  px-4 pt-xx-large sm:px-x-small md:px-medium lg:px-large xl:px-0;
	}
</style>
