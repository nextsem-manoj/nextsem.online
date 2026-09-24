import React, { Suspense } from "react";
import type { Metadata } from "next";
import HtmlDashboardClient from "@/components/HtmlDashboardClient";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nextsem Academy — Free HTML5 Master Developer Course & 100+ Lessons",
  description: "Master HTML5 with 101+ free interactive lessons, VS Code Windows 11 setup, live code previews, comprehensive quiz assessment, and zero paywalls.",
  keywords: [
    "html course",
    "learn html free",
    "html syllabus",
    "html masterclass",
    "nextsem academy",
    "free web development lessons",
    "html tags 2026",
    "visual studio code windows 11 html"
  ],
  alternates: { canonical: "https://nextsem.online/" },
  openGraph: {
    title: "Nextsem Academy — Free HTML5 Master Developer Course & 100+ Lessons",
    description: "Master HTML5 with 101+ free interactive lessons, VS Code Windows 11 setup, live code previews, and zero paywalls.",
    url: "https://nextsem.online/",
    type: "website",
    siteName: "Nextsem Academy"
  },
  twitter: {
    card: "summary_large_image",
    title: "Nextsem Academy — Free HTML5 Master Developer Course & 100+ Lessons",
    description: "101+ Free HTML Lessons, VS Code setups, and practical coding exercises."
  }
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Free HTML5 Web Development Course",
    "description": "Complete 101+ free HTML lessons covering web architecture, semantic tags, forms, tables, and Windows 11 VS Code setup.",
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
      <div className="flex-1 flex flex-col min-h-screen bg-[#060c18]">
        <Suspense
          fallback={
            <div className="min-h-screen bg-[#060c18] text-white flex items-center justify-center text-sm font-mono">
              Loading HTML Masterclass Curriculum...
            </div>
          }
        >
          <HtmlDashboardClient />
        </Suspense>
        <Footer />
      </div>
    </>
  );
}
