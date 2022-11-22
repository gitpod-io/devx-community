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
		let query = window.matchMedia('(min-width: 768px)');
		query.addEventListener('change', handleTabletChange);
	});

	$: if ($navigating) {
		$showMobileMenu = false;
		showHideOverflowY(false);
	}
</script>

{#if $showMobileMenu}
	<div
		class="absolute top-full z-10 flex max-h-screen w-screen flex-col items-center border-b border-sub bg-box py-4 lg:hidden"
	>
		<ul class="">
			{#each navItems as item}
				<li class="py-4 text-center">
					<a href={item.href}>{item.title}</a>
				</li>
			{/each}
		</ul>
		<ThemeSwitcher />
	</div>
{/if}
