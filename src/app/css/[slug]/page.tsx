import React from "react";
import type { Metadata } from "next";
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
  const lesson = cssLessons.find((l) => l.slug.toLowerCase() === decoded || l.id.toString() === decoded) || (!decoded ? cssLessons[0] : null);

  if (!lesson) {
    return {
      title: "Lesson Not Found | Nextsem Academy",
      description: "This free CSS3 lesson was not found.",
    };
  }

  const title = `${lesson.title} - Free CSS3 Lessons | Nextsem`;
  const description = `Learn ${lesson.title} with free CSS3 lessons, live code syntax, flexbox/grid layout demos, and responsive design techniques.`;

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
