<script lang="ts">
	export let href: string;
	export let rel = '';
</script>

<a
	{href}
	{rel}
	class="gradient-border tracking[0.2em] rounded-[40px] border-4 border-double border-transparent px-8 py-4 text-inter text-explicit-white-light transition-all delay-50 duration-200 hover:shadow-hover-default"
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
