"use client";

import React, { useEffect, useState } from 'react';
import { auth, signInWithGoogle, db } from '../../lib/firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useProgress } from '../../context/ProgressContext';
import { CheckCircle2, Circle, ArrowLeft, LogOut, Sparkles, BookOpen, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import searchIndex from '../../data/searchIndex.json';
import AdSenseBanner from '@/components/AdSenseBanner';
import { usePWA } from '../../hooks/usePWA';
import { Download } from 'lucide-react';


interface UserProfile {
  name: string;
  email: string;
  avatar: string;
  photo: string | null;
}

export default function ProfileClient() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const { completedChapters, totalCompleted } = useProgress();
  const { isInstallable, installApp } = usePWA();
  const [terminalStep, setTerminalStep] = useState(0);
  const [terminalCertified, setTerminalCertified] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const initials = firebaseUser.displayName 
          ? firebaseUser.displayName.split(" ").map(n => n[0]).join("").substring(0, 2)
          : "NS";
        setUser({
          name: firebaseUser.displayName || "Nextsem Student",
          email: firebaseUser.email || "",
          avatar: initials.toUpperCase(),
          photo: firebaseUser.photoURL
        });

        // Load terminal progress scoped by email
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
          }
        } catch (e) {
          console.error("Error loading terminal progress in profile:", e);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (err) {
      console.error("Sign-In Error: ", err);
      alert("Failed to authenticate with Google. Please check your network or console.");
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error("Sign-Out Error: ", err);
    }
  };

  const handleDeleteAccount = async () => {
    const confirmed = window.confirm(
      "⚠️ WARNING: Are you absolutely sure you want to delete your account? All progress, premium status, and saved credentials will be permanently deleted from Nextsem. This action cannot be undone."
    );
    if (!confirmed) return;

    try {
      const firebaseUser = auth.currentUser;
      if (firebaseUser) {
        await firebaseUser.delete();
        localStorage.removeItem('nextsem_user');
        localStorage.removeItem('nextsem_premium_badge');
        localStorage.removeItem('completed_chapters');
        window.dispatchEvent(new Event('nextsem_auth_changed'));
        alert("Your account and all associated data have been permanently deleted.");
        window.location.href = '/';
      }
    } catch (err: unknown) {
      console.error("Delete Account Error:", err);
      const error = err as { code?: string };
      if (error.code === 'auth/requires-recent-login') {
        alert("🔒 For security reasons, deleting your account requires a recent login. Please sign out, sign in again, and retry account deletion.");
      } else {
        alert("Failed to delete account. Please check your network connection and try again.");
      }
    }
  };

  const totalChapters = searchIndex.length;
  const progressPercent = totalChapters > 0 ? Math.round((totalCompleted / totalChapters) * 100) : 0;

  if (loading) {
    return (
      <div className="min-h-screen bg-[#060c18] flex items-center justify-center text-white">
        <div className="w-8 h-8 rounded-full border-4 border-emerald-400 border-t-transparent animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#060c18] to-slate-950 text-white pb-20">
      
      {/* Top Navbar */}
      <div className="h-16 border-b border-slate-850/50 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40 flex items-center px-4 md:px-8">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-slate-400 hover:text-white font-bold text-sm transition-all"
        >
          <ArrowLeft size={16} />
          <span>Back to Landing</span>
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4 pt-8 md:pt-12">
        <div className="mb-6">
          <AdSenseBanner />
        </div>
        
        {user ? (
          /* Logged In Dashboard Layout */
          <div className="space-y-8 animate-in fade-in duration-200">
            
            {/* Profile Info Header */}
            <div className="bg-slate-900/40 border border-slate-850/60 rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-emerald-500/5 pointer-events-none" />
              
              <div className="flex items-center gap-4 text-center sm:text-left flex-col sm:flex-row">
                {user.photo ? (
                  <img 
                    src={user.photo} 
                    alt={user.name} 
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-emerald-400/50 shadow-md"
                  />
                ) : (
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-black text-xl border-2 border-white/20 shadow-md">
                    {user.avatar}
                  </div>
                )}
                <div className="space-y-1">
                  <h1 className="text-xl md:text-2xl font-black tracking-tight">{user.name}</h1>
                  <p className="text-xs text-slate-400 font-bold">{user.email}</p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full text-[9px] font-black uppercase tracking-wider">
                      <Sparkles size={8} /> Student Account
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={handleSignOut}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-rose-500/10 hover:bg-rose-500 text-rose-500 hover:text-white border border-rose-500/20 rounded-xl text-xs font-black transition-all cursor-pointer shadow-sm hover:scale-[1.02] active:scale-98 shrink-0"
              >
                <LogOut size={14} />
                <span>Sign Out</span>
              </button>
            </div>

            {/* Course Progress Dashboard Card */}
            <div className="bg-slate-900/60 border border-slate-850 p-6 rounded-3xl space-y-4 shadow-lg text-left select-none">
              <div className="flex justify-between items-center">
                <span className="text-xs font-black uppercase tracking-wider text-slate-400">Total Curriculum Progress</span>
                <span className="text-sm font-black text-emerald-400">{progressPercent}% Completed</span>
              </div>
              
              <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-900 p-0.5">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-emerald-400 h-full rounded-full transition-all duration-500" 
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              <p className="text-[10px] text-slate-400 font-bold text-center">
                You have completed <span className="text-white font-extrabold">{totalCompleted}</span> out of <span className="text-white font-extrabold">{totalChapters}</span> total modules. Keep it up!
              </p>
            </div>

            {/* Terminal Command Simulator Progress Card */}
            <div className="bg-slate-900/60 border border-slate-850 p-6 rounded-3xl space-y-4 shadow-lg text-left select-none relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-violet-500/5 rounded-bl-3xl border-l border-b border-violet-500/5 flex items-center justify-center font-bold text-xs text-violet-400 select-none">
                ⊞
              </div>
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-slate-400">Terminal Command Simulator</span>
                <h3 className="text-lg font-black text-white uppercase tracking-tight mt-1">Windows CMD Workstation</h3>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-400">
                  {terminalCertified ? "🎉 Course Completed" : `Lesson ${terminalStep + 1} of 10`}
                </span>
                <span className="text-sm font-black text-violet-400">{terminalCertified ? 100 : Math.round((terminalStep / 10) * 100)}% Completed</span>
              </div>

              <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-900 p-0.5">
                <div 
                  className="bg-gradient-to-r from-violet-500 to-indigo-400 h-full rounded-full transition-all duration-500 shadow-[0_0_8px_#8b5cf6]"
                  style={{ width: `${terminalCertified ? 100 : (terminalStep / 10) * 100}%` }}
                />
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-2 text-[10px] text-slate-400">
                <span>Earned: <strong className="text-white font-extrabold">{terminalCertified ? 1000 : terminalStep * 100} XP</strong></span>
                <Link
                  href="/cmd"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-violet-650 hover:bg-violet-700 text-white font-black uppercase tracking-wider rounded-xl transition-all hover:scale-102 active:scale-98"
                >
                  <span>Launch CMD Workspace</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>



            {/* PWA Download Dashboard Card */}
            {isInstallable && (
              <div className="bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border border-blue-500/20 p-6 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg text-left relative overflow-hidden">
                <div className="space-y-1.5 max-w-xl">
                  <div className="flex items-center gap-2 text-white">
                    <span className="text-xl">📱</span>
                    <h3 className="font-black text-sm uppercase tracking-wider">Install Nextsem App</h3>
                  </div>
                  <p className="text-xs text-slate-350 leading-relaxed font-semibold">
                    Get Nextsem Academy installed on your home screen for instant full-screen access, quick loading, and offline learning.
                  </p>
                </div>
                
                <button
                  onClick={installApp}
                  className="w-full md:w-auto flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-xs shadow-md transition-all active:scale-95 cursor-pointer shrink-0"
                >
                  <Download size={14} className="stroke-[3]" />
                  <span>Download App</span>
                </button>
              </div>
            )}

            {/* Danger Zone: Delete Account */}
            <div className="bg-rose-950/10 border border-rose-500/20 p-6 rounded-3xl space-y-4 shadow-lg text-left select-none relative overflow-hidden">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="space-y-1.5 max-w-xl">
                  <div className="flex items-center gap-2 text-rose-400">
                    <span className="text-xl">⚠️</span>
                    <h3 className="font-black text-sm uppercase tracking-wider">Danger Zone</h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-semibold">
                    Deleting your account will permanently remove your progress, premium badge, and account credentials from Nextsem. This action is irreversible.
                  </p>
                </div>
                
                <button
                  onClick={handleDeleteAccount}
                  className="w-full md:w-auto flex items-center justify-center gap-2 px-5 py-3 bg-rose-600 hover:bg-rose-700 text-white rounded-2xl font-black text-xs shadow-md transition-all active:scale-95 cursor-pointer shrink-0"
                >
                  Delete Account
                </button>
              </div>
            </div>

            <AdSenseBanner />

            {/* Chapters Syllabus Checklist */}
            <div className="space-y-4 text-left">
              <h2 className="text-sm font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5 px-1">
                <BookOpen size={16} className="text-blue-500" /> Syllabus Chapters Checklist
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {searchIndex.map((chapter) => {
                  const isDone = completedChapters[chapter.id];
                  return (
                    <Link
                      key={chapter.id}
                      href={`/book/${chapter.id}`}
                      className={`p-4 bg-slate-900/20 hover:bg-slate-900/60 border rounded-2xl flex items-center justify-between gap-4 transition-all duration-300 group ${
                        isDone 
                          ? "border-emerald-500/30 shadow-[0_0_12px_rgba(16,185,129,0.05)]" 
                          : "border-slate-850 hover:border-blue-500/30"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        {isDone ? (
                          <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                        ) : (
                          <Circle size={18} className="text-slate-600 group-hover:text-slate-400 shrink-0" />
                        )}
                        <div className="min-w-0">
                          <span className="block text-xs font-black text-slate-200 truncate group-hover:text-blue-400 transition-colors">
                            {chapter.title}
                          </span>
                          <span className="block text-[9px] text-slate-500 font-bold uppercase mt-0.5 tracking-wider">
                            {chapter.phase} • {chapter.duration}
                          </span>
                        </div>
                      </div>
                      
                      <span className="text-[10px] font-black uppercase text-blue-500 group-hover:translate-x-0.5 transition-transform shrink-0">
                        Read →
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <AdSenseBanner />

          </div>
        ) : (
          /* Sign In Prompts Page */
          <div className="max-w-md mx-auto text-center space-y-6 pt-12 animate-in fade-in duration-200 select-none">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-blue-500 to-indigo-650 flex items-center justify-center text-white text-3xl font-black border border-white/10 shadow-lg">
              NS
            </div>
            
            <div className="space-y-2">
              <h1 className="text-xl md:text-2xl font-black uppercase tracking-wide">Nextsem Classroom</h1>
              <p className="text-xs text-slate-400 leading-relaxed font-bold max-w-xs mx-auto">
                Sign in with Google to sync and track your syllabus study checklist, completed chapters, and dashboard credentials.
              </p>
            </div>

            <AdSenseBanner />

            {/* Google Authentication Trigger Button */}
            <button
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-3 px-6 py-3.5 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold text-xs md:text-sm shadow-md hover:bg-gray-50 hover:-translate-y-0.5 transition-all active:scale-95 cursor-pointer"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span>Continue with Google</span>
            </button>

            <Link
              href="/"
              className="text-xs text-slate-500 hover:text-slate-350 block pt-1 hover:underline"
            >
              Go back home
            </Link>

            <AdSenseBanner />
          </div>
        )}

      </div>
    </div>
  );
}
