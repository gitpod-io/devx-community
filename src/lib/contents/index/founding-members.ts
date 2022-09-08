import type { Portrait } from '$lib/types/portrait.type';
import ChrisWeichel from '$lib/images/portraits/chris_weichel.jpg?w=300&h=300&webp';
import PaulineNarvas from '$lib/images/portraits/pauline_narvas.png?w=300&h=300&webp';
import Cirpo from '$lib/images/portraits/cirpo.jpeg?w=300&h=300&webp';
import AbiNoda from '$lib/images/portraits/abi_noda.png?w=300&h=300&webp';
import JoshMaxwell from '$lib/images/portraits/josh_maxwell.jpeg?w=300&h=300&webp';
import PhillipCarter from '$lib/images/portraits/phillip_carter.jpeg?w=300&h=300&webp';
import GeoffreyTeale from '$lib/images/portraits/geoffrey_teale.jpg?w=300&h=300&webp';
import ElvisKahoro from '$lib/images/portraits/elvis_kahoro.jpeg?w=300&h=300&webp';

export const foundingMembers: Portrait[] = [
	{
		imgsrc: Cirpo,
		name: 'Cirpo',
		company: '@Spotify',
		role: 'Engineering Manager - Core Infra',
		linkedinLink: 'https://www.linkedin.com/in/cirpo/',
		twitterLink: 'https://twitter.com/cirpo'
	},

	{
		imgsrc: AbiNoda,
		name: 'Abi Noda',
		company: '@DX',
		role: 'CEO',
		linkedinLink: 'https://www.linkedin.com/in/abinoda/',
		twitterLink: 'https://twitter.com/abinoda'
	},
	{
		imgsrc: PaulineNarvas,
		name: 'Pauline Narvas',
		company: '@Gitpod',
		role: 'Head of Community',
		linkedinLink: 'https://www.linkedin.com/in/pnarvas/',
		twitterLink: 'https://twitter.com/paulienuh'
	},
	{
		imgsrc: JoshMaxwell,
		name: 'Josh Maxwell',
		company: '@Qualtrics',
		linkedinLink: 'https://www.linkedin.com/in/cctechwiz/',
		role: 'Software Engineer',
		twitterLink: 'https://twitter.com/cctechwiz'
	},
	{
		imgsrc: PhillipCarter,
		name: 'Phillip Carter',
		company: '@Honeycomb',
		role: 'Product & DX',
		linkedinLink: 'https://www.linkedin.com/in/phillip-carter-4714a135/',
		twitterLink: 'https://twitter.com/_cartermp'
	},
	{
		imgsrc: ChrisWeichel,
		name: 'Christian Weichel',
		role: 'CTO',
		company: '@Gitpod',
		linkedinLink: 'https://www.linkedin.com/in/christian-weichel-740b4224/',
		twitterLink: 'https://twitter.com/csweichel'
	},
	{
		imgsrc: GeoffreyTeale,
		name: 'Geoffrey Teale',
		company: '@Upvest',
		role: 'Head of Developer Experience',
		linkedinLink: 'https://www.linkedin.com/in/geoffteale/',
		twitterLink: 'https://twitter.com/tealeg'
	},
	{
		imgsrc: ElvisKahoro,
		name: 'Elvis Kahoro',
		company: '@Warp',
		role: 'DevX Engineer',
		linkedinLink: 'https://www.linkedin.com/in/elviskahoro/'
	}
];
