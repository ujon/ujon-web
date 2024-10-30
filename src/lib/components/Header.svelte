<script>
	import { page } from '$app/stores';
	import { navigation } from '$lib/constants/common.js';
</script>

<header class="header-h padding-x bg-color-0">
	<div>
		<div class="text-headline-3 logo">
			<a href="/">UJON</a>
		</div>
		<nav>
			{#each navigation as it}
				<a
					href={it.path}
					class="text-caption"
					class:active={it.path === "/" ? $page.url.pathname === it.path : $page.url.pathname.startsWith(it.path)}
					aria-label={it.name}
				>
					{it.name}
				</a>
			{/each}
		</nav>
	</div>
</header>

<style>
    header {
        position: sticky;
        top: 0;
        z-index: 1;

        & > div {
            display: flex;
            align-items: center;
            width: 100%;
            height: 100%;

            .logo {
                flex: 1 1 0;
            }

            & > nav {
                display: flex;
                gap: 2rem;

                & > .active {
                    font-weight: bold;
                }
            }
        }
    }
</style>