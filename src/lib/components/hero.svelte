<script lang="ts">
	import { onMount } from 'svelte';
	import Dot from './library/dot.svelte';

	onMount(() => {
		const dots = document.querySelectorAll<HTMLElement>('.dots div');
		const title = document.querySelector<HTMLElement>('.h3');

		if (dots) {
			setTimeout(() => {
				dots.forEach((dot) => {
					dot.style.transform = 'none';
				});
			}, 100);
		}

		if (title) {
			setTimeout(() => {
				title.style.opacity = '1';
				title.style.transform = 'none';
			}, 3000);
		}
	});
</script>

<header class="bottom-lined relative">
	<div class="dots mx-auto grid max-w-[208px] grid-cols-2 gap-4 lg:max-w-[310px]">
		<Dot class="h-24 w-24 lg:h-36 lg:w-36" />
		<Dot class="h-24 w-24 lg:h-36 lg:w-36" />
		<Dot class="h-24 w-24 lg:h-36 lg:w-36" />
		<Dot class="h-24 w-24 lg:h-36 lg:w-36" />
	</div>
	<h1 class="h3 mx-auto mt-x-large max-w-[400px] text-center">
		Bring back joy and speed to our workflows
	</h1>
</header>

<style lang="postcss">
	.dots > :global(*) {
		transition: transform 3s cubic-bezier(1, 0, 0.15, 1);
	}

	.dots > :global(*:first-child) {
		transform: translateX(calc(-50vw + 100%)) translateY(-100%);
	}

	.dots > :global(*:nth-child(2)) {
		transform: translateX(calc(50vw - 100%)) translateY(-100%);
	}

	.dots > :global(*:nth-child(3)) {
		transform: translateX(calc(-50vw + 100%)) translateY(100%);
	}

	.dots > :global(*:last-child) {
		transform: translateX(calc(50vw - 100%)) translateY(100%);
	}

	.h3 {
		@apply opacity-0;
		transform: scale(0.7);
		transition: all 2s;
	}
</style>
