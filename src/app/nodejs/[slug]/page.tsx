import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { nodeLessons } from "@/data/nodeLessonsData";
import NodeLessonClient from "@/components/NodeLessonClient";

export async function generateStaticParams() {
  return nodeLessons.map((lesson) => ({
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
  const lesson = nodeLessons.find((l) => l.slug.toLowerCase() === decoded || l.id.toString() === decoded) || (!decoded ? nodeLessons[0] : null);

  if (!lesson) {
    return {
      title: "Lesson Not Found | Nextsem Academy",
      description: "This free Node.js lesson was not found.",
    };
  }

  const title = `${lesson.title} - Free Node.js Lessons | Nextsem`;
  const description = `Learn ${lesson.title} with free Node.js & Express lessons, backend API architecture, and database persistence.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/nodejs/${lesson.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://nextsem.online/nodejs/${lesson.slug}`,
      type: "article",
    },
  };
}

export default async function NodejsSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const decoded = slug ? decodeURIComponent(slug).toLowerCase() : "";
  const lesson = nodeLessons.find(
    (l) => l.slug.toLowerCase() === decoded || l.id.toString() === decoded
  ) || (!decoded || decoded === "index" ? nodeLessons[0] : null);

  if (!lesson) {
    notFound();
  }

  return <NodeLessonClient lesson={lesson} />;
}
