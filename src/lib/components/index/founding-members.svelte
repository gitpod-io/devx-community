<script>
	import Section from '../library/section.svelte';
	import PortraitCard from '../library/portrait-card.svelte';
	import { foundingMembers } from '$lib/contents/index/founding-members';
</script>

<div class="mx-auto max-w-5xl">
	<Section titleClassNames="!pb-x-small" title="Founding members">
		<p class="pb-large text-center">DevX Community was built by a community of industry experts</p>
		<div
			class="flex flex-wrap justify-center gap-y-large gap-x-small"
			data-analytics={`{"context":"founding_members"}`}
		>
			{#each foundingMembers as item}
				<PortraitCard portrait={item} />
			{/each}
		</div>
	</Section>
</div>
