<script lang="ts">
	import Dot from './dot.svelte';
	import FullBleed from './full-bleed.svelte';
	export let alignment: 'left' | 'right';
</script>

<FullBleed
	class="!absolute top-1/2 -translate-y-1/2 md:h-[150px] lg:h-[300px] xl:h-[400px] 2xl:h-[650px]"
>
	<Dot
		class="absolute {alignment === 'left'
			? 'left-0 -translate-x-1/2'
			: 'right-0 translate-x-1/2'} h-full transform md:w-[150px] lg:w-[300px] xl:w-[400px] 2xl:w-[650px]"
	/>
</FullBleed>
