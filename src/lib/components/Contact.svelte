<script>
	import { contacts } from '$lib/config.js';
	import Linkedin from '$icons/Linkedin.svelte';
	import Github from '$icons/Github.svelte';
	import Email from '$icons/Email.svelte';
</script>

<div class="contact-container {$$restProps.class}">
	<a href={contacts.linkedin} target="_blank">
		<Linkedin class="icon" />
	</a>
	<a href={contacts.github} target="_blank">
		<Github class="icon" />
	</a>
	<a href={`mailto:${contacts.email}`}>
		<Email class="icon" />
	</a>
</div>

<style>
    .contact-container {
        display: flex;
        gap: var(--base-size-12);
    }
</style>