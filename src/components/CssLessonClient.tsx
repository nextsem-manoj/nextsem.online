"use client";

import React from "react";
import UniversalLessonTemplate from "./UniversalLessonTemplate";
import { cssLessons, type CssLesson } from "@/data/cssLessonsData";

interface CssLessonClientProps {
  lesson: CssLesson;
}

export default function CssLessonClient({ lesson }: CssLessonClientProps) {
  const currentIndex = cssLessons.findIndex((l) => l.slug === lesson.slug);
  const prevLesson = currentIndex > 0 ? cssLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < cssLessons.length - 1 ? cssLessons[currentIndex + 1] : null;

  return (
    <UniversalLessonTemplate
      subject="css"
      subjectTitle="CSS3 Modern Web Styling & UI"
      subjectDashboardUrl="/css"
      totalLessonsInSubject={cssLessons.length}
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
