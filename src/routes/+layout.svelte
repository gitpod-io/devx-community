<script lang="ts">
	import Nav from '$lib/components/nav.svelte';
	import '../app.css';
</script>

<Nav />

<main class="mx-auto max-w-7xl px-4 pt-xx-large sm:px-x-small md:px-medium lg:px-large xl:px-0">
	<slot />
</main>
