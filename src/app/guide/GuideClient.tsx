"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Terminal,
  Code2,
  Layers,
  Server,
  Database,
  Rocket,
  Laptop,
  BookOpen,
  CheckCircle2,
  Search,
  Filter,
  Check,
  Play,
  Lightbulb,
  ArrowRight,
  ShieldCheck,
  FolderKanban,
  FileCode,
  Sparkles,
  Compass,
} from "lucide-react";

interface GuideLesson {
  id: string;
  stepNumber: number;
  phaseId: "setup" | "cli" | "html" | "css" | "js" | "frontend" | "backend" | "db" | "projects";
  phaseName: string;
  title: string;
  category: string;
  duration: string;
  description: string;
  practicalGoal: string;
  link: string;
  isLive: boolean;
  windowsCommand?: string;
}

const MASTER_LESSONS: GuideLesson[] = [
  // ── PHASE 1: WORKSTATION & CLI SETUP ──
  {
    id: "step-1",
    stepNumber: 1,
    phaseId: "setup",
    phaseName: "Workstation Setup",
    title: "Visual Studio Code Download & 🪟 Windows 11 Setup Guide",
    category: "IDE & Environment",
    duration: "15 min",
    description: "Install VS Code on 🪟 Windows 11 with essential developer extensions (Prettier, Emmet, Live Server).",
    practicalGoal: "Right-click any project folder in Windows File Explorer and launch 'Open with Code'.",
    link: "/html/download-install-vscode-windows-11-setup-guide/",
    isLive: true,
  },
  {
    id: "step-2",
    stepNumber: 2,
    phaseId: "cli",
    phaseName: "Windows 11 CLI",
    title: "Windows Command Prompt (CMD) Terminal Basics",
    category: "Terminal CLI",
    duration: "20 min",
    description: "Learn how the Windows Command Prompt executes programs, interprets commands, and outputs system paths.",
    practicalGoal: "Launch CMD via Run dialog (Win + R -> cmd) and verify Windows version.",
    windowsCommand: "ver",
    link: "/cli/learn-windows-command-prompt-cmd-basics",
    isLive: true,
  },
  {
    id: "step-3",
    stepNumber: 3,
    phaseId: "cli",
    phaseName: "Windows 11 CLI",
    title: "Directory Navigation & Drive Switching (cd, dir)",
    category: "Terminal CLI",
    duration: "25 min",
    description: "Master folder traversal across C:, D:, and desktop paths using absolute and relative paths.",
    practicalGoal: "Navigate between drive partitions and list folder contents without touching the mouse.",
    windowsCommand: "cd /d D:\\projects && dir",
    link: "/cli/cd-change-directory-path-traversal",
    isLive: true,
  },
  {
    id: "step-4",
    stepNumber: 4,
    phaseId: "cli",
    phaseName: "Windows 11 CLI",
    title: "Creating Project Folders & Files (mkdir, type nul)",
    category: "Terminal CLI",
    duration: "25 min",
    description: "Instantly create project structures, HTML files, and subfolders directly from the command line.",
    practicalGoal: "Create a complete full-stack web project directory structure in one single command.",
    windowsCommand: "mkdir my-project && type nul > my-project\\index.html",
    link: "/cli/mkdir-create-directory-folders",
    isLive: true,
  },
  {
    id: "step-5",
    stepNumber: 5,
    phaseId: "cli",
    phaseName: "Windows 11 CLI",
    title: "System Processes & Network Diagnostics (ping, ipconfig, tasklist)",
    category: "Terminal CLI",
    duration: "30 min",
    description: "Inspect local IP configuration, test network packet latency, and manage running developer processes.",
    practicalGoal: "Diagnose local server port conflicts and inspect local network gateways.",
    windowsCommand: "ipconfig /all && ping google.com",
    link: "/cli/most-useful-cmd-commands-in-windows",
    isLive: true,
  },

  // ── PHASE 2: HTML5 FOUNDATION ──
  {
    id: "step-6",
    stepNumber: 6,
    phaseId: "html",
    phaseName: "HTML5 Structure",
    title: "What is the Internet, Web Servers & Your First HTML Page",
    category: "Web Fundamentals",
    duration: "20 min",
    description: "Understand client-server architecture, DNS resolution, and the fundamental HTML5 document skeleton.",
    practicalGoal: "Write and view your first valid <!DOCTYPE html> document in Google Chrome.",
    link: "/html/html-introduction-what-is-html/",
    isLive: true,
  },
  {
    id: "step-7",
    stepNumber: 7,
    phaseId: "html",
    phaseName: "HTML5 Structure",
    title: "HTML Headings (h1–h6) & Paragraph Structure",
    category: "Typography & Content",
    duration: "20 min",
    description: "Establish semantic document hierarchy, SEO keyword weights, and readability guidelines.",
    practicalGoal: "Structure an editorial blog article outline using proper H1, H2, and H3 nested headings.",
    link: "/html/html-headings-h1-h6/",
    isLive: true,
  },
  {
    id: "step-8",
    stepNumber: 8,
    phaseId: "html",
    phaseName: "HTML5 Structure",
    title: "Hyperlinks & Navigation Architecture (<a href>)",
    category: "Navigation",
    duration: "25 min",
    description: "Connect web pages using absolute URLs, relative file paths, email links, and target attributes.",
    practicalGoal: "Build a multi-page website navigation bar linking internal pages and external references.",
    link: "/html/html-links-hyperlinks-a-tag/",
    isLive: true,
  },
  {
    id: "step-9",
    stepNumber: 9,
    phaseId: "html",
    phaseName: "HTML5 Structure",
    title: "Lists (ul, ol, dl) & Semantic Data Tables (table, tr, td)",
    category: "Data Representation",
    duration: "30 min",
    description: "Format structured bullet lists, numbered recipes, and responsive multi-column data tables.",
    practicalGoal: "Code a pricing comparison matrix and feature checklist using semantic table tags.",
    link: "/html/html-tables-tr-td-th/",
    isLive: true,
  },
  {
    id: "step-10",
    stepNumber: 10,
    phaseId: "html",
    phaseName: "HTML5 Structure",
    title: "Interactive User Forms & Validation (<form>, <input>, <button>)",
    category: "User Inputs",
    duration: "35 min",
    description: "Capture user input: text, passwords, emails, radio buttons, checkboxes, dropdowns, and required validation.",
    practicalGoal: "Construct an interactive developer registration form with native HTML5 form validation.",
    link: "/html/html-forms-input-types/",
    isLive: true,
  },
  {
    id: "step-11",
    stepNumber: 11,
    phaseId: "html",
    phaseName: "HTML5 Structure",
    title: "Modern HTML5 Semantic Tags (<header>, <nav>, <main>, <footer>)",
    category: "Semantic Architecture",
    duration: "30 min",
    description: "Replace generic <div> soups with semantic layout landmarks recognized by Googlebot and screen readers.",
    practicalGoal: "Re-architect a messy non-semantic webpage into a clean HTML5 standard layout.",
    link: "/html/html-semantic-elements/",
    isLive: true,
  },
  {
    id: "step-12",
    stepNumber: 12,
    phaseId: "html",
    phaseName: "HTML5 Structure",
    title: "HTML5 Canvas 2D Surface Drawing (<canvas>)",
    category: "Graphics & Animation",
    duration: "35 min",
    description: "Render dynamic 2D shapes, geometric lines, colors, and game physics surfaces using the canvas API.",
    practicalGoal: "Draw interactive shapes and custom canvas graphics programmatically.",
    link: "/html/canvas-graphics-draw-shapes-context/",
    isLive: true,
  },
  {
    id: "step-13",
    stepNumber: 13,
    phaseId: "html",
    phaseName: "HTML5 Structure",
    title: "Capstone Project: Semantic Developer Portfolio Layout",
    category: "Milestone Project",
    duration: "45 min",
    description: "Apply all 100 HTML5 lessons to create a full semantic portfolio with bio, projects, and contact sections.",
    practicalGoal: "Build your own personal developer portfolio skeleton ready for CSS styling.",
    link: "/html/capstone-portfolio-layout-page/",
    isLive: true,
  },

  // ── PHASE 3: CSS3 & RESPONSIVE DESIGN ──
  {
    id: "step-14",
    stepNumber: 14,
    phaseId: "css",
    phaseName: "CSS3 & Design",
    title: "CSS Box Model, Colors & Typography",
    category: "Styling Fundamentals",
    duration: "30 min",
    description: "Master margins, padding, borders, content box sizing, web fonts, and modern color palettes.",
    practicalGoal: "Eliminate unwanted default browser margins and design clean card containers.",
    link: "/curriculum",
    isLive: true,
  },
  {
    id: "step-15",
    stepNumber: 15,
    phaseId: "css",
    phaseName: "CSS3 & Design",
    title: "Flexbox 1D Layout Mastery",
    category: "Modern Layouts",
    duration: "40 min",
    description: "Align, justify, distribute, and center items effortlessly using display: flex, gap, and flex-wrap.",
    practicalGoal: "Build a responsive header navbar and flexible card grid without floats or tables.",
    link: "/curriculum",
    isLive: true,
  },
  {
    id: "step-16",
    stepNumber: 16,
    phaseId: "css",
    phaseName: "CSS3 & Design",
    title: "CSS Grid 2D Dashboards & Auto-Fit Layouts",
    category: "Modern Layouts",
    duration: "45 min",
    description: "Create complex multi-row and multi-column web app dashboards with repeat(auto-fit, minmax()).",
    practicalGoal: "Design an analytics dashboard layout that adapts dynamically to any monitor width.",
    link: "/curriculum",
    isLive: true,
  },
  {
    id: "step-17",
    stepNumber: 17,
    phaseId: "css",
    phaseName: "CSS3 & Design",
    title: "Mobile-First Responsive Design & Media Queries",
    category: "Mobile Optimization",
    duration: "40 min",
    description: "Ensure seamless viewport adaptation from 360px mobile phones to 4K ultra-wide desktop screens.",
    practicalGoal: "Transform a desktop navigation menu into a touch-friendly mobile drawer.",
    link: "/curriculum",
    isLive: true,
  },

  // ── PHASE 4: JAVASCRIPT (ES6+) ──
  {
    id: "step-18",
    stepNumber: 18,
    phaseId: "js",
    phaseName: "JavaScript ES6+",
    title: "JavaScript Variables, Data Types & Arrow Functions",
    category: "Core Language",
    duration: "35 min",
    description: "Master let, const, primitive types, objects, arrays, arrow functions, and scope.",
    practicalGoal: "Write clean, modern JavaScript functions to calculate and transform data.",
    link: "/curriculum",
    isLive: true,
  },
  {
    id: "step-19",
    stepNumber: 19,
    phaseId: "js",
    phaseName: "JavaScript ES6+",
    title: "DOM Manipulation & Event Listeners",
    category: "Interactive Web",
    duration: "45 min",
    description: "Select elements with querySelector, modify text and classes, and respond to click/input events.",
    practicalGoal: "Build an interactive light/dark mode switcher and collapsible accordion.",
    link: "/curriculum",
    isLive: true,
  },
  {
    id: "step-20",
    stepNumber: 20,
    phaseId: "js",
    phaseName: "JavaScript ES6+",
    title: "Asynchronous JavaScript, Promises & Fetch API",
    category: "Network & APIs",
    duration: "50 min",
    description: "Understand the event loop, async/await syntax, making HTTP GET/POST requests, and handling JSON.",
    practicalGoal: "Fetch live data from a public REST API and render interactive UI cards on screen.",
    link: "/curriculum",
    isLive: true,
  },

  // ── PHASE 5: REACT.JS & NEXT.JS ──
  {
    id: "step-21",
    stepNumber: 21,
    phaseId: "frontend",
    phaseName: "React & Next.js",
    title: "React.js Component Architecture & JSX",
    category: "Frontend Frameworks",
    duration: "45 min",
    description: "Deconstruct interfaces into modular, reusable components using modern React JSX syntax.",
    practicalGoal: "Build a reusable UI component library (Buttons, Cards, Badges, Modals).",
    link: "/curriculum",
    isLive: true,
  },
  {
    id: "step-22",
    stepNumber: 22,
    phaseId: "frontend",
    phaseName: "React & Next.js",
    title: "React Reactive State (useState) & Side Effects (useEffect)",
    category: "Frontend Frameworks",
    duration: "50 min",
    description: "Manage component reactivity, user interactions, local state persistence, and lifecycle hooks.",
    practicalGoal: "Build a stateful shopping cart calculator with live quantity updates and subtotals.",
    link: "/curriculum",
    isLive: true,
  },
  {
    id: "step-23",
    stepNumber: 23,
    phaseId: "frontend",
    phaseName: "React & Next.js",
    title: "Next.js App Router, Static Export & SEO Metadata",
    category: "Full Stack Frontend",
    duration: "60 min",
    description: "Leverage Server Components, client boundaries, static site generation (SSG), and Open Graph SEO tags.",
    practicalGoal: "Build a multi-page Next.js web app pre-rendered for lightning-fast 300ms page loads.",
    link: "/full-stack-web-development-roadmap",
    isLive: true,
  },

  // ── PHASE 6: BACKEND & REST APIS ──
  {
    id: "step-24",
    stepNumber: 24,
    phaseId: "backend",
    phaseName: "Backend Engineering",
    title: "Node.js Server Runtime & NPM Package Ecosystem",
    category: "Server Engineering",
    duration: "40 min",
    description: "Understand the Node.js V8 runtime, package.json scripts, modules, and file system operations.",
    practicalGoal: "Initialize a backend Node.js server and configure automated dev restarts with nodemon.",
    link: "/curriculum",
    isLive: true,
  },
  {
    id: "step-25",
    stepNumber: 25,
    phaseId: "backend",
    phaseName: "Backend Engineering",
    title: "Express.js RESTful API Architecture",
    category: "API Development",
    duration: "50 min",
    description: "Design clean REST endpoints (GET, POST, PUT, DELETE), parse request bodies, and handle errors.",
    practicalGoal: "Build a complete CRUD API for managing course lessons and user reviews.",
    link: "/curriculum",
    isLive: true,
  },
  {
    id: "step-26",
    stepNumber: 26,
    phaseId: "backend",
    phaseName: "Backend Engineering",
    title: "User Authentication (JWT & Password Hashing with Bcrypt)",
    category: "Security & Auth",
    duration: "55 min",
    description: "Implement secure user registration, salted password hashing, JWT token signing, and auth middleware.",
    practicalGoal: "Create a secure user login API that protects private routes from unauthorized requests.",
    link: "/curriculum",
    isLive: true,
  },

  // ── PHASE 7: DATABASES ──
  {
    id: "step-27",
    stepNumber: 27,
    phaseId: "db",
    phaseName: "Database Architecture",
    title: "Relational SQL (PostgreSQL / MySQL) & Schema Modeling",
    category: "Relational Databases",
    duration: "45 min",
    description: "Define primary/foreign keys, one-to-many relationships, SQL joins, and indexing for performance.",
    practicalGoal: "Design an E-Commerce database schema with users, products, orders, and order items.",
    link: "/curriculum",
    isLive: true,
  },
  {
    id: "step-28",
    stepNumber: 28,
    phaseId: "db",
    phaseName: "Database Architecture",
    title: "Document NoSQL (MongoDB) & Prisma ORM Integration",
    category: "NoSQL & ORM",
    duration: "50 min",
    description: "Model flexible JSON documents, connect Prisma ORM, and run type-safe queries in TypeScript.",
    practicalGoal: "Perform database migrations and type-safe CRUD queries using Prisma ORM.",
    link: "/curriculum",
    isLive: true,
  },

  // ── PHASE 8: CAPSTONE PROJECTS & DEPLOYMENT ──
  {
    id: "step-29",
    stepNumber: 29,
    phaseId: "projects",
    phaseName: "Projects & Cloud",
    title: "10 Production Full Stack Projects Portfolio",
    category: "Capstone Portfolio",
    duration: "Ongoing",
    description: "Build 10 real-world applications (E-Commerce, Social Feed, Task Kanban, Dev Portfolio, Admin Portal).",
    practicalGoal: "Publish a standout GitHub portfolio to demonstrate job-ready software engineering skills.",
    link: "/course/projects",
    isLive: true,
  },
  {
    id: "step-30",
    stepNumber: 30,
    phaseId: "projects",
    phaseName: "Projects & Cloud",
    title: "Production Deployment on Firebase Hosting & Vercel",
    category: "Cloud Deployment",
    duration: "30 min",
    description: "Configure custom domains, SSL certificates, cache-control headers, and automated CI/CD deployments.",
    practicalGoal: "Deploy your full-stack web application live to https://yourdomain.online for the world to see.",
    link: "/course/projects",
    isLive: true,
  },
];

