import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/app-start", priority: 0.8 },
    { path: "/blog", priority: 0.7 },
    { path: "/parents", priority: 0.8 },
    { path: "/schools", priority: 0.8 },
    { path: "/pricing", priority: 0.9 },
    { path: "/impressum", priority: 0.2 },
    { path: "/datenschutz", priority: 0.2 },
  ];

  return routes.map((route) => ({
      url: `https://dayova.com${route.path}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: route.priority,
    }));
}
