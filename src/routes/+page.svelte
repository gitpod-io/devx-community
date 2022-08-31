<script>
	import FoundingMembers from '$lib/components/founding-members.svelte';
	import Hero from '$lib/components/hero.svelte';
	import LearnMore from '$lib/components/learn-more.svelte';
	import LinkButton from '$lib/components/link-button.svelte';
	import Section from '$lib/components/section.svelte';
</script>

<Hero />

<Section
	title="What is developer experience?"
	text="DevX Conf is a space for creators where we can start from first principles, collaborate, listen, discuss and declutter our workflows, toolchains and minds. To improve developer experience. To make us feel again like everything is at our fingertips. We want to foster an ecosystem that sparks dialogue and establishes best practices and frameworks across the areas of coding, testing, building, deploying, collaborating on and running software."
	textClassNames="max-w-[558px]"
	dots={true}
/>

<Section
	title="What is this community? And how to join?"
	text="DevX Conf is a space for creators where we can start from first principles, collaborate, listen, discuss and declutter our workflows, toolchains and minds. To improve developer experience. To make us feel again like everything is at our fingertips. We want to foster an ecosystem that sparks dialogue and establishes best practices and frameworks across the areas of coding, testing, building, deploying, collaborating on and running software."
	titleClassNames="max-w-xl mx-auto"
	textClassNames="max-w-[558px]"
>
	<div class="flex justify-center">
		<LinkButton href="" class="mt-small">Join the community</LinkButton>
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
