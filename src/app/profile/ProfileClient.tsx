"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  auth, signInWithGoogle, db 
} from "@/lib/firebase";
import { signOut, onAuthStateChanged, User as FirebaseUser } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useProgress } from "@/context/ProgressContext";
import { usePWA } from "@/hooks/usePWA";
import { LANGUAGES, changeLanguage } from "@/components/TranslateWidget";
import ResumeLessonBanner from "@/components/ResumeLessonBanner";
import MilestoneBadge from "@/components/MilestoneBadge";
import ShareButton from "@/components/ShareButton";
import { getLastLessonCloud, getLastLessonLocal, isMilestoneAwarded, saveMilestoneAwarded, LastLesson } from "@/lib/userProgressSync";

import { 
  Terminal, Code, Palette, BookOpen, CheckCircle2, Circle, 
  ArrowRight, ArrowLeft, LogOut, LogIn, ShieldAlert, Download, 
  Languages, Sparkles, Award, CloudCheck, RefreshCw, User, Flame, Lock,
  Target, TrendingUp
} from "lucide-react";
import searchIndex from "@/data/searchIndex.json";
import { cliLessons } from "@/data/cliLessonsData";
import { htmlLessons } from "@/data/htmlLessonsData";
import { gitLessons } from "@/data/gitLessonsData";

interface UserProfile {
  name: string;
  email: string;
  avatar: string;
  photo: string | null;
  uid: string;
}

