<script lang="ts">
	import { onMount } from 'svelte';

	export let text: string;
	let clazz = '';
	export { clazz as class };

	let animate = () => {
		const spans = document.querySelectorAll('.text-animated span');

		Array.from(spans).forEach((span, i) => {
			setTimeout(() => {
				span.classList.add('text-important');
			}, i * 250);
		});
	};

	const mutateText = (text: string) => {
		const split = text.split(' ');
		let html = '';

		split.forEach((str) => {
			html += `<span>${str}</span> `;
		});

		return html;
	};

	onMount(() => {
		const target = document.querySelector('.text-animated');
		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					animate();

					observer.disconnect();
				}
			});
		});

		observer.observe(target as HTMLParagraphElement);
	});
</script>

<p class="{clazz} text-animated">
	{@html mutateText(text)}
</p>

<style lang="postcss">
	p {
		@apply opacity-70;
	}

	p :global(span) {
		transition: all 1s cubic-bezier(0.16, 0, 0.3, 1);
	}
</style>
