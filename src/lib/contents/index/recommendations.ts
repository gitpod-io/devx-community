import type { RecommendationItem } from '$lib/types/recommendation-item.type';

export const blogRecommendations: RecommendationItem[] = [
	{
		href: 'https://kenneth.io/post/developer-experience-infrastructure-dxi',
		by: 'Kenneth Auchenberg',
		text: 'Developer Experience Infrastructure (DXI)'
	},
	{
		href: 'https://medium.com/dazn-tech/developer-experience-dx-at-dazn-e6de9a0208d2',
		by: 'Cirpo',
		text: 'Developer Experience (DX) at DAZN'
	}
];

export const knowledgeBases: RecommendationItem[] = [
	{
		text: 'DX Tips: The DevTools Magazine',
		by: 'swyx',
		href: 'https://dx.tips/'
	},
	{
		text: 'Developer Experience',
		by: 'Prokop Simek',
		href: 'https://developerexperience.io/'
	}
];

export const podcasts: RecommendationItem[] = [
	{
		text: 'The Sourcegraph Podcast',
		by: 'Beyang & Quinn',
		href: '#'
	},
	{
		text: 'Scaling DevTools',
		by: 'Jack Bridger',
		href: '#'
	},
	{
		text: 'Developer Experience',
		by: 'Algolia',
		href: '#'
	},
	{
		text: 'NerdOut@Spotify',
		by: 'Spotify R&D',
		href: '#'
	}
];
