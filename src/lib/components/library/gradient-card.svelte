<div class="gradient-border rounded-2xl border border-double border-transparent p-4">
	<slot />
</div>

<style lang="postcss">
	.gradient-border {
		background-image: linear-gradient(var(--bg), var(--bg)), var(--gradient-primary);
		background-origin: border-box;
		background-clip: padding-box, border-box;
	}
</style>
