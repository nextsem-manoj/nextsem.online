import React from "react";
import BookSidebar from "@/components/BookSidebar";

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-[#060c18] text-gray-900 dark:text-gray-100 font-sans selection:bg-blue-200 pb-20">

      <div className="flex-1 flex flex-col md:flex-row w-full max-w-[1600px] mx-auto">
        {/* Sidebar for Navigation (Desktop & Mobile handled inside component) */}
        <BookSidebar />

        {/* Main Content Area */}
        <main className="flex-1 p-4 md:p-8 w-full max-w-4xl mx-auto">
          <div className="bg-white dark:bg-slate-900 p-6 md:p-10 rounded-xl shadow-sm border border-gray-200 dark:border-slate-800 relative z-10 min-h-[80vh]">
             {children}
          </div>
        </main>
      </div>

    </div>
  );
}
