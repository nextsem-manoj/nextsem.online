import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import SimpleHeroClient from "@/components/SimpleHeroClient";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nextsem Academy — College Computer Science, BCA, MCA, B.Tech & Tech Jobs",
  description:
    "Free comprehensive higher education & coding platform by Er. Manoj Kumar covering University Degrees (BCA, MCA, B.Tech CSE), Curated Tech Jobs & Internships, and 50-Day Practical Coding Labs with live GitHub verification.",
  keywords: [
    "nextsem academy",
    "er manoj kumar coaching",
    "bca practical coding lab",
    "50 days coding lab github verification",
    "ignou bca mca study materials",
    "btech cse engineering notes",
    "tech jobs india",
    "bca freshers jobs",
    "off campus drives 2026",
    "full stack web development course free",
    "learn html css javascript react nodejs",
    "windows cmd terminal for developers",
    "visual studio code windows 11 setup guide"
  ],
  alternates: { canonical: "https://nextsem.online/" },
  openGraph: {
    title: "Nextsem Academy — College Computer Science, BCA, MCA, B.Tech & Tech Jobs",
    description:
      "Free comprehensive higher education from College Degrees (BCA, MCA, B.Tech) to Curated Tech Jobs, Internships & 50-Day Coding Labs by Er. Manoj Kumar.",
    url: "https://nextsem.online/",
    type: "website",
    siteName: "Nextsem Academy"
  },
  twitter: {
    card: "summary_large_image",
    title: "Nextsem Academy — Higher Education: BCA, MCA, B.Tech, Jobs & Coding",
    description: "Free higher education and placement coaching for BCA, MCA, B.Tech & 50-Day Coding Labs with live GitHub verification by Er. Manoj Kumar."
  }
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Nextsem Academy",
    "url": "https://nextsem.online",
    "description":
      "Free comprehensive higher education platform covering University Degrees (BCA, MCA, B.Tech CSE), Curated Tech Jobs & Internships, and 50-Day Practical Coding Labs with live GitHub verification.",
    "isAccessibleForFree": true,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Higher Education & Tech Placement Continuum",
      "itemListElement": [
        {
          "@type": "Course",
          "name": "College Education Hub (BCA, MCA & B.Tech)",
          "description": "University Degree curriculum covering BCA Semesters 1 to 6, C, C++, Data Structures, DBMS, Java, Operating Systems & exam question banks."
        },
        {
          "@type": "Course",
          "name": "Tech Jobs & Internships Hub",
          "description": "Curated off-campus hiring drives (TCS, Accenture, C-DOT, Wipro), paid internships, and central government IT notifications with downloadable circular PDFs."
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
