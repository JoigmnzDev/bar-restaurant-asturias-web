import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://barrestaurantasturias.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/legal", "/privacy", "/cookies"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
