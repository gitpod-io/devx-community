<script lang="ts">
	let clazz = '';
	export { clazz as class };
</script>

<div class="full-bleed {clazz}">
	<slot />
</div>

<style lang="postcss">
	.full-bleed {
		width: 100vw;
		position: relative;
		left: 50%;
		right: 50%;
		margin-left: -50vw;
		margin-right: -50vw;
	}
</style>
