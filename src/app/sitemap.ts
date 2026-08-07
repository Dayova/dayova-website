import type { MetadataRoute } from "next";

import { blogArticles } from "@/content/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/blog", priority: 0.7 },
    { path: "/parents", priority: 0.8 },
    { path: "/schools", priority: 0.8 },
    { path: "/pricing", priority: 0.9 },
    { path: "/impressum", priority: 0.2 },
    { path: "/datenschutz", priority: 0.2 },
  ];

  return [
    ...routes.map((route) => ({
      url: `https://dayova.com${route.path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route.priority,
    })),
    ...blogArticles.map((article) => ({
      url: `https://dayova.com/blog/${article.slug}`,
      lastModified: new Date("2026-08-06"),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
  ];
}
