"use client";

import React, { useState, useEffect } from "react";
import DesktopSimulator from "../../components/DesktopSimulator";
import { auth, signInWithGoogle } from "../../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function SimulatorPreviewPage() {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUserEmail(user?.email ?? null);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#030712] flex items-center justify-center text-slate-400 font-mono text-sm">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
          <span>Loading Simulator...</span>
        </div>
      </div>
    );
  }

  if (!userEmail) {
    return (
      <div className="min-h-screen bg-[#030712] flex items-center justify-center p-4">
        <div className="bg-[#0f172a] border border-white/10 rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl">
          <div className="text-5xl mb-4">🎮</div>
          <h1 className="text-white font-black text-xl mb-2">Desktop Simulator</h1>
          <p className="text-slate-400 text-sm mb-6">
            Sign in to start the guided 🪟 Windows Desktop learning experience and track your XP progress.
          </p>
          <button
            onClick={signInWithGoogle}
            className="w-full bg-white text-gray-900 font-black rounded-2xl py-3 flex items-center justify-center gap-3 hover:bg-gray-100 transition-all active:scale-95"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Sign in with Google
          </button>
        </div>
      </div>
    );
  }

  if (completed) {
    return (
      <div className="min-h-screen bg-[#030712] flex items-center justify-center p-4">
        <div className="bg-[#0f172a] border border-amber-400/30 rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl">
          <div className="text-5xl mb-4">🏆</div>
          <h1 className="text-white font-black text-xl mb-2">Simulator Completed!</h1>
          <p className="text-slate-400 text-sm mb-6">
            You&apos;ve mastered the Windows Desktop! Ready to start CMD lessons?
          </p>
          <a
            href="/book/cli-ch1-basics"
            className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black rounded-2xl py-3 flex items-center justify-center gap-2 hover:from-amber-400 hover:to-orange-400 transition-all"
          >
            🚀 Start Chapter 1 — CLI Basics
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030712] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-1.5 text-purple-400 text-xs font-bold mb-4">
            🎮 Nextsem Desktop Simulator — Preview
          </div>
          <h1 className="text-white font-black text-3xl mb-3">
            🪟 Windows Desktop<br />
            <span className="text-purple-400">Interactive Trainer</span>
          </h1>
          <p className="text-slate-400 text-sm max-w-xs mx-auto leading-relaxed">
            Learn Windows desktop skills step-by-step. Complete guided tasks, earn XP, and get certified!
          </p>
        </div>

        {/* Simulator stats row */}
        <div className="flex items-center gap-4 flex-wrap justify-center mb-6">
          {[
            { icon: "📋", label: "15 Steps" },
            { icon: "❤️", label: "5 Hearts" },
            { icon: "⭐", label: "510+ XP" },
            { icon: "🏅", label: "1 Badge" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl px-4 py-2 text-xs text-slate-300 font-bold flex items-center gap-1.5">
              <span>{stat.icon}</span>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        <p className="text-slate-600 text-xs">
          Signed in as <span className="text-slate-400">{userEmail}</span>
        </p>
      </div>

      {/* The Simulator Panel — fixed bottom right */}
      <DesktopSimulator
        userEmail={userEmail}
        onComplete={() => setCompleted(true)}
      />
    </div>
  );
}