export default function GuideClient() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>({});

  // Load progress from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("nextsem_guide_progress");
      if (saved) {
        setCompletedSteps(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const toggleStep = (id: string) => {
    setCompletedSteps((prev) => {
      const updated = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem("nextsem_guide_progress", JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const filteredLessons = useMemo(() => {
    return MASTER_LESSONS.filter((lesson) => {
      const matchesFilter =
        activeFilter === "all" || lesson.phaseId === activeFilter;
      const matchesSearch =
        searchQuery.trim() === "" ||
        lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lesson.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lesson.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lesson.phaseName.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  const completedCount = Object.values(completedSteps).filter(Boolean).length;
  const progressPct = Math.round((completedCount / MASTER_LESSONS.length) * 100);

  return (
    <div className="min-h-screen bg-[#17181c] text-white flex flex-col font-sans selection:bg-[#04AA6D] selection:text-white">
      <Header />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-10">
        {/* ── HERO BANNER ── */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#1f222a] to-[#17181c] border border-white/10 p-6 sm:p-10 shadow-2xl overflow-hidden text-left">
          <div className="relative z-10 space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#04AA6D]/15 border border-[#04AA6D]/30 text-[#04AA6D] text-xs font-bold uppercase tracking-wider">
              <Compass size={14} />
              <span>The Definitive Developer Roadmap</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Complete Step-by-Step Learning Guide
            </h1>

            <p className="text-sm sm:text-base text-slate-100 font-normal leading-relaxed">
              This is the <strong className="text-white font-bold">exact, sequential order</strong> of lessons a student or developer must follow to master Full Stack Web Development on Nextsem Academy — from day-one <strong className="text-white font-bold">🪟 Windows 11 VS Code & CLI setup</strong> up to <strong className="text-white font-bold">React, Node.js REST APIs, and Cloud Deployment</strong>.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10">
              <div className="bg-black/30 p-3 rounded-xl border border-white/5">
                <div className="text-xl font-extrabold text-white">30 Steps</div>
                <div className="text-xs text-slate-400">Sequential Milestones</div>
              </div>
              <div className="bg-black/30 p-3 rounded-xl border border-white/5">
                <div className="text-xl font-extrabold text-[#04AA6D]">100+ Lessons</div>
                <div className="text-xs text-slate-400">Free Live Modules</div>
              </div>
              <div className="bg-black/30 p-3 rounded-xl border border-white/5">
                <div className="text-xl font-extrabold text-white">1-to-1 Match</div>
                <div className="text-xs text-slate-400">🪟 Windows 11 Verified</div>
              </div>
              <div className="bg-black/30 p-3 rounded-xl border border-white/5">
                <div className="text-xl font-extrabold text-[#04AA6D]">10 Projects</div>
                <div className="text-xs text-slate-400">Production Capstones</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── PROGRESS & INTERACTIVE CHECKLIST TRACKER ── */}
        <div className="bg-[#1f222a] border border-white/10 rounded-2xl p-5 sm:p-6 space-y-3 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={20} className="text-[#04AA6D]" />
              <h2 className="text-base sm:text-lg font-bold text-white">
                Your Course Progression Checklist
              </h2>
            </div>
            <span className="text-xs font-bold text-slate-300">
              {completedCount} of {MASTER_LESSONS.length} Steps Completed ({progressPct}%)
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2.5 bg-black/50 rounded-full overflow-hidden border border-white/5">
            <div
              className="h-full bg-gradient-to-r from-[#04AA6D] to-[#20c997] transition-all duration-500 rounded-full"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <p className="text-xs text-slate-400">
            Click the check circle on each lesson card as you complete it to save your learning journey locally!
          </p>
        </div>

        {/* ── FILTER & SEARCH BAR ── */}
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
            {/* Search Box */}
            <div className="relative flex-1">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                placeholder="Search by topic, command, or concept (e.g. VS Code, cd, canvas, React, API)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-[#1f222a] border border-white/10 rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#04AA6D] transition-colors"
              />
            </div>

            {/* Stage Quick Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
              {[
                { id: "all", label: "All Steps" },
                { id: "setup", label: "Setup" },
                { id: "cli", label: "🪟 CLI" },
                { id: "html", label: "HTML5" },
                { id: "css", label: "CSS3" },
                { id: "js", label: "JavaScript" },
                { id: "frontend", label: "React / Next" },
                { id: "backend", label: "Node / Express" },
                { id: "db", label: "Databases" },
                { id: "projects", label: "Projects" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    activeFilter === tab.id
                      ? "bg-[#04AA6D] text-white shadow-md shadow-[#04AA6D]/20"
                      : "bg-[#1f222a] text-slate-300 hover:text-white border border-white/5"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── ORDERED LESSONS STEP LIST ── */}
        <div className="space-y-4 text-left">
          {filteredLessons.map((lesson) => {
            const isDone = Boolean(completedSteps[lesson.id]);

            return (
              <div
                key={lesson.id}
                className={`group rounded-2xl border transition-all duration-300 p-5 sm:p-6 ${
                  isDone
                    ? "bg-[#141a16] border-[#04AA6D]/40"
                    : "bg-[#1f222a] border-white/10 hover:border-white/20"
                }`}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  {/* Step Badge & Checkbox */}
                  <div className="flex items-start sm:items-center gap-3.5 flex-1 min-w-0">
                    <button
                      onClick={() => toggleStep(lesson.id)}
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border transition-all cursor-pointer ${
                        isDone
                          ? "bg-[#04AA6D] border-[#04AA6D] text-white shadow-md shadow-[#04AA6D]/30"
                          : "bg-black/40 border-white/20 text-slate-400 hover:border-[#04AA6D] hover:text-white"
                      }`}
                      title={isDone ? "Mark as Incomplete" : "Mark as Completed"}
                    >
                      {isDone ? <Check size={18} /> : <span className="text-xs font-black">{lesson.stepNumber}</span>}
                    </button>

                    <div className="space-y-1 min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-white/10 text-slate-300 border border-white/10">
                          {lesson.phaseName}
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#04AA6D]/15 text-[#04AA6D] border border-[#04AA6D]/30">
                          {lesson.category}
                        </span>
                        <span className="text-[11px] text-slate-400">
                          ⏱️ {lesson.duration}
                        </span>
                      </div>

                      <h3 className={`text-base sm:text-lg font-bold tracking-tight ${
                        isDone ? "line-through text-slate-400" : "text-white"
                      }`}>
                        Step {lesson.stepNumber}: {lesson.title}
                      </h3>
                    </div>
                  </div>

                  {/* Action Link Button */}
                  <div className="shrink-0 self-end sm:self-center">
                    <Link
                      href={lesson.link}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-[#04AA6D] hover:text-[#039861] underline decoration-[#04AA6D] bg-[#04AA6D]/10 hover:bg-[#04AA6D]/20 border border-[#04AA6D]/30 transition-colors"
                    >
                      <span>Open Lesson</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>

                {/* Lesson Description & Practical Goal */}
                <div className="mt-3.5 pt-3.5 border-t border-white/5 space-y-2 text-xs sm:text-sm text-slate-100">
                  <p className="leading-relaxed">
                    {lesson.description}
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 pt-1">
                    <div className="inline-flex items-center gap-1.5 text-xs text-amber-300 font-medium">
                      <Lightbulb size={13} className="shrink-0 text-amber-400" />
                      <span><strong>Practical Objective:</strong> {lesson.practicalGoal}</span>
                    </div>

                    {lesson.windowsCommand && (
                      <div className="sm:ml-auto inline-flex items-center gap-1.5 font-mono text-[11px] bg-black/50 border border-white/10 px-2.5 py-1 rounded-md text-emerald-400">
                        <span>🪟</span>
                        <span>{lesson.windowsCommand}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── DEVELOPER GUIDANCE TIPS ── */}
        <div className="bg-[#1f222a] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 text-left">
          <div className="flex items-center gap-2.5">
            <ShieldCheck size={22} className="text-[#04AA6D]" />
            <h2 className="text-lg sm:text-xl font-extrabold text-white">
              Best Practice Guidelines for Developers & Learners
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-black/30 p-4 rounded-xl border border-white/5 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <span>📱 Dual-Screen Workflow</span>
              </h3>
              <p className="text-xs text-slate-100 leading-relaxed">
                Read each lesson on your mobile smartphone while sitting in front of your 🪟 Windows 11 PC. The screenshots and command line outputs are <strong className="text-white font-bold">1-to-1 identical line-by-line</strong> to actual Windows CMD and Chrome, allowing seamless side-by-side verification!
              </p>
            </div>

            <div className="bg-black/30 p-4 rounded-xl border border-white/5 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <span>⌨️ Muscle Memory First</span>
              </h3>
              <p className="text-xs text-slate-100 leading-relaxed">
                Never copy-paste code. Always hand-type commands into Command Prompt and HTML files into VS Code. This builds the neurological muscle memory necessary for high-velocity software engineering interviews.
              </p>
            </div>

            <div className="bg-black/30 p-4 rounded-xl border border-white/5 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <span>🎓 Capstones Matter Most</span>
              </h3>
              <p className="text-xs text-slate-100 leading-relaxed">
                Completing Step 13 (Semantic Portfolio) and Step 29 (10 Production Projects) provides you with real, tangible URLs that you can include on your resume, LinkedIn, and GitHub profile.
              </p>
            </div>

            <div className="bg-black/30 p-4 rounded-xl border border-white/5 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <span>🚀 Continuous Deployment</span>
              </h3>
              <p className="text-xs text-slate-100 leading-relaxed">
                Every project you build should be deployed live to the web using Firebase Hosting or Vercel. A project that only runs on `localhost` does not exist to employers!
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
