import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { gitLessons } from "@/data/gitLessonsData";
import GitLessonClient from "@/components/GitLessonClient";

export async function generateStaticParams() {
  return gitLessons.map((lesson) => ({
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
  const lesson = gitLessons.find((l) => l.slug.toLowerCase() === decoded || l.id.toString() === decoded) || (!decoded ? gitLessons[0] : null);

  if (!lesson) {
    return {
      title: "Lesson Not Found | Nextsem Academy",
      description: "This free Git lesson was not found.",
    };
  }

  const title = `${lesson.title} - Free Git Lessons | Nextsem`;
  const description = `Learn ${lesson.title} on Windows 11 with step-by-step commands, Git workflow guides, and interactive exercises.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/git/${lesson.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://nextsem.online/git/${lesson.slug}`,
      type: "article",
    },
  };
}

export default async function GitSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const decoded = slug ? decodeURIComponent(slug).toLowerCase() : "";
  const lesson = gitLessons.find(
    (l) => l.slug.toLowerCase() === decoded || l.id.toString() === decoded
  ) || (!decoded || decoded === "index" ? gitLessons[0] : null);

  if (!lesson) {
    notFound();
  }

  return <GitLessonClient lesson={lesson} />;
}
