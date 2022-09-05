<script lang="ts">
	export let active: boolean;
</script>

<svg
	width="1140"
	height="1140"
	viewBox="0 0 1140 1140"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M570 1076.67C849.824 1076.67 1076.67 849.824 1076.67 570C1076.67 290.176 849.824 63.333 570 63.333C290.176 63.333 63.333 290.176 63.333 570C63.333 849.824 290.176 1076.67 570 1076.67Z"
		class={active ? 'stroke-important' : 'stroke-sub'}
		stroke-width="126.667"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-dasharray="0.63 360"
	/>
	<path
		d="M570 823.333C709.912 823.333 823.333 709.912 823.333 570C823.333 430.088 709.912 316.667 570 316.667C430.088 316.667 316.667 430.088 316.667 570C316.667 709.912 430.088 823.333 570 823.333Z"
		class={active ? 'fill-important' : 'fill-sub'}
	/>
</svg>
