<script lang="ts">
	import type { RootLayoutData } from './+layout.js';
	import '$styles/index.css';
	import Header from '$components/Header.svelte';
	import { waitLocale } from 'svelte-i18n';


	export async function preload() {
		return waitLocale();
	}
</script>


<Header />
<div class="container">
	<slot />
</div>

