<script lang="ts">
	import Section from '../library/section.svelte';
	import {
		blogRecommendations,
		knowledgeBases,
		podcasts
	} from '$lib/contents/index/recommendations';
	import RecommendationItemSection from '../library/recommendation-item-section.svelte';
</script>

<Section title="Community Recommendations" titleClassNames="max-w-6xl" class="mx-auto max-w-4xl">
	<div
		class="mx-auto flex max-w-5xl flex-wrap justify-center gap-x-small md:gap-medium lg:justify-between"
	>
		<RecommendationItemSection title="Blogs" recommendationItems={blogRecommendations} />
		<RecommendationItemSection title="Podcasts" recommendationItems={podcasts} />
		<RecommendationItemSection title="Knowledge Bases" recommendationItems={knowledgeBases} />
	</div>
</Section>
