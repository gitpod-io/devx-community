<script lang="ts">
	import Gitpod from '../svgs/gitpod.svelte';
	import Twitter from '../svgs/twitter.svelte';
	import FooterDots from './footer-dots.svelte';
</script>

<div class="mt-auto bg-box">
	<footer
		class="m-auto px-4 py-xx-small text-base text-body md:max-w-6xl md:px-x-small md:py-small md:text-main"
	>
		<div class="grid grid-cols-1 md:grid-cols-3">
			<FooterDots class="mb-4 flex md:hidden" />
			<div class="flex w-full max-w-[220px] flex-col md:gap-x-small">
				<p class="">DevX - a space dedicated to developer experience.</p>
				<p class="mb-4 md:mb-0 md:!mt-0">
					An initative organised by Gitpod.
					<br />
					<a href="https://www.gitpod.io" target="_blank">gitpod.io</a>
				</p>
				<Gitpod class="w-16 md:w-24" />
			</div>
			<FooterDots class="hidden items-center md:flex" />
			<div class="mt-medium flex w-full flex-col gap-x-small md:mt-0 md:items-end">
				<a target="_blank" href="https://twitter.com/devxconf"><Twitter /></a>
			</div>
		</div>
		<div class="pt-4 text-center">
			<ul class="flex gap-4 md:justify-center">
				<li>
					<a class="text-xs" href="/privacy">Privacy Policy</a>
				</li>
				<li><a class="text-xs" href="/imprint">Imprint</a></li>
				<li>
					<a target="_blank" class="text-xs" href="https://www.github.com/gitpod-io/devx-community"
						>Source Code</a
					>
				</li>
			</ul>
		</div>
	</footer>
</div>
