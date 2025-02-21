import { locales, loadTranslations, translations, defaultLocale } from '$lib/translations';
import { COOKIE_LOCALE } from '$lib/constants/cookies.js';

/** @type {import('./$types').LayoutServerLoad} */
export const load = async ({ url, cookies, request }) => {
	const { pathname } = url;

	let locale = (cookies.get(COOKIE_LOCALE) || '').toLowerCase()
		?? `${`${request.headers.get('accept-language')}`.match(/[a-zA-Z]+?(?=[-_,;])/)}`.toLowerCase();

	const supportedLocales = locales.get().map((it) => it.toLowerCase());
	if (!supportedLocales.includes(locale)) {
		locale = defaultLocale;
	}
	await loadTranslations(locale, pathname);
	return {
		i18n: { locale, route: pathname },
		translations: translations.get()
	};
};