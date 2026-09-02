import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { htmlLessons } from "@/data/htmlLessonsData";
import HtmlLessonClient from "@/components/HtmlLessonClient";

const slugAliases: Record<string, string> = {
  "learn-html-web-free-lessons-what-is-the-internet": "html-introduction-what-is-html",
  "html5-canvas-2d-context-javascript-drawing": "canvas-graphics-draw-shapes-context",
};

export async function generateStaticParams() {
  const params = htmlLessons.map((lesson) => ({
    slug: lesson.slug,
  }));
  const aliasParams = Object.keys(slugAliases).map((alias) => ({ slug: alias }));
  return [...params, ...aliasParams, { slug: "" }, { slug: "index" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const rawDecoded = slug ? decodeURIComponent(slug).toLowerCase() : "";
  const decoded = slugAliases[rawDecoded] || rawDecoded;
  const lesson = htmlLessons.find((l) => l.slug.toLowerCase() === decoded || l.id.toString() === decoded) || (!decoded ? htmlLessons[0] : null);

  if (!lesson) {
    return {
      title: "Lesson Not Found | Nextsem Academy",
      description: "This free HTML lesson was not found in our course directory.",
    };
  }

  const title = `${lesson.title} - Free HTML Lessons | Full Stack Web Development | Nextsem`;
  const description = `Learn ${lesson.title} step-by-step with free HTML lessons, full stack web development roadmap, authentic Windows 11 VS Code screenshots, live code examples, and interactive exercises on Nextsem Academy.`;

  return {
    title,
    description,
    keywords: [
      "free html lessons",
      "full stack web development",
      "full stack web developer",
      "learn html free",
      lesson.title.toLowerCase(),
      "html5 web development",
      "free coding lessons",
      "nextsem academy"
    ],
    alternates: {
      canonical: `/html/${lesson.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://nextsem.online/html/${lesson.slug}`,
      type: "article",
      siteName: "Nextsem Academy",
      locale: "en_US"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function HtmlSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const rawDecoded = slug ? decodeURIComponent(slug).toLowerCase() : "";
  const decoded = slugAliases[rawDecoded] || rawDecoded;
  const lesson = htmlLessons.find(
    (l) => l.slug.toLowerCase() === decoded || l.id.toString() === decoded
  ) || (!decoded || decoded === "index" ? htmlLessons[0] : null);

  if (!lesson) {
    notFound();
  }

  // Google Educational Schema for Search Engine indexing
  const lessonJsonLd = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": `${lesson.title} - Free HTML Lesson`,
    "description": `Free HTML lesson on ${lesson.title} covering full stack web development fundamentals, live syntax, and coding examples.`,
    "learningResourceType": "Lesson",
    "isAccessibleForFree": true,
    "keywords": "free html lessons, full stack web development, learn html free",
    "provider": {
      "@type": "Organization",
      "name": "Nextsem Academy",
      "url": "https://nextsem.online"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lessonJsonLd) }}
      />
      <HtmlLessonClient lesson={lesson} />
    </>
  );
}
