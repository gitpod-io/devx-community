<script lang="ts">
	import AnimatedText from './library/animated-text.svelte';
	import Dot from './library/dot.svelte';
	import FullBleed from './library/full-bleed.svelte';
	import Section from './section.svelte';
</script>

<Section
	title="What is developer experience?"
	text="DevX Conf is a space for creators where we can start from first principles, collaborate, listen, discuss and declutter our workflows, toolchains and minds. To improve developer experience. To make us feel again like everything is at our fingertips. We want to foster an ecosystem that sparks dialogue and establishes best practices and frameworks across the areas of coding, testing, building, deploying, collaborating on and running software."
	textClassNames="max-w-[558px]"
	class="relative"
>
	<FullBleed class="mt-x-large w-screen bg-box py-x-large">
		<div class="mx-auto max-w-xl">
			<div class="mt-x-small grid grid-cols-2 gap-1" style="max-width: {2 * 18 + 4}px;">
				{#each Array(4) as _}
					<Dot class="h-[18px] w-[18px]" />
				{/each}
			</div>
			<AnimatedText
				class="text-large my-x-small text-sub"
				text="[..] developers are forced to borrow time from writing code and redirect it towards managing the issues associated with highly complex, multi-factor developer toolchains held together in places by duct tape and baling wire.”"
			/>
			<p>The Developer Experience Gap” by Stephen O'Grady, Redmonk</p>
		</div>
	</FullBleed>
</Section>
