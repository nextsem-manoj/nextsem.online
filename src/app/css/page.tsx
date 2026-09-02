import React from "react";
import type { Metadata } from "next";
import { cssLessons } from "@/data/cssLessonsData";
import CssLessonClient from "@/components/CssLessonClient";

export const metadata: Metadata = {
  title: "Free CSS3 Lessons: Master Modern Web Styling, Flexbox & Grid | Nextsem",
  description: "Learn modern CSS3 styling, Flexbox, CSS Grid layouts, keyframe animations, responsive media queries, and dark mode theming with free interactive lessons.",
  alternates: {
    canonical: "/css"
  },
  openGraph: {
    title: "Free CSS3 Lessons: Master Modern Web Styling, Flexbox & Grid | Nextsem",
    description: "Learn modern CSS3 styling, Flexbox, CSS Grid layouts, keyframe animations, responsive media queries, and dark mode theming with free interactive lessons.",
    url: "https://nextsem.online/css",
    type: "website"
  }
};

export default function CssRootPage() {
  const lessonOne = cssLessons[0];
  return <CssLessonClient lesson={lessonOne} />;
}
