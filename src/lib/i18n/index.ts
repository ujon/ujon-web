import { init, register, getLocaleFromNavigator } from 'svelte-i18n';

const defaultLocale: Locale = 'en';
export const availableLocales = [
	'en',
	'ko'
] as const;
export type Locale = typeof availableLocales[number];

register('en', () => import('./messages/en.json'));
register('ko', () => import('./messages/ko.json'));

init({
	fallbackLocale: defaultLocale,
	initialLocale: getLocaleFromNavigator()
});

