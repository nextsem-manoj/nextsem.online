"use client";

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import WindowsIcon from '@/components/WindowsIcon';
import { BookOpen, ArrowRight, ChevronLeft, ChevronRight, Code2, Terminal, Cpu, GitBranch, Map } from 'lucide-react';

interface CourseItem {
  id: string;
  title: string;
  category: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  description: string;
  lessonCount: string;
  ctaText: string;
  ctaHref: string;
  icon: React.ReactNode;
}

export default function CourseCarouselSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const courses: CourseItem[] = [
    {
      id: "html-course",
      title: "HTML5 & Web Development Architecture",
      category: "98+ Lessons",
      badgeBg: "bg-orange-500/10",
      badgeText: "text-orange-400",
      badgeBorder: "border-orange-500/30",
      description: "Master HTML5 tags, semantic page architecture, forms, tables, accessibility, HTTP request headers, and Windows 11 live code previews.",
      lessonCount: "98 Lessons",
      ctaText: "Start HTML5 Course",
      ctaHref: "/html",
      icon: <Code2 size={24} className="text-orange-400" />
    },
    {
      id: "cli-course",
      title: "Windows Command Prompt (CMD) CLI",
      category: "101+ Lessons",
      badgeBg: "bg-emerald-500/10",
      badgeText: "text-[#04AA6D]",
      badgeBorder: "border-emerald-500/30",
      description: "Learn Windows file system trees, drive navigation, environment variables, batch scripts (organize.bat), and network diagnostics.",
      lessonCount: "101 Lessons",
      ctaText: "Start CMD Course",
      ctaHref: "/cli",
      icon: <Terminal size={24} className="text-[#04AA6D]" />
    },
    {
      id: "cpp-course",
      title: "C++ Software Engineering & OOP",
      category: "21+ Lessons",
      badgeBg: "bg-sky-500/10",
      badgeText: "text-sky-400",
      badgeBorder: "border-sky-500/30",
      description: "Master C++ syntax, memory pointers, arrays, functions, structures, classes, inheritance, and Object-Oriented Programming.",
      lessonCount: "21 Lessons",
      ctaText: "Start C++ Course",
      ctaHref: "/cpp",
      icon: <Cpu size={24} className="text-sky-400" />
    },
    {
      id: "git-course",
      title: "Git & GitHub Version Control Lab",
      category: "Terminal Simulator",
      badgeBg: "bg-purple-500/10",
      badgeText: "text-purple-400",
      badgeBorder: "border-purple-500/30",
      description: "Learn git init, commit history, branching workflows, pull requests, merge conflict resolution, and GitHub remote repositories.",
      lessonCount: "Terminal Simulator",
      ctaText: "Launch Git Terminal",
      ctaHref: "/git",
      icon: <GitBranch size={24} className="text-purple-400" />
    },
    {
      id: "fullstack-roadmap",
      title: "Full Stack Web Developer 2026 Roadmap",
      category: "Complete Pathway",
      badgeBg: "bg-amber-500/10",
      badgeText: "text-amber-400",
      badgeBorder: "border-amber-500/30",
      description: "Step-by-step developer roadmap combining HTML, CSS, JavaScript, React, Node.js, Express, Databases, and Cloud Deployment.",
      lessonCount: "Full Roadmap",
      ctaText: "Explore Full Roadmap",
      ctaHref: "/full-stack-web-development-roadmap",
      icon: <Map size={24} className="text-amber-400" />
    }
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const cardStep = window.innerWidth < 640 ? 316 : 400;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -cardStep : cardStep,
      behavior: 'smooth'
    });
  };

  const handleScrollTrack = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    const cardStep = window.innerWidth < 640 ? 316 : 400;
    
    if (maxScroll > 0 && scrollLeft >= maxScroll - 15) {
      setActiveIdx(courses.length - 1);
    } else {
      const index = Math.round(scrollLeft / cardStep);
      setActiveIdx(Math.min(courses.length - 1, Math.max(0, index)));
    }
  };

  return (
    <section className="space-y-4 text-left w-full max-w-full relative">
      
      {/* Clean Section Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div>
          <h2 className="text-lg sm:text-2xl font-extrabold text-white">
            Complete Free Subject Curriculum
          </h2>
        </div>

        <Link
          href="/curriculum"
          className="text-xs font-bold text-[#04AA6D] hover:underline flex items-center gap-1 shrink-0"
        >
          <span>View All Courses</span>
          <ArrowRight size={13} />
        </Link>
      </div>

      {/* CAROUSEL WRAPPER WITH TRANSPARENT SIDE DESKTOP NAV BUTTONS */}
      <div className="relative group/carousel">
        
        {/* Left Desktop Translucent Nav Button */}
        <button
          onClick={() => handleScroll('left')}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-30 w-11 h-11 rounded-full bg-[#090d16]/85 border border-slate-700/80 text-slate-200 hover:text-white hover:bg-[#04AA6D] hover:border-[#04AA6D] backdrop-blur-md shadow-2xl items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Scroll Left"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Right Desktop Translucent Nav Button */}
        <button
          onClick={() => handleScroll('right')}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-30 w-11 h-11 rounded-full bg-[#090d16]/85 border border-slate-700/80 text-slate-200 hover:text-white hover:bg-[#04AA6D] hover:border-[#04AA6D] backdrop-blur-md shadow-2xl items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Scroll Right"
        >
          <ChevronRight size={22} />
        </button>

        {/* PURE NATURAL HORIZONTAL SWIPE CONTAINER */}
        <div
          ref={scrollRef}
          onScroll={handleScrollTrack}
          className="flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 pt-1 px-1 scroll-smooth touch-pan-x max-w-full"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {courses.map((course) => (
            <div
              key={course.id}
              className="snap-start shrink-0 w-[88vw] max-w-[340px] sm:w-[380px] bg-slate-900/90 border border-slate-800 hover:border-[#04AA6D]/60 rounded-2xl p-5 sm:p-6 transition-all flex flex-col justify-between space-y-5 group shadow-2xl hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-slate-950 border-2 border-slate-800 flex items-center justify-center shrink-0 shadow-lg group-hover:border-[#04AA6D] transition-colors">
                    {course.icon}
                  </div>
                  <span className={`text-xs font-mono font-extrabold px-3 py-1 rounded-full border ${course.badgeBg} ${course.badgeText} ${course.badgeBorder}`}>
                    {course.category}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-extrabold text-white group-hover:text-[#04AA6D] transition-colors leading-snug">
                    {course.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                    {course.description}
                  </p>
                </div>

                <div className="pt-1">
                  <span className="text-xs font-mono font-extrabold bg-slate-950 text-slate-200 px-3 py-1 rounded-lg border border-slate-800">
                    📚 {course.lessonCount}
                  </span>
                </div>
              </div>

              <Link
                href={course.ctaHref}
                className="w-full py-3 rounded-xl bg-slate-800 hover:bg-[#04AA6D] text-white hover:text-black text-xs font-extrabold transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer shadow-lg touch-manipulation"
              >
                <span>{course.ctaText}</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>

      </div>

      {/* Subtle Pagination Indicator Dots */}
      <div className="flex items-center justify-center gap-2 pt-1">
        {courses.map((c, idx) => (
          <button
            key={c.id}
            onClick={() => {
              if (scrollRef.current) {
                const cardStep = window.innerWidth < 640 ? 316 : 400;
                scrollRef.current.scrollTo({ left: idx * cardStep, behavior: 'smooth' });
              }
            }}
            aria-label={`Go to course slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all cursor-pointer touch-manipulation ${
              activeIdx === idx
                ? "w-8 bg-[#04AA6D]"
                : "w-2 bg-slate-800 hover:bg-slate-700"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
