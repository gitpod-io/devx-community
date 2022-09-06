<script lang="ts">
	export let href: string;
	const target = href.startsWith('http') ? '_blank' : null;
	export let rel = '';
</script>

<a
	{target}
	{href}
	{rel}
	class="gradient-border tracking[0.2em] h5 inline-block rounded-[40px] border-[2.5px] border-double border-transparent px-6 py-4 font-bold text-explicit-white-light no-underline sm:px-8"
>
	<slot />
</a>

<style lang="postcss">
	.gradient-border {
		@apply relative z-10;
		background-image: linear-gradient(var(--black), var(--black)), var(--gradient-primary);
		background-origin: border-box;
		background-clip: padding-box, border-box;
	}
	.gradient-border::before {
		@apply absolute top-0 left-0 -z-10 h-full w-full rounded-[40px] opacity-0 transition-all delay-50 duration-200;
		content: '';
		background-image: linear-gradient(var(--dark-black), var(--dark-black)), var(--gradient-primary);
		background-origin: border-box;
		background-clip: padding-box, border-box;
	}
	.gradient-border:hover::before {
		@apply opacity-100;
	}
</style>
