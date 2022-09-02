<script lang="ts">
	import Section from '../library/section.svelte';
	import { blogRecommendations } from '$lib/contents/index/recommendations';
	import RecommendationItemSection from '../library/recommendation-item-section.svelte';
</script>

<div class="mx-auto max-w-4xl">
	<Section
		title="Community recommendations"
		text="DevX Conf is a space for creators where we can start from first principles, collaborate, listen, discuss and declutter our workflows, toolchains and minds. To improve developer experience. To make us feel again like everything is at our fingertips. We want to foster an ecosystem that sparks dialogue and establishes best practices and frameworks across the areas of coding, testing, building, deploying, collaborating on and running software."
		class="mx-auto"
		titleClassNames="max-w-6xl !pb-x-large max-w-xl"
		textClassNames="pb-x-large max-w-xl"
	>
		<div class="grid max-w-4xl grid-cols-1 gap-small md:grid-cols-3">
			<RecommendationItemSection recommendationItems={blogRecommendations} />
			<RecommendationItemSection recommendationItems={blogRecommendations} />
			<RecommendationItemSection recommendationItems={blogRecommendations} />
		</div>
	</Section>
</div>
