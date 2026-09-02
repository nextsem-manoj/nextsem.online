import React from "react";
import { Metadata } from "next";
import { cssLessons } from "@/data/cssLessonsData";
import CssLessonClient from "@/components/CssLessonClient";

export const metadata: Metadata = {
  title: "CSS3 Tutorial & Modern Responsive Web Design Course | NextSem",
  description: "Master CSS3 from scratch: Flexbox, CSS Grid, Responsive Design, Animations, Custom Properties, and Modern Layouts with free interactive coding drills.",
  alternates: {
    canonical: "/css"
  },
  openGraph: {
    title: "CSS3 Tutorial & Modern Responsive Web Design Course | NextSem",
    description: "Master CSS3 from scratch: Flexbox, CSS Grid, Responsive Design, Animations, Custom Properties, and Modern Layouts with free interactive coding drills.",
    url: "https://nextsem.online/css",
    type: "website"
  }
};

export default function CssRootPage() {
  const lessonOne = cssLessons[0];
  return <CssLessonClient lesson={lessonOne} />;
}
