<script lang="ts">
	import TextShapeShiftAnimation from '$components/SlideUpAnimation.svelte';
</script>

<section class="hero">
	<div class="hero-body">
		<div class="hero-content">
			<p class="text-title-md">5+ years</p>
			<p class="color-text-sub">work experience</p>
		</div>
		<h1 class="text-title-md">test</h1>
		<TextShapeShiftAnimation words={["Backend", "Frontend", "Infrastructure"]} />
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
</style>
