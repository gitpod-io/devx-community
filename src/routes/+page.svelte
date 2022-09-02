<script>
	import CommunityRecommendations from '$lib/components/index/community-recommendations.svelte';

	import FoundingMembers from '$lib/components/index/founding-members.svelte';
	import Hero from '$lib/components/index/hero.svelte';
	import LearnMore from '$lib/components/index/learn-more.svelte';
	import WhatIsThisCommunity from '$lib/components/index/what-is-this-community.svelte';
	import Section from '$lib/components/library/section.svelte';
	import DeveloperExperience from '$lib/components/index/developer-experience.svelte';
	import ExchangeIdeas from '$lib/components/index/exchange-ideas.svelte';
</script>

<Hero />

<DeveloperExperience />

<WhatIsThisCommunity />

<LearnMore />

<ExchangeIdeas />

<CommunityRecommendations />

<FoundingMembers />

<Section line={false} title="Join now" />
