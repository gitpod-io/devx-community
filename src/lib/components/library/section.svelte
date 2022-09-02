<script lang="ts">
	import AnimatedLine from './animated-line.svelte';

	export let title: string;
	export let text = '';
	export let textClassNames = '';
	export let titleClassNames = 'pb-large';
	export let line = true;

	let clazz = '';
	export { clazz as class };
</script>

<section class="pt-medium {clazz}">
	<h2 class="h2 text-center {titleClassNames}">{title}</h2>
	<p class="mx-auto {textClassNames}">{@html text}</p>
	<slot />
	{#if line}
		<AnimatedLine />
	{/if}
</section>
