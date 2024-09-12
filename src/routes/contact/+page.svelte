<script lang="ts">
	import { contacts } from '$lib/config';
	import Contact from '$components/Contact.svelte';

	const title = 'FEEL FREE TO\nCONTACT ME';
</script>

<div class="contact-container">
	<h2 class="text-display-sm">{title}</h2>
	<a
		href="mailto:{contacts.email}"
		class="text-body-lg color-text-sub"
	>
		{contacts.email}
	</a>
	<Contact
		gap="1.5rem"
		iconSize="lg"
	/>
</div>

<style>
    .contact-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.25rem;
				height: var(--main-height);
				user-select: none;
    }
</style>