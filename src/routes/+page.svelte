<script>
	import FoundingMembers from '$lib/components/landing-page/founding-members.svelte';
	import Hero from '$lib/components/landing-page/hero.svelte';
	import LearnMore from '$lib/components/landing-page/learn-more.svelte';
	import Section from '$lib/components/section.svelte';
	import HowToJoin from '$lib/components/landing-page/how-to-join.svelte';

	import GradientLinkButton from '$lib/components/library/gradient-link-button.svelte';
	import VerticalStroke from '$lib/components/library/vertical-stroke.svelte';
</script>

<Hero />

<div class="mt-x-large"><VerticalStroke /></div>

<Section
	title="What is developer experience?"
	text="DevX Conf is a space for creators where we can start from first principles, collaborate, listen, discuss and declutter our workflows, toolchains and minds. To improve developer experience. To make us feel again like everything is at our fingertips. We want to foster an ecosystem that sparks dialogue and establishes best practices and frameworks across the areas of coding, testing, building, deploying, collaborating on and running software."
	textClassNames="max-w-lg"
	dots={true}
/>

<Section
	textClassNames="max-w-lg"
	vertialStroke={true}
	text="However, there is light at the end of the tunnel as individual developers, teams and projects start to think deeply about design, style and taste for tools to help us get into a flow focused on what we all love most: being creative and writing elegant code. What all of them have in common is the desire to delight, the desire to reduce friction and the desire to leverage automation to solve problems and turn duct tape into a Swiss clockwork that works reliably below the surface. This community is for them."
/>

<Section
	title="What is this community?"
	text="With developerexperience.us and our DevX activities, we want to create a space for creators where we can start from first principles, collaborate, listen, discuss and declutter our workflows, toolchains and minds. The goal is to foster an ecosystem that sparks dialogue and establishes best practices and frameworks across four different areas."
	titleClassNames="mx-auto max-w-xl"
	textClassNames="max-w-lg"
>
	<HowToJoin />
	<div class="mt-x-large flex justify-center">
		<GradientLinkButton href="">Join the community</GradientLinkButton>
	</div>
</Section>

<LearnMore />

<Section
	title="Community recommendations"
	text="DevX Conf is a space for creators where we can start from first principles, collaborate, listen, discuss and declutter our workflows, toolchains and minds. To improve developer experience. To make us feel again like everything is at our fingertips. We want to foster an ecosystem that sparks dialogue and establishes best practices and frameworks across the areas of coding, testing, building, deploying, collaborating on and running software."
	class="mx-auto max-w-xl"
/>

<FoundingMembers />

<Section title="Join now" />
