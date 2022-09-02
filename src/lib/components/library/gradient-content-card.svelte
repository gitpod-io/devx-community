<script lang="ts">
	import type { GradientContentCard } from '$lib/types/gradient-content-card.type';

	export let data: GradientContentCard;
	import GradientCard from './gradient-card.svelte';
	import LinkButton from './link-button.svelte';
</script>

<GradientCard href={data.href}>
	<div class="flex h-full flex-col justify-between">
		<div class="mb-x-small">
			<h5 class:mb-4={data.subtext} class="h4">{data.text}</h5>
			{#if data.subtext}
				<span class="text-xs">{data.subtext}</span>
			{/if}
		</div>
		<div>
			<LinkButton>{data.label}</LinkButton>
		</div>
	</div>
</GradientCard>
