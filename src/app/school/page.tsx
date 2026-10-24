import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { 
  Sparkles, 
  Flame
} from "lucide-react";
import SchoolHubClient from "@/components/school/SchoolHubClient";

export const metadata: Metadata = {
  title: "Schooling Hub (KG to Class 12) — NCERT Notes, Solutions & All Streams | Nextsem Academy",
  description: "Complete free schooling platform for Classes 1 to 12. NCERT textbooks, bilingual notes (Hindi/English), Class 11-12 Science, Commerce & Arts streams, and Middle School Doubt Studio.",
  keywords: [
    "ncert solutions",
    "cbse class 10 notes",
    "cbse class 12 notes",
    "ncert class 11 science",
    "ncert commerce notes",
    "bilingual ncert notes hindi english",
    "middle school doubt studio",
    "nextsem schooling hub"
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nextsem.online/school"
  },
  openGraph: {
    title: "Schooling Hub (KG to Class 12) | Nextsem Academy",
    description: "Complete free NCERT schooling education from KG to Class 12th across Science, Commerce, and Arts streams.",
    url: "https://nextsem.online/school",
    type: "website",
    siteName: "Nextsem Academy"
  },
  twitter: {
    card: "summary_large_image",
    title: "Schooling Hub (KG to Class 12) | Nextsem Academy",
    description: "Free NCERT notes, solutions, and practice studios for KG to 12th students.",
  }
};

const schoolJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOccupationalProgram",
  "name": "Nextsem Schooling Hub (KG to Class 12)",
  "description": "Complete free NCERT & CBSE schooling education from KG to Class 12th across Science, Commerce, and Arts streams with bilingual notes.",
  "provider": {
    "@type": "EducationalOrganization",
    "name": "Nextsem Academy",
    "url": "https://nextsem.online"
  },
  "educationalCredentialAwarded": "School Board Preparation",
  "hasCourse": [
    { "@type": "Course", "name": "Class 10th NCERT Mastery", "description": "Complete Class 10 Board preparation with Science, Maths, and Social Science notes." },
    { "@type": "Course", "name": "Class 12th Science & Commerce Streams", "description": "Physics, Chemistry, Maths, Biology, Accountancy, and Economics notes." },
    { "@type": "Course", "name": "Middle School Doubt Diagnostic Studio", "description": "Interactive doubt solver and concept tests for Classes 6th, 7th, and 8th." }
  ],
  "author": {
    "@type": "Person",
    "name": "Er. Manoj Kumar"
  }
};

export default function SchoolHubPage() {
  return (
    <div className="min-h-screen bg-[#0a0b0e] text-white selection:bg-amber-500 selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolJsonLd) }}
      />
      {/* ── BREADCRUMB NAVIGATION TRAIL ── */}
      <div className="border-b border-neutral-800 bg-[#0d0e12] py-3 px-4 sm:px-8">
        <nav className="max-w-6xl mx-auto flex items-center gap-2 text-xs font-semibold text-slate-400 overflow-x-auto">
          <Link href="/" className="hover:text-amber-400 transition-colors flex items-center gap-1 shrink-0">
            <span>🏠 Home</span>
          </Link>
          <span className="text-slate-600">❯</span>
          <span className="text-amber-400 font-bold shrink-0">🎒 Schooling Hub (KG to 12th)</span>
        </nav>
      </div>

      <main className="max-w-6xl mx-auto px-4 sm:px-8 py-10 sm:py-14 space-y-12">
        {/* ── HERO BANNER ── */}
        <div className="text-center space-y-5 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-950/60 text-amber-400 border border-amber-500/30">
            <Sparkles size={14} className="text-amber-400" />
            <span>100% Free NCERT &amp; CBSE School Education</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Schooling <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-yellow-200">Education Hub</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            From foundational <strong>KG &amp; Primary</strong> to Board Exam mastery in <strong>Class 10th &amp; 12th</strong> across all three streams: <strong>Science, Commerce, and Arts</strong>. Line-by-line bilingual notes, authentic 3D NCERT book covers, and 140+ interactive practice studios.
          </p>
        </div>

        {/* ── INTERACTIVE SCHOOL HUB CLIENT (SEARCH, STUDIOS, CLASSES & CHAPTERS) ── */}
        <SchoolHubClient />

        {/* ── CROSS-NAVIGATION BANNER (COLLEGE & CODING LABS) ── */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-neutral-950 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="text-xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <Flame size={20} className="text-emerald-400" />
              <span>Looking for College Degrees or Coding Labs?</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Switch anytime between Schooling, BCA College Hub, or 50-Day Coding Labs.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/bca"
              className="px-5 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs border border-neutral-700 transition-colors"
            >
              🎓 College / BCA Hub
            </Link>
            <Link
              href="/bca/practical"
              className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs transition-colors flex items-center gap-1.5 shadow-lg shadow-emerald-500/20"
            >
              <Sparkles size={14} />
              <span>50-Day Coding Lab ⚡</span>
            </Link>
          </div>
        </div>

        {/* Footer Attribution */}
        <div className="text-center text-xs text-slate-500 pt-8 border-t border-neutral-800">
          Curriculum Designed &amp; Architected by <strong className="text-slate-300">Er. Manoj Kumar</strong> • Nextsem Academy
        </div>
      </main>
    </div>
  );
}
