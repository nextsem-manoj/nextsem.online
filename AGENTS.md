<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project-Scoped Rules
- **Curriculum Formatting Style:** Always avoid long, continuous blocks of plain text in curriculum/MDX files. Instead, rewrite them with relevant icons, emojis, bullet list highlights, descriptive GIFs/visual animations, and engaging developer jokes to keep learning highly visual, fun, and memorable.
- **Windows Naming Style:** Whenever referring to "Windows" or "Windows 11" in the curriculum/textbook content, always accompany it with the Windows icon/emoji (e.g. ⊞ Windows or 🪟 Windows 11) to maintain standard, high-quality visual branding.
<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project-Scoped Rules
- **Curriculum Formatting Style:** Always avoid long, continuous blocks of plain text in curriculum/MDX files. Instead, rewrite them with relevant icons, emojis, bullet list highlights, descriptive GIFs/visual animations, and engaging developer jokes to keep learning highly visual, fun, and memorable.
- **Windows Naming Style:** Whenever referring to "Windows" or "Windows 11" in the curriculum/textbook content, always accompany it with the Windows icon/emoji (e.g. ⊞ Windows or 🪟 Windows 11) to maintain standard, high-quality visual branding.
- **Automatic Chat Transcript Archiving**: Always run `npm run save-chat` or write a custom formatting script to archive the conversation transcript under the `chat-logs/` folder before concluding any session. If the user requests a custom name, use that name (e.g. `100+ more projects for front end web developer.md`). Make sure to structure and save all chat logs dynamically for future developer references.
- **Excluding Semmy AI on Native App:** Do not load or display the Semmy AI chatbot widget (`SemmyAiWidget`) on native Android or iOS app platforms. Use `Capacitor.isNativePlatform()` to disable rendering of the chatbot widget.
- **Excluded Header Links:** Never place or render Playground, NCERT Hub, BCA Hub, or Job Portal links in the main navigation headers or sub-navigation subject bars.
- **IGNOU BCA Master Curriculum Persistence & Auto-Read**: Always inspect, read, and honor instructions written in `docs/ignou_bca_1st_sem_master_curriculum.md`. Never delete user-written text or notes in curriculum files. Continuously log session decisions, chat results, and sitemap/architectural progress under Section 5 of the master document.
- **Single Stream Developer Lesson Template (PERMANENT RULE - ALL CURRENT AND FUTURE LESSONS)**: Every lesson created for this project (HTML, CLI, or any future subject) MUST follow this simplified, clean standard format:
  1. **Single-Stream Clean Lesson Content**: Primary, high-quality, visual English developer content. Do NOT include or require multiple language variants (English/Hinglish/Hindi) or Kid vs Pro complexity mode toggles.
  2. **Interactive MCQ Exercise**: Standard `{ question, options, correctAnswer, hint }` exercise block for knowledge checks.
  3. **Dashboard Back Link**: All lesson pages must include a header link back to their subject dashboard (e.g. `/html`, `/cli`).
  4. **SEO Slugs**: All lesson URLs must be descriptive and SEO-optimized (e.g. `/cli/learn-windows-command-prompt-cmd-basics`).
  5. **AdMob/AdSense PDF Download**: Each lesson must include a "Download Lesson PDF" option.
  6. **Beginner-Friendly Full Stack Web Developer Focus**: 100% focused on pure Full Stack Web Developer pathways (HTML, CSS, JavaScript, React, Node.js, Express, Databases, Git, 🪟 Windows CMD CLI, and Cloud Deployment).
- **Exclusion of Non-Coding Office Software**: Do not include or feature MS Word, MS Excel, PowerPoint, Google Docs, email writing, professional email etiquette, or resume writing topics. Keep all content strictly focused on software engineering and web development.
- **Dark Theme Background Palette (#17181c)**: Always use `#17181c` as the primary background color for all lesson pages, course dashboards, and layout containers, paired with pure white (`#ffffff`) headers and vibrant green (`#04AA6D` / `#20c997`) accents.
- **Clean High-Contrast White Heading & Typography Standard**: All lesson headings (H1, H2, H3) MUST render in bold, crisp pure white (`text-white font-bold tracking-tight`), and all lesson body text MUST render in high-contrast crisp off-white (`text-[#ffffff]` or `text-slate-100`) with bold keywords rendered in bold pure white (`strong className="text-white font-bold"`).
- **Vibrant Underlined Green Link Standard**: All content links, command bullet links, and internal reference anchors MUST render in vibrant emerald green (`text-[#04AA6D] hover:text-[#039861] underline decoration-[#04AA6D] font-semibold`) to maintain a consistent developer terminal link style across all lessons.

