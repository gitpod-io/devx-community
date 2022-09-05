<script lang="ts">
	import Annotation from './annotation.svelte';
	export let id = '';
	export let icon: any;
	export let title: string;
	export let annotation: string;
</script>

<section {id} class="mx-auto max-w-xl pt-medium">
	<div class="flex items-center gap-4">
		<h3 class="h3 inline">{title}</h3>
		<svelte:component this={icon} />
		<div>
			<Annotation label={annotation} />
		</div>
	</div>
	<slot name="text" />
	<slot />
</section>
