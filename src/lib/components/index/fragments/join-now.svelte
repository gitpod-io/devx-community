<script lang="ts">
	import Dot from '$lib/components/library/dot.svelte';
	import GradientLinkButton from '$lib/components/library/gradient-link-button.svelte';
	import Reveal from '$lib/components/library/reveal.svelte';
	import Section from '$lib/components/library/section.svelte';
</script>

<Reveal>
	<Section
		title="Apply now"
		text="Do you have valuable knowledge to share and are driven to create better experiences for developers?"
		class="relative mx-auto flex h-auto w-auto items-center justify-center text-center sm:mt-x-large sm:h-[450px] sm:w-[450px] md:mb-xx-large md:mt-44 md:h-[649px] md:w-[649px] md:pt-0"
		titleClassNames="pb-6"
		textClassNames="text-important max-w-md pb-6"
		line={false}
		isRevealDisabled={true}
		revealClassNames="relative sm:static pb-x-large mb-x-small sm:pb-0 sm:mb-0"
	>
		<GradientLinkButton href="https://forms.gle/sX53FUvXBF7avS2u9">
			Join the community
		</GradientLinkButton>
		<Dot
			class="absolute inset-0 -z-10 hidden h-[200px] w-[200px] sm:block sm:h-auto sm:w-auto sm:transform-none"
		/>
	</Section>
</Reveal>