export default function ProfileClient() {
  const router = useRouter();
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const { completedChapters, totalCompleted } = useProgress();
  const { isInstallable, installApp } = usePWA();

  // CMD Progress States
  const [terminalStep, setTerminalStep] = useState(0);
  const [terminalCertified, setTerminalCertified] = useState(false);
  // Resume lesson & milestone states
  const [lastLesson, setLastLesson] = useState<LastLesson | null>(null);
  const [activeMilestone, setActiveMilestone] = useState<number | null>(null);

  // Sync auth & progress on mount
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser: FirebaseUser | null) => {
      if (firebaseUser) {
        const initials = firebaseUser.displayName
          ? firebaseUser.displayName.split(" ").map((n) => n[0]).join("").substring(0, 2)
          : "NS";
        
        const profileObj: UserProfile = {
          uid: firebaseUser.uid,
          name: firebaseUser.displayName || "Nextsem Full Stack Student",
          email: firebaseUser.email || "",
          avatar: initials.toUpperCase(),
          photo: firebaseUser.photoURL,
        };
        setUser(profileObj);

        // Load last lesson (local first, then cloud)
        const localLast = getLastLessonLocal(firebaseUser.email);
        if (localLast) setLastLesson(localLast);
        getLastLessonCloud(firebaseUser.email || "").then((cloudLast) => {
          if (cloudLast) setLastLesson(cloudLast);
        });

        // Sync local terminal progress with cloud
        const email = firebaseUser.email || "";
        const localStep = parseInt(localStorage.getItem(`nextsem_terminal_step_${email}`) || "0", 10);
        const localCertified = localStorage.getItem(`nextsem_terminal_certified_${email}`) === "true";
        setTerminalStep(localStep);
        setTerminalCertified(localCertified);

        try {
          const userDocRef = doc(db, "users_progress", firebaseUser.uid);
          const docSnap = await getDoc(userDocRef);
          if (docSnap.exists()) {
            const dbData = docSnap.data();
            const dbStep = dbData.stepIdx || 0;
            const dbCertified = dbData.courseCertified || false;
            if (dbStep > localStep || (dbStep === localStep && dbCertified)) {
              setTerminalStep(dbStep);
              setTerminalCertified(dbCertified);
              localStorage.setItem(`nextsem_terminal_step_${email}`, dbStep.toString());
              localStorage.setItem(`nextsem_terminal_certified_${email}`, dbCertified.toString());
            }
          } else {
            // Save initial local progress to cloud
            await setDoc(userDocRef, {
              email,
              stepIdx: localStep,
              courseCertified: localCertified,
              updatedAt: new Date().toISOString(),
            }, { merge: true });
          }
        } catch (e) {
          console.error("Cloud progress sync error:", e);
        }
      } else {
        setUser(null);
        // Load guest terminal step from guest localStorage
        const guestStep = parseInt(localStorage.getItem("nextsem_terminal_step_guest") || "0", 10);
        const guestCertified = localStorage.getItem("nextsem_terminal_certified_guest") === "true";
        setTerminalStep(guestStep);
        setTerminalCertified(guestCertified);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      setSyncing(true);
      await signInWithGoogle();
    } catch (err) {
      console.error("Sign-In Error: ", err);
    } finally {
      setSyncing(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("nextsem_user");
      window.dispatchEvent(new Event("nextsem_auth_changed"));
      setUser(null);
    } catch (err) {
      console.error("Sign-Out Error: ", err);
    }
  };

  const handleDeleteAccount = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to permanently delete your account? All progress and certificates will be removed permanently."
    );
    if (!confirmed) return;

    try {
      const firebaseUser = auth.currentUser;
      if (firebaseUser) {
        await firebaseUser.delete();
        localStorage.removeItem("nextsem_user");
        window.dispatchEvent(new Event("nextsem_auth_changed"));
        setUser(null);
        router.push("/");
      }
    } catch (err: unknown) {
      const error = err as { code?: string };
      if (error.code === "auth/requires-recent-login") {
        alert("For security, please sign out, sign in again, and then retry account deletion.");
      } else {
        alert("Failed to delete account. Please check your connection and try again.");
      }
    }
  };

  // Module Progress Calculations
  const completedCliCount = cliLessons.filter(l => completedChapters[l.slug] || completedChapters[l.id]).length;
  const completedHtmlCount = htmlLessons.filter(l => completedChapters[l.slug] || completedChapters[l.id]).length;
  const completedGitCount = gitLessons.filter(l => completedChapters[l.slug] || completedChapters[l.id]).length;

  const cliPercent = Math.round((completedCliCount / cliLessons.length) * 100) || (terminalCertified ? 100 : Math.round((terminalStep / 10) * 100));
  const htmlPercent = Math.round((completedHtmlCount / htmlLessons.length) * 100);
  const gitPercent = Math.round((completedGitCount / gitLessons.length) * 100);

  const TARGET_TOTAL = 300; // 100 lessons per subject × 3 subjects
  const overallPercent = TARGET_TOTAL > 0 ? Math.min(100, Math.round((totalCompleted / TARGET_TOTAL) * 100)) : 0;

  // Milestone check on totalCompleted change
  React.useEffect(() => {
    const MILESTONES = [10, 25, 50, 100];
    const userEmail = user?.email || null;
    for (const m of MILESTONES) {
      if (totalCompleted >= m && !isMilestoneAwarded(userEmail, m)) {
        setActiveMilestone(m);
        saveMilestoneAwarded(userEmail, m);
        break;
      }
    }
  }, [totalCompleted, user?.email]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#060c18] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 rounded-full border-2 border-cyan-500/40 border-t-cyan-400 animate-spin" />
          <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Loading Developer Account...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#060c18] text-slate-100 pb-28 selection:bg-cyan-500/30">
      
      {/* Top Header Navigation */}
      <header className="sticky top-0 z-40 bg-[#090d22]/90 backdrop-blur-xl border-b border-slate-800/80 px-4 md:px-8 py-3.5 flex items-center justify-between shadow-lg">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform text-cyan-400" />
          <span>Home</span>
        </Link>
        
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-[#09101f] border border-[#04AA6D]/40 flex items-center justify-center text-[#04AA6D] font-black text-[10px]">
            NS
          </div>
          <span className="text-xs font-extrabold tracking-wider uppercase text-slate-200">
            Developer Account
          </span>
        </div>

        {user ? (
          <button 
            onClick={handleSignOut} 
            className="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-rose-400 transition-colors cursor-pointer"
          >
            <LogOut size={14} />
            <span className="hidden sm:inline">Sign out</span>
          </button>
        ) : (
          <button
            onClick={handleGoogleSignIn}
            className="flex items-center gap-1.5 text-xs font-extrabold text-slate-950 bg-amber-400 hover:bg-amber-300 px-3 py-1.5 rounded-xl transition-all cursor-pointer shadow-md"
          >
            <LogIn size={14} />
            <span>Sign In</span>
          </button>
        )}
      </header>

      {/* Milestone Badge Modal */}
      {activeMilestone && (
        <MilestoneBadge
          milestone={activeMilestone}
          onClose={() => setActiveMilestone(null)}
        />
      )}

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">

        {/* ── 0. OVERALL PROGRESS HERO CARD ── */}
        <div className="relative bg-gradient-to-br from-[#0a1628] via-[#0c1a30] to-[#080e1f] border border-slate-700/60 rounded-3xl p-6 shadow-2xl overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute top-0 left-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-start justify-between mb-5">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp size={14} className="text-emerald-400" />
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400">Overall Progress</span>
                </div>
                <h2 className="text-xl md:text-2xl font-black text-white tracking-tight">
                  {totalCompleted} <span className="text-slate-500 font-medium text-base">/ {TARGET_TOTAL} Lessons</span>
                </h2>
                <p className="text-xs text-slate-400 mt-1 font-medium">
                  {overallPercent}% of full curriculum completed
                </p>
              </div>
              <div className="flex items-center gap-2">
                <ShareButton
                  title="I'm learning web development on Nextsem!"
                  text={`I've completed ${totalCompleted} lessons on Nextsem — free full stack web dev! 🚀`}
                  url="https://nextsem.online/curriculum"
                />
                <div className="w-14 h-14 rounded-2xl bg-[#04AA6D]/10 border border-[#04AA6D]/30 flex flex-col items-center justify-center">
                  <span className="text-lg font-black text-[#04AA6D]">{overallPercent}%</span>
                  <span className="text-[8px] text-slate-400 font-bold">done</span>
                </div>
              </div>
            </div>

            {/* Overall progress bar */}
            <div className="relative h-3 bg-slate-800/80 rounded-full overflow-hidden mb-4">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full transition-all duration-700 ease-out"
                style={{ width: `${Math.max(1, overallPercent)}%` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/5 rounded-full" />
            </div>

            {/* Subject breakdown */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              {[
                { label: "CMD/CLI", count: completedCliCount, total: cliLessons.length, pct: cliPercent, color: "text-emerald-400", bg: "bg-emerald-500" },
                { label: "HTML5", count: completedHtmlCount, total: htmlLessons.length, pct: htmlPercent, color: "text-orange-400", bg: "bg-orange-500" },
                { label: "Git", count: completedGitCount, total: gitLessons.length, pct: gitPercent, color: "text-violet-400", bg: "bg-violet-500" },
              ].map((s) => (
                <div key={s.label} className="bg-slate-800/40 border border-slate-700/40 rounded-xl p-3">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-[10px] font-extrabold uppercase ${s.color}`}>{s.label}</span>
                    <span className="text-[10px] text-slate-400">{s.count}/{s.total}</span>
                  </div>
                  <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                    <div className={`h-full ${s.bg} rounded-full transition-all duration-500`} style={{ width: `${s.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Resume Last Lesson */}
            {lastLesson ? (
              <ResumeLessonBanner lastLesson={lastLesson} />
            ) : (
              <Link
                href="/cli"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#04AA6D]/10 border border-[#04AA6D]/30 text-[#04AA6D] text-sm font-bold hover:bg-[#04AA6D]/20 transition-all"
              >
                <Target size={15} />
                Start Learning — Windows CMD Course
                <ArrowRight size={13} />
              </Link>
            )}
          </div>
        </div>

        {/* ── 1. USER IDENTITY & CLOUD SYNC BADGE ── */}
        <div className="relative bg-[#0c1328] border border-slate-800/80 rounded-3xl p-5 md:p-6 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 relative z-10">
            <div className="flex items-center gap-4 min-w-0">
              {user?.photo ? (
                <img 
                  src={user.photo} 
                  alt={user.name} 
                  className="w-16 h-16 rounded-2xl border-2 border-cyan-500/40 object-cover shrink-0 shadow-lg" 
                />
              ) : (
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-600 to-emerald-600 text-white flex items-center justify-center font-black text-xl shrink-0 shadow-lg border border-cyan-400/30">
                  {user?.avatar || "👤"}
                </div>
              )}

              <div className="min-w-0 space-y-1">
                <div className="flex items-center gap-2">
                  <h1 className="text-base sm:text-lg font-black text-white truncate">
                    {user?.name || "Guest Full Stack Learner"}
                  </h1>
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-full shrink-0">
                    Full Stack Student
                  </span>
                </div>
                <p className="text-xs text-slate-400 truncate font-medium">
                  {user?.email || "Local Device Cache Storage"}
                </p>

                {/* Live Auth Badge */}
                <div className="flex items-center gap-2 pt-1">
                  {user ? (
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                      <CloudCheck size={12} className="stroke-[2.5]" />
                      Google Cloud Synced
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold text-amber-400 bg-amber-500/10 border border-amber-500/30 px-2.5 py-0.5 rounded-full">
                      <ShieldAlert size={12} className="stroke-[2.5]" />
                      Unsynced Device Cache
                    </span>
                  )}
                </div>
              </div>
            </div>

            {!user && (
              <button
                onClick={handleGoogleSignIn}
                disabled={syncing}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 rounded-2xl font-black text-xs transition-all shadow-xl hover:scale-[1.02] active:scale-98 cursor-pointer shrink-0"
              >
                {syncing ? (
                  <RefreshCw size={14} className="animate-spin" />
                ) : (
                  <LogIn size={14} className="stroke-[2.5]" />
                )}
                <span>Sign In to Sync Cloud</span>
              </button>
            )}
          </div>

          {/* ⚠️ HIGH VISIBILITY GUEST DATA LOSS WARNING BANNER */}
          {!user && (
            <div className="mt-5 p-4 bg-amber-500/10 border border-amber-500/30 rounded-2xl flex items-start gap-3">
              <ShieldAlert size={20} className="text-amber-400 shrink-0 mt-0.5" />
              <div className="space-y-1 text-xs">
                <div className="font-extrabold text-amber-300">
                  ⚠️ Warning: Progress Stored Only in Device Cache!
                </div>
                <p className="text-slate-300 leading-relaxed font-medium">
                  Your learning steps and certificates are currently saved in your browser cache memory. 
                  <strong className="text-amber-200"> If you clear your browser cache or close app data, you will lose your progress!</strong> 
                  Sign in with your Google Gmail account to back up your progress permanently.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* ── 2. DEVELOPER LEARNING METRICS GRID ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
          
          <div className="bg-[#0c1328] border border-slate-800/80 rounded-2xl p-4 text-center space-y-1 shadow-lg">
            <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Total Lessons</div>
            <div className="text-2xl sm:text-3xl font-black text-white">{totalCompleted}</div>
            <div className="text-[10px] text-slate-500 font-semibold">out of 3,750 lessons</div>
          </div>

          <div className="bg-[#0c1328] border border-slate-800/80 rounded-2xl p-4 text-center space-y-1 shadow-lg">
            <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Overall Progress</div>
            <div className="text-2xl sm:text-3xl font-black text-[#04AA6D]">{overallPercent}%</div>
            <div className="text-[10px] text-slate-500 font-semibold">all active subjects</div>
          </div>

          <div className="bg-[#0c1328] border border-slate-800/80 rounded-2xl p-4 text-center space-y-1 shadow-lg">
            <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">CMD Steps</div>
            <div className="text-2xl sm:text-3xl font-black text-violet-400">
              {terminalCertified ? "10/10" : `${terminalStep}/10`}
            </div>
            <div className="text-[10px] text-slate-500 font-semibold">Terminal Commands</div>
          </div>

          <div className="bg-[#0c1328] border border-slate-800/80 rounded-2xl p-4 text-center space-y-1 shadow-lg">
            <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Certificates</div>
            <div className="text-2xl sm:text-3xl font-black text-amber-400">
              {terminalCertified ? "1" : "0"}
            </div>
            <div className="text-[10px] text-slate-500 font-semibold">Verified Developer</div>
          </div>

        </div>

        {/* ── 3. FULL STACK SKILLS MATRIX (ALL PHASES) ── */}
        <div className="space-y-8">
          <div className="flex items-center justify-between px-1 border-b border-slate-800/80 pb-3">
            <h2 className="text-base font-extrabold uppercase tracking-wider text-white flex items-center gap-2">
              <Award size={18} className="text-cyan-400" />
              <span>Full Stack Skills Matrix (All Phases)</span>
            </h2>
            <span className="text-xs text-cyan-400 font-bold bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30">
              5 Phases Total
            </span>
          </div>

          {/* ── PHASE 1: WEB FOUNDATIONS ── */}
          <div className="space-y-3">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-xs font-black uppercase tracking-wider text-[#04AA6D] flex items-center gap-2">
                <span>Phase 1 — Web Foundations</span>
              </h3>
              <span className="text-[11px] text-slate-400 font-semibold">Steps 1.1 - 1.5</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {/* 🪟 Windows CLI Command Prompt Card */}
              <div className="p-4 bg-[#090e1f] border border-slate-800/90 rounded-2xl space-y-2.5 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-sm font-black text-[#04AA6D]">Windows CLI / CMD</h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#16294a] text-[#4ea8ff] font-extrabold text-[11px] border border-[#2b518c]/60">
                      {cliPercent}% done
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    {completedCliCount || terminalStep}/{cliLessons.length || 15}
                  </span>
                </div>

                <div className="w-full bg-[#101d36] h-2 rounded-full overflow-hidden border border-slate-800/80">
                  <div 
                    className="bg-gradient-to-r from-cyan-400 to-[#00f2fe] h-full rounded-full transition-all duration-500 shadow-[0_0_8px_#00d2ff]"
                    style={{ width: `${cliPercent}%` }}
                  />
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] text-slate-400 font-medium">
                    {terminalCertified ? "🏆 CLI Certified" : `Completed ${terminalStep} of 10 steps`}
                  </span>
                  <Link
                    href="/cli"
                    className="flex items-center gap-1 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Start Lesson</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>

              {/* 📄 HTML5 Web Foundations Card */}
              <div className="p-4 bg-[#090e1f] border border-slate-800/90 rounded-2xl space-y-2.5 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-sm font-black text-[#04AA6D]">HTML5 Web Dev</h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#16294a] text-[#4ea8ff] font-extrabold text-[11px] border border-[#2b518c]/60">
                      {htmlPercent}% done
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    {completedHtmlCount}/{htmlLessons.length}
                  </span>
                </div>

                <div className="w-full bg-[#101d36] h-2 rounded-full overflow-hidden border border-slate-800/80">
                  <div 
                    className="bg-gradient-to-r from-cyan-400 to-[#00f2fe] h-full rounded-full transition-all duration-500 shadow-[0_0_8px_#00d2ff]"
                    style={{ width: `${htmlPercent}%` }}
                  />
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] text-slate-400 font-medium">
                    {completedHtmlCount} of {htmlLessons.length} lessons done
                  </span>
                  <Link
                    href="/html"
                    className="flex items-center gap-1 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Explore HTML</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>

              {/* 🎨 CSS3 & Responsive Design Card */}
              <div className="p-4 bg-[#090e1f] border border-slate-800/90 rounded-2xl space-y-2.5 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-sm font-black text-[#04AA6D]">CSS3 & Styling</h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#16294a] text-[#4ea8ff] font-extrabold text-[11px] border border-[#2b518c]/60">
                      0% done
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    0/50
                  </span>
                </div>

                <div className="w-full bg-[#101d36] h-2 rounded-full overflow-hidden border border-slate-800/80">
                  <div className="bg-gradient-to-r from-cyan-400 to-[#00f2fe] h-full rounded-full w-0" />
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] text-slate-400 font-medium">
                    Phase 1 Step 1.3
                  </span>
                  <Link
                    href="/"
                    className="flex items-center gap-1 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Curriculum</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>

              {/* 🐙 Git & GitHub Version Control Card */}
              <div className="p-4 bg-[#090e1f] border border-slate-800/90 rounded-2xl space-y-2.5 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-sm font-black text-[#04AA6D]">Git Version Control</h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#16294a] text-[#4ea8ff] font-extrabold text-[11px] border border-[#2b518c]/60">
                      {gitPercent}% done
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    {completedGitCount}/{gitLessons.length}
                  </span>
                </div>

                <div className="w-full bg-[#101d36] h-2 rounded-full overflow-hidden border border-slate-800/80">
                  <div 
                    className="bg-gradient-to-r from-cyan-400 to-[#00f2fe] h-full rounded-full transition-all duration-500 shadow-[0_0_8px_#00d2ff]"
                    style={{ width: `${gitPercent}%` }}
                  />
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] text-slate-400 font-medium">
                    {completedGitCount} of {gitLessons.length} commands done
                  </span>
                  <Link
                    href="/git"
                    className="flex items-center gap-1 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Open Git</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ── PHASE 2: FRONTEND ENGINEERING ── */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-xs font-black uppercase tracking-wider text-[#04AA6D] flex items-center gap-2">
                <span>Phase 2 — Frontend Engineering</span>
              </h3>
              <span className="text-[11px] text-slate-400 font-semibold">Steps 2.1 - 2.4</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {/* ⚛️ React.js */}
              <div className="p-4 bg-[#090e1f] border border-slate-800/90 rounded-2xl space-y-2.5 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-sm font-black text-[#04AA6D]">React.js & Hooks</h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#16294a] text-[#4ea8ff] font-extrabold text-[11px] border border-[#2b518c]/60">
                      0% done
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">0/60</span>
                </div>
                <div className="w-full bg-[#101d36] h-2 rounded-full overflow-hidden border border-slate-800/80">
                  <div className="bg-gradient-to-r from-cyan-400 to-[#00f2fe] h-full rounded-full w-0" />
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] text-slate-400 font-medium">JSX, Components & State</span>
                  <Link href="/" className="flex items-center gap-1 text-xs font-bold text-cyan-400 hover:text-cyan-300">
                    <span>Explore React</span> <ArrowRight size={13} />
                  </Link>
                </div>
              </div>

              {/* 🧩 Next.js App Router */}
              <div className="p-4 bg-[#090e1f] border border-slate-800/90 rounded-2xl space-y-2.5 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-sm font-black text-[#04AA6D]">Next.js App Router</h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#16294a] text-[#4ea8ff] font-extrabold text-[11px] border border-[#2b518c]/60">
                      0% done
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">0/40</span>
                </div>
                <div className="w-full bg-[#101d36] h-2 rounded-full overflow-hidden border border-slate-800/80">
                  <div className="bg-gradient-to-r from-cyan-400 to-[#00f2fe] h-full rounded-full w-0" />
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] text-slate-400 font-medium">SSR, SSG & Server Components</span>
                  <Link href="/" className="flex items-center gap-1 text-xs font-bold text-cyan-400 hover:text-cyan-300">
                    <span>Explore Next.js</span> <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ── PHASE 3: BACKEND & DATABASES ── */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-xs font-black uppercase tracking-wider text-[#04AA6D] flex items-center gap-2">
                <span>Phase 3 — Backend & Databases</span>
              </h3>
              <span className="text-[11px] text-slate-400 font-semibold">Steps 3.1 - 3.4</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {/* 🟢 Node.js & Express */}
              <div className="p-4 bg-[#090e1f] border border-slate-800/90 rounded-2xl space-y-2.5 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-sm font-black text-[#04AA6D]">Node.js & Express</h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#16294a] text-[#4ea8ff] font-extrabold text-[11px] border border-[#2b518c]/60">
                      0% done
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">0/45</span>
                </div>
                <div className="w-full bg-[#101d36] h-2 rounded-full overflow-hidden border border-slate-800/80">
                  <div className="bg-gradient-to-r from-cyan-400 to-[#00f2fe] h-full rounded-full w-0" />
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] text-slate-400 font-medium">REST API Architecture</span>
                  <Link href="/" className="flex items-center gap-1 text-xs font-bold text-cyan-400 hover:text-cyan-300">
                    <span>Explore Node</span> <ArrowRight size={13} />
                  </Link>
                </div>
              </div>

              {/* 🍃 MongoDB & SQL */}
              <div className="p-4 bg-[#090e1f] border border-slate-800/90 rounded-2xl space-y-2.5 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-sm font-black text-[#04AA6D]">MongoDB & SQL</h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#16294a] text-[#4ea8ff] font-extrabold text-[11px] border border-[#2b518c]/60">
                      0% done
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">0/35</span>
                </div>
                <div className="w-full bg-[#101d36] h-2 rounded-full overflow-hidden border border-slate-800/80">
                  <div className="bg-gradient-to-r from-cyan-400 to-[#00f2fe] h-full rounded-full w-0" />
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] text-slate-400 font-medium">Schemas & Querying</span>
                  <Link href="/" className="flex items-center gap-1 text-xs font-bold text-cyan-400 hover:text-cyan-300">
                    <span>Explore Databases</span> <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ── PHASE 4: FULL STACK PROJECTS ── */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-xs font-black uppercase tracking-wider text-[#04AA6D] flex items-center gap-2">
                <span>Phase 4 — Full Stack Production Projects</span>
              </h3>
              <span className="text-[11px] text-slate-400 font-semibold">Steps 4.1 - 4.5</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {/* 🛒 E-Commerce & Apps */}
              <div className="p-4 bg-[#090e1f] border border-slate-800/90 rounded-2xl space-y-2.5 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-sm font-black text-[#04AA6D]">Production Apps</h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#16294a] text-[#4ea8ff] font-extrabold text-[11px] border border-[#2b518c]/60">
                      0% done
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">0/20</span>
                </div>
                <div className="w-full bg-[#101d36] h-2 rounded-full overflow-hidden border border-slate-800/80">
                  <div className="bg-gradient-to-r from-cyan-400 to-[#00f2fe] h-full rounded-full w-0" />
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] text-slate-400 font-medium">Full Stack SaaS & E-Commerce</span>
                  <Link href="/" className="flex items-center gap-1 text-xs font-bold text-cyan-400 hover:text-cyan-300">
                    <span>View Projects</span> <ArrowRight size={13} />
                  </Link>
                </div>
              </div>

              {/* ☁️ Cloud Deployment */}
              <div className="p-4 bg-[#090e1f] border border-slate-800/90 rounded-2xl space-y-2.5 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-sm font-black text-[#04AA6D]">Cloud Deployment</h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#16294a] text-[#4ea8ff] font-extrabold text-[11px] border border-[#2b518c]/60">
                      0% done
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">0/15</span>
                </div>
                <div className="w-full bg-[#101d36] h-2 rounded-full overflow-hidden border border-slate-800/80">
                  <div className="bg-gradient-to-r from-cyan-400 to-[#00f2fe] h-full rounded-full w-0" />
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] text-slate-400 font-medium">Vercel, Docker & CI/CD</span>
                  <Link href="/" className="flex items-center gap-1 text-xs font-bold text-cyan-400 hover:text-cyan-300">
                    <span>Explore Cloud</span> <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ── PHASE 5: CAREER & SYSTEM DESIGN ── */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-xs font-black uppercase tracking-wider text-[#04AA6D] flex items-center gap-2">
                <span>Phase 5 — Career & System Design</span>
              </h3>
              <span className="text-[11px] text-slate-400 font-semibold">Steps 5.1 - 5.2</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {/* 🗣️ System Design */}
              <div className="p-4 bg-[#090e1f] border border-slate-800/90 rounded-2xl space-y-2.5 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-sm font-black text-[#04AA6D]">System Design</h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#16294a] text-[#4ea8ff] font-extrabold text-[11px] border border-[#2b518c]/60">
                      0% done
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">0/10</span>
                </div>
                <div className="w-full bg-[#101d36] h-2 rounded-full overflow-hidden border border-slate-800/80">
                  <div className="bg-gradient-to-r from-cyan-400 to-[#00f2fe] h-full rounded-full w-0" />
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] text-slate-400 font-medium">Scalability & Architecture</span>
                  <Link href="/" className="flex items-center gap-1 text-xs font-bold text-cyan-400 hover:text-cyan-300">
                    <span>System Design</span> <ArrowRight size={13} />
                  </Link>
                </div>
              </div>

              {/* 💼 Interview Prep */}
              <div className="p-4 bg-[#090e1f] border border-slate-800/90 rounded-2xl space-y-2.5 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-sm font-black text-[#04AA6D]">Interview Coding Prep</h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#16294a] text-[#4ea8ff] font-extrabold text-[11px] border border-[#2b518c]/60">
                      0% done
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">0/25</span>
                </div>
                <div className="w-full bg-[#101d36] h-2 rounded-full overflow-hidden border border-slate-800/80">
                  <div className="bg-gradient-to-r from-cyan-400 to-[#00f2fe] h-full rounded-full w-0" />
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] text-slate-400 font-medium">Live Coding & Behavioral</span>
                  <Link href="/" className="flex items-center gap-1 text-xs font-bold text-cyan-400 hover:text-cyan-300">
                    <span>Interview Prep</span> <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>



        {/* ── 5. DANGER ZONE ── */}
        {user && (
          <div className="bg-[#0c1328] border border-rose-950/60 rounded-3xl p-5 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-rose-400">Account Danger Zone</h3>
            <p className="text-xs text-slate-400 font-medium">
              Permanently delete your account and clear all saved cloud progress. This action cannot be reversed.
            </p>
            <button
              onClick={handleDeleteAccount}
              className="px-4 py-2 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 rounded-xl text-xs font-bold transition-all cursor-pointer"
            >
              Delete My Account
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
