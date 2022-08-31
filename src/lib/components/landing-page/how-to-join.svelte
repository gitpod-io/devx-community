<script>
	import HowToJoinItem from './how-to-join-item.svelte';
</script>

<div class="mx-auto mt-x-large max-w-lg">
	<h4 class="text-h4 tracking-[0.15em]">How to Join?</h4>
	<div class="mt-[1.5rem]">To join our DevX community, you must fulfil these requirements.</div>
	<div class="mt-[1.5rem] grid grid-cols-1 gap-x-small lg:grid-cols-2">
		<HowToJoinItem
			heading="1. Role"
			text="You are in a Head of Developer Experience, Platform, DevX Engineer or similar role."
		/>
		<HowToJoinItem
			heading="2. Business model"
			text="You are already working in the DevX space, for example, in a DevX team or developer-experience company."
		/>
		<HowToJoinItem
			heading="3. Principles"
			text="You align with our DevX community manifesto and understand what we’re trying to achieve."
		/>
	</div>
</div>
