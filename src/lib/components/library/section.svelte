<script lang="ts">
	import AnimatedLine from './animated-line.svelte';
	import Reveal from './reveal.svelte';

	export let title: string;
	export let text = '';
	export let textClassNames = '';
	export let titleClassNames = '';
	export let isRevealDisabled = false;
	export let revealClassNames = '';
	export let line = true;

	let clazz = '';
	export { clazz as class };
</script>

<section class="pt-small md:pt-large {clazz}">
	<Reveal disabled={isRevealDisabled} class={revealClassNames}>
		<h2 class="h2 pb-small text-center {titleClassNames}">{title}</h2>
		{#if text}<p class="mx-auto {textClassNames}">{@html text}</p>{/if}
		<slot />
	</Reveal>
	{#if line}
		<AnimatedLine />
	{/if}
</section>
