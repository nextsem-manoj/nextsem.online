# 📐 nextsem.online — Lesson Layout Architecture & Design Standard

> **Version**: 1.0.0  
> **Status**: Active & Mandatory Standard  
> **Primary Component**: [`UniversalLessonTemplate.tsx`](file:///c:/Users/manoj2403/nextsem.online/src/components/UniversalLessonTemplate.tsx)

---

## 🎯 1. Overview & Purpose

This document specifies the authoritative layout structure, visual standards, and component standards for all current and future lesson pages on **nextsem.online** (including HTML5, Windows 11 CMD CLI, CSS3, JavaScript, React, Git, and IGNOU BCA subjects).

All lesson pages on web and mobile platforms **MUST** strictly adhere to this single-stream layout architecture to ensure 100% visual consistency, high-contrast readability, clean single-stream navigation, and zero cognitive clutter.

---

## 🎨 2. Design System & Visual Palette

| Visual Element | Design Token / Value | CSS Classes / Styling Rules | Usage Context |
| :--- | :--- | :--- | :--- |
| **Primary Background** | `#17181c` | `bg-[#17181c]` | Main background for all lesson pages & layout wrappers |
| **Lesson Container** | `#0f172a` / `#1e293b` | `bg-slate-900/40 border border-slate-850 p-5 md:p-8 rounded-2xl` | Glassmorphic content backdrop |
| **Headings (H1, H2, H3)** | `#ffffff` | `text-white font-extrabold tracking-tight` | Crisp, high-contrast white headers |
| **Body Text** | `#ffffff` / `#cbd5e1` | `text-slate-300 font-normal leading-relaxed` | High-contrast readable lesson body |
| **Bold Keywords** | `#ffffff` | `strong className="text-white font-bold"` | Enforced pure white emphasis text |
| **Green Links & Buttons** | `#04AA6D` | `text-[#04AA6D] hover:text-[#039861] font-semibold` | Terminal link accents & primary CTAs |
| **Example Card Box** | `#1d2a35` | `bg-[#1d2a35] border border-slate-700/60 p-5 md:p-6 rounded-xl` | Nextsem Example Container |
| **Code Snippet Box** | `#15202b` | `bg-[#15202b] p-4 md:p-5 rounded-lg border-l-4 border-[#04AA6D]` | Syntax-highlighted code display |

---

## 🏗️ 3. Component Architecture & Structural Layout

Every lesson page is assembled using the universal [`UniversalLessonTemplate.tsx`](file:///c:/Users/manoj2403/nextsem.online/src/components/UniversalLessonTemplate.tsx) wrapper component.

```
┌────────────────────────────────────────────────────────────────────────┐
│  ← Back to Subject Lessons                 Lesson X / 100 [Completed]  │
├────────────────────────────────────────────────────────────────────────┤
│  [◄ Previous]             Lesson Title               [Bookmark] [Next ►]│
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  ## Section Heading (H2 - White & Bold)                                 │
│  Paragraph text explaining concepts with high-contrast emphasis.       │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │ Example                                       [Copy Code]        │  │
│  │ ┌──────────────────────────────────────────────────────────────┐ │  │
│  │ │ <h1>Hello World</h1>                                         │ │  │
│  │ └──────────────────────────────────────────────────────────────┘ │  │
│  │ [Try it Yourself »]                                              │  │
│  │ ─────────────────────────────────────────────────────────────── │  │
│  │ 🪟 Output Screenshot (Windows 11)         [100% MATCHING CODE] │  │
│  │ ┌──────────────────────────────────────────────────────────────┐ │  │
│  │ │ [Step-by-step Windows 11 output screenshot image]            │ │  │
│  │ └──────────────────────────────────────────────────────────────┘ │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                        │
├────────────────────────────────────────────────────────────────────────┤
│  [◄ PREVIOUS LESSON]                                [NEXT LESSON ►]    │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 📝 4. Content Formatting & Layout Rules

### 4.1. Clean High-Contrast White Heading Standard
- All section headers (**H1**, **H2**, **H3**) MUST be rendered in crisp, bold pure white (`text-white font-extrabold tracking-tight`).
- Underneath **H2** headers, a subtle border separator (`border-b border-slate-800/60 pb-2`) is rendered for visual hierarchy.

### 4.2. Nextsem Example Card & Cumulative Screenshot Rule
- Every code example block MUST be rendered inside a **Nextsem Example Card** (`bg-[#1d2a35] border border-slate-700/60`).
- Features of the Example Card:
  1. **Example Title**: Rendered in bold white (`text-xl font-extrabold text-white`).
  2. **Code Box**: Green left border (`border-l-4 border-[#04AA6D]`), monospace font, syntax tokens highlighted (`<tag>` in `#f25f5c`, attributes in white).
  3. **Try it Yourself » Button**: Emerald green button (`bg-[#04AA6D]`) opening the live sandbox in a new tab.
  4. **Cumulative Windows 11 Output Screenshot**: Immediately below the code block, present the matching 🪟 Windows 11 browser/terminal output screenshot displaying the cumulative output of the current lesson merged with all previously learned memory tags.
  5. **Lightbox Zoom**: Tapping/clicking any screenshot opens the full-resolution Lightbox Image Zoom modal with dark backdrop.

### 4.3. Link Styling & Navigation
- All internal content links, back links, and reference anchors MUST render in vibrant emerald green (`text-[#04AA6D] hover:text-[#039861] underline decoration-[#04AA6D] font-semibold`).
- Top & bottom navigation bars provide smooth transition to **Previous Lesson** and **Next Lesson** using Next.js client router without triggering full page reloads.

### 4.4. Exclusions & Cleanliness Guidelines
- ❌ **NO Inline MCQ Blocks**: Inline practice check quizzes are excluded from lesson pages to keep content 100% focused on reading, code analysis, and screenshot output.
- ❌ **NO Senior Dev Cards**: Redundant advice banners are removed for single-stream reading efficiency.
- ❌ **NO Ad Placeholder Boxes**: Banner ad slot containers are never rendered inside lesson containers.
- ❌ **NO Blue Overlay Prompts**: Image screenshot cards must be clean, natural, and directly clickable for Lightbox zoom without prompt overlays.

---

## 🛠️ 5. Technical Integration Guide

### 5.1. Implementing a New Lesson Page

To create a new lesson route using the Universal Template:

```tsx
// src/app/html/[slug]/page.tsx
import UniversalLessonTemplate from "@/components/UniversalLessonTemplate";
import { getHtmlLessonBySlug, getAllHtmlLessons } from "@/data/htmlLessonsData";

export default function HtmlLessonPage({ params }: { params: { slug: string } }) {
  const lesson = getHtmlLessonBySlug(params.slug);
  const allLessons = getAllHtmlLessons();

  const prevLesson = allLessons.find(l => l.id === lesson.id - 1) || null;
  const nextLesson = allLessons.find(l => l.id === lesson.id + 1) || null;

  return (
    <UniversalLessonTemplate
      subject="html"
      subjectTitle="HTML5 Web Development"
      subjectDashboardUrl="/html"
      totalLessonsInSubject={allLessons.length}
      lesson={lesson}
      contentBody={lesson.content}
      prevLesson={prevLesson}
      nextLesson={nextLesson}
    />
  );
}
```

---

## 📋 6. Checklist for New Subject Integration

Before launching any new subject (e.g. `css`, `js`, `react`, `python`, `bca`):

- [ ] Subject data file created under `src/data/<subject>LessonsData.ts`.
- [ ] Route handler created at `src/app/<subject>/[slug]/page.tsx`.
- [ ] Wrapped with `UniversalLessonTemplate.tsx`.
- [ ] Verified `#17181c` background and pure white heading typography.
- [ ] Verified 1-to-1 Nextsem Example Card & cumulative Windows 11 screenshots.
- [ ] Verified Lightbox Zoom on screenshot click.

*Maintained by Nextsem Engineering Team — nextsem.online*

---

## 💬 User Original Inputs & Notes (Verbatim)

- now create a lesson template using above ideas and place it here in this directory for testing purpose
- now show lesson page with no content just showing code box and output screenshot and
- show lesson with no content.
- do not delte my inputs from here.
- i want you to create a lesson template for Windows 11 command line with features suitable for the same,
- /learn keep it responsive and on smaller screens show
- this is very basic add some more features and make it more interactive, this lesson template is for absolute beginners learning command line for the first time
- ok aur acha banao yrr tumse ye expect nhi kiya hai
- ek important icon jha ho black and white hi banao aur text ka colour white hi rakho sirf likns ka colour green rakho
- m chahta hu ki users phone se padhein aur pc pe practice karein isliye screenshots ka bohot dyan rakhna hai screenshots perfect matching with the output, output text must be same as the code

i found a complete full stack development course at https://www.udemy.com/course/the-complete-web-development-bootcamp/?couponCode=UDEAFFMX0826 study it and show me ideas to build exactly like this on nextsem.online for free show me ideas with help of gemini images.
one more thing i want to make nextsem.online also same as is udemy with similiar tagline and aim do suggest me that too.

ok let us make frames for nextsem first with alphabet N then E then X then T then S then E then M. make it look elegant and atrractive and then combine them together and put them as NEXTSEM. ok nice now remove angle brackets and add some creative animations to each alhabet different for each alphabet.

