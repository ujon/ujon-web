import '$lib/i18n';
import { browser } from '$app/environment';
import { locale, waitLocale } from 'svelte-i18n';

export const load = async () => {
	if (browser) {
		const lang: string = window.navigator.language;
		locale.set(lang);
		document.documentElement.lang = lang;
	}
	await waitLocale();
};