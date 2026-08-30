# 🛠️ CLI Lesson Sidebar Updated: Real Windows 11 CLI Lessons & 10% Desktop Margin

> **Date:** August 28, 2026  
> **Status:** Completed & Verified ✅  
> **Topic:** Correcting CLI Sidebar Content and Aligning Below Hamburger with 10% Margin

---

## 📌 Problem Identified from Screenshot
On `http://localhost:3000/cli/learn-windows-command-prompt-cmd-basics/`:
1. **Wrong Content in Sidebar:** The sidebar was displaying legacy Career & System Design / ATS Resume lessons (`& System Design: Technical Mock Interviews...`) because `BookSidebar.tsx` did not have a dedicated branch for `/cli`.
2. **Missing Desktop Margin:** The sidebar was flushed against the far left edge (`left: 0`) instead of maintaining the 10% device margin.
3. **Not Aligned Below Hamburger:** The hamburger icon sits at 10% margin, while the sidebar was unaligned.

---

## 📌 Changes Applied

### 1. Added Native `/cli` and `/cpp` Branches to `BookSidebar.tsx`
- Imported `cliLessons` from `@/data/cliLessonsData` and `cppLessons` from `@/data/cppLessonsData`.
- Added a dedicated branch for `pathname.startsWith('/cli')`:
  - Displays all 100 Windows 11 CLI lessons grouped cleanly by Unit (`Unit 1: Command Line & Terminal Foundations`, etc.).
  - Shows lesson number and command title (e.g. `#1. How to Open Windows 11 Command Prompt (cmd.exe)`, `#2. Essential Windows CMD Commands (ver, cls, help, title)`).
  - Highlights active lesson with emerald green border and styling.
- Added a dedicated branch for `pathname.startsWith('/cpp')` displaying all C++ Systems lessons.

### 2. Verified 10% Desktop Margin and Alignment
- Configured `aside` with:
  - `left-0 md:left-[10%]`
  - `top-14 md:top-[102px]`
  - `h-[calc(100vh-3.5rem)] md:h-[calc(100vh-102px)]`
  - `md:border-l border-r border-slate-800/80 shadow-2xl`
- The sidebar now sits **directly vertically flush below the hamburger icon** leaving **10% space from the left side of the screen on desktop mode**.
- Dynamic reading padding (`calc(10% + ${effectiveSidebarWidth}px)`) in `cli/layout.tsx` shifts content smoothly when open.
