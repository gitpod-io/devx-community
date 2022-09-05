<script lang="ts">
	import Section from '../library/section.svelte';
	import {
		blogRecommendations,
		knowledgeBases,
		podcasts
	} from '$lib/contents/index/recommendations';
	import RecommendationItemSection from '../library/recommendation-item-section.svelte';
</script>

<Section title="Community Recommendations" titleClassNames="max-w-6xl" class="mx-auto max-w-xl">
	<div class="mx-auto grid max-w-4xl grid-cols-1 gap-small pt-x-large md:grid-cols-3">
		<RecommendationItemSection title="Blogs" recommendationItems={blogRecommendations} />
		<RecommendationItemSection title="Podcasts" recommendationItems={podcasts} />
		<RecommendationItemSection title="Knowledge Bases" recommendationItems={knowledgeBases} />
	</div>
</Section>
