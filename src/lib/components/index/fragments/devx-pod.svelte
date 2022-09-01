<script lang="ts">
	import ContentSection from '../../library/content-section.svelte';
	import GradientContentCard from '../../library/gradient-content-card.svelte';
</script>

<ContentSection
	id="devx-pod"
	title="DevX Pod"
	annotation="listen"
	iconalt="earphone icon"
	iconsrc="/icons/listen.svg"
>
	<p slot="text" class="pt-x-small text-justify">
		Join Chris Weichel and Pauline Narvas with special guests as they deep dive into the
		ins-and-outs of developer experience.
	</p>
	<div>
		<h4 class="h4 pt-large">Highlighted Episodes</h4>
		<div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
			<GradientContentCard />
			<GradientContentCard />
			<GradientContentCard />
		</div>
	</div>
</ContentSection>
