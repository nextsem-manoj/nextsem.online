import React, { Suspense } from "react";
import { Metadata } from "next";
import HtmlDashboardClient from "@/components/HtmlDashboardClient";

export const metadata: Metadata = {
  title: "Free HTML5 Full Stack Course & Syllabus Dashboard | Nextsem Academy",
  description: "Master HTML5 with 98+ free interactive lessons, VS Code Windows 11 setup, live code previews, comprehensive quiz assessment, and zero paywalls.",
  keywords: [
    "html dashboard",
    "free html course",
    "learn html5",
    "html syllabus",
    "free web development lessons",
    "html quiz assessment",
    "nextsem academy free html",
    "visual studio code html"
  ],
  alternates: {
    canonical: "/html"
  },
  openGraph: {
    title: "Free HTML5 Full Stack Course & Syllabus Dashboard | Nextsem Academy",
    description: "Master HTML5 with 98+ free interactive lessons, VS Code Windows 11 setup, live code previews, comprehensive quiz assessment, and zero paywalls.",
    url: "https://nextsem.online/html",
    type: "website",
    siteName: "Nextsem Academy",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Free HTML5 Full Stack Course & Syllabus Dashboard | Nextsem",
    description: "98+ Free HTML Lessons, VS Code setups, and practical coding exercises."
  }
};

export default function HtmlRootPage() {
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
      <Suspense
        fallback={
          <div className="min-h-screen bg-[#060c18] text-white flex items-center justify-center text-sm font-mono">
            Loading HTML Course Dashboard...
          </div>
        }
      >
        <HtmlDashboardClient />
      </Suspense>
    </>
  );
}
