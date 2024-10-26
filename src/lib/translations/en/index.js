const LOCALE = 'en'

/** @type {import('sveltekit-i18n').Loader[]} */
const loaders = [
	{
		locale: LOCALE,
		key: 'common',
		loader: async () => (await import('./common.json')).default
	},
	{
		locale: LOCALE,
		key: 'home',
		routes: ['/'],
		loader: async () => (await import('./home.json')).default
	},
	{
		locale: LOCALE,
		key: 'contact',
		routes: ['/contact'],
		loader: async () => (await import('./contact.json')).default
	}
];

export default loaders;