import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import SimpleHeroClient from "@/components/SimpleHeroClient";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nextsem Academy — Learn Full Stack Web Development Free Step-by-Step",
  description:
    "Master Full Stack Web Development from scratch: HTML5, CSS3, JavaScript ES6+, React, Node.js, and Windows 11 VS Code terminal workflow with concise 5-point visual lessons and zero paywalls.",
  keywords: [
    "nextsem academy",
    "free full stack web development",
    "learn to code free",
    "html5 course free",
    "learn web development step by step",
    "windows 11 command prompt for developers",
    "react developer lessons",
    "javascript for beginners",
    "free coding roadmap 2026",
    "bca computer science coding"
  ],
  alternates: { canonical: "https://nextsem.online/" },
  openGraph: {
    title: "Nextsem Academy — Learn Full Stack Web Development Free Step-by-Step",
    description:
      "Master Full Stack Web Development with 299+ free visual lessons, 1-to-1 Windows 11 PC screenshots, interactive code playground, and zero paywalls.",
    url: "https://nextsem.online/",
    type: "website",
    siteName: "Nextsem Academy"
  },
  twitter: {
    card: "summary_large_image",
    title: "Nextsem Academy — Learn Full Stack Web Development Free",
    description: "299+ Free Developer Lessons, Windows 11 PC workflows, and practical exercises."
  }
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Nextsem Academy",
    "url": "https://nextsem.online",
    "description":
      "Free Full-Stack Web Development Academy teaching HTML5, CSS3, JavaScript, React, Node.js, and Windows 11 developer workflows with zero paywalls.",
    "isAccessibleForFree": true,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Free Coding Curriculum",
      "itemListElement": [
        {
          "@type": "Course",
          "name": "HTML5 Web Architecture",
          "description": "98 Free Lessons on semantic HTML, tags, tables, and forms."
        },
        {
          "@type": "Course",
          "name": "Modern CSS3 & Grid",
          "description": "30 Free Lessons on Flexbox, CSS Grid, and responsive design."
        },
        {
          "@type": "Course",
          "name": "JavaScript ES6+ & DOM",
          "description": "50+ Concepts on functions, arrays, DOM, and async APIs."
        },
        {
          "@type": "Course",
          "name": "Windows 11 Command Prompt",
          "description": "100 Lessons on PC terminal workflows and automation."
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex-1 flex flex-col min-h-screen bg-[#0d0e12] text-white">
        <Header />
        <main className="flex-1 flex flex-col w-full">
          <SimpleHeroClient />
        </main>
        <Footer />
      </div>
    </>
  );
}
