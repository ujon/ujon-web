import { cookies } from '$lib/utils/cookies.js';
import { COOKIE_THEME } from '$lib/constants/cookies.js';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	const theme = cookies.get(COOKIE_THEME);
	return {
		theme: theme
	};
}