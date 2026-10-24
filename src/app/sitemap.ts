import { MetadataRoute } from "next";
import { htmlLessons } from "../data/htmlLessonsData";
import { cssLessons } from "../data/cssLessonsData";
import { jsLessons } from "../data/jsLessonsData";
import { reactLessons } from "../data/reactLessonsData";
import { nodeLessons } from "../data/nodeLessonsData";
import { cliLessons } from "../data/cliLessonsData";
import { gitLessons } from "../data/gitLessonsData";
import { cppLessons } from "../data/cppLessonsData";
import { PRACTICAL_LESSONS } from "../data/bcaPracticalData";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nextsem.online";

  // Core base paths (Excluding internal/admin disallowed in robots.ts)
  const baseRoutes = [
    "",
    "/school",
    "/bca",
    "/bca/practical",
    "/bca/practical/how-it-works",
    "/playground",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/disclaimer",
    "/full-stack-web-development-roadmap",
    "/course",
    "/course/projects",
    "/html",
    "/html/quiz",
    "/css",
    "/js",
    "/react",
    "/nodejs",
    "/cli",
    "/cli/fast-track",
    "/terminal-fast-track",
    "/cli/quiz",
    "/cli/most-useful-cmd-commands-in-windows",
    "/cli/essential-cmd-commands",
    "/git",
    "/batch",
    "/batch/open-browser-tabs-script",
    "/jobs",
    "/cpp",
    "/c",
    "/sitemap",
  ].map((route) => {
    let priority = 0.8;
    if (route === "") priority = 1.0;
    else if (["/school", "/bca", "/bca/practical", "/playground"].includes(route)) priority = 0.95;
    else if (["/html", "/css", "/js", "/react", "/nodejs", "/cli", "/git"].includes(route)) priority = 0.9;

    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: (route === "" || route === "/school" || route === "/bca") ? ("daily" as const) : ("weekly" as const),
      priority,
    };
  });

  // Dynamic HTML lesson paths (98+ HTML Lessons)
  const htmlLessonRoutes = htmlLessons.map((lesson) => ({
    url: `${baseUrl}/html/${lesson.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Dynamic CSS lesson paths (12+ CSS Lessons)
  const cssLessonRoutes = cssLessons.map((lesson) => ({
    url: `${baseUrl}/css/${lesson.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Dynamic JS lesson paths (12+ JS Lessons)
  const jsLessonRoutes = jsLessons.map((lesson) => ({
    url: `${baseUrl}/js/${lesson.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Dynamic React lesson paths (12+ React Lessons)
  const reactLessonRoutes = reactLessons.map((lesson) => ({
    url: `${baseUrl}/react/${lesson.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Dynamic Node.js lesson paths (12+ Node Lessons)
  const nodeLessonRoutes = nodeLessons.map((lesson) => ({
    url: `${baseUrl}/nodejs/${lesson.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Dynamic CLI lesson paths (101+ Windows CLI Lessons)
  const cliLessonRoutes = cliLessons.map((lesson) => ({
    url: `${baseUrl}/cli/${lesson.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Dynamic Git lesson paths (15+ Git Lessons)
  const gitLessonRoutes = gitLessons.map((lesson) => ({
    url: `${baseUrl}/git/${lesson.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Dynamic C++ lesson paths (Preserved for search engine crawling)
  const cppLessonRoutes = cppLessons.map((lesson) => ({
    url: `${baseUrl}/cpp/${lesson.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Dynamic BCA Practical lesson paths (50+ Hands-On Lab Days)
  const bcaPracticalLessonRoutes = PRACTICAL_LESSONS.map((lesson) => ({
    url: `${baseUrl}/bca/practical/${lesson.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [
    ...baseRoutes,
    ...htmlLessonRoutes,
    ...cssLessonRoutes,
    ...jsLessonRoutes,
    ...reactLessonRoutes,
    ...nodeLessonRoutes,
    ...cliLessonRoutes,
    ...gitLessonRoutes,
    ...cppLessonRoutes,
    ...bcaPracticalLessonRoutes,
  ];
}
