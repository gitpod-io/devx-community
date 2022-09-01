<script lang="ts">
	import Dots from './dots.svelte';

	export let title: string;
	export let text = '';
	export let textClassNames = '';
	export let titleClassNames = '';
	export let dots = false;

	let clazz = '';
	export { clazz as class };
</script>

<section class="bottom-lined pt-medium {clazz}">
	<h2 class="h2 pb-large text-center {titleClassNames}">{title}</h2>
	<p class="mx-auto {textClassNames}">{@html text}</p>
	<slot />
</section>

{#if dots}
	<Dots />
{/if}
