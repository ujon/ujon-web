<script lang="ts">


	let username = '';
	let password = '';

	const handleSubmit = async () => {
		const response = await fetch('/api/auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ username, password })
		});
		const body = await response.text();
		console.log(body);
	};
</script>

<form on:submit|preventDefault={handleSubmit}>
	<input type="text" bind:value={username} placeholder="Username" />
	<input type="password" bind:value={password} placeholder="Password" />
	<button type="submit">Login</button>
</form>