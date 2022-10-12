<script lang="ts">
	import ContentSection from '../../library/content-section.svelte';
	import GradientContentCard from '../../library/gradient-content-card.svelte';
	import { devXBlog } from '$lib/contents/index/devx-content';
	import Read from '../../svgs/read.svelte';
	import BigDot from '$lib/components/library/big-dot.svelte';
</script>

<ContentSection id="devx-blog" title="DevX Blog" annotation="read" icon={Read} class="relative">
	<p slot="text" class="pt-x-small text-justify">
		DevX Blog is a community-driven platform for articles and interviews on developer experience. We
		highlight and create content to help those working in developer experience get even better at
		their job.
	</p>
	<div>
		<h4 class="pt-large text-base">Highlighted Posts</h4>
		<div
			class="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3"
			data-analytics={`{"context":"highlighted_posts"}`}
		>
			{#each devXBlog as item}
				<GradientContentCard
					class="aspect-square w-full sm:aspect-[2/1] lg:aspect-square"
					data={item}
				/>
			{/each}
		</div>
	</div>

	<!-- You must apply postion relative to the parent in order to get it to work -->
	<BigDot alignment="left" />
</ContentSection>
