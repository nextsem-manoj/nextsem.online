import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { jsLessons } from "@/data/jsLessonsData";
import JsLessonClient from "@/components/JsLessonClient";

export async function generateStaticParams() {
  return jsLessons.map((lesson) => ({
    slug: lesson.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const decoded = slug ? decodeURIComponent(slug).toLowerCase() : "";
  const lesson = jsLessons.find((l) => l.slug.toLowerCase() === decoded || l.id.toString() === decoded) || (!decoded ? jsLessons[0] : null);

  if (!lesson) {
    return {
      title: "Lesson Not Found | Nextsem Academy",
      description: "This free JavaScript lesson was not found.",
    };
  }

  const title = `${lesson.title} - Free JavaScript ES6+ Lessons | Nextsem`;
  const description = `Learn ${lesson.title} with free JavaScript lessons, code examples, and modern ES6+ practices.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/js/${lesson.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://nextsem.online/js/${lesson.slug}`,
      type: "article",
    },
  };
}

export default async function JsSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const decoded = slug ? decodeURIComponent(slug).toLowerCase() : "";
  const lesson = jsLessons.find(
    (l) => l.slug.toLowerCase() === decoded || l.id.toString() === decoded
  ) || (!decoded || decoded === "index" ? jsLessons[0] : null);

  if (!lesson) {
    notFound();
  }

  return <JsLessonClient lesson={lesson} />;
}
