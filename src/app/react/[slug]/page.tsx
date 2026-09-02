import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { reactLessons } from "@/data/reactLessonsData";
import ReactLessonClient from "@/components/ReactLessonClient";

export async function generateStaticParams() {
  return reactLessons.map((lesson) => ({
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
  const lesson = reactLessons.find((l) => l.slug.toLowerCase() === decoded || l.id.toString() === decoded) || (!decoded ? reactLessons[0] : null);

  if (!lesson) {
    return {
      title: "Lesson Not Found | Nextsem Academy",
      description: "This free React lesson was not found.",
    };
  }

  const title = `${lesson.title} - Free React.js Lessons | Nextsem`;
  const description = `Learn ${lesson.title} with free React.js lessons, modern hooks, and component architecture patterns.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/react/${lesson.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://nextsem.online/react/${lesson.slug}`,
      type: "article",
    },
  };
}

export default async function ReactSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const decoded = slug ? decodeURIComponent(slug).toLowerCase() : "";
  const lesson = reactLessons.find(
    (l) => l.slug.toLowerCase() === decoded || l.id.toString() === decoded
  ) || (!decoded || decoded === "index" ? reactLessons[0] : null);

  if (!lesson) {
    notFound();
  }

  return <ReactLessonClient lesson={lesson} />;
}
