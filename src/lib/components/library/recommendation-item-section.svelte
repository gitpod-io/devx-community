<script lang="ts">
	import type { RecommendationItem } from '$lib/types/recommendation-item.type';

	export let recommendationItems: RecommendationItem[];
	export let title: string;
</script>

<div class="max-w-xs sm:max-w-[250px]">
	<h3 class="h4 pb-4 text-center md:pb-xx-small">{title}</h3>
	<ul class="list-inside list-disc space-y-2 sm:list-outside">
		{#each recommendationItems as item}
			<li>
				<a href={item.href}>{item.text}</a> by {item.by}
			</li>
		{/each}
	</ul>
</div>
