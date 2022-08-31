<script lang="ts">
	import Dots from './dots.svelte';

	export let title: string;
	export let text = '';
	export let textClassNames = '';
	export let titleClassNames = '';
	export let dots = false;
</script>

<section class="bottom-lined pt-medium">
	<h2 class="h2 pb-medium text-center {titleClassNames}">{title}</h2>
	<p class="mx-auto {textClassNames}">{text}</p>
	<slot />
</section>

{#if dots}
	<Dots />
{/if}
