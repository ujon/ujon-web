<script lang="ts">
	import SlideUpAnimation from '$components/SlideUpAnimation.svelte';
	import profile from '$lib/images/profile.jpg';
	import ftdot from '$lib/images/42dot.jpg';
	import maumai from '$lib/images/maumai.jpg';
	import CompanyCard from '$components/cards/CompanyCard.svelte';
	import Kotlin from '$icons/techs/Kotlin.svelte';
	import Java from '$icons/techs/Java.svelte';
	import Javascript from '$icons/techs/Javascript.svelte';
	import Typescript from '$icons/techs/Typescript.svelte';
	import Spring from '$icons/techs/Spring.svelte';
	import TechTag from '$components/TechTag.svelte';

	const Lorem = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
	const tech_stack = [
		{ name: 'Kotlin', icon: Kotlin },
		{ name: 'Java', icon: Java },
		{ name: 'Javascript', icon: Javascript },
		{ name: 'Typescript', icon: Typescript },
		{ name: 'Spring Boot', icon: Spring },
		{ name: 'Spring Batch', icon: Spring }
	];
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
<section class="intro">
	<h1 class="text-display-md">Jongho Yoo</h1>
	<p>{Lorem}</p>
</section>
<section class="content presentation">
	<h2 class="text-title-lg">WORK EXPERIENCE</h2>
	<div class="content-body">
		<CompanyCard
			company="42dot"
			jobPosition="Backend Engineer"
			description={Lorem}
			startDate={new Date(2022,2,2)}
			endDate={new Date(2024,7,1)}
			image={ftdot}
		/>
		<hr />
		<CompanyCard
			company="Maum AI"
			jobPosition="Full Stack Engineer"
			description={Lorem}
			startDate={new Date(2019,7,1)}
			endDate={new Date(2020,9,1)}
			image={maumai}
		/>
	</div>
</section>
<section class="content presentation skill">
	<h2 class="text-title-lg">MY SKILLS</h2>
	<div class="content-body ">
		{#each tech_stack as it}
			<TechTag name={it.name}>
				<svelte:component this={it.icon} />
			</TechTag>
		{/each}
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

    .intro {
        text-align: center;

        & p {
            margin-top: var(--base-size-40);
            white-space: pre-line;
        }
    }

    .skill .content-body {
        display: flex;
        flex-wrap: wrap;
        gap: var(--base-size-8) var(--base-size-16);
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
