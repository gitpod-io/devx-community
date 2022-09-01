<script lang="ts">
	import ContentSection from '../../library/content-section.svelte';
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
		DevX Conf is a space for creators where we can start from first principles, collaborate, listen,
		discuss and declutter our workflows, toolchains and minds.
	</p>
	<div>
		<h4 class="h4 pt-large">Highlighted Talks</h4>
		<div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
			<!-- <GradientContentCard />
			<GradientContentCard />
			<GradientContentCard />
			<GradientContentCard /> -->
		</div>
	</div>
</ContentSection>
