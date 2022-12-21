<script lang="ts">
	import { page } from '$app/stores';
	import GradientLinkButton from '$lib/components/library/gradient-link-button.svelte';
</script>

{#if $page.status === 404}
	<div class="flex flex-col items-center">
		<div
			class="relative mb-[3.375rem] flex h-96 w-96 items-center justify-center rounded-full bg-404"
		>
			<h1 class="h1 absolute text-h1 leading-[5rem] ">404</h1>
		</div>
		<h2 class="h4 mb-x-small">You just hit a route that doesn't exist</h2>
		<GradientLinkButton href="/">Back to safety</GradientLinkButton>
	</div>
{/if}
