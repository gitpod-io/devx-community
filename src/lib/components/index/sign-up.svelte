<script lang="ts">
	import GradientCard from '../library/gradient-card.svelte';
	import GradientLinkButton from '../library/gradient-link-button.svelte';

	let isDisabled = false;
	let email: string;
	let consent = false;
	let isFormDirty = false;

	const handleSubmit = async () => {
		isDisabled = true;
		isFormDirty = true;

		// try {
		// 	const response = await fetch('/api/submit-form', {
		// 		method: 'POST',
		// 		body: JSON.stringify(email)
		// 	});
		// 	if (response.ok) {
		// 		// isEmailSent = true;
		// 	} else {
		// 		console.error(response.statusText);
		// 	}
		// 	console.log('Called.');
		// 	isDisabled = false;
		// } catch (error) {
		// 	console.error(error);
		// }
	};
</script>

<GradientCard element="div" class="mx-auto max-w-xl !p-small">
	<form on:submit|preventDefault={handleSubmit}>
		<h2 class="h4 mb-4 text-center">Sign up for DevX Digest</h2>
		<p class="text-large mb-x-small text-center">
			Sign up to stay updated on the latest DevX discoveries and news.
		</p>
		<div class="mx-auto mb-x-small flex flex-col items-center">
			<input
				type="email"
				placeholder="Enter email"
				class="{isFormDirty && !email
					? '!border-red-500 !placeholder-red-500'
					: ''} block w-full rounded-lg border border-solid border-important bg-transparent px-5 py-3 placeholder:text-body sm:w-[340px]"
				bind:value={email}
			/>
			{#if isFormDirty && !email}<legend class="text-xs text-red-500"
					>Please input your email address</legend
				>{/if}
		</div>
		<div class="mx-auto flex max-w-sm flex-col">
			<div class="mb-4">
				<label class="mb-1 flex gap-4">
					<input
						class={isFormDirty && !consent ? 'border border-red-500' : ''}
						type="checkbox"
						bind:checked={consent}
					/>
					<p class="text-xs {isFormDirty && !consent ? '!text-red-500' : ''}">
						I consent to having this website store my submitted information.
					</p>
				</label>
				{#if isFormDirty && !consent}<legend class="text-center text-xs text-red-500"
						>Please consent to sign up</legend
					>{/if}
			</div>
			<p class="text-xs">
				By submitting this form I acknowledge that I have read and understood the <a href="/privacy"
					>Privacy Policy</a
				>
			</p>
			<div class="mt-x-small flex justify-center">
				<GradientLinkButton {isDisabled} element="button">Sign up</GradientLinkButton>
			</div>
		</div>
	</form>
</GradientCard>
