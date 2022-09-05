<script lang="ts">
	import Section from '../library/section.svelte';
	import DevxBlog from './fragments/devx-blog.svelte';
	import DevxPod from './fragments/devx-pod.svelte';
	import DevxConf from './fragments/devx-conf.svelte';
	import { iconLinks } from '$lib/contents/index/learn-more';
	import IconLink from '../library/icon-link.svelte';
	import GradientLinkButton from '../library/gradient-link-button.svelte';
</script>

<Section
	title="Learn more about developer experience"
	text="We are creating a multi-media knowledge base to help demystify the world of developer experience. Start here!"
	titleClassNames="max-w-4xl mx-auto"
	textClassNames="max-w-xl mx-auto pb-x-small md:pb-small"
	class="flex flex-col items-center"
>
	<div class="space-y-x-large md:space-y-xx-large">
		<div class="mx-auto max-w-xl">
			<ul class="grid grid-cols-1 gap-6 sm:grid-cols-3 md:gap-large">
				{#each iconLinks as link}
					<li class="flex items-center justify-center">
						<IconLink iconLink={link} />
					</li>
				{/each}
			</ul>
		</div>
		<DevxBlog />
		<DevxConf />
		<DevxPod />

		<div class="mx-auto max-w-4xl text-center">
			<h3 class="h4 pb-x-small text-important">Exchange ideas and knowledge with DevX leaders</h3>
			<GradientLinkButton href="#">Join the community</GradientLinkButton>
		</div>
	</div>
</Section>
