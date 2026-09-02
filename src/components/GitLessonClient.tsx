"use client";

import React from "react";
import UniversalLessonTemplate from "./UniversalLessonTemplate";
import { gitLessons, type GitLesson } from "@/data/gitLessonsData";

interface GitLessonClientProps {
  lesson: GitLesson;
}

export default function GitLessonClient({ lesson }: GitLessonClientProps) {
  const currentIndex = gitLessons.findIndex((l) => l.slug === lesson.slug);
  const prevLesson = currentIndex > 0 ? gitLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < gitLessons.length - 1 ? gitLessons[currentIndex + 1] : null;

  return (
    <UniversalLessonTemplate
      subject="git"
      subjectTitle="Git & GitHub Version Control Lab"
      subjectDashboardUrl="/git"
      totalLessonsInSubject={gitLessons.length}
      lesson={{
        id: lesson.id,
        slug: lesson.slug,
        title: lesson.title,
        unit: lesson.unit,
        bookRef: "Nextsem Academy • Version Control & DevOps",
      }}
      contentBody={lesson.content}
      prevLesson={prevLesson ? { id: prevLesson.id, slug: prevLesson.slug, title: prevLesson.title } : null}
      nextLesson={nextLesson ? { id: nextLesson.id, slug: nextLesson.slug, title: nextLesson.title } : null}
    />
  );
}
