import { htmlLessons } from "../data/htmlLessonsData";
import { cssLessons } from "../data/cssLessonsData";
import { cliLessons } from "../data/cliLessonsData";

export function getChapterIdFromPath(pathname: string): string {
  if (!pathname) return "";
  if (pathname === "/html") {
    return "p1-1-intro-and-text";
  }
  if (pathname === "/css") {
    return "p2-1-selectors";
  }
  if (pathname === "/cli") {
    return "p0-2-terminal";
  }
  if (pathname.startsWith("/html/")) {
    const slug = pathname.split("/html/")[1]?.split("?")[0];
    const lesson = htmlLessons.find((l) => l.slug === slug);
    if (lesson) {
      if (lesson.id <= 10) return "p1-1-intro-and-text";
      if (lesson.id <= 20) return "p1-2-links-and-media";
      if (lesson.id <= 30) return "p1-3-lists-and-tables";
      if (lesson.id <= 40) return "p1-4-forms-and-inputs";
      if (lesson.id <= 50) return "p1-5-semantics-and-seo";
      return "p1-6-html5-tags";
    }
  }
  if (pathname.startsWith("/css/")) {
    const slug = pathname.split("/css/")[1]?.split("?")[0];
    const lesson = cssLessons.find((l) => l.slug === slug);
    if (lesson) {
      if (lesson.id <= 10) return "p2-1-selectors";
      if (lesson.id <= 20) return "p2-2-colors";
      if (lesson.id <= 30) return "p2-3-box-model";
      if (lesson.id <= 40) return "p2-4-positioning";
      if (lesson.id <= 50) return "p2-5-flexbox";
      if (lesson.id <= 60) return "p2-6-grid";
      if (lesson.id <= 70) return "p2-7-transitions";
      return "p2-8-variables-themes";
    }
  }
  if (pathname.startsWith("/cli/")) {
    const slug = pathname.split("/cli/")[1]?.split("?")[0];
    const lesson = cliLessons.find((l) => l.slug === slug);
    if (lesson) {
      return lesson.originalChapterId;
    }
  }
  return pathname.split("/book/")[1]?.split("?")[0] || "";
}

export function isHtmlLessonPath(pathname: string): boolean {
  if (!pathname) return false;
  return pathname === "/html" || pathname.startsWith("/html/");
}

export function isCssLessonPath(pathname: string): boolean {
  if (!pathname) return false;
  return pathname === "/css" || pathname.startsWith("/css/");
}

export function isCliLessonPath(pathname: string): boolean {
  if (!pathname) return false;
  return pathname === "/cli" || pathname.startsWith("/cli/");
}

export function getChapterUrl(chapterId: string): string {
  if (!chapterId) return "/curriculum";
  if (chapterId === "p1-1-intro-and-text") return "/html/";
  if (chapterId === "p2-1-selectors") return "/css/";
  if (chapterId === "p0-2-terminal") return "/cli/";
  
  // HTML Direct slug or phase
  if (chapterId.startsWith("p1-")) {
    const phaseMap: Record<string, string> = {
      "p1-1-intro-and-text": "html-introduction-what-is-html",
      "p1-2-links-and-media": "doctype-html5-declaration-syntax",
      "p1-3-lists-and-tables": "html-body-tag-visible-content",
      "p1-4-forms-and-inputs": "bold-b-vs-semantic-strong-tag",
      "p1-5-semantics-and-seo": "anchor-a-tag-href-hyperlinks",
      "p1-6-html5-tags": "image-img-tag-src-images",
    };
    const slug = phaseMap[chapterId];
    if (slug) {
      if (chapterId === "p1-1-intro-and-text") return "/html/";
      return `/html/${slug}/`;
    }
    return "/html";
  }

  // Check if it matches an HTML lesson slug directly
  const htmlLesson = htmlLessons.find(l => l.slug === chapterId);
  if (htmlLesson) {
    return `/html/${htmlLesson.slug}`;
  }

  // Check if it matches a CLI lesson
  const cliLesson = cliLessons.find(l => l.originalChapterId === chapterId || l.slug === chapterId);
  if (cliLesson) {
    return `/cli/${cliLesson.slug}/`;
  }

  // Phase routing to active live hubs
  if (chapterId.startsWith("cli-")) return "/cli";
  if (chapterId.startsWith("p2-") || chapterId.includes("css")) return "/css";
  if (chapterId.startsWith("p3-") || chapterId.includes("javascript") || chapterId.includes("js")) return "/js";
  if (chapterId.startsWith("p4-") || chapterId.includes("react")) return "/react";
  if (chapterId.startsWith("p5-") || chapterId.startsWith("fs-") || chapterId.includes("node")) return "/nodejs";
  if (chapterId.startsWith("p6-") || chapterId.includes("project")) return "/projects";
  if (chapterId.startsWith("p7-") || chapterId.includes("interview") || chapterId.includes("resume") || chapterId.includes("career")) return "/curriculum";
  if (chapterId.includes("git")) return "/git";
  if (chapterId.startsWith("p0-")) return "/html";

  return `/book/${chapterId}/`;
}
