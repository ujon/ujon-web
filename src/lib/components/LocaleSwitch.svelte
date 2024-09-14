<script lang="ts">
	import { _, locale, locales } from 'svelte-i18n';
	import Locale from '$icons/Locale.svelte';


	const handleLocale = (value: string) => locale.set(value);
</script>

<details class="locale-switch-container">
	<summary>
		<Locale class="icon hover:icon-primary" />
	</summary>
	<ul>
		{#each $locales as it}
			<li>
				<button
					class="btn btn-ghost btn-wide"
					on:click|preventDefault={()=>handleLocale(it)}
				>
					{$_(`locale.${it}`)}
				</button>
			</li>
		{/each}
	</ul>
</details>

<style>
    .locale-switch-container {
        position: relative;
        display: inline-block;
    }

    .locale-switch-container ul {
        list-style: none;
        position: absolute;
        inset-inline-end: 0;
        margin-top: 1rem;
        padding: 0.5rem;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
    }
</style>