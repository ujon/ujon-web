<script lang="ts">
	import { onMount } from 'svelte';

	let text1: HTMLElement;
	let text2: HTMLElement;

	const texts = [
		'If',
		'You',
		'Like',
		'It',
		'Please',
		'Give',
		'a Love',
		':)',
		'by @DotOnion'
	];

	const morphTime = 1;
	const cooldownTime = 0.25;

	let textIndex = texts.length - 1;
	let time = new Date();
	let morph = 0;
	let cooldown = cooldownTime;

	function doMorph() {
		morph -= cooldown;
		cooldown = 0;

		let fraction = morph / morphTime;

		if (fraction > 1) {
			cooldown = cooldownTime;
			fraction = 1;
		}

		setMorph(fraction);
	}

	function setMorph(fraction: number) {
		text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
		text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

		fraction = 1 - fraction;
		text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
		text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
		text1.textContent = texts[textIndex % texts.length];
		text2.textContent = texts[(textIndex + 1) % texts.length];
	}

	function doCooldown() {
		morph = 0;

		text2.style.filter = `null`;
		text2.style.opacity = '100%';

		text1.style.filter = `null`;
		text1.style.opacity = '0%';
	}

	function animate() {
		requestAnimationFrame(animate);

		let newTime = new Date();
		let shouldIncrementIndex = cooldown > 0;
		let dt = (newTime.getTime() - time.getTime()) / 1000;
		time = newTime;

		cooldown -= dt;

		if (cooldown <= 0) {
			if (shouldIncrementIndex) {
				textIndex++;
			}

			doMorph();
		} else {
			doCooldown();
		}
	}

	onMount(() => {
		// text1.textContent = texts[textIndex % texts.length];
		// text2.textContent = texts[(textIndex + 1) % texts.length];
		animate();
	});
</script>

<div style="position: relative; display: flex; justify-content: center;">
	<div id="container">
		<span bind:this={text1} id="text1" class="text-title-md"></span>
		<span bind:this={text2} id="text2" class="text-title-md"></span>
	</div>

	<svg id="filters">
		<defs>
			<filter id="threshold">
				<feColorMatrix
					in="SourceGraphic"
					type="matrix"
					values="1 0 0 0 0
										0 1 0 0 0
										0 0 1 0 0
										0 0 0 255 -140"
				/>
			</filter>
		</defs>
	</svg>
</div>

<style>
    #container {
        width: 100%;
        top: 0;
        left: 0;
        filter: url(#threshold) blur(0.6px);
    }

    #text1,
    #text2 {
        display: inline-flex;
				align-items: center;
        user-select: none;
    }
</style>
