"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const chapters = [
  { id: 'p0-developer-setup', title: 'P0: Developer Setup' },
  { id: 'p1-1-intro-and-text', title: 'P1.1: Web Intro & Text' },
  { id: 'p1-2-links-and-media', title: 'P1.2: Links & Media' },
  { id: 'p1-3-lists-and-tables', title: 'P1.3: Lists & Tables' },
  { id: 'p1-4-forms-and-inputs', title: 'P1.4: Forms & Inputs' },
  { id: 'p1-5-semantics-and-seo', title: 'P1.5: Semantics & SEO' },
  { id: 'p2-css-practical', title: 'P2: CSS Practical' },
  { id: 'p3-js-practical', title: 'P3: JS Practical' },
  { id: 'p4-react', title: 'P4: React' },
  { id: 'p5-node-mongodb', title: 'P5: Node.js & MongoDB' },
  { id: 'p6-capstone', title: 'P6: Capstone Projects' },
  { id: 'p7-placement', title: 'P7: Placement Prep' },
];

const BookPagination = () => {
  const pathname = usePathname();
  const currentIndex = chapters.findIndex(c => pathname.includes(c.id));

  if (currentIndex === -1) return null;

  const prevChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-200 dark:border-slate-800 gap-4">
      {prevChapter ? (
        <Link 
          href={`/book/${prevChapter.id}`}
          className="flex flex-col w-full sm:w-1/2 p-4 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-md transition-all group"
        >
          <span className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1 group-hover:text-blue-500">
            <ChevronLeft size={14} /> Previous
          </span>
          <span className="text-lg font-bold text-gray-900 dark:text-gray-100">{prevChapter.title}</span>
        </Link>
      ) : <div className="w-full sm:w-1/2" />}

      {nextChapter ? (
        <Link 
          href={`/book/${nextChapter.id}`}
          className="flex flex-col w-full sm:w-1/2 items-end text-right p-4 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-md transition-all group"
        >
          <span className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider mb-1 flex items-center justify-end gap-1 group-hover:text-blue-500">
            Next <ChevronRight size={14} />
          </span>
          <span className="text-lg font-bold text-gray-900 dark:text-gray-100">{nextChapter.title}</span>
        </Link>
      ) : <div className="w-full sm:w-1/2" />}
    </div>
  );
};

export default BookPagination;
