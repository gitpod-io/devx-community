<script lang="ts">
	export let href: string;
	export let rel = '';
</script>

<!-- We need to look if the card itself will be used as a link, or if we will have cta button in the card. In the second case, we can make it a <div> -->
<a
	{href}
	{rel}
	class="gradient-border block h-full rounded-2xl border-[2.5px] border-double border-transparent px-3 py-6 transition-all delay-50 duration-200 hover:shadow-hover-default"
>
	<slot />
</a>

<style lang="postcss">
	.gradient-border {
		background-image: linear-gradient(var(--bg), var(--bg)), var(--gradient-primary);
		background-origin: border-box;
		background-clip: padding-box, border-box;
	}
</style>
