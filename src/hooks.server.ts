import type { Handle } from '@sveltejs/kit';
import { locale } from 'svelte-i18n';

export const handle: Handle = async ({ event, resolve }) => {
	// locale
	locale.set(event.request.headers.get('accept-language')?.split(',')[0]);
	// theme
	const theme = event.cookies.get('theme') || 'system';
	const colorScheme = theme === 'system' ? 'light dark' : theme;

	return resolve(event, {
		transformPageChunk: ({ html }) => {
			return html
				.replace('%ujon.theme%', theme)
				.replace('%ujon.color-scheme%', colorScheme);
		}
	});
};