<script lang="ts">
	import TextShapeShiftAnimation from '$components/TextShapeShiftAnimation.svelte';
</script>

<section class="hero">
	<div class="hero-body">
		<div class="hero-content">
			<p class="text-title-md">5+ years</p>
			<p class="color-text-sub">work experience</p>
		</div>
		<TextShapeShiftAnimation />
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


    .text-container {
        overflow: hidden;
        position: relative;
    }

    .text-container span {
        display: block;
        width: 100%;
        opacity: 0;
        transform: translateY(100%);
        animation: moveUp 3s ease-in-out infinite;
    }

    @keyframes moveUp {
        0% {
            opacity: 0;
            transform: translateY(100%);
        }
        10% {
            opacity: 1;
            transform: translateY(0);
        }
        40% {
            opacity: 1;
            transform: translateY(0);
        }
        50% {
            opacity: 0;
            transform: translateY(-100%);
        }
        100% {
            opacity: 0;
            transform: translateY(-100%);
        }
    }

    .text-container span:nth-child(1) {
        animation-delay: 0s;
    }

    .text-container span:nth-child(2) {
        animation-delay: 1s;
    }

    .text-container span:nth-child(3) {
        animation-delay: 2s;
    }
</style>
