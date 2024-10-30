<script>
	import { t } from '$lib/translations';
	import ArrowDown from '$assets/icons/ArrowDown.svelte';
</script>

<section class="hero-container padding-x hero-h">
	<p class="title text-display-1">{$t("home.title")}</p>
	<hr />
	<div class="content">
		<div class="leading">
			<ArrowDown class="animate-bounce icon-color-0" />
			<p>{$t("home.explore")}</p>
		</div>
		<p class="subtitle">{$t("home.subtitle")}</p>
	</div>
</section>

<style>
    .hero-container {
        display: flex;
        flex-direction: column;
        justify-content: center;

        & > .title {
            white-space: pre-line;
        }

        & > hr {
            margin-top: 3.5rem;
            margin-bottom: 3rem;
        }

        & > .content {
            display: flex;
            flex-direction: column-reverse;
            justify-content: space-between;
            gap: 2rem;

            & > .leading {
                display: flex;
            }

            & > .subtitle {
                white-space: pre-line;
            }
        }
    }

    @media (min-width: 1024px) {
        .hero-container {
            & > .content {
                flex-direction: row;

                & > .subtitle {
                    max-width: 24rem;
                }
            }
        }
    }
</style>