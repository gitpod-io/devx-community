<script>
	import AnimatedLine from '../library/animated-line.svelte';
	import GradientLinkButton from '../library/gradient-link-button.svelte';
</script>

<div class="mx-auto max-w-4xl pt-medium text-center">
	<div class="h4 pb-medium text-important">Exchange ideas and knowledge with DevX leaders</div>
	<div
		on:click={() => {
			//@ts-ignore
			window.analytics?.track('join_button_clicked', { orderOnPage: 2 });
		}}
	>
		<GradientLinkButton href="#">Join the community</GradientLinkButton>
	</div>

	<AnimatedLine />
</div>
