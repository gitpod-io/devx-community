<script lang="ts">
	import Dot from '$lib/components/library/dot.svelte';
	import GradientLinkButton from '$lib/components/library/gradient-link-button.svelte';
	import Section from '$lib/components/library/section.svelte';
</script>

<Section
	title="Apply now"
	text="Do you have valuable knowledge to share and are driven to create better experiences for developers?"
	class="relative mx-auto mb-xx-large mt-44 flex flex-col items-center justify-center pt-0 text-center sm:mt-x-large sm:h-[450px] sm:w-[450px] md:h-[649px] md:w-[649px]"
	titleClassNames="pb-6"
	textClassNames="pb-6 text-important max-w-md"
	line={false}
>
	<Dot
		class="absolute -z-10 h-[200px] w-[200px] scale-[2.5] transform sm:inset-0 sm:h-auto sm:w-auto sm:transform-none"
	/>
	<GradientLinkButton href="https://forms.gle/sX53FUvXBF7avS2u9">
		Join the community
	</GradientLinkButton>
</Section>
