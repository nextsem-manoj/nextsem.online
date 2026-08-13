import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cppLessons } from "@/data/cppLessonsData";
import CppLessonClient from "./CppLessonClient";

export async function generateStaticParams() {
  const params = cppLessons.map((lesson) => ({
    slug: lesson.slug,
  }));
  return [...params, { slug: "" }, { slug: "index" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const decoded = slug ? decodeURIComponent(slug).toLowerCase() : "";
  const lesson = cppLessons.find((l) => l.slug.toLowerCase() === decoded) || (!decoded ? cppLessons[0] : null);

  if (!lesson) {
    return {
      title: "Lesson Not Found | NextSem",
      description: "This C++ lesson was not found in our course directory.",
    };
  }

  const title = `${lesson.title} | Free C++ Systems Programming Lesson | NextSem`;
  const description = `Learn ${lesson.title} step-by-step with Windows 11 MinGW GCC compiler instructions, code examples, pointers, memory management, and interactive checks at NextSem Academy.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/cpp/${lesson.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://nextsem.online/cpp/${lesson.slug}`,
      type: "article",
    },
  };
}

export default async function CppSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const decoded = slug ? decodeURIComponent(slug).toLowerCase() : "";
  const lesson = cppLessons.find(
    (l) => l.slug.toLowerCase() === decoded || l.id.toString() === decoded
  ) || (!decoded || decoded === "index" ? cppLessons[0] : null);

  if (!lesson) {
    notFound();
  }

  return <CppLessonClient lesson={lesson} />;
}
