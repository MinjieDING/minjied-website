const pages = ['', '/project-courier-survey-summary'];

const site = 'https://www.minjied.com';

export function GET() {
	const urls = pages
		.map((path) => {
			const href = new URL(path || '/', site).toString();
			return `<url><loc>${href}</loc></url>`;
		})
		.join('');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
		},
	});
}