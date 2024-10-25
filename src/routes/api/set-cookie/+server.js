import { json } from '@sveltejs/kit';

export const POST = async ({ request, cookies }) => {
	const { name, value, maxAge } = await request.json();

	const a = Date.now();
	// Set the cookie
	cookies.set(name, value + a.toString(), {
		path: '/',  // Path where the cookie is available
		httpOnly: false,  // Make it accessible to client-side JavaScript if needed
		maxAge  // Max age of the cookie in seconds
	});
	console.log(cookies.getAll());
	// console.log(cookies.get(name));
	return json({ message: 'Cookie set' });
};