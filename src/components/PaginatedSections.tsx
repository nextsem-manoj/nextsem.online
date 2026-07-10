"use client";

import React from "react";
import PracticeAssignment from "./PracticeAssignment";
import MarkCompleteButton from "./MarkCompleteButton";
import ChapterTips from "./ChapterTips";
import BookPagination from "./BookPagination";

interface PaginatedSectionsProps {
  children: React.ReactNode;
  totalPages: number;
  hasAssignment: boolean;
  chapterId: string;
  instructions: string[];
}

export default function PaginatedSections({
  children,
  hasAssignment,
  chapterId,
  instructions,
}: PaginatedSectionsProps) {
  return (
    <div className="animate-in fade-in duration-500 space-y-8 pb-4">
      <article className="prose prose-slate dark:prose-invert prose-blue max-w-none">
        {children}
      </article>

      {/* Interactive gamified tip section and slide-in notifications */}
      <ChapterTips chapterId={chapterId} />

      {hasAssignment && (
        <div className="border-t border-slate-200 dark:border-slate-800 pt-6">
          <PracticeAssignment chapterId={chapterId} instructions={instructions} />
        </div>
      )}

      <div className="border-t border-slate-200 dark:border-slate-800 pt-6">
        <MarkCompleteButton chapterId={chapterId} hasAssignment={hasAssignment} />
      </div>

      <BookPagination />
    </div>
  );
}
