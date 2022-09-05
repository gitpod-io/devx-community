<script lang="ts">
	import Dot from '../library/dot.svelte';
	let clazz = '';
	export { clazz as class };
</script>

<div class="{clazz} w-full max-w-[200px] flex-col gap-x-small">
	<div class="grid grid-cols-2 gap-1" style="max-width: 40px;">
		{#each Array(4) as _}
			<Dot class="h-[18px] w-[18px]" />
		{/each}
	</div>
</div>
