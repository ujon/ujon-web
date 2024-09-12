<script lang="ts">
	import { contacts } from '$lib/config';
	import Linkedin from '$icons/Linkedin.svelte';
	import Github from '$icons/Github.svelte';
	import Email from '$icons/Email.svelte';

	export let gap: string = '1rem';
	export let iconSize: 'sm' | 'md' | 'lg' = 'md';
</script>

<div
	class="contact-container {$$restProps.class}"
	style="gap: {gap};"
>
	<a href={contacts.linkedin} target="_blank">
		<Linkedin class="icon icon-{iconSize}" />
	</a>
	<a href={contacts.github} target="_blank">
		<Github class="icon icon-{iconSize}" />
	</a>
<!--	<a href={`mailto:${contacts.email}`}>-->
	<!--		<Email class="icon icon-{iconSize}" />-->
	<!--	</a>-->
</div>

<style>
    .contact-container {
        display: flex;
    }
</style>