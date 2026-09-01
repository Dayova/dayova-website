import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/teachers", "/api/"],
    },
    sitemap: "https://dayova.com/sitemap.xml",
    host: "https://dayova.com",
  };
}
