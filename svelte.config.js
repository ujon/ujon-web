import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			'$lib': 'src/lib',
			'$lib/*': 'src/lib/*',
			'$styles': 'src/styles',
			'$styles/*': 'src/styles/*',
			'$components': 'src/lib/components',
			'$components/*': 'src/lib/components/*',
			'$stores': 'src/lib/stores',
			'$stores/*': 'src/lib/stores/*',
			'$icons': 'src/lib/icons',
			'$icons/*': 'src/lib/icons/*'
		}
	}
};

export default config;
