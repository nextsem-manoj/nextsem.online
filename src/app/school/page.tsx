import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { 
  BookOpen, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Compass, 
  Layers, 
  Calculator, 
  Atom, 
  Briefcase, 
  Palette, 
  Flame,
  Award,
  ChevronRight,
  HelpCircle,
  FileText,
  Search
} from "lucide-react";

export const metadata: Metadata = {
  title: "Schooling Hub (KG to Class 12) — NCERT Notes, Solutions & All Streams | Nextsem Academy",
  description: "Complete free schooling platform for Classes 1 to 12. NCERT textbooks, bilingual notes (Hindi/English), Class 11-12 Science, Commerce & Arts streams, and Middle School Doubt Studio.",
  alternates: {
    canonical: "https://nextsem.online/school"
  }
};

export default function SchoolHubPage() {
  return (
    <div className="min-h-screen bg-[#0a0b0e] text-white selection:bg-amber-500 selection:text-black">
      {/* ── BREADCRUMB NAVIGATION TRAIL ── */}
      <div className="border-b border-neutral-800 bg-[#0d0e12] py-3 px-4 sm:px-8">
        <nav className="max-w-6xl mx-auto flex items-center gap-2 text-xs font-semibold text-slate-400 overflow-x-auto">
          <Link href="/" className="hover:text-amber-400 transition-colors flex items-center gap-1 shrink-0">
            <span>🏠 Home</span>
          </Link>
          <span className="text-slate-600">❯</span>
          <span className="text-amber-400 font-bold shrink-0">🎒 Schooling Hub (Class 1 - 12)</span>
        </nav>
      </div>

      <main className="max-w-6xl mx-auto px-4 sm:px-8 py-10 sm:py-16 space-y-14">
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
            From foundational <strong>KG &amp; Primary</strong> to Board Exam mastery in <strong>Class 10th &amp; 12th</strong> across all three streams: <strong>Science, Commerce, and Arts</strong>. Line-by-line bilingual notes, authentic NCERT book covers, and instant MCQ practice.
          </p>

          {/* Quick Filter Shortcut Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
            <a href="#senior-secondary" className="px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-xs font-bold text-amber-300 transition-colors flex items-center gap-1.5">
              <span>🧪 Class 11 &amp; 12 Streams</span>
            </a>
            <a href="#secondary" className="px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-xs font-bold text-slate-300 transition-colors flex items-center gap-1.5">
              <span>📖 Class 9 &amp; 10 Boards</span>
            </a>
            <a href="#middle-school" className="px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-xs font-bold text-slate-300 transition-colors flex items-center gap-1.5">
              <span>🎒 Middle School (6-8)</span>
            </a>
            <a href="#primary" className="px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-xs font-bold text-slate-300 transition-colors flex items-center gap-1.5">
              <span>🧸 KG &amp; Primary (1-5)</span>
            </a>
          </div>
        </div>

        {/* ── 1. SENIOR SECONDARY: CLASS 11 & 12 (ALL 3 STREAMS) ── */}
        <section id="senior-secondary" className="space-y-6 pt-4">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
            <div>
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">Higher Secondary</div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-2 mt-1">
                <span>Class 11th &amp; 12th — All 3 Streams</span>
              </h2>
            </div>
            <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-neutral-900 border border-neutral-700 text-xs text-slate-400">
              CBSE &amp; State Boards
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Stream 1: Science */}
            <div className="p-6 rounded-2xl bg-neutral-900/60 border border-cyan-500/30 hover:border-cyan-400 transition-all space-y-4 group">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Atom size={26} />
                </div>
                <span className="text-[11px] font-black uppercase px-2.5 py-1 rounded-full bg-cyan-950/80 text-cyan-400 border border-cyan-800">
                  PCM / PCB
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  🧪 Science Stream
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Physics, Chemistry, Mathematics, Biology, and Computer Science (Python/SQL).
                </p>
              </div>

              <ul className="space-y-2 text-xs text-slate-300 border-t border-neutral-800 pt-3">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-cyan-400 shrink-0" />
                  <span>Physics: Mechanics, Waves &amp; Modern Physics</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-cyan-400 shrink-0" />
                  <span>Chemistry: Organic, Inorganic &amp; Physical</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-cyan-400 shrink-0" />
                  <span>Maths: Calculus, Vectors &amp; 3D Geometry</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-cyan-400 shrink-0" />
                  <span>CS / IP: Python, Pandas, MySQL &amp; Networks</span>
                </li>
              </ul>

              <div className="pt-2">
                <Link
                  href="/html"
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-neutral-800 hover:bg-cyan-500 hover:text-black text-white font-bold text-xs transition-colors"
                >
                  <span>Explore Science Curriculum</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Stream 2: Commerce */}
            <div className="p-6 rounded-2xl bg-neutral-900/60 border border-amber-500/30 hover:border-amber-400 transition-all space-y-4 group">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Briefcase size={26} />
                </div>
                <span className="text-[11px] font-black uppercase px-2.5 py-1 rounded-full bg-amber-950/80 text-amber-400 border border-amber-800">
                  Business &amp; Finance
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  💼 Commerce Stream
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Financial Accounting, Business Studies, Micro/Macro Economics &amp; Applied Math.
                </p>
              </div>

              <ul className="space-y-2 text-xs text-slate-300 border-t border-neutral-800 pt-3">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-amber-400 shrink-0" />
                  <span>Accountancy: Ledger, Balance Sheet &amp; Cash Flow</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-amber-400 shrink-0" />
                  <span>Business Studies: Principles &amp; Financial Markets</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-amber-400 shrink-0" />
                  <span>Economics: National Income &amp; Indian Economy</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-amber-400 shrink-0" />
                  <span>Applied Mathematics: Spreadsheets &amp; Financial Math</span>
                </li>
              </ul>

              <div className="pt-2">
                <Link
                  href="/html"
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-neutral-800 hover:bg-amber-500 hover:text-black text-white font-bold text-xs transition-colors"
                >
                  <span>Explore Commerce Curriculum</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Stream 3: Arts / Humanities */}
            <div className="p-6 rounded-2xl bg-neutral-900/60 border border-fuchsia-500/30 hover:border-fuchsia-400 transition-all space-y-4 group">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/30 flex items-center justify-center text-fuchsia-400">
                  <Palette size={26} />
                </div>
                <span className="text-[11px] font-black uppercase px-2.5 py-1 rounded-full bg-fuchsia-950/80 text-fuchsia-400 border border-fuchsia-800">
                  Humanities &amp; Social
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-fuchsia-400 transition-colors">
                  🎨 Arts &amp; Humanities
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  History, Political Science, Geography, Sociology, and Psychology.
                </p>
              </div>

              <ul className="space-y-2 text-xs text-slate-300 border-t border-neutral-800 pt-3">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-fuchsia-400 shrink-0" />
                  <span>History: Ancient, Medieval &amp; Modern India</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-fuchsia-400 shrink-0" />
                  <span>Political Science: Indian &amp; Global Politics</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-fuchsia-400 shrink-0" />
                  <span>Geography: Physical Geography &amp; Human Economy</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-fuchsia-400 shrink-0" />
                  <span>Sociology &amp; Psychology: Social Institutions &amp; Behavior</span>
                </li>
              </ul>

              <div className="pt-2">
                <Link
                  href="/html"
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-neutral-800 hover:bg-fuchsia-500 hover:text-black text-white font-bold text-xs transition-colors"
                >
                  <span>Explore Arts Curriculum</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. SECONDARY: CLASS 9 & 10 (BOARD EXAM MASTERY) ── */}
        <section id="secondary" className="space-y-6 pt-4">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
            <div>
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Secondary Education</div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-2 mt-1">
                <span>Class 9th &amp; 10th (CBSE Board Exam Prep)</span>
              </h2>
            </div>
            <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-neutral-900 border border-neutral-700 text-xs text-slate-400">
              100% NCERT Solutions
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-emerald-500/50 transition-all">
              <div className="text-2xl mb-2">📐</div>
              <h4 className="font-bold text-white text-base">Mathematics</h4>
              <p className="text-xs text-slate-400 mt-1">Real Numbers, Trigonometry, Statistics &amp; Quadratic Equations.</p>
              <div className="mt-3 text-[11px] text-emerald-400 font-semibold">15 Chapters • Solved Proofs »</div>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-emerald-500/50 transition-all">
              <div className="text-2xl mb-2">🔬</div>
              <h4 className="font-bold text-white text-base">Science (PCM + Bio)</h4>
              <p className="text-xs text-slate-400 mt-1">Chemical Reactions, Light, Electricity &amp; Life Processes.</p>
              <div className="mt-3 text-[11px] text-emerald-400 font-semibold">16 Chapters • Diagrams »</div>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-emerald-500/50 transition-all">
              <div className="text-2xl mb-2">🌍</div>
              <h4 className="font-bold text-white text-base">Social Science</h4>
              <p className="text-xs text-slate-400 mt-1">History, Democratic Politics, Economics &amp; Resources.</p>
              <div className="mt-3 text-[11px] text-emerald-400 font-semibold">Bilingual Notes • Maps »</div>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-emerald-500/50 transition-all">
              <div className="text-2xl mb-2">💻</div>
              <h4 className="font-bold text-white text-base">IT 402 &amp; AI 417</h4>
              <p className="text-xs text-slate-400 mt-1">Digital Documentation, Python basics &amp; AI concepts.</p>
              <div className="mt-3 text-[11px] text-emerald-400 font-semibold">Practical Coding Labs »</div>
            </div>
          </div>
        </section>

        {/* ── 3. MIDDLE SCHOOL: CLASS 6, 7 & 8 ── */}
        <section id="middle-school" className="space-y-6 pt-4">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
            <div>
              <div className="text-xs font-bold text-blue-400 uppercase tracking-wider">Middle Stage (NEP 2020)</div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-2 mt-1">
                <span>Classes 6th, 7th &amp; 8th</span>
              </h2>
            </div>
            <Link
              href="/middle-school-doubt-diagnostic-studio.html"
              className="text-xs font-bold text-blue-400 hover:underline flex items-center gap-1"
            >
              <span>Doubt Diagnostic Studio</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="p-5 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-blue-500/40 transition-all">
              <div className="text-2xl mb-2">🔢</div>
              <h4 className="font-bold text-white text-base">Ganita Prakash (Math)</h4>
              <p className="text-xs text-slate-400 mt-1">Integers, Fractions, Data Handling, Algebra &amp; Mensuration.</p>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-blue-500/40 transition-all">
              <div className="text-2xl mb-2">🔭</div>
              <h4 className="font-bold text-white text-base">Curiosity (Science)</h4>
              <p className="text-xs text-slate-400 mt-1">Living organisms, Motion, Electricity, Magnetism &amp; Ecosystems.</p>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-blue-500/40 transition-all">
              <div className="text-2xl mb-2">🏛️</div>
              <h4 className="font-bold text-white text-base">Exploring Society (Social)</h4>
              <p className="text-xs text-slate-400 mt-1">Earth our Habitat, Our Pasts, Social and Political Life.</p>
            </div>
          </div>
        </section>

        {/* ── 4. PRIMARY & FOUNDATIONAL: KG TO CLASS 5 ── */}
        <section id="primary" className="space-y-6 pt-4">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
            <div>
              <div className="text-xs font-bold text-rose-400 uppercase tracking-wider">Foundational &amp; Primary</div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-2 mt-1">
                <span>🧸 KG, Nursery &amp; Classes 1 to 5</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-neutral-900/30 border border-neutral-800">
              <div className="text-xl mb-1">🔤</div>
              <div className="font-bold text-sm text-white">Phonics &amp; Alphabet</div>
              <div className="text-xs text-slate-400 mt-0.5">Audio pronunciation &amp; visual cards.</div>
            </div>

            <div className="p-4 rounded-xl bg-neutral-900/30 border border-neutral-800">
              <div className="text-xl mb-1">✏️</div>
              <div className="font-bold text-sm text-white">Number &amp; Letter Tracing</div>
              <div className="text-xs text-slate-400 mt-0.5">Interactive digit finger tracing.</div>
            </div>

            <div className="p-4 rounded-xl bg-neutral-900/30 border border-neutral-800">
              <div className="text-xl mb-1">🌱</div>
              <div className="font-bold text-sm text-white">Primary Math &amp; EVS</div>
              <div className="text-xs text-slate-400 mt-0.5">Tables, basic addition &amp; nature lessons.</div>
            </div>

            <div className="p-4 rounded-xl bg-neutral-900/30 border border-neutral-800">
              <div className="text-xl mb-1">🐻</div>
              <div className="font-bold text-sm text-white">Story &amp; Moral Science</div>
              <div className="text-xs text-slate-400 mt-0.5">Fun character stories &amp; picture books.</div>
            </div>
          </div>
        </section>

        {/* ── CROSS-NAVIGATION BANNER ── */}
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
