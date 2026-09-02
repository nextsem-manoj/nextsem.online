import React from "react";
import type { Metadata } from "next";
import { jsLessons } from "@/data/jsLessonsData";
import JsLessonClient from "@/components/JsLessonClient";

export const metadata: Metadata = {
  title: "Free JavaScript Lessons: Learn Modern ES6+ & Web Logic | Nextsem",
  description: "Master modern JavaScript ES6+, arrow functions, array iterators (map/filter/reduce), DOM manipulation, async/await, and REST APIs step-by-step.",
  alternates: {
    canonical: "/js"
  },
  openGraph: {
    title: "Free JavaScript Lessons: Learn Modern ES6+ & Web Logic | Nextsem",
    description: "Master modern JavaScript ES6+, arrow functions, array iterators (map/filter/reduce), DOM manipulation, async/await, and REST APIs step-by-step.",
    url: "https://nextsem.online/js",
    type: "website"
  }
};

export default function JsRootPage() {
  const lessonOne = jsLessons[0];
  return <JsLessonClient lesson={lessonOne} />;
}
