import { MetadataRoute } from "next";
import searchIndex from "../data/searchIndex.json";
import { htmlLessons } from "../data/htmlLessonsData";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nextsem.online";

  // Base paths
  const baseRoutes = ["", "/about", "/contact", "/playground", "/privacy", "/profile", "/terms", "/course", "/course/projects", "/cli", "/html"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic course chapter paths for other lessons (filter out HTML lessons)
  const courseRoutes = searchIndex
    .filter((chapter) => !chapter.id.startsWith("p1-"))
    .map((chapter) => ({
      url: `${baseUrl}/book/${chapter.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  // Add the other 99 HTML sub-lessons
  const htmlLessonRoutes = htmlLessons.slice(1).map((lesson) => ({
    url: `${baseUrl}/html/${lesson.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...baseRoutes, ...courseRoutes, ...htmlLessonRoutes];
}
