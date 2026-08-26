import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { ArrowLeft, ShieldAlert, CheckCircle2, FileText } from "lucide-react";

function InstagramIcon({ size = 14, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "Disclaimer & Fair Use Policy | Nextsem Academy",
  description: "Educational disclaimer, non-affiliation notice, trademark acknowledgments, and fair use guidelines for Nextsem Academy developer curriculum.",
  alternates: { canonical: "/disclaimer" },
  openGraph: {
    title: "Disclaimer & Fair Use Policy | Nextsem Academy",
    description: "Educational disclaimer and non-affiliation notice for Nextsem Academy.",
    url: "https://nextsem.online/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-[#17181c] text-white flex flex-col font-sans selection:bg-[#04AA6D]/30 selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#17181c]/90 backdrop-blur-xl border-b border-slate-800 flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={14} className="stroke-[2.5]" />
          <span>Back to Home</span>
        </Link>
        <span className="font-extrabold text-xs uppercase tracking-widest text-[#04AA6D]">
          Nextsem Legal & Compliance
        </span>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-16 space-y-10 flex-1">
        <div className="space-y-3 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-[#04AA6D]/30 rounded-full text-xs font-bold text-[#04AA6D]">
            <ShieldAlert size={14} />
            <span>Official Policy</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Disclaimer & Educational Policy
          </h1>
          <p className="text-sm text-slate-300">
            Last Updated: August 2026 • Effective for all Nextsem Academy platforms and curriculum.
          </p>
        </div>

        {/* Section 1: Non-Affiliation */}
        <div className="bg-[#1e2026] border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <CheckCircle2 size={18} className="text-[#04AA6D]" />
            1. Independent Educational Platform &amp; Non-Affiliation
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-2 px-3 bg-slate-900/60 border border-slate-800/80 rounded-2xl">
            <Link
              href="/about"
              className="flex items-center gap-3 hover:opacity-90 transition-opacity group"
              title="View Founder & Curriculum Architect Bio"
            >
              <img
                src="/manoj-kumar.jpg"
                alt="Er. Manoj Kumar"
                className="w-12 h-12 rounded-xl object-cover object-top border-2 border-[#04AA6D] shadow-md shrink-0 group-hover:scale-105 transition-transform"
              />
              <div className="text-xs">
                <div className="font-bold text-white text-sm group-hover:text-[#04AA6D] transition-colors">Er. Manoj Kumar</div>
                <div className="text-slate-400">Founder &amp; Curriculum Architect • Nextsem Academy →</div>
              </div>
            </Link>
            <a
              href="https://www.instagram.com/kumar.manoj2403"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0e1117] hover:bg-slate-800 border border-slate-700 hover:border-[#04AA6D]/50 text-slate-300 hover:text-white rounded-xl text-xs font-bold transition-all w-fit shrink-0"
              title="Follow Er. Manoj Kumar on Instagram"
            >
              <InstagramIcon size={13} className="text-white" />
              <span>@kumar.manoj2403</span>
            </a>
          </div>
          <p className="text-sm text-slate-200 leading-relaxed">
            <strong className="text-white font-bold">Nextsem Academy</strong> (<span className="text-[#04AA6D] font-semibold">https://nextsem.online</span>) is an independent, non-commercial educational technology platform founded by <strong className="text-white font-bold">Er. Manoj Kumar</strong>.
          </p>
          <p className="text-sm text-slate-200 leading-relaxed">
            Nextsem Academy is <strong className="text-white font-bold">NOT</strong> affiliated, associated, authorized, endorsed by, or in any way officially connected with Indira Gandhi National Open University (IGNOU), the National Council of Educational Research and Training (NCERT), Microsoft Corporation, Google LLC, or any other university, board, or government entity.
          </p>
        </div>

        {/* Section 2: Fair Use & Educational Purpose */}
        <div className="bg-[#1e2026] border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <FileText size={18} className="text-[#04AA6D]" />
            2. Fair Use & Open Educational Curriculum
          </h2>
          <p className="text-sm text-slate-200 leading-relaxed">
            All curriculum materials, tutorials, code samples, and conceptual guides provided on Nextsem Academy are created strictly for non-profit educational and training purposes under the principles of fair use. Our mission is to bridge the gap between academic theory and real-world full-stack software development.
          </p>
        </div>

        {/* Section 3: Trademarks & Third-Party Brand Notices */}
        <div className="bg-[#1e2026] border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <CheckCircle2 size={18} className="text-[#04AA6D]" />
            3. Trademarks & Brand Acknowledgments
          </h2>
          <p className="text-sm text-slate-200 leading-relaxed">
            Windows, Windows 11, VS Code, and Command Prompt are registered trademarks of Microsoft Corporation. Google Chrome and AdSense are trademarks of Google LLC. React is an open-source project by Meta Platforms, Inc. All trademarks, logos, and brand names mentioned remain the property of their respective owners. Their mention on this platform is purely for identification and educational context.
          </p>
        </div>

        {/* Section 4: Accuracy & Code Execution Warranty */}
        <div className="bg-[#1e2026] border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <CheckCircle2 size={18} className="text-[#04AA6D]" />
            4. Accuracy of Information & Developer Sandboxes
          </h2>
          <p className="text-sm text-slate-200 leading-relaxed">
            While every effort is made to ensure code samples, command references, and tutorials are accurate and tested against modern web standards (2026+), all content is provided on an "as-is" basis without warranties of any kind. Users are encouraged to practice in safe local sandboxes.
          </p>
        </div>

        {/* Section 5: Contact for Inquiries */}
        <div className="bg-[#1e2026] border border-slate-800 rounded-2xl p-6 md:p-8 space-y-3">
          <h2 className="text-xl font-bold text-white">5. Contact Information</h2>
          <p className="text-sm text-slate-200 leading-relaxed">
            For questions regarding this disclaimer, copyright queries, or curriculum suggestions, please reach out directly via our{" "}
            <Link href="/contact" className="text-[#04AA6D] hover:text-[#039861] underline decoration-[#04AA6D] font-semibold">
              Contact Support Page
            </Link>{" "}
            or email us at <strong className="text-white font-bold">nextsem.academy@gmail.com</strong>.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
