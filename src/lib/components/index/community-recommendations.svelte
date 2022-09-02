<script lang="ts">
	import Section from '../library/section.svelte';
	import { blogRecommendations } from '$lib/contents/index/recommendations';
	import RecommendationItemSection from '../library/recommendation-item-section.svelte';
	import AnimatedLine from '../library/animated-line.svelte';
</script>

<Section
	line={false}
	title="Community Recommendations"
	titleClassNames="max-w-6xl !pb-x-large"
	class="mx-auto max-w-xl"
/>
<div class="grid max-w-4xl grid-cols-1 gap-small pt-x-large md:grid-cols-3">
	<RecommendationItemSection title="Blogs" recommendationItems={blogRecommendations} />
	<RecommendationItemSection title="Podcasts" recommendationItems={blogRecommendations} />
	<RecommendationItemSection title="Knowledge Bases" recommendationItems={blogRecommendations} />
</div>

<AnimatedLine />
