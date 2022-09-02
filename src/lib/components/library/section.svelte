<script lang="ts">
	import AnimatedLine from './animated-line.svelte';
	import TextReveal from './text-reveal.svelte';

	export let title: string;
	export let text = '';
	export let textClassNames = '';
	export let titleClassNames = '';
	export let line = true;

	let clazz = '';
	export { clazz as class };
</script>

<section class="pt-medium {clazz}">
	<TextReveal>
		<h2 class="h2 pb-large text-center {titleClassNames}">{title}</h2>
		<p class="mx-auto {textClassNames}">{@html text}</p>
	</TextReveal>
	<slot />
	{#if line}
		<AnimatedLine />
	{/if}
</section>
