<script lang="ts">
	import type { GradientContentCard } from '$lib/types/gradient-content-card.type';
	let className = '';
	export { className as class };
	export let data: GradientContentCard;
	import GradientCard from './gradient-card.svelte';
	import LinkButton from './link-button.svelte';
</script>

<GradientCard class={className} href={data.href}>
	<div class="flex h-full flex-col justify-between">
		<div class="">
			<h5 class="text-base">{data.text}</h5>
			{#if data.subtext}
				<span class="text-xs">{data.subtext}</span>
			{/if}
		</div>
		<div>
			<LinkButton>{data.label}</LinkButton>
		</div>
	</div>
</GradientCard>
