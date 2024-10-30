<script>
	import { t } from '$lib/translations';
	import ContactLinks from '$lib/components/ContactLinks.svelte';
</script>

<section class="hero-container">
	<p class="title text-display-3">{$t("contact.title")}</p>
	<ContactLinks />
</section>

<style>
    .hero-container {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 1.75rem;

        & > .title {
            text-align: center;
            white-space: pre-line;
        }
    }

    @media (min-width: 1024px) {
        .hero-container {
            height: calc(100vh - var(--header-h));
        }
    }
</style>