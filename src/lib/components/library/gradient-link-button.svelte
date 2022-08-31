<script lang="ts">
	export let href: string;
	export let rel = '';
</script>

<a
	{href}
	{rel}
	class="gradient-border rounded-[40px] border-[2.5px] border-double border-transparent px-8 py-4 text-inter"
>
	<slot />
</a>

<style lang="postcss">
	.gradient-border {
		color: var(--white-light);
		background-image: linear-gradient(var(--black), var(--black)), var(--gradient-primary);
		background-origin: border-box;
		background-clip: padding-box, border-box;
	}
</style>
