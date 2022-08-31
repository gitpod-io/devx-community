<script>
	import Section from './section.svelte';
</script>

<Section title="Founding members">
	<div class="flex justify-between">
		{#each Array(4) as _}
			<div class="h-56 w-56 rounded-2xl border border-solid border-highlight" />
		{/each}
	</div>
</Section>
