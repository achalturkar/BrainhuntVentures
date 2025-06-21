



export async function GET() {
  const baseUrl = "https://brainhuntventures.com";

  const pages = [
    { path: "/", priority: "1.0", changefreq: "daily" },
        { path: "/contact", priority: "0.9", changefreq: "monthly" },
    { path: "/about", priority: "0.9", changefreq: "daily" },
    { path: "/careers", priority: "0.9", changefreq: "weekly" },
    { path: "/payrollmanagement", priority: "0.8", changefreq: "weekly" },
    { path: "/statutorycompliances", priority: "0.7", changefreq: "monthly" },
    { path: "/hroutsourcing", priority: "0.7", changefreq: "monthly" },
    { path: "/recruitmentandexecutivesearch", priority: "0.7", changefreq: "monthly" },
    { path: "/services/flexistaffing", priority: "0.6", changefreq: "monthly" },
    { path: "/services/hrconsulting", priority: "0.6", changefreq: "monthly" },
    { path: "/services/businessestablishmentandlicensing", priority: "0.6", changefreq: "monthly" },
    { path: "/services/learninganddevelopment", priority: "0.6", changefreq: "monthly" },
    { path: "/services/careerassessmentandcounselling", priority: "0.6", changefreq: "monthly" },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map(
        ({ path, priority, changefreq }) => `
      <url>
        <loc>${baseUrl}${path}</loc>
        <changefreq>${changefreq}</changefreq>
        <priority>${priority}</priority>
      </url>`
      )
      .join("")}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
