<script lang="ts">
	import { navItems } from '$lib/contents/nav';
	import showMobileMenu from '$lib/stores/mobile-menu';
	import ThemeSwitcher from '../theme-switcher.svelte';
	import { navigating } from '$app/stores';

	import { onMount } from 'svelte';
	import { showHideOverflowY } from '$lib/helper';

	onMount(() => {
		const handleTabletChange = (e: any) => {
			if (e.matches) {
				$showMobileMenu = false;
				showHideOverflowY(false);
			}
		};
		let query = window.matchMedia('(min-width: 1024px)');
		query.addEventListener('change', handleTabletChange);
	});

	const hideMobileMenu = () => {
		$showMobileMenu = false;
		showHideOverflowY(false);
	};

	$: if ($navigating) {
		$showMobileMenu = false;
		showHideOverflowY(false);
	}
</script>

{#if $showMobileMenu}
	<div
		class="absolute top-full z-10 flex max-h-screen w-screen flex-col items-center border-b border-sub bg-box py-4 transition-none lg:hidden"
	>
		<ul class="w-full divide-y-2 divide-bg">
			{#each navItems as item}
				<li class="py-3 px-xx-small">
					<a
						on:click={hideMobileMenu}
						class="no-underline hover:text-important focus:text-important"
						href={item.href}>{item.title}</a
					>
				</li>
			{/each}
		</ul>
		<ThemeSwitcher />
	</div>
{/if}
