<script lang="ts">
	import Section from '../library/section.svelte';
	import DevxBlog from './fragments/devx-blog.svelte';
	import DevxPod from './fragments/devx-pod.svelte';
	import DevxConf from './fragments/devx-conf.svelte';
	import { iconLinks } from '$lib/contents/index/learn-more';
	import IconLink from '../library/icon-link.svelte';
</script>

<Section
	title="Learn more about developer experience"
	text="We are creating a multi-media knowledge base to help demystify the world of developer experience. Start here!"
	titleClassNames="max-w-4xl mx-auto"
	textClassNames="max-w-xl mx-auto pb-medium"
	class="flex flex-col items-center"
>
	<div class="mx-auto max-w-xl pb-xx-large">
		<ul class="grid grid-cols-1 gap-large sm:grid-cols-3">
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
</Section>
