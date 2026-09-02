import { MetadataRoute } from "next";
import searchIndex from "../data/searchIndex.json";
import { htmlLessons } from "../data/htmlLessonsData";
import { cssLessons } from "../data/cssLessonsData";
import { cppLessons } from "../data/cppLessonsData";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nextsem.online";

  // Base paths
  const baseRoutes = [
    "",
    "/about",
    "/contact",
    "/playground",
    "/privacy",
    "/profile",
    "/terms",
    "/course",
    "/course/projects",
    "/cli",
    "/batch",
    "/batch/open-browser-tabs-script",
    "/html",
    "/css",
    "/git",
    "/cpp",
    "/full-stack-web-development-roadmap",
    "/matrix-code-animation",
    "/neon-button-animation",
    "/solar-system-animation",
    "/rain-effect-animation",
    "/warp-speed-animation",
    "/3d-cube-animation",
    "/candle-flame-animation",
    "/audio-spectrum-animation",
    "/animated-waves-animation",
    "/glassmorphism-card-animation",
    "/glitch-text-animation",
    "/holographic-card-animation",
    "/dna-helix-animation",
    "/liquid-wave-animation",
    "/black-hole-animation"
  ].map((route) => ({
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

  // Add HTML lessons
  const htmlLessonRoutes = htmlLessons.map((lesson) => ({
    url: `${baseUrl}/html/${lesson.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Add CSS lessons
  const cssLessonRoutes = cssLessons.map((lesson) => ({
    url: `${baseUrl}/css/${lesson.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Add C++ lessons
  const cppLessonRoutes = cppLessons.map((lesson) => ({
    url: `${baseUrl}/cpp/${lesson.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...baseRoutes, ...courseRoutes, ...htmlLessonRoutes, ...cssLessonRoutes, ...cppLessonRoutes];
}

