<script>
	import { themes } from '$lib/constants/common.js';
	import { cookies } from '$lib/utils/cookies.js';
	import { COOKIE_THEME } from '$lib/constants/cookies.js';

	let theme = $state(cookies.get(COOKIE_THEME) || 'system');

	/**
	 * @param value {string}
	 */
	const handleTheme = (value) => {
		theme = value;
		cookies.set(COOKIE_THEME, value, {
			expires: 365
		});
		document.documentElement.setAttribute('data-theme', value);
	};
</script>

<div class="container switch">
	{#each themes as it}
		<button
			onclick={()=>handleTheme(it)}
			class:active={theme === it}
		>
			{it}
		</button>
	{/each}
</div>

<style>
    .container {
        width: 20rem;
        height: 3rem;
    }
</style>