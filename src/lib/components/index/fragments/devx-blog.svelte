<script lang="ts">
	import ContentSection from '../../library/content-section.svelte';
	// import GradientContentCard from '../../library/gradient-content-card.svelte';
</script>

<ContentSection
	id="devx-blog"
	title="DevX Blog"
	annotation="read"
	iconalt="shelf icon"
	iconsrc="/icons/read.svg"
>
	<p slot="text" class="pt-x-small text-justify">
		DevX Blog is a community-driven platform for articles and interviews on developer experience. We
		highlight and create content to help those working in developer experience get even better at
		their job.
	</p>
	<div>
		<h4 class="h4 pt-large">Highlighted Posts</h4>
		<div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
			<!-- <GradientContentCard />
			<GradientContentCard />
			<GradientContentCard />
			<GradientContentCard />
			<GradientContentCard /> -->
		</div>
	</div>
</ContentSection>
