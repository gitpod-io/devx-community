<script lang="ts">
	import Dot from '../library/dot.svelte';
	import Gitpod from '../svgs/gitpod.svelte';
	import Twitter from '../svgs/twitter.svelte';
</script>

<div class="mt-auto bg-box">
	<footer class="m-auto px-4 py-large text-body md:max-w-6xl md:px-x-small md:py-small">
		<div class="flex justify-around">
			<div class="flex max-w-[200px] flex-col gap-x-small">
				<div>DevX - Bring back joy and speed to our workflows</div>
				<div>An initative organised by <a href="https://www.gitpod.io">Gitpod</a>.</div>

				<Gitpod />
			</div>
			<div class="flex w-full max-w-[200px] flex-col items-center gap-x-small">
				<div class="grid grid-cols-2 gap-1" style="max-width: 40px;">
					{#each Array(4) as _}
						<Dot class="h-[18px] w-[18px]" />
					{/each}
				</div>
			</div>
			<div class="flex w-full max-w-[200px] flex-col items-end gap-x-small">
				<a target="_blank" href="https://twitter.com/devxconf"><Twitter /></a>
			</div>
		</div>
		<div class="pt-4 text-center">
			<ul class="flex justify-center gap-4">
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
