<script lang="ts">
	import AnimatedText from '../library/animated-text.svelte';
	import Container from '../layout/container.svelte';
	import Dot from '../library/dot.svelte';
	import FullBleed from '../library/full-bleed.svelte';
	import Section from '../library/section.svelte';
</script>

<Section title="What is developer experience?" class="relative" titleClassNames="pb-0">
	<div class="mx-auto max-w-xl pt-medium pb-x-large">
		<h3 class="pb-xx-small text-h3 text-important">Community Manifesto</h3>
		<p>
			Developer experience - our daily experience when trying to get the job done. All of that
			should be efficient, sustainable and joyful.
			<br />
			<br />
			Happy developers build better software!
			<br /><br />
			The myriad of tools that are released each single day initially sounded like the promised developer-land.
			While choice is great, it doesn't necessarily make our lives easier. How does that feel?
		</p>
	</div>
	<FullBleed class="w-screen bg-box py-x-large">
		<Container>
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
		</Container>
	</FullBleed>
	<p class="mx-auto max-w-xl pt-x-large">
		There is light at the end of the tunnel.
		<br />
		<br />
		Individual developers, teams and projects start to think deeply about design, style and taste for
		tools to help us get into a flow focused on what we all love most: being creative and writing elegant
		code.
		<br />
		<br />
		What all of them have in common is the desire to delight, the desire to reduce friction, and the
		desire to leverage automation to create a Swiss clockwork that works reliably below the surface.
		<br />
		<br />
		This community is for them.
	</p>
</Section>
