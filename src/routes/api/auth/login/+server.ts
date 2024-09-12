import { json, type RequestEvent, type RequestHandler } from '@sveltejs/kit';

interface LoginPostRequest {
	username: string;
	password: string;
}

interface LoginPostResponse {
	data: string;
}

export const POST: RequestHandler = async ({ request }: RequestEvent) => {
	const { username, password }: LoginPostRequest = await request.json();
	const response: LoginPostResponse = {
		data: username + password
	};
	// return new Response(JSON.stringify({ data: username + password }));
	return json(response);
};