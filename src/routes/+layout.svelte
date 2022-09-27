<script lang="ts" context="module">
	declare global {
		interface Window {
			prevPages?: string[];
		}
	}
</script>

<script lang="ts">
	import Nav from '$lib/components/layout/nav.svelte';
	import Footer from '$lib/components/layout/footer.svelte';
	import Container from '$lib/components/layout/container.svelte';
	import '../app.css';
	import { onMount } from 'svelte';
	import { trackPage, trackEvent } from '$lib/utils/analytics';
	import { page } from '$app/stores';

	onMount(async () => {
		const currentPage = window.location.href;
		trackPage({
			referrer: document.referrer,
			url: currentPage,
			path: window.location.pathname,
			title: document.title
		});
		window.prevPages = [currentPage];

		const trackButtonOrAnchor = (props: MouseEvent) => {
			var curr = props.target as HTMLElement;
			while (!(curr instanceof HTMLButtonElement) && !(curr instanceof HTMLAnchorElement)) {
				if (curr.parentNode == undefined || curr.parentNode instanceof Document) {
					return;
				}
				curr = curr.parentElement as HTMLElement;
			}
			trackEvent('devx page clicked', {});
		};

		window.addEventListener('click', trackButtonOrAnchor, true);
	});

	$: if ($page.url.pathname) {
		if (typeof window !== 'undefined' && window.prevPages) {
			trackPage({
				referrer: window.prevPages[window.prevPages.length - 1],
				url: window.location.href,
				path: window.location.pathname,
				title: document.title
			});
			window.prevPages.push(window.location.href);
			if (window.prevPages.length > 2) {
				window.prevPages.shift();
			}
		}
	}
</script>

<div class="flex min-h-screen flex-col">
	<Nav />

	<Container element="main" class="pt-24 sm:pt-28 md:pt-xx-large">
		<slot />
	</Container>
	<Footer />
</div>
