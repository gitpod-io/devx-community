<script lang="ts">
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
</script>

<div class="flex gap-4">
	<button title="Switch to Light theme" on:click={setLight}>
		<Sun active={theme === 'light'} />
	</button>
	<button title="Switch to Dark theme" on:click={setDark}>
		<Moon active={theme === 'dark'} />
	</button>
</div>

<style lang="postcss">
	button {
		@apply px-2 py-1;
	}

	button > :global(svg) {
		width: 18px;
		height: 18px;
	}

	button :global(path) {
		transition: all 0.2s;
	}
</style>
