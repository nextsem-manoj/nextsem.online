"use client";

import React from "react";
import UniversalLessonTemplate from "./UniversalLessonTemplate";
import { jsLessons, type JsLesson } from "@/data/jsLessonsData";

interface JsLessonClientProps {
  lesson: JsLesson;
}

export default function JsLessonClient({ lesson }: JsLessonClientProps) {
  const currentIndex = jsLessons.findIndex((l) => l.slug === lesson.slug);
  const prevLesson = currentIndex > 0 ? jsLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < jsLessons.length - 1 ? jsLessons[currentIndex + 1] : null;

  return (
    <UniversalLessonTemplate
      subject="js"
      subjectTitle="JavaScript ES6+ & Web Logic"
      subjectDashboardUrl="/js"
      totalLessonsInSubject={jsLessons.length}
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
