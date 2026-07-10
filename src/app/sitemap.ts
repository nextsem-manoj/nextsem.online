import { MetadataRoute } from "next";
import searchIndex from "../data/searchIndex.json";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nextsem.online";

  // Base paths
  const baseRoutes = ["", "/about", "/contact", "/playground", "/privacy", "/profile", "/terms", "/course", "/course/projects", "/cmd"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic course chapter paths for all 44 lessons
  const courseRoutes = searchIndex.map((chapter) => ({
    url: `${baseUrl}/book/${chapter.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...baseRoutes, ...courseRoutes];
}
