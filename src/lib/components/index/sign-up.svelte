<script lang="ts">
	import { trackEvent, trackIdentity } from '$lib/utils/analytics';
	import Dot from '../library/dot.svelte';
	import GradientCardNoHover from '../library/gradient-card-no-hover.svelte';

	import GradientLinkButton from '../library/gradient-link-button.svelte';

	let isDisabled = false;
	let email: string;
	let consent = false;
	let isFormDirty = false;
	let isSignupSuccessful = false;

	$: isFormValid = consent && email;

	const handleSubmit = async () => {
		isFormDirty = true;

		if (isFormValid) {
			isDisabled = true;
			trackEvent('message_submitted', {
				email: email
			});
			trackIdentity({
				email_untrusted: email
			});
			try {
				const response = await fetch('/api/submit-form', {
					method: 'POST',
					body: JSON.stringify(email)
				});
				if (response.ok) {
					isSignupSuccessful = true;
				} else {
					isDisabled = false;
					console.error(response.statusText);
				}
			} catch (error) {
				isDisabled = false;
				console.error(error);
			}
		}
	};
</script>

<GradientCardNoHover element="div" class="mx-auto max-w-xl !p-small">
	{#if isSignupSuccessful}
		<div class="flex flex-col items-center justify-center py-x-large">
			<Dot class="mb-small h-24 w-24" />
			<h2 class="h4 text-center">Thanks for signing up for the DevX&nbsp;digest.</h2>
			<p class="mt-x-small">You'll shortly get a confirmation email.</p>
		</div>
	{:else}
		<form on:submit|preventDefault={handleSubmit}>
			<h2 class="h4 mb-4 text-center">Sign up for DevX Digest</h2>
			<p class="text-large mb-x-small text-center">
				Sign up to stay updated on the latest DevX discoveries and news.
			</p>
			<div class="mx-auto mb-x-small flex flex-col items-center">
				<input
					id="email"
					type="email"
					placeholder="Enter email"
					class="{isFormDirty && !email
						? '!border-red-500 !placeholder-red-500'
						: ''} block w-full rounded-lg border border-solid border-important bg-transparent px-5 py-3 placeholder:text-body sm:w-[340px]"
					bind:value={email}
				/>
				<label for="email" class="sr-only">Enter Email</label>
				{#if isFormDirty && !email}<legend class="text-xs text-red-500"
						>Please input your email address</legend
					>{/if}
			</div>
			<div class="mx-auto flex max-w-sm flex-col">
				<div class="mb-4">
					<input
						class={isFormDirty && !consent ? 'border border-red-500' : ''}
						type="checkbox"
						id="consent"
						bind:checked={consent}
					/>
					<label class="mb-1 flex gap-4" for="consent">
						<p class="text-xs {isFormDirty && !consent ? '!text-red-500' : ''}">
							I consent to having this website store my submitted information.
						</p>
					</label>
					{#if isFormDirty && !consent}<legend class="text-center text-xs text-red-500"
							>Please consent to sign up</legend
						>{/if}
				</div>
				<p class="text-xs">
					By submitting this form I acknowledge that I have read and understood the <a
						href="/privacy">Privacy Policy</a
					>
				</p>
				<div class="mt-x-small flex justify-center" data-analytics={`{"dnt":true}`}>
					<GradientLinkButton {isDisabled} element="button">Sign up</GradientLinkButton>
				</div>
			</div>
		</form>
	{/if}
</GradientCardNoHover>
