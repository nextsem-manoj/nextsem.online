"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Check, BookOpen, Clock, BarChart2, Sparkles, Play, Code2, Flame, Terminal, Globe, Box, Waves, Target, Filter, Zap, CreditCard, Dna, Droplets, Orbit } from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import AdSenseBanner from "../../../components/AdSenseBanner";

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  category: "Interactive Lab" | "JS/DOM App" | "React Project" | "Full Stack App";
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  liveRoute?: string;
  icon: React.ElementType;
  accentColor: string;
  badgeBg: string;
  requiredChapters: string[];
  requiredChapterTitles: string[];
}

const PROJECTS: ProjectItem[] = [
  {
    id: "candle-flame",
    title: "Project 1: Realistic CSS Candle Flame Animation",
    description: "Build a realistic flickering candle flame using asymmetrical border-radius curves, concentric color layering, ambient room glow, and keyframe flame physics.",
    category: "Interactive Lab",
    difficulty: "Beginner",
    duration: "1-2 Hours",
    liveRoute: "/candle-flame-animation",
    icon: Flame,
    accentColor: "from-amber-500 to-orange-500",
    badgeBg: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    requiredChapters: ["p1-1-intro-and-text", "p1-2-links-and-media", "p2-3-box-model", "p2-4-positioning"],
    requiredChapterTitles: ["HTML Elements", "CSS Box Model", "CSS Positioning", "Keyframe Animations"]
  },
  {
    id: "matrix-code",
    title: "Project 2: Digital Matrix Code Rain Animation",
    description: "Construct the legendary Matrix green digital code rain stream with keyframe vertical translation, laser text-shadow glow, and multi-column staggered speeds.",
    category: "Interactive Lab",
    difficulty: "Intermediate",
    duration: "2-3 Hours",
    liveRoute: "/matrix-code-animation",
    icon: Terminal,
    accentColor: "from-[#04AA6D] to-emerald-400",
    badgeBg: "bg-[#04AA6D]/10 text-[#04AA6D] border-[#04AA6D]/30",
    requiredChapters: ["p2-4-positioning", "p2-5-flexbox", "p3-1-basics"],
    requiredChapterTitles: ["CSS Keyframe Motion", "Flexbox Columns", "CSS Text Shadow Laser Glow"]
  },
  {
    id: "solar-system",
    title: "Project 3: Solar System 3D Planet Orbit Loader",
    description: "Design a 3D orbital space loader with glowing sun core, concentric circular planet orbits, Kepler rotational speed calculations, and spherical planet gradients.",
    category: "Interactive Lab",
    difficulty: "Intermediate",
    duration: "3-4 Hours",
    liveRoute: "/solar-system-animation",
    icon: Globe,
    accentColor: "from-sky-500 to-blue-500",
    badgeBg: "bg-sky-500/10 text-sky-400 border-sky-500/30",
    requiredChapters: ["p2-3-box-model", "p2-4-positioning", "p2-5-flexbox"],
    requiredChapterTitles: ["CSS Border Radius Orbits", "CSS Absolute Center", "CSS Rotational Physics"]
  },
  {
    id: "cube-3d",
    title: "Project 4: 3D Perspective Card Flip Physics",
    description: "Create a 3D perspective card flip with 1000px perspective depth, rotateY(180deg) dual-face cards, backface-visibility hiding, and metallic glass gradients.",
    category: "Interactive Lab",
    difficulty: "Intermediate",
    duration: "2-3 Hours",
    liveRoute: "/3d-cube-animation",
    icon: Box,
    accentColor: "from-cyan-500 to-sky-400",
    badgeBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    requiredChapters: ["p2-4-positioning", "p2-6-grid"],
    requiredChapterTitles: ["CSS 3D Perspective", "Preserve-3D Transform", "Backface Visibility"]
  },
  {
    id: "animated-waves",
    title: "Project 5: Animated Ocean Waves & Bobbing",
    description: "Craft a multi-layer ocean wave loader featuring SVG bezier curve path templates, translucent depth opacities, horizontal scrolling, and floating boat bobbing.",
    category: "Interactive Lab",
    difficulty: "Advanced",
    duration: "4-5 Hours",
    liveRoute: "/animated-waves-animation",
    icon: Waves,
    accentColor: "from-teal-400 to-emerald-500",
    badgeBg: "bg-teal-500/10 text-teal-400 border-teal-500/30",
    requiredChapters: ["p1-2-links-and-media", "p2-4-positioning"],
    requiredChapterTitles: ["SVG Vector Curves", "Multi-Layer Wave Opacities", "Sinusoidal Bobbing"]
  },
  {
    id: "glitch-text",
    title: "Project 6: Cyberpunk 2077 Glitch Text",
    description: "Master CSS clip-path polygon slicing, pseudo-element RGB channel separation, and high-frequency displacement keyframe physics.",
    category: "Interactive Lab",
    difficulty: "Intermediate",
    duration: "2-3 Hours",
    liveRoute: "/glitch-text-animation",
    icon: Zap,
    accentColor: "from-cyan-400 to-rose-500",
    badgeBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    requiredChapters: ["p2-4-positioning", "p2-5-flexbox"],
    requiredChapterTitles: ["CSS Pseudo-elements", "CSS Clip-Path", "Chromatic Aberration"]
  },
  {
    id: "holographic-card",
    title: "Project 7: 3D Holographic Foil Card Tilt",
    description: "Learn 3D perspective depth styling, Z-axis translate stacking, rainbow foil gradient blending, and cursor-driven gyroscope physics.",
    category: "Interactive Lab",
    difficulty: "Intermediate",
    duration: "3-4 Hours",
    liveRoute: "/holographic-card-animation",
    icon: CreditCard,
    accentColor: "from-amber-400 to-pink-500",
    badgeBg: "bg-amber-500/10 text-amber-300 border-amber-500/30",
    requiredChapters: ["p2-4-positioning", "p3-9-events"],
    requiredChapterTitles: ["CSS 3D Transforms", "Preserve-3D", "Mousemove Gyroscope"]
  },
  {
    id: "dna-helix",
    title: "Project 8: 3D Rotating DNA Double Helix",
    description: "Master mathematical harmonic sine wave keyframes, staggered phase delays, and 3D Z-depth scaling physics.",
    category: "Interactive Lab",
    difficulty: "Advanced",
    duration: "3-4 Hours",
    liveRoute: "/dna-helix-animation",
    icon: Dna,
    accentColor: "from-emerald-400 to-teal-400",
    badgeBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    requiredChapters: ["p2-4-positioning", "p2-5-flexbox"],
    requiredChapterTitles: ["Sinusoidal Keyframes", "Staggered Delays", "3D Depth Scaling"]
  },
  {
    id: "liquid-wave",
    title: "Project 9: Liquid Glass Battery & Wave",
    description: "Master the famous border-radius 40% rotational wave geometry trick, dual fluid layering, and dynamic charge levels.",
    category: "Interactive Lab",
    difficulty: "Intermediate",
    duration: "2-3 Hours",
    liveRoute: "/liquid-wave-animation",
    icon: Droplets,
    accentColor: "from-emerald-400 to-cyan-400",
    badgeBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    requiredChapters: ["p2-3-box-model", "p2-4-positioning"],
    requiredChapterTitles: ["Rotational Waves", "Overflow Masking", "Bubble Particles"]
  },
  {
    id: "black-hole",
    title: "Project 10: Black Hole Gravitational Lensing",
    description: "Simulate relativistic accretion disk rotation with conic-gradient, photon spheres, and light bending lensing arcs.",
    category: "Interactive Lab",
    difficulty: "Advanced",
    duration: "4-5 Hours",
    liveRoute: "/black-hole-animation",
    icon: Orbit,
    accentColor: "from-amber-500 to-red-500",
    badgeBg: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    requiredChapters: ["p2-4-positioning", "p2-5-flexbox"],
    requiredChapterTitles: ["Conic Gradients", "3D Disk Inclination", "Photon Sphere Glow"]
  },
  {
    id: "currency-converter",
    title: "Project 11: Live Currency Converter & Rates Widget",
    description: "Build a functional exchange converter querying online rates via API, parsing JSON details, and updating numbers dynamically on keypress.",
    category: "JS/DOM App",
    difficulty: "Intermediate",
    duration: "5-6 Hours",
    icon: Code2,
    accentColor: "from-yellow-500 to-amber-400",
    badgeBg: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
    requiredChapters: ["p3-1-basics", "p3-2-control-flow", "p3-3-functions", "p3-9-events", "p3-10-storages"],
    requiredChapterTitles: ["JS Basics", "Control Flow", "Functions & Fetch API", "DOM Event Handling"]
  },
  {
    id: "markdown-editor",
    title: "Project 12: Markdown Live Note Editor",
    description: "Construct a split-screen React notebook displaying written markdown syntax on the left and a live formatted output preview on the right.",
    category: "React Project",
    difficulty: "Intermediate",
    duration: "6-8 Hours",
    icon: BookOpen,
    accentColor: "from-blue-500 to-cyan-400",
    badgeBg: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    requiredChapters: ["p4-1-jsx", "p4-2-components", "p4-4-state", "p4-6-refs"],
    requiredChapterTitles: ["React JSX", "React Components", "React State & Hooks", "React Refs"]
  },
  {
    id: "kanban-board",
    title: "Project 13: Trello Kanban Board Workspace",
    description: "Develop an advanced drag-and-drop workflow planner with multiple columns (To Do, In Progress, Done) for tracking team software tasks.",
    category: "Full Stack App",
    difficulty: "Advanced",
    duration: "10-12 Hours",
    icon: Sparkles,
    accentColor: "from-emerald-500 to-teal-400",
    badgeBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    requiredChapters: ["p3-5-array-iterators", "p3-7-dom-selection", "p4-8-context", "p5-1-node"],
    requiredChapterTitles: ["Array Iterators", "HTML Drag & Drop", "React Context", "Node.js Basics"]
  },
  {
    id: "student-portal",
    title: "Project 14: BCA Student Dashboard Portal",
    description: "Architect a complete web system for tracking homework checklists, semester schedules, assignment dropzones, and study indicators.",
    category: "Full Stack App",
    difficulty: "Advanced",
    duration: "15-20 Hours",
    icon: Target,
    accentColor: "from-purple-500 to-indigo-500",
    badgeBg: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    requiredChapters: ["p6-2-dashboard", "p6-3-ecommerce", "p7-1-interview", "p7-3-github"],
    requiredChapterTitles: ["Dashboard Layout", "State Persistence", "Cloud Deployment", "Github Actions"]
  }
];

