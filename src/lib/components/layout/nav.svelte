<script lang="ts">
	import Devx from '../svgs/devx.svelte';
	import ThemeSwitcher from './theme-switcher.svelte';

	let scroll: number;
</script>

<svelte:window bind:scrollY={scroll} />
<nav
	class:scrolled-out={scroll > 10}
	class="sticky top-0 z-40 mx-auto w-full border-b border-t-0 border-solid border-transparent bg-bg p-4"
>
	<div class="flex justify-between">
		<Devx />
		<ThemeSwitcher />
	</div>
</nav>

<style lang="postcss">
	.scrolled-out {
		@apply border-b border-sub bg-nav;
		backdrop-filter: blur(10px);
	}
</style>
