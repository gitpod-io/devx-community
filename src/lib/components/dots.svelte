<script lang="ts">
	import Dot from './library/dot.svelte';
	const size = 18;
	let clazz = '';
	export { clazz as class };
</script>

<div class="mx-auto mt-x-small grid grid-cols-2 gap-1 {clazz}" style="max-width: {2 * size + 4}px;">
	{#each Array(4) as _}
		<Dot {size} />
	{/each}
</div>
