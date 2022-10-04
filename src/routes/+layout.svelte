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

	interface TrackDevxClick {
		context?: string;
		position?: string;
		variant?: string;
		label?: string;
		destination?: string;
		dnt?: boolean;
	}

	onMount(async () => {
		const currentPage = window.location.href;
		trackPage();
		window.prevPages = [currentPage];

		const trackButtonOrAnchor = (props: MouseEvent) => {
			var curr = props.target as HTMLElement;
			while (!(curr instanceof HTMLButtonElement || curr instanceof HTMLAnchorElement)) {
				if (curr.parentNode == undefined || curr.parentNode instanceof Document) {
					return;
				}
				curr = curr.parentElement as HTMLElement;
			}

			let implicitProps: TrackDevxClick = {
				label: curr.innerText
			};

			//assign style of button to variant (e.g. if class contains "btn-primary", "btn-primary" will be passed)
			for (var i = 0; i < curr.classList.length; i++) {
				const item = curr.classList[i];
				if (/btn-.*/.test(item)) {
					implicitProps.variant = item;
					break;
				}
			}

			if (curr instanceof HTMLDetailsElement) {
				implicitProps.variant = 'open_details';
			}

			if (curr instanceof HTMLAnchorElement) {
				const anchor = curr as HTMLAnchorElement;
				implicitProps.destination = anchor.href;
				//an anchor tag that is not styled as button will be classified as "link" variant
				implicitProps.variant = implicitProps.variant || 'link';
			}

			const implicitPositions = ['nav', 'footer', 'main'];

			const getPassedProps = (curr: HTMLElement | null): TrackDevxClick | undefined => {
				const curr_tag = curr?.tagName ? curr.tagName.toLowerCase() : '';
				if (!curr || curr_tag == 'body') {
					return;
				}

				const currProps = JSON.parse(curr.dataset.analytics || '{}') as TrackDevxClick;
				//set position in trackingMsg if it can be read from ancestor prop
				if (implicitPositions.includes(curr_tag)) {
					implicitProps.position = curr_tag;
				}
				return { ...getPassedProps(curr.parentElement), ...currProps };
			};

			const trackingMsg: TrackDevxClick = { ...implicitProps, ...getPassedProps(curr) };

			console.dir(trackingMsg);

			if (trackingMsg.dnt) {
				return;
			}

			trackEvent('devx_page_clicked', { ...trackingMsg });
		};

		window.addEventListener('click', trackButtonOrAnchor, true);
	});

	$: if ($page.url.pathname) {
		if (typeof window !== 'undefined' && window.prevPages) {
			trackPage();
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
