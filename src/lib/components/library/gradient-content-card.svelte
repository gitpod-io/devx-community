<script lang="ts">
	export let text = '';
	export let subtext = '';
	export let label = '';
	import GradientCard from './gradient-card.svelte';
	import LinkButton from './link-button.svelte';
</script>

<GradientCard href="#">
	<div class="flex flex-col justify-between">
		<div class="mb-x-small">
			<h5 class="h4 mb-4">{text}</h5>
			{#if subtext}
				<span>{subtext}</span>
			{/if}
		</div>
		<div>
			<LinkButton>{label}</LinkButton>
		</div>
	</div>
</GradientCard>
