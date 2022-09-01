<script lang="ts">
	import Nav from '$lib/components/layout/nav.svelte';
	import Footer from '$lib/components/layout/footer.svelte';
	import Container from '$lib/components/layout/container.svelte';
	import '../app.css';
</script>

<div class="flex min-h-screen flex-col">
	<Nav />

	<Container element="main" class="pt-xx-large">
		<slot />
	</Container>
	<Footer />
</div>
