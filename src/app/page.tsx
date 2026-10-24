import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import SimpleHeroClient from "@/components/SimpleHeroClient";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nextsem Academy — Free Education from KG to 12th, BCA, B.Tech & Coding Labs",
  description:
    "Free comprehensive coaching by Er. Manoj Kumar covering KG to Class 12th (Science, Commerce & Arts), University Degrees (BCA, MCA, B.Tech), and 50-Day Practical Coding Labs with live GitHub verification.",
  keywords: [
    "nextsem academy",
    "er manoj kumar coaching",
    "free schooling portal",
    "ncert class 1 to 12 notes",
    "class 11 12 science commerce arts",
    "class 10 board exam preparation ncert",
    "bca practical coding lab",
    "50 days coding lab github verification",
    "ignou bca mca study materials",
    "btech cse engineering notes",
    "kg nursery phonics number tracing",
    "cbse ncert bilingual solutions hindi english",
    "full stack web development course free",
    "learn html css javascript react nodejs",
    "windows cmd terminal for developers",
    "visual studio code windows 11 setup guide"
  ],
  alternates: { canonical: "https://nextsem.online/" },
  openGraph: {
    title: "Nextsem Academy — Free Education from KG to 12th, BCA, B.Tech & Coding Labs",
    description:
      "Free comprehensive coaching from KG, Class 1-12 (Science, Commerce, Arts) to BCA, MCA, B.Tech & Job-Ready 50-Day Coding Labs by Er. Manoj Kumar.",
    url: "https://nextsem.online/",
    type: "website",
    siteName: "Nextsem Academy"
  },
  twitter: {
    card: "summary_large_image",
    title: "Nextsem Academy — Free Education: KG to 12th, BCA, B.Tech & Coding",
    description: "Free coaching from KG to 12th (All Streams) to College BCA/B.Tech & 50-Day Coding Labs with live GitHub verification by Er. Manoj Kumar."
  }
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Nextsem Academy",
    "url": "https://nextsem.online",
    "description":
      "Free comprehensive coaching platform covering Foundational Schooling (KG to Class 12 Science, Commerce, Arts), University Degrees (BCA, MCA, B.Tech), and 50-Day Practical Coding Labs with live GitHub verification.",
    "isAccessibleForFree": true,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Comprehensive Educational Continuum (KG to Job Placement)",
      "itemListElement": [
        {
          "@type": "Course",
          "name": "Schooling Hub (Class 1 to 12 & KG)",
          "description": "100% Free NCERT Textbooks, bilingual solutions (Hindi/English), Class 11-12 Science, Commerce & Arts streams, and Middle School Doubt Studio."
        },
        {
          "@type": "Course",
          "name": "College Education Hub (BCA, MCA & B.Tech)",
          "description": "University Degree curriculum covering BCA Semesters 1 to 6, C, C++, Data Structures, DBMS, Java, Operating Systems & exam question banks."
        },
        {
          "@type": "Course",
          "name": "50-Day Practical Coding Lab",
          "description": "Hands-on guided programming labs with live Windows 11 VS Code execution and automated GitHub API push verification to unlock daily lessons."
        },
        {
          "@type": "Course",
          "name": "Full-Stack Web Development Track",
          "description": "299+ Free visual lessons on HTML5, Modern CSS3, JavaScript ES6+, React 19, Node.js REST APIs, and Windows 11 CLI automation."
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
