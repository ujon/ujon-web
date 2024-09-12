<script>
	import '$styles/index.css';
	import { theme } from '$stores/theme';
	import { waitLocale } from 'svelte-i18n';
	import Header from '$components/Header.svelte';
	import Footer from '$components/Footer.svelte';

	export async function preload() {
		return waitLocale();
	}
</script>

<svelte:head>
	<meta name="color-scheme" content={$theme === 'system' ? 'light dark' :$theme} />
	<!--	<link rel="stylesheet" href={`/theme/${$theme}.css`} />-->
</svelte:head>

<Header />
<div class="container">
	<slot />
</div>

