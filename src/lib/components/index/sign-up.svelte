<script lang="ts">
	import GradientCard from '../library/gradient-card.svelte';
	import GradientLinkButton from '../library/gradient-link-button.svelte';

	let email: string;
	let consent = false;
	let isFormDirty = false;

	const handleSubmit = () => {
		isFormDirty = true;
	};
</script>

<GradientCard element="div" class="mx-auto max-w-xl !p-small">
	<form on:submit|preventDefault={handleSubmit}>
		<h2 class="h4 mb-4 text-center">Sign up for DevX Digest</h2>
		<p class="text-large mb-x-small text-center">
			Sign up to stay updated on the latest DevX discoveries and news.
		</p>
		<input
			type="email"
			placeholder="Enter email"
			class="mx-auto mb-x-small block w-full rounded-lg border border-solid border-important bg-transparent px-5 py-3 placeholder:text-body sm:w-[340px]"
			required
			bind:value={email}
		/>
		<div class="mx-auto flex max-w-sm flex-col">
			<label class="mb-4 flex gap-4">
				<input type="checkbox" required bind:checked={consent} />
				<p class="text-xs {isFormDirty && !consent ? '!text-red-500' : ''}">
					I consent to having this website store my submitted information.
				</p>
			</label>
			<p class="text-xs">
				By submitting this form I acknowledge that I have read and understood the <a href="/privacy"
					>Privacy Policy</a
				>
			</p>
			<div class="mt-x-small flex justify-center">
				<GradientLinkButton element="button">Sign up</GradientLinkButton>
			</div>
		</div>
	</form>
</GradientCard>

<style lang="postcss">
</style>
