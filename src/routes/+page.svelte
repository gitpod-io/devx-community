<script>
	import CommunityRecommendations from '$lib/components/index/community-recommendations.svelte';

	import FoundingMembers from '$lib/components/index/founding-members.svelte';
	import Hero from '$lib/components/index/hero.svelte';
	import LearnMore from '$lib/components/index/learn-more.svelte';
	import WhatIsThisCommunity from '$lib/components/index/what-is-this-community.svelte';
	import Section from '$lib/components/library/section.svelte';
</script>

<Hero />

<Section
	title="What is developer experience?"
	text="DevX Conf is a space for creators where we can start from first principles, collaborate, listen, discuss and declutter our workflows, toolchains and minds. To improve developer experience. To make us feel again like everything is at our fingertips. We want to foster an ecosystem that sparks dialogue and establishes best practices and frameworks across the areas of coding, testing, building, deploying, collaborating on and running software."
	textClassNames="max-w-xl"
	dots={true}
/>

<WhatIsThisCommunity />

<LearnMore />

<CommunityRecommendations />

<FoundingMembers />

<Section title="Join now" />
