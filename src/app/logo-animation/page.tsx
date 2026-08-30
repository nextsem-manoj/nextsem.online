import React from "react";
import NextsemLogoAnimation from "@/components/NextsemLogoAnimation";
import Link from "next/link";

export const metadata = {
  title: "Nextsem Official Animated Logo & Intro | 100% Free Full Stack Bootcamp",
  robots: {
    index: false,
    follow: false,
  },
  description:
    "Watch the official animated SVG logo reveal for Nextsem — The 100% Free Full Stack Web Development Bootcamp.",
};

export default function LogoAnimationPage() {
  return (
    <main className="min-h-screen bg-[#17181c] text-white flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="max-w-4xl w-full flex flex-col items-center">
        {/* Header navigation back */}
        <div className="w-full flex items-center justify-between mb-8 pb-4 border-b border-slate-800">
          <Link
            href="/"
            className="flex items-center gap-2 text-[#04AA6D] hover:text-[#039861] font-bold text-sm underline decoration-[#04AA6D]"
          >
            ← Return to Nextsem Home
          </Link>
          <NextsemLogoAnimation mode="header" />
        </div>

        {/* Animation Container */}
        <div className="w-full">
          <NextsemLogoAnimation mode="intro" showControls={true} />
        </div>

        {/* Feature Highlights */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          <div className="bg-[#0c1328] p-5 rounded-2xl border border-slate-800">
            <h3 className="text-emerald-400 font-extrabold text-base mb-1">
              ⚡ 1.8s Crisp Intro Sequence
            </h3>
            <p className="text-xs text-slate-300">
              Sequential vector path drawing for N-E-X-T-S-E-M designed for high-impact web launch.
            </p>
          </div>
          <div className="bg-[#0c1328] p-5 rounded-2xl border border-slate-800">
            <h3 className="text-amber-400 font-extrabold text-base mb-1">
              🪟 Mobile & PC Optimized
            </h3>
            <p className="text-xs text-slate-300">
              100% SVG vector scaling seamlessly across smartphones, tablets, and 🪟 Windows PC monitors.
            </p>
          </div>
          <div className="bg-[#0c1328] p-5 rounded-2xl border border-slate-800">
            <h3 className="text-cyan-400 font-extrabold text-base mb-1">
              🎓 100% Free Bootcamp
            </h3>
            <p className="text-xs text-slate-300">
              Complete Full Stack Web Development course with 1-to-1 screenshots & live terminal simulators.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
