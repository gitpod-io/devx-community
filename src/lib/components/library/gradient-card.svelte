<script lang="ts">
	let className = '';
	export { className as class };
	export let href = '';
	export let rel = '';
	const target = href && href.startsWith('http') ? '_blank' : null;
	export let element = 'a';
</script>

<!-- We need to look if the card itself will be used as a link, or if we will have cta button in the card. In the second case, we can make it a <div> -->
<svelte:element
	this={element}
	{target}
	{href}
	{rel}
	{...$$restProps}
	class="gradient-border block h-full rounded-2xl border-[2.5px] border-double border-transparent px-3 py-6 no-underline {className}"
>
	<slot />
</svelte:element>

<style lang="postcss">
	.gradient-border {
		@apply relative z-10;
		background: linear-gradient(var(--bg), var(--bg)), var(--gradient-primary);
		background-origin: border-box;
		background-clip: padding-box, border-box;
	}
	.gradient-border::before {
		@apply absolute top-0 left-0 -z-10 h-full w-full rounded-2xl opacity-0 transition-all delay-50 duration-200;
		content: '';
		background: linear-gradient(var(--box), var(--box)), var(--gradient-primary);
		background-origin: border-box;
		background-clip: padding-box, border-box;
	}
	.gradient-border:hover::before {
		@apply opacity-100;
	}
</style>
