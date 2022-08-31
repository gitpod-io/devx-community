<script lang="ts">
	import Dots from './dots.svelte';
	import VerticalStroke from './library/vertical-stroke.svelte';

	export let title = '';
	export let text = '';
	export let textClassNames = '';
	export let titleClassNames = '';
	export let dots = false;
	export let vertialStroke = false;

	let clazz = '';
	export { clazz as class };
</script>

<section class="mt-x-large {clazz}">
	{#if title}
		<h2 class="h2 pb-medium text-center {titleClassNames}">{title}</h2>
	{/if}
	<p class="mx-auto {textClassNames}">{text}</p>
	<slot />
	{#if vertialStroke}
		<div class="mt-x-large">
			<VerticalStroke />
		</div>
	{/if}
</section>

{#if dots}
	<Dots />
{/if}
