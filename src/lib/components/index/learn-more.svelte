<script lang="ts">
	import Section from '../library/section.svelte';
	import DevxBlog from './fragments/devx-blog.svelte';
	import DevxPod from './fragments/devx-pod.svelte';
	import DevxConf from './fragments/devx-conf.svelte';
	import Watch from '../svgs/watch.svelte';
	import Listen from '../svgs/listen.svelte';
	import Read from '../svgs/read.svelte';
</script>

<Section
	title="Learn more about developer experience"
	text="We are creating a multi-media knowledge base to help demystify the world of developer experience. Start here!"
	titleClassNames="max-w-4xl mx-auto"
	textClassNames="max-w-xl mx-auto pb-large"
	class="flex flex-col items-center"
>
	<div class="mx-auto max-w-xl pb-xx-large">
		<ul class="grid grid-cols-1 gap-large sm:grid-cols-3">
			<li>
				<a class="flex items-center justify-center gap-1" href="#devx-blog">
					<Read class="h-[18px] w-[18px]" />
					DevX Blog</a
				>
			</li>
			<li>
				<a class="flex items-center justify-center gap-1" href="#devx-conf">
					<Watch class="h-[14px] w-[20px]" /> DevX Conf</a
				>
			</li>
			<li>
				<a class="flex items-center justify-center gap-1" href="#devx-pod">
					<Listen class="h-[20px] w-[18px] border-none" />
					DevX Pod</a
				>
			</li>
		</ul>
	</div>

	<DevxBlog />
	<DevxConf />
	<DevxPod />
</Section>
