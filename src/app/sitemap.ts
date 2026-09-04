import type { MetadataRoute } from "next";

import { blogArticles } from "@/content/blog";
import { defaultOgImage, siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUpdatedAt = new Date("2026-08-17T14:00:00+02:00");
  const newestArticleDate = new Date(
    blogArticles[0]?.publishedAtISO ?? "2026-08-10T00:00:00+02:00",
  );
  const routes = [
    {
      path: "",
      priority: 1,
      changeFrequency: "weekly" as const,
      images: [`${siteUrl}/images/dayova-hero-app-light.png`],
    },
    {
      path: "/blog",
      priority: 0.8,
      changeFrequency: "weekly" as const,
      images: [`${siteUrl}/images/dayova-bluebox-light.png`],
    },
    {
      path: "/parents",
      priority: 0.8,
      changeFrequency: "monthly" as const,
      images: [`${siteUrl}/images/dayova-hero-app-light.png`],
    },
    {
      path: "/schools",
      priority: 0.8,
      changeFrequency: "monthly" as const,
      images: [
        `${siteUrl}/images/schools/teacher-dashboard-macbook-transparent-light.png`,
      ],
    },
    {
      path: "/pricing",
      priority: 0.9,
      changeFrequency: "monthly" as const,
      images: [`${siteUrl}/images/dayova-bluebox-light.png`],
    },
    {
      path: "/about",
      priority: 0.8,
      changeFrequency: "monthly" as const,
      images: [`${siteUrl}/images/dayova-about-app-light.png`],
    },
    {
      path: "/support",
      priority: 0.6,
      changeFrequency: "monthly" as const,
      images: [] as string[],
    },
  ];

  return [
    ...routes.map((route) => ({
      url: `${siteUrl}${route.path}`,
      lastModified: route.path === "/blog" ? newestArticleDate : siteUpdatedAt,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      images: route.images,
    })),
    ...blogArticles.map((article) => ({
      url: `${siteUrl}/blog/${article.slug}`,
      lastModified: new Date(article.publishedAtISO),
      changeFrequency: "monthly" as const,
      priority: 0.65,
      images: [`${siteUrl}${defaultOgImage.url}`],
    })),
  ];
}
