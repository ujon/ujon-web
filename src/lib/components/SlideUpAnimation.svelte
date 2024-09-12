<script lang="ts">
	export let words: string[] = [];
	export let duration: number = 5;

	let longestWord = words.reduce((a, b) => a.length > b.length ? a : b, '');

	let wordDuration = duration / words.length;
</script>

<div class="slide-up-container">
	{#each words as word, index}
    <span
			class="word text-title-md"
			style="animation-duration: {duration}s; animation-delay: {wordDuration * index}s;"
		>
      {word}
    </span>
	{/each}
	<span class="placeholder text-title-md">{longestWord}</span>
</div>

<style>
    .slide-up-container {
        position: relative;
        display: flex;
        align-items: center;
    }

    .word {
        position: absolute;
        display: inline-flex;
        opacity: 0;
        animation-name: slideUp;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
    }

    .placeholder {
        visibility: hidden;
    }

    @keyframes slideUp {
        0%, 25% {
            opacity: 0;
            transform: translateY(100%);
        }
        50% {
            opacity: 1;
            transform: translateY(0);
        }
        75%, 100% {
            opacity: 0;
            transform: translateY(-100%);
        }
    }

    @keyframes slideLeft {
        0%, 25% {
            opacity: 0;
            transform: translateX(100%);
        }
        50% {
            opacity: 1;
            transform: translateY(0);
        }
        75%, 100% {
            opacity: 0;
            transform: translateX(-100%);
        }
    }

    @media (max-width: 1023px) {
        .slide-up-container {
            text-align: center;
            justify-content: center;
        }

        .word {
            animation-name: slideLeft;
        }
    }
</style>