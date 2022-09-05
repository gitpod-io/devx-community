<script lang="ts">
	import type { IconLink } from '$lib/types/icon-link';
	export let iconLink: IconLink;
	const { href, text, icon, iconClasses } = iconLink;
</script>

<a
	{href}
	class="inline-flex items-center justify-center gap-1 whitespace-nowrap border-b border-body pb-1 text-center text-p-small font-bold no-underline transition-all delay-50 duration-200 hover:border-transparent"
>
	<svelte:component this={icon} class={iconClasses} />
	{text}
</a>
