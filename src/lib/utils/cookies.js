import { browser } from '$app/environment';

/**
 * client side cookie util
 */
export const cookies = {
	/**
	 *
	 * @param name {string}
	 * @returns {null|string}
	 */
	get: function(name) {
		if (!browser) return null;
		const value = `; ${document.cookie}`;
		const parts = value.split(`; ${name}=`);
		if (parts.length === 2) return parts.pop().split(';').shift();
		return null;
	},

	/**
	 *
	 * @param name								{string}
	 * @param value								{string}
	 * @param [options={}]				{Object|undefined}
	 * @param [options.expires]		{number|DateConstructor|undefined}
	 * @param [options.path]			{string|undefined}
	 * @param [options.domain]		{string|undefined}
	 * @param [options.secure] 		{boolean|undefined}
	 * @param [options.sameSite]	{true|false|'lax'|'strict'|'none'|undefined}
	 */
	set: function(name, value, options) {
		if (!browser) return;
		let cookie = `${name}=${value || ''}`;


		if (options?.expires && typeof options.expires === 'number') {
			const date = new Date();
			date.setTime(date.getTime() + options.expires * 24 * 60 * 60);
			cookie += `; expires=${date.toUTCString()}`;
		}
		if (options?.expires && options.expires instanceof Date) {
			cookie += `; expires=${options.expires.toUTCString()}`;
		}

		if (options?.path) {
			cookie += `; path=${options.path}`;
		}
		if (options?.domain) {
			cookie += `; domain=${options.domain}`;
		}
		if (options?.secure) {
			cookie += `; secure`;
		}

		if (options?.sameSite) {
			cookie += `; samesite=${options.sameSite}`;
		}
		document.cookie = cookie;
	},

	delete: function(name) {
		if (!browser) return;
		document.cookie = `${name}=; Max-Age=0; path=/`;
	}
};