import type { IconLink } from '$lib/types/icon-link';

export const iconLinks: IconLink[] = [
	{
		icon: {
			src: '/icons/read.svg',
			alt: 'shelf icon'
		},
		href: '#devx-blog',
		text: 'DevX Blog'
	},
	{
		icon: {
			src: '/icons/watch.svg',
			alt: 'youtube icon'
		},
		href: '#devx-conf',
		text: 'DevX Conf'
	},
	{
		icon: {
			src: '/icons/listen.svg',
			alt: 'earphone icon'
		},
		href: '#devx-pod',
		text: 'DevX Pod'
	}
];
