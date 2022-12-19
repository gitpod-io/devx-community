<script lang="ts">
	import Devx from '../svgs/devx.svelte';
	import ThemeSwitcher from './theme-switcher.svelte';
	import { navItems } from '$lib/contents/nav';
	import MobileMenu from './mobile-nav/index.svelte';
	import Toggle from './mobile-nav/toggle.svelte';
	import { page } from '$app/stores';

	import showMobileMenu from '$lib/stores/mobile-menu';

	console.log($page.url.pathname);
	let scroll: number;
</script>

<svelte:window bind:scrollY={scroll} />
<nav
	class:scrolled-out={scroll > 10}
	class="sticky top-0 z-20 mx-auto w-full border-b border-t-0 border-solid border-transparent bg-bg "
>
	<div
		class:bg-box={$showMobileMenu}
		class="relative flex justify-between px-4 py-4 transition-none lg:px-small"
	>
		<Devx />
		<div class="hidden items-center gap-x-small lg:flex">
			<ul class="flex gap-x-small text-p-small">
				{#each navItems as navItem}
					<li>
						<a
							class="no-underline transition-all delay-50 duration-200 hover:text-important"
							href={navItem.href}>{navItem.title}</a
						>
					</li>
				{/each}
			</ul>
			<ThemeSwitcher />
		</div>
		<Toggle />
	</div>
	<MobileMenu />
</nav>

<style lang="postcss">
	.scrolled-out {
		@apply border-b border-sub bg-nav;
		backdrop-filter: blur(10px);
	}
</style>
