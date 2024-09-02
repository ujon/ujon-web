import { init, register, getLocaleFromNavigator } from 'svelte-i18n';

const defaultLocale = 'en';
export const availableLocales = [
	'en',
	'ko'
] as const;

register('en', () => import('./messages/en.json'));
register('ko', () => import('./messages/ko.json'));

init({
	fallbackLocale: defaultLocale,
	// initialLocale: browser ? window.navigator.language : defaultLocale
	initialLocale: getLocaleFromNavigator()
});

