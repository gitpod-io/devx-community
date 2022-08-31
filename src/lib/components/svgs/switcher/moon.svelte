<script lang="ts">
	export let active: boolean;
</script>

<svg viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg" transform="scale(.9)">
	<path
		d="M2.44803 11.1968C5.94465 11.1968 8.77921 8.37288 8.77921 4.88946C8.77921 2.91732 7.87067 1.15658 6.44781 0C10.1079 0.246971 13 3.28296 13 6.99189C13 10.8624 9.85048 14 5.96535 14C3.45039 14 1.24368 12.6852 0 10.708C0.75308 11.0228 1.58016 11.1968 2.44803 11.1968Z"
		fill="#F9F9F9"
		class={active ? 'fill-important' : 'fill-sub'}
	/>
</svg>
