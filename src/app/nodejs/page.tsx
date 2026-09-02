import React from "react";
import type { Metadata } from "next";
import { nodeLessons } from "@/data/nodeLessonsData";
import NodeLessonClient from "@/components/NodeLessonClient";

export const metadata: Metadata = {
  title: "Free Node.js & Express Lessons: Build Scalable REST APIs | Nextsem",
  description: "Learn Node.js runtime fundamentals, Express.js routing, MongoDB Mongoose modeling, async middleware, JWT authentication, and full stack API development.",
  alternates: {
    canonical: "/nodejs"
  },
  openGraph: {
    title: "Free Node.js & Express Lessons: Build Scalable REST APIs | Nextsem",
    description: "Learn Node.js runtime fundamentals, Express.js routing, MongoDB Mongoose modeling, async middleware, JWT authentication, and full stack API development.",
    url: "https://nextsem.online/nodejs",
    type: "website"
  }
};

export default function NodejsRootPage() {
  const lessonOne = nodeLessons[0];
  return <NodeLessonClient lesson={lessonOne} />;
}
