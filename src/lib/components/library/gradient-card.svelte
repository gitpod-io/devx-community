<div
	class="gradient-border h-full rounded-2xl border-[2.5px] border-double border-transparent p-4 transition-all delay-50 duration-200 hover:cursor-pointer hover:shadow-hover-default"
>
	<slot />
</div>

<style lang="postcss">
	.gradient-border {
		background-image: linear-gradient(var(--bg), var(--bg)), var(--gradient-primary);
		background-origin: border-box;
		background-clip: padding-box, border-box;
	}
</style>
