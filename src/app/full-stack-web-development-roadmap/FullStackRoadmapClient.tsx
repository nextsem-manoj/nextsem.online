"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WindowsIcon from "@/components/WindowsIcon";
import { useProgress } from "@/context/ProgressContext";
import { cliLessons } from "@/data/cliLessonsData";
import { htmlLessons } from "@/data/htmlLessonsData";
import { getLastLessonLocal, LastLesson } from "@/lib/userProgressSync";
import ResumeLessonBanner from "@/components/ResumeLessonBanner";
import {
  Code2,
  Layers,
  Server,
  Database,
  Rocket,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Clock,
  Briefcase,
  HelpCircle,
  TrendingUp,
  Check,
  Globe
} from "lucide-react";

interface Milestone {
  id: number;
  stepNumber: string;
  title: string;
  phase: "foundation" | "frontend" | "backend" | "deployment";
  phaseLabel: string;
  estimatedDuration: string;
  whyItMatters: string;
  topics: string[];
  skills: string[];
  ctaLabel?: string;
  ctaHref?: string;
  isSimulatorAvailable?: boolean;
}

const MILESTONES: Milestone[] = [
  {
    id: 1,
    stepNumber: "01",
    title: "Developer Environment & Terminal Mastery",
    phase: "foundation",
    phaseLabel: "Core Foundation",
    estimatedDuration: "1–2 Weeks",
    whyItMatters: "Every professional full stack developer operates through the command line to run local servers, install npm libraries, manage files, and automate builds.",
    topics: [
      "🪟 Windows 11 Command Prompt (CMD) architecture & navigation (`cd`, `dir`, `mkdir`)",
      "File management, folder trees, and path manipulation (`copy`, `del`, `move`)",
      "Environment Variables (`PATH`), Node.js, and npm runtime installation",
      "Automation basics with Windows Batch scripts (`.bat`) and CLI flags"
    ],
    skills: ["Windows 11 CMD", "CLI Navigation", "PATH Variables", "NPM Ecosystem", "Batch Scripting"],
    ctaLabel: "Start 30-Min Fast-Track (5 Commands) »",
    ctaHref: "/terminal-fast-track",
    isSimulatorAvailable: true
  },
  {
    id: 2,
    stepNumber: "02",
    title: "Semantic Web Architecture & HTML5",
    phase: "foundation",
    phaseLabel: "Core Foundation",
    estimatedDuration: "2 Weeks",
    whyItMatters: "HTML5 is the structural backbone of every website and web app. Clean semantic markup ensures fast rendering, search engine indexing, and screen reader accessibility.",
    topics: [
      "HTML5 Document Skeleton: `<!DOCTYPE html>`, `<head>`, `<body>`, and meta tags",
      "Semantic elements: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`",
      "Interactive forms & inputs: `<input>`, `<select>`, `<textarea>`, and validation attributes",
      "Rich media: `<img>`, `<video>`, `<audio>`, and Web Accessibility (ARIA & alt tags)"
    ],
    skills: ["HTML5 Standards", "Semantic Markup", "Form Handling", "SEO Basics", "Accessibility (a11y)"],
    ctaLabel: "Start HTML5 Lessons (30+ Live)",
    ctaHref: "/html",
    isSimulatorAvailable: true
  },
  {
    id: 3,
    stepNumber: "03",
    title: "Modern Styling, Flexbox, CSS Grid & Responsive UI",
    phase: "foundation",
    phaseLabel: "Core Foundation",
    estimatedDuration: "3 Weeks",
    whyItMatters: "Modern users expect responsive, mobile-optimized, fast-loading interfaces with fluid layouts, smooth transitions, and high-contrast accessibility.",
    topics: [
      "CSS Box Model: margins, paddings, borders, box-sizing, and specificity",
      "Modern Layout Engines: Flexbox (1D alignment) and CSS Grid (2D page layouts)",
      "Mobile-first responsive design using media queries and fluid clamp typography",
      "CSS Keyframe animations, hover states, transitions, and utility styling with Tailwind CSS"
    ],
    skills: ["CSS3", "Flexbox", "CSS Grid", "Responsive Design", "Tailwind CSS", "Keyframe Motion"],
    ctaLabel: "Explore CSS Mini-Projects",
    ctaHref: "/course/projects",
    isSimulatorAvailable: true
  },
  {
    id: 4,
    stepNumber: "04",
    title: "JavaScript (ES6+) Programming & DOM Logic",
    phase: "foundation",
    phaseLabel: "Core Foundation",
    estimatedDuration: "4–5 Weeks",
    whyItMatters: "JavaScript is the engine of the web. It turns static HTML/CSS pages into interactive, dynamic applications that respond to user clicks, handle state, and communicate with servers.",
    topics: [
      "Core language syntax: `const`/`let`, data types, arrow functions, and array methods (`map`, `filter`, `reduce`)",
      "Document Object Model (DOM): selecting nodes, event listeners, and live UI mutation",
      "Asynchronous programming: Callbacks, Promises, and `async`/`await` workflows",
      "Consuming REST APIs using `fetch()` and saving persistent data in `localStorage`"
    ],
    skills: ["JavaScript ES6+", "DOM Manipulation", "Async/Await", "Fetch API", "JSON Data", "LocalStorage"],
    ctaLabel: "Launch Code Sandbox Playground",
    ctaHref: "/playground",
    isSimulatorAvailable: true
  },
  {
    id: 5,
    stepNumber: "05",
    title: "Distributed Version Control with Git & GitHub",
    phase: "frontend",
    phaseLabel: "Frontend Engineering",
    estimatedDuration: "1–2 Weeks",
    whyItMatters: "Version control is how software engineering teams collaborate without overwriting each other's work. Git is mandatory for every developer job on earth.",
    topics: [
      "Git Core Commands: `git init`, `git add`, `git commit -m`, `git status`, and `git log`",
      "Branching strategies: creating feature branches (`git checkout -b`), switching, and merging",
      "Resolving merge conflicts and inspecting differences with `git diff`",
      "Remote repositories on GitHub: SSH keys, `git push`, `git pull`, and submitting Pull Requests (PRs)"
    ],
    skills: ["Git CLI", "GitHub", "Branching", "Merge Conflicts", "Pull Requests", "Commit History"],
    ctaLabel: "Launch Git Terminal Simulator",
    ctaHref: "/git",
    isSimulatorAvailable: true
  },
  {
    id: 6,
    stepNumber: "06",
    title: "Component-Driven Frontend with React.js",
    phase: "frontend",
    phaseLabel: "Frontend Engineering",
    estimatedDuration: "4–6 Weeks",
    whyItMatters: "React powers modern web frontends (including Nextsem itself). It lets you build modular, reusable UI components that dynamically update when data changes.",
    topics: [
      "Component Architecture: JSX syntax, passing Props, and conditional rendering",
      "React State Management: `useState` for component memory and UI reactivity",
      "Side Effects & Lifecycles: `useEffect` for fetching API data and subscribing to events",
      "Custom hooks, lifting state up, Context API, and form handling in React"
    ],
    skills: ["React.js", "JSX", "useState", "useEffect", "Custom Hooks", "Context API", "Component Trees"],
    ctaLabel: "View Dev Curriculum",
    ctaHref: "/curriculum"
  },
  {
    id: 7,
    stepNumber: "07",
    title: "Production Full Stack Framework: Next.js (App Router)",
    phase: "frontend",
    phaseLabel: "Frontend Engineering",
    estimatedDuration: "3–4 Weeks",
    whyItMatters: "Next.js is the industry standard for production React. It combines client-side interactivity with server-side rendering (SSR), search engine optimization (SEO), and backend API routes.",
    topics: [
      "Next.js App Router: file-based routing (`page.tsx`, `layout.tsx`, `loading.tsx`)",
      "React Server Components (RSC) vs Client Components (`'use client'`)",
      "Server-Side Rendering (SSR), Static Site Generation (SSG), and incremental caching",
      "Next.js Route Handlers (`route.ts`) for building lightweight backend API endpoints"
    ],
    skills: ["Next.js App Router", "Server Components", "SSR & SSG", "Dynamic Routing", "SEO Optimization"],
    ctaLabel: "Explore Interactive Modules",
    ctaHref: "/curriculum"
  },
  {
    id: 8,
    stepNumber: "08",
    title: "Backend Server Architecture: Node.js & Express REST APIs",
    phase: "backend",
    phaseLabel: "Backend & Data",
    estimatedDuration: "4–5 Weeks",
    whyItMatters: "The backend handles business logic, security, payments, user authentication, and data operations that cannot run safely on the user's browser.",
    topics: [
      "Node.js runtime: Event loop, asynchronous I/O, file system (`fs`), and path utilities",
      "Express.js framework: creating servers, route controllers, and HTTP request/response lifecycles",
      "RESTful API design: `GET`, `POST`, `PUT`, `PATCH`, `DELETE` with JSON payloads and HTTP status codes",
      "Middleware pipelines, CORS configuration, error handling, and JSON Web Tokens (JWT) authentication"
    ],
    skills: ["Node.js", "Express.js", "REST APIs", "HTTP Protocols", "JWT Authentication", "Middleware", "CORS"],
    ctaLabel: "View Backend Syllabus",
    ctaHref: "/curriculum"
  },
  {
    id: 9,
    stepNumber: "09",
    title: "Database Systems & Data Modeling (MongoDB & PostgreSQL)",
    phase: "backend",
    phaseLabel: "Backend & Data",
    estimatedDuration: "3–4 Weeks",
    whyItMatters: "Web apps are fundamentally engines for reading and writing persistent data. Knowing both SQL (relational) and NoSQL (document-based) databases makes you a complete engineer.",
    topics: [
      "NoSQL Databases: MongoDB collections, documents, BSON, and Mongoose schema modeling",
      "Relational Databases: PostgreSQL / MySQL tables, keys (Primary/Foreign), and SQL queries",
      "CRUD Operations: inserting records, querying with filters, updating fields, and soft deletion",
      "Database indexing, pagination, data validation, and Object-Relational Mappers (Prisma / Mongoose)"
    ],
    skills: ["MongoDB", "PostgreSQL", "SQL Queries", "Mongoose / Prisma", "Data Modeling", "CRUD Operations"],
    ctaLabel: "Check Database Modules",
    ctaHref: "/curriculum"
  },
  {
    id: 10,
    stepNumber: "10",
    title: "Full Stack Capstone Projects & Cloud Deployment",
    phase: "deployment",
    phaseLabel: "Production & Cloud",
    estimatedDuration: "4 Weeks",
    whyItMatters: "The final proof of your engineering ability is shipping real, production-ready, full stack applications live to the internet with database connections and custom domains.",
    topics: [
      "Connecting Frontend to Backend: handling environment variables (`.env`), API keys, and CORS",
      "Full MERN Stack & Next.js production builds: build optimization, bundling, and asset caching",
      "Cloud Deployment platforms: Vercel, Firebase Hosting, Render, and Railway",
      "Automated CI/CD pipelines with GitHub Actions and domain DNS configuration"
    ],
    skills: ["Full Stack Architecture", "MERN Stack", "Vercel / Firebase", "CI/CD Deployment", "Production Debugging"],
    ctaLabel: "Explore 15+ Live Projects",
    ctaHref: "/course/projects",
    isSimulatorAvailable: true
  }
];

