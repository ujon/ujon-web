<script>
	import { page } from '$app/stores';
	import Menu from '$icons/Menu.svelte';

	/**
	 * Represents a navigation menu with a collection of menu items.
	 * Each menu item has a name and a corresponding path.
	 * @typedef {Object} Navigation
	 * @property {string} name - The name of the menu item.
	 * @property {string} path - The path associated with the menu item.
	 */
	const navigation = [
		{ name: 'About', path: '/about' },
		{ name: 'Contact', path: '/contact' }
	];
	let isMenuOpen = false;

	const closeMenu = () => isMenuOpen = false;

	$: pathname = $page.url.pathname;
</script>

<svelte:window on:wheel|nonpassive={(e) => {
	if(isMenuOpen) e.preventDefault();
}} />

<header>
	<div class="container">
		<a href="/" class="color-icon">Jongho Yoo</a>
		<input type="checkbox" bind:checked={isMenuOpen} id="menu-toggle">
		<label for="menu-toggle" class="btn-menu">
			<Menu class="icon" />
		</label>
		<div class="menu">
			<nav>
				{#each navigation as it}
					<a
						href={it.path}
						class:active={it.path==='/' ? pathname === it.path : pathname.startsWith(it.path)}
						on:click={closeMenu}
					>
						{it.name}
					</a>
				{/each}
			</nav>
		</div>
	</div>
</header>

<style>
    header {
        position: sticky;
        height: var(--header-height);
        width: 100%;
        top: 0;
        z-index: 20;
        transform: translateZ(0);
        transition-duration: .1s;
        transition-property: box-shadow;
        transition-timing-function: cubic-bezier(.4, 0, .2, 1);
        backdrop-filter: blur(var(--base-blur));
    }

    header > .container {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: space-between;
    }

    #menu-toggle {
        appearance: none;
    }

    .btn-menu {
        display: none;
    }

    .menu {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    nav {
        flex: 1;
        display: flex;
        justify-content: end;
    }

    nav a {
        display: inline-flex;
        align-items: center;
        text-align: center;
        height: var(--base-size-32);
        padding: 0 var(--base-padding-sm);
        user-select: none;
        cursor: pointer;
        color: var(--color-text);

        &:hover {
            color: var(--color-primary);
        }

        &.active {
            font-weight: bold;
        }

        &:last-child {
            padding-right: 0;
        }
    }


    @media (max-width: 1023px) {
        .btn-menu {
            display: block;
        }

        #menu-toggle:checked ~ .menu {
            transform: scaleY(1);
        }

        .menu {
            transform: scaleY(0);
            position: absolute;
            display: flex;
            flex-direction: column;
            top: var(--header-height);
            right: 0;
            left: 0;
            bottom: 0;
            width: 100%;
            height: var(--main-height);
            transform-origin: bottom;
            transition-duration: 1s;
            background-color: var(--color-bg);
        }

        nav {
            flex: 1;
            flex-direction: column;
            align-items: center;
            justify-content: center;

        }
    }
</style>