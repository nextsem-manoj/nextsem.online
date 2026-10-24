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
- **Proactive Task & Roadmap Orientation**: At the beginning of every session or whenever the user asks for status, inspect `docs/adsense_admob_approval_roadmap.md` & `docs/roadmap/task.md`, remind the user of their exact next task, and keep development aligned with the revenue goals in `revenue-model/team-and-planning.md`. The user can also run `npm run status` or `npm run task` in the terminal anytime to view their live project dashboard!
- **Curriculum Formatting Style:** Always avoid long, continuous blocks of plain text in curriculum/MDX files. Instead, rewrite them with relevant icons, emojis, bullet list highlights, descriptive GIFs/visual animations, and engaging developer jokes to keep learning highly visual, fun, and memorable.
- **Windows Naming Style:** Whenever referring to "Windows" or "Windows 11" in the curriculum/textbook content, always accompany it with the Windows icon/emoji (e.g. ⊞ Windows or 🪟 Windows 11) to maintain standard, high-quality visual branding.
- **Automatic Chat Transcript Archiving**: Always run `npm run save-chat` or write a custom formatting script to archive the conversation transcript under the `chat-logs/` folder before concluding any session. If the user requests a custom name, use that name (e.g. `100+ more projects for front end web developer.md`). Make sure to structure and save all chat logs dynamically for future developer references.
- **Excluding Semmy AI on Native App:** Do not load or display the Semmy AI chatbot widget (`SemmyAiWidget`) on native Android or iOS app platforms. Use `Capacitor.isNativePlatform()` to disable rendering of the chatbot widget.
- **Comprehensive KG-to-Job SEO, Headings & Educational Scope Standard (PERMANENT RULE)**:
  1. **Unified Scope**: Nextsem Academy officially covers the full spectrum of education: Foundational KG to Class 12th (Science, Commerce & Arts streams), College Degrees (BCA, MCA, B.Tech CSE), and 50-Day Practical Coding Labs with live GitHub verification.
  2. **SEO Metadata & Headings**: All root layout metadata (`title`, `description`, `keywords`, `openGraph`, `twitter`) and primary H1 headlines must reflect this unified continuum: *"Complete Education from KG to 12th, BCA, MCA, B.Tech & Coding Labs"*.
  3. **Attribution**: Always attribute coaching, curriculum design, and practical systems to **Er. Manoj Kumar**.
  4. **Active 3-Path Architecture**: Maintain instant access to all 3 learning pathways: 🎒 Schooling Hub (`/school`), 🎓 College Hub (`/bca`), and 💻 Skill-Based Coding Labs (`/bca/practical`) with persistent onboarding goal selection.
