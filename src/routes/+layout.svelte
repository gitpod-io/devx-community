<script lang="ts">
	import Nav from '$lib/components/layout/nav.svelte';
	import Footer from '$lib/components/layout/footer.svelte';
	import '../app.css';
</script>

<Nav />

<main
	class="mx-auto max-w-7xl px-4 pb-x-large pt-xx-large sm:px-x-small md:px-medium lg:px-large xl:px-0"
>
	<slot />
</main>

<Footer />
