<script lang="ts">
	import SlideUpAnimation from '$components/SlideUpAnimation.svelte';
	import profile from '$lib/icons/profile.jpg';
</script>

<section class="hero">
	<div class="hero-body">
		<div class="hero-content hero-content-width">
			<p class="text-title-md">5+ years</p>
			<p class="color-text-sub">work experience</p>
		</div>
		<div class="profile">
			<img alt="" src={profile} />
		</div>
		<SlideUpAnimation
			class="hero-content-width"
			words={["Backend", "Frontend", "Infrastructure"]}
		/>
	</div>
</section>
<section style="text-align: center;">
	<h1 class="text-display-md">Jongho Yoo</h1>
	<p style="margin-top: 2rem; white-space: pre-line;"></p>
</section>
<section class="content">
	<h1>Work Experience</h1>
	<div>
		<h2>42dot</h2>
		<hr />
		<h2>MaumAI</h2>
	</div>
</section>


<style>
    .hero {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: var(--base-size-128);

        & .hero-body {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: var(--base-size-96);

            & > .hero-content {
                display: flex;
                flex-direction: column;
                gap: var(--base-size-12);
            }

            & > .hero-content-width {
                /**
                 * @description This function helps to align the profile image at the center.
                 * Without this, varying content widths could cause the image to shift away from the center.
                 */
                width: 10rem;
            }
        }

        & .profile {
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
    }


    section {
        padding-top: var(--base-size-48);
        padding-bottom: var(--base-size-48);
    }

    @media (max-width: 1023px) {
        .hero-body {
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