- **Universal Lesson Template Standard (PERMANENT RULE - ALL PRESENT & FUTURE SUBJECTS)**: All subject lesson pages (HTML, CLI, CSS, JavaScript, React, Node.js, Git, Python, etc.) MUST be built using the universal [`UniversalLessonTemplate.tsx`](file:///c:/Users/manoj2403/nextsem.online/src/components/UniversalLessonTemplate.tsx) component. This guarantees 100% consistent high-contrast typography (`text-white font-extrabold`), embedded 1-to-1 code example screenshots, responsive image lightbox zoom, subject dashboard back links, bookmark persistence, and clean, ad-free lesson navigation across all web and mobile viewports.
- **Primary Mobile Framework Standard (Flutter)**: From now on, use Flutter (`mobile/`) for all mobile application development, native features, Android/iOS builds, and mobile ad/auth implementations. Keep Next.js focused on the SEO-rich responsive web platform at nextsem.online.
- **Exclusion of Non-Coding Office Software**: Do not include or feature MS Word, MS Excel, PowerPoint, Google Docs, email writing, professional email etiquette, or resume writing topics. Keep all content strictly focused on software engineering and web development.
- **Dark Theme Background Palette (#17181c)**: Always use `#17181c` as the primary background color for all lesson pages, course dashboards, and layout containers, paired with pure white (`#ffffff`) headers and vibrant green (`#04AA6D` / `#20c997`) accents.
- **Clean High-Contrast White Heading & Typography Standard**: All lesson headings (H1, H2, H3) MUST render in bold, crisp pure white (`text-white font-bold tracking-tight`), and all lesson body text MUST render in high-contrast crisp off-white (`text-[#ffffff]` or `text-slate-100`) with bold keywords rendered in bold pure white (`strong className="text-white font-bold"`).
- **Vibrant Underlined Green Link Standard**: All content links, command bullet links, and internal reference anchors MUST render in vibrant emerald green (`text-[#04AA6D] hover:text-[#039861] underline decoration-[#04AA6D] font-semibold`) to maintain a consistent developer terminal link style across all lessons.
- **HTML Tag Screenshot & Cumulative Memory Standard**: Every HTML lesson teaching an HTML tag must present the tag inside a styled Nextsem Example Card (`Example` heading, highlighted code block, **Try it Yourself »** button), followed immediately by a step-by-step Windows 11 screenshot showing the cumulative output of that tag combined with all previously learned tags in memory.
- **Clean Screenshot Overlay Standard**: Do not render "CLICK TO EXPAND SCREENSHOT" blue buttons or hover prompt overlays over lesson screenshots in `LessonScreenshotWidget`. Keep screenshot cards clean, natural, and directly clickable for lightbox zoom.
- **Exclusion of Inline MCQ & Senior Dev Cards**: Do not render inline MCQ question blocks (`Interactive Lesson Check`) or `Senior Developer Key Takeaways` cards on lesson pages. Keep lesson content focused purely on high-quality text explanation, code example blocks, and step-by-step Windows 11 screenshots.
- **Exclusion of Ad Space Containers**: Do not display AdMob banner placeholder containers or ad slot boxes on web or mobile lesson pages.
- **Responsive Mobile Viewport Standard for Lesson Templates**: All lesson templates (`UniversalLessonTemplate.tsx`, `Windows11CliLessonTemplate.tsx`, etc.) MUST be 100% responsive across mobile, tablet, and small screen viewports. On smaller screens:
  1. Title bar text must truncate gracefully (`text-lg sm:text-2xl font-extrabold text-white truncate`).
  2. Action buttons (Copy, Run in Simulator, Bookmark) adapt seamlessly with responsive flex/grid layouts.
  3. Terminal & code output boxes enable horizontal overflow scroll (`overflow-x-auto`) without breaking page boundaries.
  4. 🪟 Windows 11 screenshots scale responsively (`w-full h-auto max-h-[450px] object-contain`) and remain touch-friendly for Lightbox zoom modal.
- **Mobile-to-PC 1-to-1 Screenshot Standard**: All lesson templates MUST be optimized for students reading on mobile phones while practicing live on their Windows 11 PC. The terminal execution output text inside the lesson code box MUST BE 100% IDENTICAL line-by-line to actual Windows Command Prompt output on a real PC. Every lesson MUST include a 1-to-1 matching 🪟 Windows 11 screenshot with touch-friendly Lightbox zoom so students can verify their PC terminal line-by-line against their mobile screen.
- **Strict Black & White or Emerald Green Icon/Image Style Standard**: All icons, badges, visual illustrations, and UI graphics across all projects MUST be strictly rendered in Black & White (`#ffffff` / `#000000` / `#94a3b8`) or Emerald Green (`#04AA6D` / `#10b981`). Never use multi-color, fancy, or rainbow colored icons/images.
- **Mobile & Desktop Unified Optimization Standard**: Always design, build, and optimize features for seamless, high-performance compatibility across both Mobile and Desktop viewports. Use responsive design standards, adaptive layouts, touch/mouse friendly interactions, and optimal platform-specific decisions without compromising either experience.
- **Deployment Safety Directive**: Never deploy to production (e.g. running `npm run deploy:prod` or `firebase deploy`) unless the user explicitly requests or instructs a deployment.
- **Exclusion of Ad Banners on Utility & Compliance Pages**: Do not place or render AdSense/AdMob banner containers on contact (`/contact`), privacy policy (`/privacy`), terms of service (`/terms`), or about (`/about`) pages. Keep all utility and legal policy pages 100% clean and ad-free.
- **Consistent Standard Footer Rule**: Always use the exact standard front page footer on all standalone project pages, subject dashboards, and lesson pages (`Nextsem Academy • Complete Free Dev Curriculum` along with `Privacy Policy`, `Terms of Service`, `Contact Support`, `About Us`, and `XML Sitemap` links).
- **5-Point Concise Lesson & Pure HTML Standard (PERMANENT RULE)**: For all HTML lessons:
  1. **Maximum 5 Points & Max 8 Words Per Sentence**: The conceptual explanation MUST be presented as a clean bullet or numbered list containing **at most 5 concise points**, with each sentence being **just one line long containing at most 8 words per sentence** (never large walls of text or continuous paragraphs).
  2. **Code Directly Below**: Place the code snippet directly below the 5 points.
  3. **Strictly Pure HTML (No CSS, No JS)**: When teaching HTML, do NOT use CSS (no `<style>` tags or inline `style="..."` attributes) or JavaScript (no `<script>` tags or JS logic) in explanations or examples. Keep all code blocks 100% pure HTML5 markup.
  4. **1-to-1 Windows 11 Screenshot**: Include the matching authentic 🪟 Windows 11 Google Chrome screenshot directly with the code block.
  5. **Sidebar Hidden Under Hamburger Menu**: Keep the topics/chapters sidebar hidden by default across all viewports (desktop & mobile) under a hamburger menu button (`☰ Topics`) placed inside the sub-navigation bar just below the logo.
- **Engaging Visual Screenshot & Paragraph Flow Standard**: Every lesson step/section must feature its related authentic step-by-step Windows 11 / Google Chrome screenshot placed directly BEFORE the explanatory paragraph, with optimal readable font size (`text-base text-slate-100 font-normal leading-relaxed`) and tight paragraph margins (`my-1.5`) leaving no dead blank space between paragraphs.
- **Simulator Animation Mobile YouTube Shorts vs Desktop Wide Standard (PERMANENT RULE)**: The code compiler showcase animation (CompilerShowcaseAnimation.tsx) MUST render as a vertical YouTube Shorts video format (compact 9:16 / vertical mobile card, stacked preview drawer, and floating Shorts HUD controls) on mobile devices (< md), and as an expansive, wide landscape format with explorer sidebar, live simple browser drawer, and full-width breadcrumbs on desktop/tablet viewports (md: and above). All player controls HUD ([-10s], [Pause/Play], [+10s], [Reset]) must remain hidden by default and appear smoothly only when the user hovers over the animation (opacity-0 group-hover:opacity-100).
- **Complete Home Page Breadcrumb Navigation Standard (PERMANENT RULE - ALL LINKS & PAGES)**: Across all existing, new, and standalone curriculum pages, subject dashboards, semester hubs, lesson templates, and special studios, ALWAYS render a complete, clickable breadcrumb navigation trail starting from the Home Page (`🏠 Home`) all the way to the current active page (e.g., `🏠 Home ❯ BCA Hub ❯ Semester X ❯ Subject Code / Unit ❯ Lesson / Studio`). Every parent step in the breadcrumb trail MUST be an interactive, clickable hyperlink so students can instantly jump back to Home or any ancestor level from anywhere on the platform across both mobile and desktop viewports.









