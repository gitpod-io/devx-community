<script lang="ts">
	export let href: string;
	const target = href.startsWith('http') ? '_blank' : null;
	export let rel = '';
</script>

<a
	{target}
	{href}
	{rel}
	class="gradient-border tracking[0.2em] h5 inline-block rounded-[40px] border-[2.5px] border-double border-transparent px-8 py-4 font-bold text-explicit-white-light no-underline transition-all delay-50 duration-200 hover:border-[2.5px] hover:shadow-hover-default"
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
