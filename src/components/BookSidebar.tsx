"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight, Check } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';

const chapters = [
  { id: 'p0-developer-setup', title: 'P0: Developer Setup' },
  { id: 'p1-1-intro-and-text', title: 'P1.1: Web Intro & Text' },
  { id: 'p1-2-links-and-media', title: 'P1.2: Links & Media' },
  { id: 'p1-3-lists-and-tables', title: 'P1.3: Lists & Tables' },
  { id: 'p1-4-forms-and-inputs', title: 'P1.4: Forms & Inputs' },
  { id: 'p1-5-semantics-and-seo', title: 'P1.5: Semantics & SEO' },
  { id: 'p1-6-html5-tags', title: 'P1.6: All HTML5 Tags' },
  { id: 'p2-css-practical', title: 'P2: CSS Practical' },
  { id: 'p3-js-practical', title: 'P3: JS Practical' },
  { id: 'p4-react', title: 'P4: React' },
  { id: 'p5-node-mongodb', title: 'P5: Node.js & MongoDB' },
  { id: 'p6-capstone', title: 'P6: Capstone Projects' },
  { id: 'p7-placement', title: 'P7: Placement Prep' },
];

const BookSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { completedChapters } = useProgress();

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="md:hidden p-4 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 flex justify-between items-center sticky top-0 z-40 shadow-sm">
        <span className="font-bold text-gray-700 dark:text-gray-200">Table of Contents</span>
        <button onClick={toggleSidebar} className="p-2 rounded-md bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Sidebar Container */}
      <aside className={`
        fixed md:sticky top-[80px] md:top-0 left-0 h-[calc(100vh-80px)] md:h-screen
        w-full md:w-72 bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-slate-800
        transition-transform duration-300 z-30 overflow-y-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="p-6">
          <h2 className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">
            Curriculum
          </h2>
          <nav className="flex flex-col gap-1">
            {chapters.map((chapter) => {
              const isActive = pathname.includes(chapter.id);
              const isCompleted = completedChapters[chapter.id];
              return (
                <Link 
                  key={chapter.id}
                  href={`/book/${chapter.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`
                    flex items-center justify-between p-3 rounded-lg text-sm font-medium transition-colors
                    ${isActive 
                      ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50 shadow-sm' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'}
                  `}
                >
                  <div className="flex items-center gap-2 max-w-[85%]">
                    {isCompleted && (
                      <Check size={14} className="text-emerald-500 dark:text-emerald-450 shrink-0 font-bold" />
                    )}
                    <span className="truncate">{chapter.title}</span>
                  </div>
                  {isActive && <ChevronRight size={16} />}
                </Link>
              );
            })}
          </nav>

          <div className="mt-10 pt-6 border-t border-gray-200 dark:border-slate-800">
            <Link href="/" className="text-sm font-bold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center gap-2">
              <span className="text-xl">🏠</span> Back to Home
            </Link>
          </div>
        </div>
      </aside>
      
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default BookSidebar;
