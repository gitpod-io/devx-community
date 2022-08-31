<script lang="ts">
	export let href = '';

	$: target = href.startsWith('http') ? '_blank' : null;

	let clazz = '';
	export { clazz as class };
</script>

<a
	{href}
	{target}
	class="rounded-[2.5rem] border border-solid border-important px-x-small py-4 text-inter text-important {clazz}"
>
	<slot />
</a>
