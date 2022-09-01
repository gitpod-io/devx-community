<script lang="ts">
	import Github from '../svgs/github.svelte';
	import Twitter from '../svgs/twitter.svelte';

	export let imgsrc: string;
	export let name: string;
	export let company: string;
	export let githubLink = '';
	export let twitterLink = '';
</script>

<div class="flex flex-col items-center justify-center">
	<div class="relative inline-block">
		<img class="rounded-2xl grayscale" width="170" height="170" alt="test" src={imgsrc} />
		<div class="absolute -top-5 -left-8 -z-10 h-16 w-16 rounded-full bg-primary" />
	</div>
	<div class="mt-2 font-bold text-important">{name}</div>
	<div class="mt-2">{company}</div>
	<div class="mt-4 flex justify-center gap-[0.75rem]">
		<a target="_blank" href={githubLink}> <Github /></a>
		<a target="_blank" href={twitterLink}><Twitter /></a>
	</div>
</div>
