<script>
	import { t, locale, locales } from '$lib/translations/index.js';
	import { cookies } from '$lib/utils/cookies.js';
	import { COOKIE_LOCALE } from '$lib/constants/cookies.js';

	/**
	 *
	 * @param currentTarget {string}
	 */
	const handleChange = ({ currentTarget }) => {
		const { value } = currentTarget;

		cookies.set(COOKIE_LOCALE, value);
	};
</script>

<p>{$t("contact.title")}</p>

<p>{$t("common.test")}</p>

<select bind:value="{$locale}" on:change={handleChange}>
	{#each $locales as value}
		<option value="{value}">{$t(`lang.${value}`)}</option>
	{/each}
</select>