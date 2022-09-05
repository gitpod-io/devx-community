<script lang="ts">
	import ContentSection from '../../library/content-section.svelte';
	import GradientContentCard from '../../library/gradient-content-card.svelte';
	import { devXPod } from '$lib/contents/index/devx-content';
	import Listen from '../../svgs/listen.svelte';
</script>

<ContentSection id="devx-pod" title="DevX Pod" annotation="listen" icon={Listen}>
	<p slot="text" class="pt-x-small text-justify">
		DevX Pod feature in-depth interviews with DevX experts. Hosts Pauline Narvas and Chris Weichel
		speak with developer experience leaders to unpack the ins-and-outs of the field.
	</p>
	<div>
		<h4 class="pt-large text-base">Highlighted Episodes</h4>
		<div class="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each devXPod as item}
				<GradientContentCard class="aspect-square sm:aspect-[2/1] lg:aspect-square" data={item} />
			{/each}
		</div>
	</div>
</ContentSection>
