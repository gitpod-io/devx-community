<script lang="ts">
	import Section from '../library/section.svelte';
	import HowToJoin from './fragments/how-to-join.svelte';
	import GradientLinkButton from '../library/gradient-link-button.svelte';
</script>

<Section
	id="community"
	title="What is this community?"
	text="With <strong>developerexperience.us</strong> and our DevX activities, we want to create a shared space for those that work on creating a better developer experience for all of us.<br /><br /> DevX leaders come together in our DevX community to connect, create, and exchange learnings and insights.<br /><br />As part of our community, you will get visibility as DevX leader, networking opportunities, share real-world experiences and be part of a bigger mission."
	titleClassNames="max-w-xl mx-auto"
	textClassNames="max-w-xl pb-small sm:pb-large"
>
	<div class="pb-small sm:pb-large">
		<HowToJoin />
	</div>

	<div class="text-center">
		<GradientLinkButton href="https://forms.gle/sX53FUvXBF7avS2u9"
			>Join the community</GradientLinkButton
		>
	</div>
</Section>
