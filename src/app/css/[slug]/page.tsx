import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cssLessons } from "@/data/cssLessonsData";
import CssLessonClient from "@/components/CssLessonClient";

export async function generateStaticParams() {
  return cssLessons.map((lesson) => ({
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
  const lesson = cssLessons.find((l) => l.slug.toLowerCase() === decoded) || (!decoded ? cssLessons[0] : null);

  if (!lesson) {
    return {
      title: "Lesson Not Found | NextSem",
      description: "This CSS lesson was not found in our course directory.",
    };
  }

  const title = `${lesson.title} | Free CSS Web Coding Lesson | NextSem`;
  const description = `Learn ${lesson.title} step-by-step in Hindi, Hinglish, and English with interactive drills. Free online CSS web coding course at NextSem Academy.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/css/${lesson.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://nextsem.online/css/${lesson.slug}`,
      type: "article",
    },
  };
}

export default async function CssSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const decoded = slug ? decodeURIComponent(slug).toLowerCase() : "";
  const lesson = cssLessons.find(
    (l) => l.slug.toLowerCase() === decoded || l.id.toString() === decoded
  ) || (!decoded || decoded === "index" ? cssLessons[0] : null);

  if (!lesson) {
    notFound();
  }

  return <CssLessonClient lesson={lesson} />;
}
