<script>
	import Contact from '$components/Contact.svelte';
</script>


<footer>
	<div class="container container-x">
		<div>
		<span class="text-body-sm">
			© 2024 UJON •
			<a href="/">About this site</a>
		</span>
		</div>
		<div>
			<Contact size="3px" />
		</div>
	</div>
</footer>

<style>
    footer {
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        width: 100%;
    }

    footer > .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>