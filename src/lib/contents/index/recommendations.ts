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
	},
	{
		href: 'https://www.akitasoftware.com/blog',
		by: 'Akita (Jean Yang)',
		text: 'Akita Engineering Blog'
	},
	{
		href: 'https://teale.de/',
		by: 'Geoffrey J. Teale',
		text: 'Teale Blog'
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
		href: 'https://podcasts.apple.com/us/podcast/the-sourcegraph-podcast/id1516219009'
	},
	{
		text: 'Scaling DevTools',
		by: 'Jack Bridger',
		href: 'https://podcasts.apple.com/us/podcast/scaling-devtools/id1620866569'
	},
	{
		text: 'Developer Experience',
		by: 'Algolia',
		href: 'https://podcasts.apple.com/us/podcast/developer-experience/id1573728860'
	},
	{
		text: 'NerdOut@Spotify',
		by: 'Spotify R&D',
		href: 'https://podcasts.apple.com/us/podcast/nerdout-spotify/id1610028432'
	},
	{
		text: 'DevOps Deployed',
		by: 'DevOps Directive',
		href: 'https://www.youtube.com/playlist?list=PLFzuOAehUPHFMFSe7OeKLecTcbjydSUHa'
	}
];
