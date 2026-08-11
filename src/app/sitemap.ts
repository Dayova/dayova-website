import type { MetadataRoute } from "next";

import { blogArticles } from "@/content/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUpdatedAt = new Date("2026-08-11T00:00:00+02:00");
  const newestArticleDate = new Date(
    blogArticles[0]?.publishedAtISO ?? "2026-08-10T00:00:00+02:00",
  );
  const routes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/parents", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/schools", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/pricing", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/ueber-uns", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  return [
    ...routes.map((route) => ({
      url: `https://dayova.com${route.path}`,
      lastModified: route.path === "/blog" ? newestArticleDate : siteUpdatedAt,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...blogArticles.map((article) => ({
      url: `https://dayova.com/blog/${article.slug}`,
      lastModified: new Date(article.publishedAtISO),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
  ];
}
