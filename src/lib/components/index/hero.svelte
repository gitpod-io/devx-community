<script lang="ts">
	import { onMount } from 'svelte';
	import AnimatedLine from '../library/animated-line.svelte';
	import Dot from '../library/dot.svelte';
	let isLineVisible = false;

	onMount(() => {
		const dots = document.querySelectorAll<HTMLElement>('.dots div');
		const title = document.querySelector<HTMLElement>('.h3');

		if (dots) {
			setTimeout(() => {
				dots.forEach((dot) => {
					dot.style.transform = 'none';
				});
			}, 200);
		}

		if (title) {
			setTimeout(() => {
				title.style.transform = 'none';
				title.style.opacity = '1';
			}, 1000);
		}

		window.addEventListener('scroll', () => {
			setTimeout(() => {
				isLineVisible = true;
			}, 400);
		});
	});
</script>

<header class="relative">
	<div class="dots mx-auto grid max-w-[208px] grid-cols-2 gap-4 lg:max-w-[310px]">
		<Dot class="h-24 w-24 lg:h-36 lg:w-36" />
		<Dot class="h-24 w-24 lg:h-36 lg:w-36" />
		<Dot class="h-24 w-24 lg:h-36 lg:w-36" />
		<Dot class="h-24 w-24 lg:h-36 lg:w-36" />
	</div>
	<h1 class="h3 mx-auto mt-x-large max-w-[510px] text-center">
		A dedicated space<br />for developer experience
	</h1>
	<AnimatedLine disableObserver={true} visible={isLineVisible} />
</header>

<style lang="postcss">
	.dots > :global(*) {
		transition: transform 2.5s cubic-bezier(0.16, 1, 0.3, 1);
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
		transform: translateY(50%);
		@apply translate-y-1/2 opacity-0 transition-all duration-[1500ms];
	}
</style>
