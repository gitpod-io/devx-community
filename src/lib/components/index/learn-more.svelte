<script lang="ts">
	import { learnMoreItems } from '$lib/contents';
	import Section from '../library/section.svelte';
</script>

<Section
	title="Learn more about developer experience"
	titleClassNames="max-w-xl mx-auto"
	class="flex flex-col items-center"
>
	<div class="flex flex-wrap justify-center gap-x-large">
		{#each learnMoreItems as { title, text }}
			<div class="w-full sm:w-80">
				<h3 class="h3 mb-x-small text-center">{title}</h3>
				<p>{text}</p>
			</div>
		{/each}
	</div>
</Section>
