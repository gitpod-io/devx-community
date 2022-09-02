<script lang="ts">
	import type { Portrait } from '$lib/types/portrait.type';

	import Github from '../svgs/github.svelte';
	import Twitter from '../svgs/twitter.svelte';
	import Linkedin from '../svgs/linkedin.svelte';

	export let portrait: Portrait;
</script>

<div>
	<div class="flex h-full flex-col items-center justify-between">
		<div class="relative inline-block">
			<img
				class="rounded-2xl grayscale"
				width="170"
				height="170"
				alt="photo of {portrait.name}"
				src={portrait.imgsrc}
			/>
			<div class="absolute -top-5 -left-8 -z-10 h-16 w-16 rounded-full bg-primary" />
		</div>
		<div class="mt-2 font-bold text-important">{portrait.name}</div>
		<div class="mt-2 text-center">{portrait.role}</div>
		<div class="mt-2">{portrait.company}</div>
		<div class="mt-4 flex justify-center gap-[0.75rem]">
			{#if portrait.githubLink}<a target="_blank" href={portrait.githubLink}> <Github /></a>{/if}
			{#if portrait.twitterLink}<a target="_blank" href={portrait.twitterLink}><Twitter /></a>{/if}
			{#if portrait.linkedinLink}<a target="_blank" href={portrait.linkedinLink}><Linkedin /></a
				>{/if}
		</div>
	</div>
</div>
