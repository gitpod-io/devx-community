<script lang="ts">
	import Section from '../library/section.svelte';
	import HowToJoin from './fragments/how-to-join.svelte';
	import GradientLinkButton from '../library/gradient-link-button.svelte';
</script>

<Section
	title="What is this community?"
	text="With <span class='underline'>developerexperience.us</span> and our DevX activities, we want to create a shared space for those that work on creating a better developer experience for all of us. DevX leaders come together in our DevX community to connect, create, and exchange learnings and insights."
	titleClassNames="max-w-xl mx-auto"
	textClassNames="max-w-xl pb-large"
>
	<div class="pb-xx-large">
		<HowToJoin />
	</div>

	<div class="text-center">
		<GradientLinkButton href="#">Join the community</GradientLinkButton>
	</div>
</Section>
