// app/robots.txt/route.js

export async function GET() {
  const body = `
User-agent: *
Disallow:

Sitemap: https://brainhuntventures.com/sitemap.xml
  `.trim();

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
