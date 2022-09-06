<script lang="ts">
	import ContentSection from '../../library/content-section.svelte';
	import { devXConf } from '$lib/contents/index/devx-content';
	import GradientContentCard from '../../library/gradient-content-card.svelte';
	import Watch from '../../svgs/watch.svelte';
</script>

<ContentSection id="devx-conf" title="DevX Conf" annotation="watch" icon={Watch}>
	<p slot="text" class="pt-x-small text-justify">
		<a href="https://devxconf.org" target="_blank">DevX Conf</a> is a virtual conference on developer
		experience that happens every year. DevX practitioners at leading companies discuss their best tools,
		processes, and latest learnings.
	</p>
	<div>
		<h4 class="pt-large text-base">Highlighted Talks</h4>
		<div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
			{#each devXConf as item}
				<GradientContentCard class="aspect-[2.5/1] w-full md:aspect-[3/2]" data={item} />
			{/each}
		</div>
	</div>
</ContentSection>
