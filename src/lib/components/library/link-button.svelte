<script lang="ts">
	export let href: string;
	const target = href.startsWith('http') ? '_blank' : null;
	export let rel = '';
</script>

<a
	{target}
	{rel}
	{href}
	class="flex items-center justify-center rounded-lg bg-black px-3 py-[1.5px] text-xs leading-4 text-explicit-grey-slight"
>
	<slot />
</a>
