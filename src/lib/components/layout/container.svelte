<script lang="ts">
	export let element = 'div';
	let clazz = '';
	export { clazz as class };
</script>

<svelte:element
	this={element}
	class="mx-auto max-w-7xl px-4 pb-small sm:px-x-small md:px-medium md:pb-large lg:px-large xl:px-0 {clazz}"
>
	<slot />
</svelte:element>
