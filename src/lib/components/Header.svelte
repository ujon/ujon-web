<script>
	import { page } from '$app/stores';
	import Contact from '$components/Contact.svelte';
	import Logo from '$icons/Logo.svelte';
	import Menu from '$icons/Menu.svelte';

	/**
	 * Represents a navigation menu with a collection of menu items.
	 * Each menu item has a name and a corresponding path.
	 * @typedef {Object} Navigation
	 * @property {string} name - The name of the menu item.
	 * @property {string} path - The path associated with the menu item.
	 */
	const navigation = [
		{ name: 'Home', path: '/' },
		{ name: 'Blog', path: '/blog' },
		{ name: 'About', path: '/about' },
		{ name: 'Setting', path: '/setting' }
	];
	let isMenuOpen = false;

	const closeMenu = () => isMenuOpen = false;

	$: pathname = $page.url.pathname;
</script>

<svelte:window on:wheel|nonpassive={(e) => {
	if(isMenuOpen) e.preventDefault();
}} />

<header>
	<a href="/" class="">
		<Logo class="icon" />
	</a>
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
					class="text-display-sm"
					on:click={closeMenu}
				>
					{it.name}
				</a>
			{/each}
		</nav>
		<Contact />
	</div>
</header>

<style>
    header {
        position: sticky;
        height: var(--header-height);
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: .75rem var(--base-padding-md);
        top: 0;
        z-index: 20;
        transform: translateZ(0);
        transition-duration: .1s;
        transition-property: box-shadow;
        transition-timing-function: cubic-bezier(.4, 0, .2, 1);
        backdrop-filter: blur(var(--base-blur));
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
    }


    @media (max-width: 1279px) {
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