<script lang="ts">
	import SlideUpAnimation from '$components/SlideUpAnimation.svelte';
	import profile from '$lib/icons/profile.jpg';
</script>

<section class="hero">
	<div class="hero-body">
		<div class="hero-content">
			<p class="text-title-md">5+ years</p>
			<p class="color-text-sub">work experience</p>
		</div>
		<div class="profile">
			<img alt="" src={profile} />
		</div>
		<SlideUpAnimation words={["Backend", "Frontend", "Infrastructure"]} />
	</div>
</section>


<style>
    .hero {
        min-height: var(--main-height);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: var(--base-size-20);

        & > .hero-body {
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: center;
            gap: var(--base-size-96);

            & > .hero-content {
                display: flex;
                flex-direction: column;
                gap: var(--base-size-12);
            }
        }
    }

    .profile {
        width: 18.75rem;
        height: 25rem;
        overflow: hidden;
        border-radius: 50% / 25%;
        display: inline-block;

        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    @media (max-width: 1023px) {
        .hero > .hero-body {
            flex-direction: column;
            gap: var(--base-size-56);
        }

        .hero-content {
            text-align: center;
        }

        .profile {
            width: 12.5rem;
            height: 18.75rem;
            order: -1;
        }
    }
</style>
