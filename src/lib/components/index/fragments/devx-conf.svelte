<script lang="ts">
	import ContentSection from '../../library/content-section.svelte';
	import { devXConf } from '$lib/contents/index/devx-content';
	import GradientContentCard from '../../library/gradient-content-card.svelte';
</script>

<ContentSection
	id="devx-conf"
	title="DevX Conf"
	annotation="watch"
	iconalt="youtube icon"
	iconsrc="/icons/watch.svg"
>
	<p slot="text" class="pt-x-small text-justify">
		DevX Conf is a virtual conference on developer experience that happens every year. DevX
		practitioners at leading companies discuss their best tools, processes, and latest learnings.
	</p>
	<div>
		<h4 class="h4 pt-large">Highlighted Talks</h4>
		<div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
			{#each devXConf as item}
				<GradientContentCard data={item} />
			{/each}
		</div>
	</div>
</ContentSection>
