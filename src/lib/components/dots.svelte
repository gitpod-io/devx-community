<script lang="ts">
	export let height = 18;
	export let width = 18;
	let clazz = '';
	export { clazz as class };
</script>

<div
	class="mx-auto mt-x-small grid grid-cols-2 gap-1 {clazz}"
	style="max-width: {2 * width + 4}px;"
>
	{#each Array(4) as _}
		<div class="rounded-full bg-primary" style="height: {height}px; width: {width}px" />
	{/each}
</div>
