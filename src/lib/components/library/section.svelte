<script lang="ts">
	import AnimatedLine from './animated-line.svelte';
	import Reveal from './reveal.svelte';

	export let title: string;
	export let text = '';
	export let textClassNames = '';
	export let titleClassNames = '';
	export let isRevealDisabled = false;
	export let line = true;

	let clazz = '';
	export { clazz as class };
</script>

<section class="pt-medium {clazz}">
	<Reveal disabled={isRevealDisabled}>
		<h2 class="h2 pb-large text-center {titleClassNames}">{title}</h2>
		<p class="mx-auto {textClassNames}">{@html text}</p>
	</Reveal>
	<Reveal disabled={isRevealDisabled}>
		<slot />
	</Reveal>
	{#if line}
		<AnimatedLine />
	{/if}
</section>
