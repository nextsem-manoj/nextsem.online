"use client";

import React from "react";
import UniversalLessonTemplate from "./UniversalLessonTemplate";
import { reactLessons, type ReactLesson } from "@/data/reactLessonsData";

interface ReactLessonClientProps {
  lesson: ReactLesson;
}

export default function ReactLessonClient({ lesson }: ReactLessonClientProps) {
  const currentIndex = reactLessons.findIndex((l) => l.slug === lesson.slug);
  const prevLesson = currentIndex > 0 ? reactLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < reactLessons.length - 1 ? reactLessons[currentIndex + 1] : null;

  return (
    <UniversalLessonTemplate
      subject="react"
      subjectTitle="React.js & Modern Frontend Architecture"
      subjectDashboardUrl="/react"
      totalLessonsInSubject={reactLessons.length}
      lesson={{
        id: lesson.id,
        slug: lesson.slug,
        title: lesson.title,
        unit: lesson.unit,
        bookRef: "Nextsem Academy • Full Stack Web Development",
      }}
      contentBody={lesson.content}
      prevLesson={prevLesson ? { id: prevLesson.id, slug: prevLesson.slug, title: prevLesson.title } : null}
      nextLesson={nextLesson ? { id: nextLesson.id, slug: nextLesson.slug, title: nextLesson.title } : null}
    />
  );
}
