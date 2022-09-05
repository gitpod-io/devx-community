<script>
	import CommunityRecommendations from '$lib/components/index/community-recommendations.svelte';

	import FoundingMembers from '$lib/components/index/founding-members.svelte';
	import Hero from '$lib/components/index/hero.svelte';
	import LearnMore from '$lib/components/index/learn-more.svelte';
	import WhatIsThisCommunity from '$lib/components/index/what-is-this-community.svelte';
	import DeveloperExperience from '$lib/components/index/developer-experience.svelte';
	import JoinNow from '$lib/components/index/fragments/join-now.svelte';

	import OpenGraph from '$lib/components/library/open-graph.svelte';
</script>

<OpenGraph
	data={{
		title: 'A dedicated community space for developer experience.',
		description:
			"A community built to bring together folks dedicated to making developers' daily experience (devX) efficient, sustainable and joyful."
	}}
/>

<Hero />

<DeveloperExperience />

<WhatIsThisCommunity />

<LearnMore />

<CommunityRecommendations />

<FoundingMembers />

<JoinNow />
