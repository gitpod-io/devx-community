<script lang="ts">
	import type { RecommendationItem } from '$lib/types/recommendation-item.type';

	export let recommendationItems: RecommendationItem[];
</script>

<ul class="list-inside list-disc space-y-2">
	{#each recommendationItems as item}
		<li>
			<a href={item.href}>{item.text}</a> by {item.author}
		</li>
	{/each}
</ul>
