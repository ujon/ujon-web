import i18n from 'sveltekit-i18n';
import lang from './lang.json';
import enLoaders from '$lib/translations/en/index.js';
import koLoaders from '$lib/translations/ko/index.js';

export const defaultLocale = 'en';

/** @type {import('sveltekit-i18n').Config} */
export const config = {
	translations: {
		en: { lang },
		ko: { lang }
	},
	loaders: [
		...enLoaders,
		...koLoaders
	]
};

export const {
	t,
	loading,
	locales,
	locale,
	loadTranslations,
	addTranslations,
	translations,
	setLocale,
	setRoute
} = new i18n(config);

// loading.subscribe(($loading) => $loading && console.log('Loading translations for the main instance...'));