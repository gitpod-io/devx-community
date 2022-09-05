import type { IconLink } from '$lib/types/icon-link';
import Listen__SvelteComponent_ from '../../components/svgs/listen.svelte';
import Watch__SvelteComponent_ from '../../components/svgs/watch.svelte';
import Read__SvelteComponent_ from '../../components/svgs/read.svelte';

export const iconLinks: IconLink[] = [
	{
		iconClasses: 'h-[18px] w-[18px]',
		icon: Read__SvelteComponent_,
		href: '#devx-blog',
		text: 'DevX Blog'
	},
	{
		iconClasses: 'h-[14px] w-[20px]',
		icon: Watch__SvelteComponent_,
		href: '#devx-conf',
		text: 'DevX Conf'
	},
	{
		iconClasses: 'h-[20px] w-[18px]',
		icon: Listen__SvelteComponent_,
		href: '#devx-pod',
		text: 'DevX Pod'
	}
];