export default function FullStackRoadmapClient() {
  const { completedChapters } = useProgress();
  const [activeTab, setActiveTab] = useState<"all" | "foundation" | "frontend" | "backend" | "deployment">("all");
  const [lastLesson, setLastLesson] = useState<LastLesson | null>(null);
  const [mounted, setMounted] = useState(false);

  const completedCliCount = cliLessons.filter(l => completedChapters[l.slug] || completedChapters[l.id]).length;
  const completedHtmlCount = htmlLessons.filter(l => completedChapters[l.slug] || completedChapters[l.id]).length;

  useEffect(() => {
    setMounted(true);
    const saved = getLastLessonLocal();
    if (saved) setLastLesson(saved);
  }, []);

  const filteredMilestones = activeTab === "all" 
    ? MILESTONES 
    : MILESTONES.filter(m => m.phase === activeTab);

  return (
    <div className="min-h-screen bg-[#17181c] text-white flex flex-col font-sans selection:bg-[#04AA6D]/30">
      
      {/* ── STANDARD HEADER ── */}
      <Header />

      <main className="flex-1 max-w-[1240px] w-full mx-auto px-4 md:px-8 py-10 space-y-12">
        
        {/* ── HERO BANNER ── */}
        <section className="text-center space-y-5 max-w-3xl mx-auto pt-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#04AA6D]/15 border border-[#04AA6D]/30 text-[#04AA6D] text-xs font-black uppercase tracking-widest">
            <Sparkles size={14} className="text-[#04AA6D]" />
            <span>Official Developer Career Blueprint 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Full Stack Web Development Roadmap
          </h1>

          <p className="text-slate-200 text-sm sm:text-base font-normal leading-relaxed">
            A clear, beginner-to-job-ready roadmap designed for aspiring software engineers. Master the complete stack step-by-step — from <strong className="text-white font-bold">⊞ Windows 11 CMD</strong> and <strong className="text-white font-bold">HTML5</strong> up to <strong className="text-white font-bold">React 19, Next.js, Node.js REST APIs, MongoDB</strong>, and cloud deployment.
          </p>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
            <div className="p-3 bg-[#1e2029] border border-slate-800 rounded-2xl text-left">
              <div className="text-[11px] font-black text-slate-400 uppercase tracking-wider">Milestones</div>
              <div className="text-xl font-extrabold text-white mt-0.5">10 Steps</div>
              <div className="text-[11px] text-[#04AA6D] font-bold">Zero to Production</div>
            </div>

            <div className="p-3 bg-[#1e2029] border border-slate-800 rounded-2xl text-left">
              <div className="text-[11px] font-black text-slate-400 uppercase tracking-wider">Estimated Time</div>
              <div className="text-xl font-extrabold text-white mt-0.5">6–9 Months</div>
              <div className="text-[11px] text-[#04AA6D] font-bold">1–2 Hours Daily</div>
            </div>

            <div className="p-3 bg-[#1e2029] border border-slate-800 rounded-2xl text-left">
              <div className="text-[11px] font-black text-slate-400 uppercase tracking-wider">Curriculum Cost</div>
              <div className="text-xl font-extrabold text-white mt-0.5">100% Free</div>
              <div className="text-[11px] text-[#04AA6D] font-bold">Zero Paywalls</div>
            </div>

            <div className="p-3 bg-[#1e2029] border border-slate-800 rounded-2xl text-left">
              <div className="text-[11px] font-black text-slate-400 uppercase tracking-wider">Simulators</div>
              <div className="text-xl font-extrabold text-white mt-0.5">Interactive</div>
              <div className="text-[11px] text-[#04AA6D] font-bold">In-Browser Practice</div>
            </div>
          </div>
        </section>

        {/* ── RETURNING USER LIVE PROGRESS DASHBOARD ── */}
        {mounted && (completedCliCount > 0 || completedHtmlCount > 0 || lastLesson) && (
          <section className="bg-[#1e2029] border border-[#04AA6D]/40 rounded-3xl p-6 sm:p-7 shadow-2xl space-y-5 max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div className="space-y-1">
                <span className="text-[10px] font-black text-[#04AA6D] uppercase tracking-widest flex items-center gap-1.5">
                  <TrendingUp size={14} />
                  <span>Your Live Progress Status</span>
                </span>
                <h2 className="text-xl font-extrabold text-white">
                  Current Syllabus Mastery
                </h2>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-slate-200 bg-[#17181c] border border-slate-800 px-3.5 py-1.5 rounded-xl">
                <span>Completed:</span>
                <strong className="text-[#04AA6D] font-extrabold text-sm">{completedCliCount + completedHtmlCount}</strong>
                <span>Lessons</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/cli"
                className="p-4 bg-[#17181c] border border-slate-800 hover:border-[#04AA6D] rounded-2xl flex items-center justify-between transition-colors group"
              >
                <div className="space-y-1">
                  <div className="text-xs font-black text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <WindowsIcon className="w-3.5 h-3.5 text-slate-400" />
                    <span>🪟 Windows 11 CMD CLI</span>
                  </div>
                  <div className="text-sm font-extrabold text-white group-hover:text-[#04AA6D] transition-colors">
                    {completedCliCount} / {cliLessons.length} Lessons Finished
                  </div>
                </div>
                <span className="text-xs font-bold text-[#04AA6D] underline decoration-[#04AA6D]">
                  Continue CLI »
                </span>
              </Link>

              <Link
                href="/html"
                className="p-4 bg-[#17181c] border border-slate-800 hover:border-[#04AA6D] rounded-2xl flex items-center justify-between transition-colors group"
              >
                <div className="space-y-1">
                  <div className="text-xs font-black text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Code2 size={14} className="text-slate-400" />
                    <span>HTML5 Web Architecture</span>
                  </div>
                  <div className="text-sm font-extrabold text-white group-hover:text-[#04AA6D] transition-colors">
                    {completedHtmlCount} / {htmlLessons.length} Lessons Finished
                  </div>
                </div>
                <span className="text-xs font-bold text-[#04AA6D] underline decoration-[#04AA6D]">
                  Continue HTML »
                </span>
              </Link>
            </div>

            {lastLesson && (
              <div className="pt-2">
                <ResumeLessonBanner lastLesson={lastLesson} />
              </div>
            )}
          </section>
        )}

        {/* ── ARCHITECTURE EXPLAINER: THE 3 PILLARS OF FULL STACK ── */}
        <section className="bg-[#1e2029] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#04AA6D] bg-[#04AA6D]/15 border border-[#04AA6D]/30 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
              <Layers size={13} />
              <span>Full Stack Mental Model</span>
            </span>
            <h2 className="text-2xl font-extrabold text-white mt-2">
              What Does a Full Stack Web Developer Actually Build?
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm font-normal mt-1 leading-relaxed">
              A full stack web engineer understands and connects all three core layers of web software:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Pillar 1: Frontend */}
            <div className="p-5 bg-[#17181c] border border-slate-800 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Globe size={22} />
              </div>
              <h3 className="text-base font-extrabold text-white">
                1. The Client (Frontend)
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Everything the user sees and touches in their web browser. Built using <strong className="text-white font-bold">HTML5</strong> for structure, <strong className="text-white font-bold">CSS3/Tailwind</strong> for visual beauty, and <strong className="text-white font-bold">React.js / Next.js</strong> for interactive state.
              </p>
              <div className="text-[11px] font-mono text-slate-400 bg-black/40 px-2.5 py-1.5 rounded-lg border border-slate-800">
                Technologies: HTML5, CSS3, JS ES6+, React, Next.js
              </div>
            </div>

            {/* Pillar 2: Backend */}
            <div className="p-5 bg-[#17181c] border border-slate-800 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-[#04AA6D]">
                <Server size={22} />
              </div>
              <h3 className="text-base font-extrabold text-white">
                2. The Server (Backend API)
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                The brain running in the cloud. Listens to HTTP requests from the frontend, verifies passwords and JWT tokens, processes payment calculations, and enforces business logic via <strong className="text-white font-bold">Node.js & Express</strong>.
              </p>
              <div className="text-[11px] font-mono text-slate-400 bg-black/40 px-2.5 py-1.5 rounded-lg border border-slate-800">
                Technologies: Node.js, Express.js, REST APIs, JWT Auth
              </div>
            </div>

            {/* Pillar 3: Database & Cloud */}
            <div className="p-5 bg-[#17181c] border border-slate-800 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Database size={22} />
              </div>
              <h3 className="text-base font-extrabold text-white">
                3. The Database & Cloud Storage
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                The persistent memory. Stores registered user accounts, order logs, posts, and media. Managed with <strong className="text-white font-bold">MongoDB</strong> (NoSQL) and <strong className="text-white font-bold">PostgreSQL</strong> (SQL) and deployed to live cloud hosting.
              </p>
              <div className="text-[11px] font-mono text-slate-400 bg-black/40 px-2.5 py-1.5 rounded-lg border border-slate-800">
                Technologies: MongoDB, PostgreSQL, Firebase, Vercel
              </div>
            </div>
          </div>
        </section>

        {/* ── ROADMAP FILTER TABS ── */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-[10px] font-black text-[#04AA6D] uppercase tracking-widest">
                Curriculum Progression
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                The 10-Milestone Developer Pathway
              </h2>
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "all"
                    ? "bg-[#04AA6D] text-black font-extrabold shadow-md"
                    : "bg-[#1e2029] text-slate-300 hover:text-white border border-slate-800"
                }`}
              >
                All 10 Steps
              </button>
              <button
                onClick={() => setActiveTab("foundation")}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === "foundation"
                    ? "bg-[#04AA6D] text-black font-extrabold shadow-md"
                    : "bg-[#1e2029] text-slate-300 hover:text-white border border-slate-800"
                }`}
              >
                1. Core Foundations (1–4)
              </button>
              <button
                onClick={() => setActiveTab("frontend")}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === "frontend"
                    ? "bg-[#04AA6D] text-black font-extrabold shadow-md"
                    : "bg-[#1e2029] text-slate-300 hover:text-white border border-slate-800"
                }`}
              >
                2. Frontend & React (5–7)
              </button>
              <button
                onClick={() => setActiveTab("backend")}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === "backend"
                    ? "bg-[#04AA6D] text-black font-extrabold shadow-md"
                    : "bg-[#1e2029] text-slate-300 hover:text-white border border-slate-800"
                }`}
              >
                3. Backend & DB (8–9)
              </button>
              <button
                onClick={() => setActiveTab("deployment")}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === "deployment"
                    ? "bg-[#04AA6D] text-black font-extrabold shadow-md"
                    : "bg-[#1e2029] text-slate-300 hover:text-white border border-slate-800"
                }`}
              >
                4. Projects & Cloud (10)
              </button>
            </div>
          </div>

          {/* ── THE STEP CARDS LIST ── */}
          <div className="space-y-6">
            {filteredMilestones.map((milestone) => (
              <div
                key={milestone.id}
                className="bg-[#1e2029] border border-slate-800 hover:border-[#04AA6D]/50 rounded-3xl p-6 sm:p-8 transition-all shadow-xl space-y-5 group"
              >
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-850 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#04AA6D]/15 border border-[#04AA6D]/40 text-[#04AA6D] flex items-center justify-center font-mono font-black text-lg shadow-inner">
                      {milestone.stepNumber}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[10px] font-black uppercase tracking-wider text-[#04AA6D] bg-[#04AA6D]/10 px-2 py-0.5 rounded-md border border-[#04AA6D]/20">
                          {milestone.phaseLabel}
                        </span>
                        <span className="text-[11px] text-slate-400 flex items-center gap-1 font-medium">
                          <Clock size={12} />
                          <span>{milestone.estimatedDuration}</span>
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1 group-hover:text-[#04AA6D] transition-colors">
                        Step {milestone.id}: {milestone.title}
                      </h3>
                    </div>
                  </div>

                  {milestone.ctaHref && (
                    <Link
                      href={milestone.ctaHref}
                      className="px-4 py-2.5 rounded-xl bg-[#04AA6D] hover:bg-[#039861] text-black hover:text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-md shrink-0 flex items-center justify-center gap-1.5 self-start sm:self-auto cursor-pointer"
                    >
                      <span>{milestone.ctaLabel || "Start Learning »"}</span>
                      <ArrowRight size={14} />
                    </Link>
                  )}
                </div>

                {/* Why It Matters */}
                <div className="bg-[#17181c] p-4 rounded-2xl border border-slate-800">
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                    <strong className="text-white font-bold">Why it matters:</strong> {milestone.whyItMatters}
                  </p>
                </div>

                {/* Topics to Master */}
                <div className="space-y-2">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-300">
                    What You Will Master:
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-200">
                    {milestone.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start gap-2 bg-[#17181c]/60 p-2.5 rounded-xl border border-slate-850">
                        <CheckCircle2 size={15} className="text-[#04AA6D] shrink-0 mt-0.5" />
                        <span className="leading-snug">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills tags */}
                <div className="flex items-center gap-1.5 flex-wrap pt-1">
                  <span className="text-[11px] font-bold text-slate-400 mr-1">Skills:</span>
                  {milestone.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] font-mono font-bold text-slate-300 bg-black/40 border border-slate-800 px-2 py-0.5 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── JOB-READY CAPABILITY MATRIX ── */}
        <section className="bg-[#1e2029] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#04AA6D] bg-[#04AA6D]/15 border border-[#04AA6D]/30 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
              <Briefcase size={13} />
              <span>Career Benchmarks</span>
            </span>
            <h2 className="text-2xl font-extrabold text-white mt-2">
              Job-Ready Full Stack Developer Skill Matrix
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm font-normal mt-1 leading-relaxed">
              What engineering hiring managers look for when assessing junior vs mid-level full stack developers:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Junior Dev Checklist */}
            <div className="p-6 bg-[#17181c] border border-slate-800 rounded-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Entry Level</div>
                  <h3 className="text-lg font-extrabold text-white">Junior Full Stack Developer</h3>
                </div>
                <span className="text-xs font-mono font-black text-[#04AA6D] bg-[#04AA6D]/10 px-2.5 py-1 rounded-full border border-[#04AA6D]/30">
                  Steps 1–7
                </span>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-200">
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-[#04AA6D]" />
                  <span>Navigate 🪟 Windows 11 terminal & install npm packages</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-[#04AA6D]" />
                  <span>Build semantic, mobile-responsive HTML5 & Tailwind layouts</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-[#04AA6D]" />
                  <span>Write asynchronous JavaScript with `async`/`await` & `fetch`</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-[#04AA6D]" />
                  <span>Create modular React components with `useState` & `useEffect`</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-[#04AA6D]" />
                  <span>Manage team code, branches, and pull requests via Git & GitHub</span>
                </li>
              </ul>
            </div>

            {/* Mid-Level Dev Checklist */}
            <div className="p-6 bg-[#17181c] border border-[#04AA6D]/40 rounded-2xl space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div>
                  <div className="text-[10px] font-black text-[#04AA6D] uppercase tracking-wider">Independent Contributor</div>
                  <h3 className="text-lg font-extrabold text-white">Full Stack Software Engineer</h3>
                </div>
                <span className="text-xs font-mono font-black text-black bg-[#04AA6D] px-2.5 py-1 rounded-full font-bold">
                  Steps 1–10
                </span>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-200">
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-[#04AA6D]" />
                  <span>Build production Next.js apps with Server Components & SSR</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-[#04AA6D]" />
                  <span>Design secure Node.js Express REST APIs with JWT authentication</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-[#04AA6D]" />
                  <span>Model relational SQL and NoSQL databases with schema validation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-[#04AA6D]" />
                  <span>Deploy end-to-end full stack web applications to live cloud hosting</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-[#04AA6D]" />
                  <span>Optimize web performance, Core Web Vitals, and SEO tags</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── FREQUENTLY ASKED QUESTIONS ── */}
        <section className="bg-[#1e2029] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#04AA6D] bg-[#04AA6D]/15 border border-[#04AA6D]/30 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
              <HelpCircle size={13} />
              <span>Beginner Clarifications</span>
            </span>
            <h2 className="text-2xl font-extrabold text-white mt-2">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-[#17181c] border border-slate-800 rounded-2xl space-y-1.5">
              <h3 className="text-sm font-extrabold text-white">
                1. Why should I learn 🪟 Windows CMD terminal commands before HTML or React?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Modern web development doesn&apos;t happen by double-clicking files. You use the command line every single day to install libraries (`npm install`), start dev servers (`npm run dev`), commit Git changes (`git commit`), and test REST APIs. Starting with <Link href="/cli" className="text-[#04AA6D] hover:text-[#039861] underline decoration-[#04AA6D] font-semibold">Windows CLI</Link> builds unshakable technical confidence.
              </p>
            </div>

            <div className="p-4 bg-[#17181c] border border-slate-800 rounded-2xl space-y-1.5">
              <h3 className="text-sm font-extrabold text-white">
                2. Do I need to master C or C++ before learning Full Stack Web Development?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                No. While low-level languages like C and C++ teach memory management, web developers primarily write <strong className="text-white font-bold">JavaScript, TypeScript, and modern frameworks</strong>. You can start directly with HTML5 and JavaScript without learning C first.
              </p>
            </div>

            <div className="p-4 bg-[#17181c] border border-slate-800 rounded-2xl space-y-1.5">
              <h3 className="text-sm font-extrabold text-white">
                3. How much time should I study every day?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Consistency beats intensity. Dedicating <strong className="text-white font-bold">60 to 90 minutes every day</strong> to writing code and completing exercises will make you job-ready in 6 to 9 months.
              </p>
            </div>

            <div className="p-4 bg-[#17181c] border border-slate-800 rounded-2xl space-y-1.5">
              <h3 className="text-sm font-extrabold text-white">
                4. Are all courses, simulators, and lessons free on Nextsem Academy?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Yes. 100% of our lessons, interactive simulators, and project codebases are completely free with zero hidden paywalls or subscription gates.
              </p>
            </div>
          </div>
        </section>

        {/* ── BOTTOM CALL TO ACTION ── */}
        <section className="bg-gradient-to-br from-[#1e2029] to-[#12141a] border border-[#04AA6D]/50 rounded-3xl p-8 sm:p-12 text-center space-y-5 shadow-2xl">
          <div className="w-14 h-14 rounded-2xl bg-[#04AA6D]/20 border border-[#04AA6D] flex items-center justify-center text-[#04AA6D] mx-auto shadow-lg">
            <Rocket size={28} />
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to Begin Your Full Stack Journey?
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-normal">
            Take the first step right now. Complete Step 1 on our interactive Windows Command Prompt terminal simulator or jump into semantic HTML5 markup.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/cli"
              className="px-6 py-3.5 rounded-xl bg-[#04AA6D] hover:bg-[#039861] text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-xl flex items-center gap-2 cursor-pointer"
            >
              <WindowsIcon className="w-4 h-4 text-black" />
              <span>Start Step 1: Windows CMD »</span>
            </Link>

            <Link
              href="/html"
              className="px-6 py-3.5 rounded-xl bg-[#17181c] hover:bg-slate-800 text-white border border-slate-700 font-extrabold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 cursor-pointer"
            >
              <Code2 size={16} className="text-[#04AA6D]" />
              <span>Start Step 2: HTML5 Lessons »</span>
            </Link>
          </div>
        </section>

      </main>

      {/* ── STANDARD FOOTER ── */}
      <Footer />

    </div>
  );
}
