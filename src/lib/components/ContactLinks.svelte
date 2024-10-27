<script>
	import LinkedIn from '$assets/icons/LinkedIn.svelte';
	import Github from '$assets/icons/Github.svelte';
	import Email from '$assets/icons/Email.svelte';

	const contacts = {
		linkedin: 'https://www.linkedin.com/in/ujon',
		github: 'https://github.com/ujon',
		email: 'ujon@gmail.com'
	};

	/**
	 * @type {string|undefined}
	 */
	export let size = '32';
</script>

<div class="container">
	<a href={contacts.linkedin}>
		<LinkedIn size={size} class="icon-color-0" />
	</a>
	<a href={contacts.github}>
		<Github size={size} class="icon-color-0" />
	</a>
	<a href={`mailto:${contacts.email}`}>
		<Email size={size} class="icon-color-0" />
	</a>
</div>

<style>
    .container {
        display: flex;
        gap: 1.5rem;
    }
</style>