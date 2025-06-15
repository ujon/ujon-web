<script>
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { navigation } from '$lib/constants/common.js';


	let visible = true;
	let previousY = 0;
	const sensitive = 10;

	onMount(() => {
		const handleScroll = () => {
			const currentY = window.scrollY;
			// Show header at top of page
			if (currentY <= 0) {
				visible = true;
				previousY = currentY;
				return;
			}
			// Only trigger hide/show if scroll distance exceeds sensitive
			if (Math.abs(currentY - previousY) < sensitive) {
				return;
			}
			// Hide header when scrolling down, show when scrolling up
			visible = !(currentY > previousY && currentY > 100);

			previousY = currentY;
		};

		// Add scroll event listener with throttling
		let ticking = false;
		const throttledScroll = () => {
			if (!ticking) {
				requestAnimationFrame(() => {
					handleScroll();
					ticking = false;
				});
				ticking = true;
			}
		};
		window.addEventListener('scroll', throttledScroll);
		// Cleanup
		return () => {
			window.removeEventListener('scroll', throttledScroll);
		};
	});
</script>

<header class="header-h padding-x" class:visible={visible}>
	<div>
		<div class="text-headline-3 logo">
			<a href="/">UJON</a>
		</div>
		<nav>
			{#each navigation as it}
				<a
					href={it.path}
					class="text-caption"
					class:active={it.path === "/" ? page.url.pathname === it.path : page.url.pathname.startsWith(it.path)}
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
        backdrop-filter: blur(1.75rem);

        transform: translateY(-100%);
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

        &.visible {
            transform: translateY(0);
        }

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