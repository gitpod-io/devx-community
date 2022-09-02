<script lang="ts">
	import { onMount } from 'svelte';
	import { nanoid } from 'nanoid';

	const id = `text-reveal-${nanoid()}`;

	onMount(() => {
		const target = document.querySelector(`#${id}`);

		const observer = new IntersectionObserver((enteries, observer) => {
			enteries.forEach((entry) => {
				if (entry.isIntersecting) {
					target?.classList.add('reveal');
					console.log('is intersecting:', id);
					observer.disconnect();
				}
			});
		});

		observer.observe(target as HTMLDivElement);
	});
</script>

<div {id}>
	<slot />
</div>

<style lang="postcss">
	div {
		@apply translate-y-1/2 transform opacity-0 transition-all duration-[2000ms];
		transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
	}

	:global(div.reveal) {
		@apply transform-none opacity-100;
	}
</style>
