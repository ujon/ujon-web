export async function handle({ event, resolve }) {
	const theme = event.cookies.get('theme') || 'system';

	return  await resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%theme%', theme),
	});
}