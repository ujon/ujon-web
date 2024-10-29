<script>
	import LocaleSwitch from '$lib/components/LocaleSwitch.svelte';
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
	import ContactLinks from '$lib/components/ContactLinks.svelte';
</script>

<footer class="container padding-x padding-y border-color-1">
	<div class="content">
		<LocaleSwitch />
		<ThemeSwitch />
	</div>
	<div class="following">
		<p class="copyright text-color-1">Copyright 2024 © ujon. All right reserved</p>
		<ContactLinks />
	</div>
</footer>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        border-top-width: 0.0625rem;

        & > .content {
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
        }

        & > .following {
            width: 100%;
            display: flex;
            flex-direction: column-reverse;
            align-items: center;
            gap: 1rem;

            & > .copyright {
                flex: 1 1 0;
            }
        }
    }

    @media (min-width: 1024px) {
        .container {
            align-items: start;

            & > .following {
                flex-direction: row;
                align-items: end;
            }
        }
    }
</style>

