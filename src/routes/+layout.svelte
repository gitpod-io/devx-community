<script lang="ts">
	import Nav from '$lib/components/layout/nav.svelte';
	import Footer from '$lib/components/layout/footer.svelte';
	import Container from '$lib/components/layout/container.svelte';
	import Analytics from '$lib/utils/analytics.svelte';
	import '../app.css';
</script>

<div class="flex min-h-screen flex-col">
	<Analytics />
	<Nav />
	<Container element="main" class="pt-24 sm:pt-28 md:pt-xx-large">
		<slot />
	</Container>
	<Footer />
</div>
