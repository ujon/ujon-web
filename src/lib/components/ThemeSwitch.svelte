<script lang="ts">
	import { capitalize } from '$lib/utils/format';
	import Theme from '$icons/Theme.svelte';

	const themes: string[] = ['system', 'light', 'dark'];

	const handleTheme = (theme: string) => {
		const one_year = 60 * 60 * 24 * 365;
		document.cookie = `theme=${theme}; max-age=${one_year};`;
		document.documentElement.setAttribute('data-theme', theme);
		const metaColorScheme = document.querySelector('meta[name="color-scheme"]');
		metaColorScheme?.setAttribute('content', theme === 'system' ? 'light dark' : theme);
	};

	const handleToggle = (event: Event & { currentTarget: EventTarget & HTMLDetailsElement }) => {
		const isOpen = event.currentTarget?.open;
		if (isOpen) {
			const details = document.querySelectorAll('header details');
			details?.forEach((detail) => {
				if (detail !== event.currentTarget) {
					detail.removeAttribute('open');
				}
			});
		}
	};
</script>

<details class="theme-switch-container" on:toggle={handleToggle}>
	<summary>
		<Theme class="icon hover:icon-primary"/>
	</summary>
	<ul>
		{#each themes as it}
			<li>
				<button
					class="btn btn-ghost btn-wide"
					on:click|preventDefault={()=>handleTheme(it)}
				>
					{capitalize(it)}
				</button>
			</li>
		{/each}
	</ul>
</details>

<style>
    .theme-switch-container {
        position: relative;
        display: inline-block;
    }

    .theme-switch-container ul {
        list-style: none;
        position: absolute;
        inset-inline-end: 0;
        margin-top: 1rem;
        padding: 0.5rem;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
    }
</style>