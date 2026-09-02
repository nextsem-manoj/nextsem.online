"use client";

import React from "react";
import UniversalLessonTemplate from "./UniversalLessonTemplate";
import { nodeLessons, type NodeLesson } from "@/data/nodeLessonsData";

interface NodeLessonClientProps {
  lesson: NodeLesson;
}

export default function NodeLessonClient({ lesson }: NodeLessonClientProps) {
  const currentIndex = nodeLessons.findIndex((l) => l.slug === lesson.slug);
  const prevLesson = currentIndex > 0 ? nodeLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < nodeLessons.length - 1 ? nodeLessons[currentIndex + 1] : null;

  return (
    <UniversalLessonTemplate
      subject="nodejs"
      subjectTitle="Node.js & Express REST Backend"
      subjectDashboardUrl="/nodejs"
      totalLessonsInSubject={nodeLessons.length}
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