export default function ProjectsClient() {
  const router = useRouter();
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>("All");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("nextsem_target_project");
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setSelectedProjectId(parsed.id);
        } catch (e) {
          console.error(e);
        }
      }
    }
  }, []);

  const handleSelectProject = (project: ProjectItem) => {
    if (typeof window !== "undefined") {
      if (selectedProjectId === project.id) {
        localStorage.removeItem("nextsem_target_project");
        setSelectedProjectId(null);
      } else {
        localStorage.setItem("nextsem_target_project", JSON.stringify(project));
        setSelectedProjectId(project.id);
        router.push("/course");
      }
    }
  };

  const filteredProjects = PROJECTS.filter((project) => {
    if (filterCategory === "All") return true;
    if (filterCategory === "Interactive Labs") return project.category === "Interactive Lab";
    if (filterCategory === "JS & React") return project.category === "JS/DOM App" || project.category === "React Project";
    if (filterCategory === "Full Stack") return project.category === "Full Stack App";
    return true;
  });

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#17181c] text-white flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#04AA6D] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#17181c] text-white select-none relative overflow-x-hidden flex flex-col justify-between">
      <div>
        {/* Main Header Component */}
        <Header />

        {/* Hero Section */}
        <div className="bg-gradient-to-b from-[#09101f] via-[#17181c] to-[#17181c] border-b border-slate-800/80 py-12 px-4 md:px-8">
          <div className="max-w-6xl mx-auto space-y-6 text-center">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-[#09101f] border-2 border-[#04AA6D] px-3.5 py-1.5 rounded-full shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-[#04AA6D] animate-ping" />
              <span className="text-xs font-mono font-extrabold tracking-wide text-white">
                <span className="text-[#04AA6D]">NS</span> Project Showcase & Target Goal Hub
              </span>
            </div>

            {/* Title & Description */}
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
              Master Web Development By Building <span className="text-[#04AA6D] underline decoration-[#04AA6D]">Real Projects</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Choose a project to set as your primary target goal, or launch any of our 5 live interactive VS Code labs to practice CSS keyframe physics, 3D orbits, and matrix code streams.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {["All", "Interactive Labs", "JS & React", "Full Stack"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer border ${
                    filterCategory === cat
                      ? "bg-[#04AA6D] border-[#04AA6D] text-black shadow-lg shadow-[#04AA6D]/20 font-black"
                      : "bg-slate-900/90 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700"
                  }`}
                >
                  {cat === "All" && "🚀 All Projects (9)"}
                  {cat === "Interactive Labs" && "⚡ Live Interactive Labs (5)"}
                  {cat === "JS & React" && "💻 JS & React Apps (2)"}
                  {cat === "Full Stack" && "🎓 Full Stack Portals (2)"}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Projects Showcase Grid Container */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-10 space-y-8">
          
  

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => {
              const isSelected = selectedProjectId === project.id;
              const IconComponent = project.icon;

              return (
                <div
                  key={project.id}
                  className={`group rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between bg-[#080b12] ${
                    isSelected
                      ? "border-[#04AA6D] bg-[#091510] shadow-[0_0_30px_rgba(4,170,109,0.25)] ring-2 ring-[#04AA6D]"
                      : "border-slate-800 hover:border-slate-700 hover:bg-[#0c101a] shadow-xl hover:shadow-2xl"
                  }`}
                >
                  <div>
                    {/* Visual Card Header */}
                    <div className="h-44 w-full relative bg-slate-950/80 p-6 flex flex-col justify-between overflow-hidden border-b border-slate-800/80">
                      
                      {/* Background Gradient Effect */}
                      <div className={`absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br ${project.accentColor} opacity-20 rounded-full blur-2xl group-hover:opacity-40 transition-opacity`} />

                      {/* Card Top Row: Category & Badges */}
                      <div className="flex items-center justify-between z-10 relative">
                        <span className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-extrabold uppercase tracking-wider border ${project.badgeBg}`}>
                          {project.category}
                        </span>

                        {isSelected && (
                          <span className="flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-[#04AA6D] bg-[#04AA6D]/20 border border-[#04AA6D]/40 px-2.5 py-1 rounded-full">
                            <Check size={12} /> Active Goal
                          </span>
                        )}
                      </div>

                      {/* Center Icon Graphic */}
                      <div className="z-10 flex items-center gap-3 my-auto">
                        <div className={`w-12 h-12 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                          <IconComponent size={24} className="text-[#04AA6D]" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono font-bold text-slate-400 block">Nextsem Developer Track</span>
                          <span className="text-xs font-extrabold text-white">{project.difficulty} Level</span>
                        </div>
                      </div>

                      {/* Card Bottom Stats Bar */}
                      <div className="flex items-center gap-4 z-10 text-[10px] font-mono text-slate-400 border-t border-slate-900 pt-2">
                        <div className="flex items-center gap-1">
                          <Clock size={11} className="text-amber-400" />
                          <span>{project.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BarChart2 size={11} className="text-sky-400" />
                          <span>{project.difficulty}</span>
                        </div>
                      </div>

                    </div>

                    {/* Card Content Body */}
                    <div className="p-6 space-y-4">
                      <h3 className="text-base font-extrabold text-white tracking-tight group-hover:text-[#04AA6D] transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-xs text-slate-300 leading-relaxed font-medium">
                        {project.description}
                      </p>

                      {/* Required Chapters List */}
                      <div className="space-y-2 pt-2 border-t border-slate-800/60">
                        <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                          <BookOpen size={11} className="text-[#04AA6D]" />
                          <span>Required Prerequisites:</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {project.requiredChapterTitles.map((title, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 bg-slate-900 border border-slate-800 rounded-md text-[10px] font-mono font-bold text-slate-300"
                            >
                              {title}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="p-6 pt-0 space-y-2">
                    {project.liveRoute ? (
                      <Link
                        href={project.liveRoute}
                        className="w-full py-3 rounded-xl font-extrabold text-xs uppercase tracking-wider bg-[#04AA6D] hover:bg-[#039861] text-black hover:text-white flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-[#04AA6D]/10"
                      >
                        <Play size={14} />
                        <span>Launch Live VS Code Lab</span>
                      </Link>
                    ) : null}

                    <button
                      onClick={() => handleSelectProject(project)}
                      className={`w-full py-2.5 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                        isSelected
                          ? "bg-slate-900 border border-[#04AA6D] text-[#04AA6D] hover:bg-slate-800"
                          : project.liveRoute
                          ? "bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700"
                          : "bg-[#04AA6D] hover:bg-[#039861] text-black font-black shadow-lg shadow-[#04AA6D]/10"
                      }`}
                    >
                      {isSelected ? "✓ Active Target Goal (Click to Deselect)" : "Set as Target Goal"}
                    </button>
                  </div>

                </div>
              );
            })}
          </div>

          <AdSenseBanner />

        </div>
      </div>

      {/* Consistent Standard Front Page Footer */}
      <Footer />
    </div>
  );
}
