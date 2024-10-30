<script>
	import '$styles/index.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>ujon</title>
</svelte:head>

<Header />
<main>
	<slot />
</main>
<Footer />