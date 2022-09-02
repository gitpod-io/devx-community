<script lang="ts">
	import { onMount } from 'svelte';
	export let disableObserver = false;
	export let visible = false;
	import { nanoid } from 'nanoid';

	let id = `animated-line-${nanoid()}`;

	onMount(() => {
		const target = document.querySelector(`#${id}`);
		if (!disableObserver) {
			const observer = new IntersectionObserver(
				(entries, observer) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							target?.classList.add('visible');
							observer.disconnect();
						}
					});
				},
				{
					threshold: 0.5
				}
			);

			observer.observe(target as HTMLDivElement);
		}
	});
</script>

<div class="relative mx-auto mt-large block h-32 w-[3px] overflow-hidden" class:visible {id} />

<style lang="postcss">
	div::after {
		content: '';
		@apply absolute top-0 left-0 right-0 bottom-0 -translate-y-full transform bg-sub;
		transition: all 3s cubic-bezier(0.16, 1, 0.3, 1);
	}

	:global(div.visible::after) {
		@apply transform-none;
	}
</style>
