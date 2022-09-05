<script lang="ts">
	// import Gear from '../svgs/switcher/gear.svelte';
	import Sun from '../svgs/switcher/sun.svelte';
	import Moon from '../svgs/switcher/moon.svelte';
	import { onMount } from 'svelte';
	let theme: string;

	onMount(() => {
		let storedTheme = localStorage.getItem('theme');
		if (storedTheme === null) {
			theme = 'light';
		} else if (storedTheme === 'dark') {
			theme = 'dark';
		} else {
			theme = 'light';
		}
	});

	const setLight = () => {
		document.body.classList.replace('dark', 'light');
		localStorage.setItem('theme', 'light');
		theme = 'light';
	};

	const setDark = () => {
		document.body.classList.replace('light', 'dark');
		localStorage.setItem('theme', 'dark');
		theme = 'dark';
	};

	// const setSystem = () => {
	// 	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
	// 		document.body.classList.replace('light', 'dark');
	// 	} else {
	// 		document.body.classList.replace('dark', 'light');
	// 	}
	// 	localStorage.setItem('theme', 'system');
	// 	theme = 'system';
	// };
</script>

<div class="flex">
	<!-- <button title="Switch to System's prefered color scheme." on:click={setSystem}>
		<Gear active={theme === 'system'} />
	</button> -->
	<button title="Switch to Light theme" on:click={setLight}>
		<Sun active={theme === 'light'} />
	</button>
	<button title="Switch to Dark theme" on:click={setDark}>
		<Moon active={theme === 'dark'} />
	</button>
</div>

<style lang="postcss">
	button {
		@apply flex h-12 w-12 items-center;
	}

	button > :global(svg) {
		width: 18px;
		height: 18px;
	}

	button :global(path) {
		transition: all 0.2s;
	}
</style>
