# 📐 Sidebar Alignment: Exactly Below Hamburger with 10% Desktop Margin

> **Date:** August 28, 2026  
> **Status:** Completed ✅  
> **Topic:** Desktop Layout Geometry & Sidebar Positioning

---

## 📌 Summary of Changes

### 1. Sub-Navigation Bar Alignment (`NsSubjectNavBar.tsx`)
- Set `md:px-[10%]` on the sub-navigation container (`bg-[#09101f]`).
- This positions the hamburger button (`[ ☰ ]`) starting at **exactly 10% from the left edge of the desktop viewport**.

### 2. Sidebar Positioning (`BookSidebar.tsx`)
- Positioned the sidebar at `left-0 md:left-[10%]` and `top-14 md:top-[102px]`.
- This places the sidebar **exactly vertically flush below the hamburger icon**, leaving **10% empty space from the left side of the device on desktop mode**.
- Added `md:border-l border-r border-slate-800/80 shadow-2xl` for clean bounding borders.
- Replaced unconditional `md:translate-x-0` with stateful `${isOpen ? 'translate-x-0' : '-translate-x-full'}` so the sidebar respects hamburger toggling.

### 3. Layout Responsive Content Padding (`html/layout.tsx`, `cli/layout.tsx`, `git/layout.tsx`)
- Configured dynamic padding:  
  `style={mounted && !isMobile && sidebarOpen ? { paddingLeft: \`calc(10% + \${effectiveSidebarWidth}px)\` } : undefined}`
- When the sidebar is opened, the reading text smoothly shifts to avoid obstruction; when closed, it expands to full reading width.
