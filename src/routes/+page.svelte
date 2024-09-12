<script lang="ts">
	import ArrowDown from '$icons/ArrowDown.svelte';
	import Kotlin from '$icons/techs/Kotlin.svelte';
	import Java from '$icons/techs/Java.svelte';
	import Javascript from '$icons/techs/Javascript.svelte';
	import Typescript from '$icons/techs/Typescript.svelte';
	import Spring from '$icons/techs/Spring.svelte';

	const hero_title = 'JONGHO YOO\nBACKEND ENGINEER\nBASED IN CANADA';
	const hero_subtitle = 'I am backend engineer but I do frontend as well.\nSimple is best.';

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
	<div class="content presentation hero-content">
		<h1 class="text-display-md">{hero_title}</h1>
		<p class="content-body text-body-lg color-text-sub ">{hero_subtitle}</p>
	</div>
	<!--	<ArrowDown class="anim-bounce" size="2.5rem" color="var(&#45;&#45;color-icon)" />-->
</section>

<style>
    .hero {
        min-height: var(--main-height);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: var(--base-size-20);
    }

    .hero .hero-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }

    section {
        padding-top: var(--base-size-48);
        padding-bottom: var(--base-size-48);
    }

</style>