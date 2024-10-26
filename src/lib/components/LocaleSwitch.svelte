<script>
	import { t, locale, locales } from '$lib/translations';
	import { cookies } from '$lib/utils/cookies.js';
	import { COOKIE_LOCALE } from '$lib/constants/cookies.js';

	/**
	 *
	 * @param value {string}
	 */
	const handleLocale = (value) => {
		locale.set(value);
		cookies.set(COOKIE_LOCALE, value, {
			expires: 365
		});
	};
</script>

<div class="container switch">
	{#each $locales as it}
		<button
			onclick={()=>handleLocale(it)}
			class:active={$locale === it}
		>
			{$t(`lang.${it}`)}
		</button>
	{/each}
</div>

<style>
    .container {
        width: 20rem;
        height: 3rem;
    }
</style>