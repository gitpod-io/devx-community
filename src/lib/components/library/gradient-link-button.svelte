<script lang="ts">
	export let href: string;
	const target = href.startsWith('http') ? '_blank' : null;
	export let rel = '';
	let clazz = '';
	export { clazz as class };
</script>

<a
	{target}
	{href}
	{rel}
	class="gradient-border tracking[0.2em] rounded-[40px] border-4 border-double border-transparent px-8 py-4 text-inter text-explicit-white-light no-underline transition-all delay-50 duration-200 hover:shadow-hover-default {clazz}"
>
	<slot />
</a>

<style lang="postcss">
	.gradient-border {
		background-image: linear-gradient(var(--black), var(--black)), var(--gradient-primary);
		background-origin: border-box;
		background-clip: padding-box, border-box;
	}
</style>
