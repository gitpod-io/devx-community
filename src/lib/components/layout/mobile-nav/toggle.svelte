<script lang="ts">
	import showMobileMenuStore from '$lib/stores/mobile-menu';
	import { showHideOverflowY } from '$lib/helper';

	function handleToggle() {
		$showMobileMenuStore = !$showMobileMenuStore;

		if ($showMobileMenuStore) {
			showHideOverflowY(true);
		} else {
			showHideOverflowY(false);
		}
	}
</script>

<button
	on:click={handleToggle}
	class="flex w-small items-center justify-center rounded-2xl {$showMobileMenuStore
		? 'bg-bg'
		: 'bg-important'} px-4 py-1 shadow-default lg:hidden"
>
	{#if $showMobileMenuStore}
		<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
			<title>Close Icon</title>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M10.5817 12.1569C10.9723 12.5474 11.6054 12.5474 11.996 12.1569C12.3865 11.7663 12.3865 11.1332 11.996 10.7426L7.75331 6.5L11.996 2.25736C12.3865 1.86683 12.3865 1.23367 11.996 0.843146C11.6054 0.452622 10.9723 0.452621 10.5817 0.843146L6.3391 5.08579L2.09646 0.843146C1.70593 0.452622 1.07277 0.452621 0.682245 0.843146C0.291721 1.23367 0.29172 1.86684 0.682245 2.25736L4.92489 6.5L0.682245 10.7426C0.29172 11.1332 0.291721 11.7663 0.682245 12.1569C1.07277 12.5474 1.70593 12.5474 2.09646 12.1569L6.3391 7.91421L10.5817 12.1569Z"
				class="fill-body"
			/>
		</svg>
	{:else}
		<svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="16" height="2" rx="1" class="fill-box" />
			<rect y="6" width="16" height="2" rx="1" class="fill-box" />
		</svg>
	{/if}
</button>
