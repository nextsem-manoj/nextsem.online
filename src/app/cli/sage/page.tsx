import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WindowsIcon from "@/components/WindowsIcon";
import AiCompilerSageWidget from "@/components/AiCompilerSageWidget";
import { Bot, Terminal, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Compiler Sage CLI Lab | Nextsem Academy",
  description:
    "Interactive AI Compiler Sage CLI error correction, real-time command syntax diagnostic, and Windows 11 Command Prompt learning lab.",
  alternates: {
    canonical: "https://nextsem.online/cli/sage",
  },
};

export default function AiCompilerSagePage() {
  return (
    <div className="min-h-screen bg-[#17181c] text-white flex flex-col font-sans selection:bg-[#04AA6D] selection:text-black">
      <Header />

      {/* ── BREADCRUMB NAVIGATION (PERMANENT STANDARD) ── */}
      <nav
        aria-label="Breadcrumb"
        className="w-full max-w-5xl mx-auto px-4 pt-6 pb-2 text-xs text-slate-400 flex items-center gap-2 flex-wrap"
      >
        <Link
          href="/"
          className="text-[#04AA6D] hover:text-[#039861] underline decoration-[#04AA6D] font-semibold flex items-center gap-1 cursor-pointer"
        >
          <span>🏠 Home</span>
        </Link>
        <span className="text-slate-600">❯</span>
        <Link
          href="/cli"
          className="text-[#04AA6D] hover:text-[#039861] underline decoration-[#04AA6D] font-semibold flex items-center gap-1 cursor-pointer"
        >
          <WindowsIcon className="w-3.5 h-3.5 text-[#04AA6D]" />
          <span>CLI Hub</span>
        </Link>
        <span className="text-slate-600">❯</span>
        <span className="text-white font-bold">AI Compiler Sage Lab</span>
      </nav>

      {/* ── MAIN CONTENT CONTAINER ── */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-6 sm:py-10 space-y-8">
        {/* Hero Section */}
        <section className="space-y-4 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#04AA6D]/10 border border-[#04AA6D] text-[#04AA6D] text-xs font-black uppercase tracking-wider">
            <Sparkles size={14} />
            <span>Milestone 3.1 Developer Engine</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            AI Compiler Sage <span className="text-[#04AA6D]">CLI Lab</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed">
            Eliminate terminal fear with instant syntax diagnostics. Test command typos, explore Linux vs{" "}
            <strong className="text-white font-bold">🪟 Windows 11</strong> Command Prompt differences, and receive 1-click
            verified fixes.
          </p>
        </section>

        {/* Interactive Sage Widget */}
        <section className="max-w-3xl mx-auto">
          <AiCompilerSageWidget initialCommand="ls -la" />
        </section>

        {/* Feature Highlights Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto pt-6">
          <div className="bg-[#1e2029] border border-slate-800 rounded-2xl p-5 space-y-2">
            <div className="w-9 h-9 rounded-xl bg-[#04AA6D]/10 border border-[#04AA6D]/30 flex items-center justify-center text-[#04AA6D]">
              <Terminal size={18} />
            </div>
            <h3 className="text-base font-bold text-white">Platform Translation</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              Accidentally type <code className="text-[#04AA6D]">clear</code>, <code className="text-[#04AA6D]">ls</code>, or{" "}
              <code className="text-[#04AA6D]">pwd</code>? AI Sage instantly translates them to 🪟 Windows CMD native commands.
            </p>
          </div>

          <div className="bg-[#1e2029] border border-slate-800 rounded-2xl p-5 space-y-2">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Bot size={18} />
            </div>
            <h3 className="text-base font-bold text-white">Typo Self-Healing</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              Detects missing spaces like <code className="text-amber-300">cd..</code> or <code className="text-amber-300">code.</code> and
              suggests clean NTFS-compliant syntax.
            </p>
          </div>

          <div className="bg-[#1e2029] border border-slate-800 rounded-2xl p-5 space-y-2">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <ShieldCheck size={18} />
            </div>
            <h3 className="text-base font-bold text-white">Beginner Safe Zone</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              Practice dangerous flags and directory management commands in a safe, risk-free sandbox before executing on your real PC.
            </p>
          </div>
        </section>

        {/* Back to Fast-Track Simulator CTA */}
        <section className="bg-gradient-to-r from-[#17181c] via-[#1e2029] to-[#17181c] border border-slate-800 rounded-3xl p-6 sm:p-8 text-center max-w-3xl mx-auto space-y-4 shadow-xl">
          <h2 className="text-xl sm:text-2xl font-extrabold text-white">Ready to Put Your Skills into Action?</h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
            Jump into our step-by-step interactive terminal simulator with authentic Windows Command Prompt outputs.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/cli/fast-track"
              className="px-6 py-3 rounded-xl bg-[#04AA6D] hover:bg-[#039861] text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg flex items-center gap-2 cursor-pointer"
            >
              <span>Launch Fast-Track Terminal »</span>
              <ArrowRight size={14} />
            </Link>

            <Link
              href="/cli"
              className="px-6 py-3 rounded-xl bg-[#17181c] hover:bg-slate-800 text-white border border-slate-700 font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 cursor-pointer"
            >
              <WindowsIcon className="w-4 h-4 text-[#04AA6D]" />
              <span>Full 30+ CLI Tracks</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
