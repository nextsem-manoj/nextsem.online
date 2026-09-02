import React from "react";
import type { Metadata } from "next";
import { reactLessons } from "@/data/reactLessonsData";
import ReactLessonClient from "@/components/ReactLessonClient";

export const metadata: Metadata = {
  title: "Free React.js Lessons: Master JSX, Hooks, State & SPA Architecture | Nextsem",
  description: "Learn React.js step-by-step with free lessons covering JSX syntax, functional components, useState, useEffect, Context API, custom hooks, and React Router.",
  alternates: {
    canonical: "/react"
  },
  openGraph: {
    title: "Free React.js Lessons: Master JSX, Hooks, State & SPA Architecture | Nextsem",
    description: "Learn React.js step-by-step with free lessons covering JSX syntax, functional components, useState, useEffect, Context API, custom hooks, and React Router.",
    url: "https://nextsem.online/react",
    type: "website"
  }
};

export default function ReactRootPage() {
  const lessonOne = reactLessons[0];
  return <ReactLessonClient lesson={lessonOne} />;
}
