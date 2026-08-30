import { MetadataRoute } from "next";
import searchIndex from "../data/searchIndex.json";
import { htmlLessons } from "../data/htmlLessonsData";
import { cppLessons } from "../data/cppLessonsData";
import { cliLessons } from "../data/cliLessonsData";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nextsem.online";

  // Core base paths (Excluding sandbox/tools disallowed in robots.ts)
  const baseRoutes = [
    "",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/disclaimer",
    "/curriculum",
    "/guide",
    "/course",
    "/course/projects",
    "/cli",
    "/cli/fast-track",
    "/terminal-fast-track",
    "/cli/quiz",
    "/cli/most-useful-cmd-commands-in-windows",
    "/cli/essential-cmd-commands",
    "/html",
    "/html/quiz",
    "/cpp",
    "/c",
    "/git",
    "/batch",
    "/batch/open-browser-tabs-script",
    "/jobs",
    "/full-stack-web-development-roadmap",
    "/sitemap",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic CLI lesson paths (All 30+ Windows CLI Lessons)
  const cliLessonRoutes = cliLessons.map((lesson) => ({
    url: `${baseUrl}/cli/${lesson.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Dynamic HTML lesson paths (All 30+ HTML Lessons)
  const htmlLessonRoutes = htmlLessons.map((lesson) => ({
    url: `${baseUrl}/html/${lesson.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Dynamic C++ lesson paths (All C++ Lessons)
  const cppLessonRoutes = cppLessons.map((lesson) => ({
    url: `${baseUrl}/cpp/${lesson.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...baseRoutes, ...cliLessonRoutes, ...htmlLessonRoutes, ...cppLessonRoutes];
}
