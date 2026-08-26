import React from "react";
import { Metadata } from "next";
import { htmlLessons } from "@/data/htmlLessonsData";
import HtmlLessonClient from "@/components/HtmlLessonClient";

export const metadata: Metadata = {
  title: "Free HTML Lessons: Learn HTML5 & Web Development Step-by-Step | Nextsem",
  description: "Start learning with 98+ free HTML lessons for beginners on Windows 11. Master HTML5 semantic tags, VS Code setup, forms, CSS styling, and hands-on coding exercises with zero paywalls.",
  keywords: [
    "free html lessons",
    "learn html free",
    "free html tutorial for beginners",
    "free web development lessons",
    "html5 free course",
    "html coding lessons online",
    "nextsem academy free html",
    "visual studio code html setup"
  ],
  alternates: {
    canonical: "/html"
  },
  openGraph: {
    title: "Free HTML Lessons: Learn HTML5 & Web Development Step-by-Step | Nextsem",
    description: "Start learning with 98+ free HTML lessons for beginners on Windows 11. Master HTML5 semantic tags, VS Code setup, forms, CSS styling, and hands-on coding exercises with zero paywalls.",
    url: "https://nextsem.online/html",
    type: "website",
    siteName: "Nextsem Academy",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Free HTML Lessons: Learn HTML5 Step-by-Step | Nextsem",
    description: "98+ Free HTML Lessons, VS Code setups, and practical coding exercises."
  }
};

export default function HtmlRootPage() {
  const lessonOne = htmlLessons[0];

  // Google Course & Educational Schema Markup for rich SEO snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Free HTML5 Web Development Course",
    "description": "Complete 98+ free HTML lessons covering web architecture, semantic tags, forms, tables, and Windows 11 VS Code setup.",
    "provider": {
      "@type": "Organization",
      "name": "Nextsem Academy",
      "sameAs": "https://nextsem.online"
    },
    "isAccessibleForFree": true,
    "coursePrerequisites": "None (Beginner Friendly)",
    "educationalLevel": "Beginner to Advanced",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "Online",
      "courseWorkload": "PT15H"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HtmlLessonClient lesson={lessonOne} />
    </>
  );
}
