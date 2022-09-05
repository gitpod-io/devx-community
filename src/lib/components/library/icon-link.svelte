<script lang="ts">
	import type { IconLink } from '$lib/types/icon-link';
	export let iconLink: IconLink;
	const { href, text, icon } = iconLink;
	const { src, alt } = icon;
</script>

<a
	{href}
	class="flex gap-2.5 whitespace-nowrap border-b border-body pb-2 pr-[1px] text-p-small font-bold no-underline"
>
	<img {src} {alt} />
	{text}
</a>
