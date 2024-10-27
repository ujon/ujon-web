import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			'$styles': 'src/styles',
			'$styles/*': 'src/styles/*',
			'$assets': 'src/assets',
			'$assets/*': 'src/assets/*'
		}
	}
};

export default config;
