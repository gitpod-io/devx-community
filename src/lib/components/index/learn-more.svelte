<script lang="ts">
	import Section from '../library/section.svelte';
	import DevxBlog from './fragments/devx-blog.svelte';
	import DevxPod from './fragments/devx-pod.svelte';
	import DevxConf from './fragments/devx-conf.svelte';
</script>

<Section
	title="Learn more about developer experience"
	text="We are creating a multi-media knowledge base to help demystify the world of developer experience. Start here!"
	titleClassNames="max-w-4xl mx-auto"
	textClassNames="max-w-xl mx-auto pb-large"
	class="flex flex-col items-center"
>
	<div class="mx-auto max-w-xl pb-xx-large">
		<ul class="flex gap-large">
			<li>
				<a class="flex items-center gap-1" href="#devx-blog">
					<img src="/icons/read.svg" alt="shelf icon" />
					DevX Blog</a
				>
			</li>
			<li>
				<a class="flex items-center gap-1" href="#devx-conf">
					<img src="/icons/watch.svg" alt="youtube icon" />
					DevX Conf</a
				>
			</li>
			<li>
				<a class="flex items-center gap-1" href="#devx-pod">
					<img src="/icons/listen.svg" alt="earphone icon" />
					DevX Pod</a
				>
			</li>
		</ul>
	</div>

	<DevxBlog />
	<DevxConf />
	<DevxPod />
</Section>
