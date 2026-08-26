# Project-Scoped Rules

- Do not make or compile native APK or AAB files (e.g. running Gradle assembleDebug or bundleRelease) for the Android app unless the user explicitly requests it.
- **Proactive Task & Roadmap Orientation**: At the beginning of every session or whenever the user asks for status, inspect `docs/adsense_admob_approval_roadmap.md` & `docs/roadmap/task.md`, remind the user of their exact next task, and keep development aligned with the revenue goals in `revenue-model/team-and-planning.md`. The user can also run `npm run status` or `npm run task` in the terminal anytime to view their live project dashboard!
- **Ad Platform Hybrid Strategy**: Always show Google AdSense ads only on web platform builds, and native Google AdMob ads only on native mobile app builds. Check `Capacitor.isNativePlatform()` to dynamically toggle and display the correct ad units.
- **App Update Notification Strategy**: Always display new feature additions and app updates on the Home page. Use clean, animated app-start modal alerts or banners that describe the changes and provide direct click-to-navigate links so users can instantly check out the new features.
- **Proactive Execution / Command Authorization**: Always proceed with command execution, verification runs (e.g. `npm run lint`, `npm test`), and workspace file changes proactively. Avoid asking for manual permission or approval prompts for these actions since the user has authorized an "accept all" policy from their side.
- **Exclusive Windows CMD Terminal Simulation**: Always use the interactive Windows Command Prompt terminal simulation layout for the landing page. Users are taught Windows terminal commands step-by-step, with each command presented on a new screen. Remove any classic slides or gamified roadmaps.
- **Forced Authentication & Scoped Progress Persistence**: Always enforce Firebase Google Authentication before starting the Command Simulator. Save and sync terminal progress to localStorage scoped by user email (`nextsem_terminal_step_${email}` and `nextsem_terminal_certified_${email}`) to prevent users from repeating completed lessons.
- **Responsive Layout & Screen Fitting**: Always keep the terminal layout and interactive elements fitted perfectly within the device's viewport. Avoid vertical overflows or sizing elements larger than the viewport height (e.g. wrapping layout in h-screen and subcomponents in overflow-y-auto) to prevent scroll hijacking and ensure easy navigation.
- **Show Thinking in Chat**: Always write analysis, reasoning, plans, and technical thoughts directly inside the chat response as readable text. Never hide reasoning inside artifacts, collapsed sections, or tool-call outputs when the user wants to read it. If the user asks "what do you think" or "let me read", respond in plain readable chat text.
- **Automatic Chat Transcript Archiving**: Always run `npm run save-chat` or write a custom formatting script to archive the conversation transcript under the `chat-logs/` folder before concluding any session. If the user requests a custom name, use that name (e.g. `100+ more projects for front end web developer.md`). Make sure to structure and save all chat logs dynamically for future developer references.
- **Gamified 10-Day Development Roadmap**: Always align the development flow with the roadmap saved in `docs/roadmap/brilliant_app_ideas_analysis.md`. Whenever the user asks for their daily task, prompts "what is my task", or asks "what to do next", guide and implement the corresponding day's task step-by-step:
  * **Day 1**: Define `desktopSimulatorSteps.ts` metadata, keyboard/mouse objectives.
  * **Day 2**: Build `DesktopSimulator.tsx` (draggable files, folder double-clicks, recycle bin).
  * **Day 3**: Setup conditional staging redirection to the desktop simulator on first launch.
  * **Day 4**: Refactor `/book/[chapter]` into bite-sized card sliders.
  * **Day 5**: Integrate MCQs, matching, and drag-and-drop quiz card blocks.
  * **Day 6**: Create `GamificationContext` (Hearts/Lives, Streaks, Points).
  * **Day 7**: Connect AdMob Rewarded Video ads to replenish hearts.
  * **Day 8**: Configure Capacitor AdMob (Mobile) vs Google AdSense (Web) smart banner loading.
  * **Day 9**: Implement AI Compiler Sage CLI hint generator.
  * **Day 10**: Build sandbox static portfolio subdomain publishing backend.
  * Keep track of this progress inside `docs/roadmap/task.md` in the workspace directory.

- **Strict White Text & Emerald Green Link Styling Standard (PERMANENT RULE)**: Across all current and future pages, components, and lesson templates:
  1. **Text Color**: All body text, lesson headings (H1, H2, H3), titles, and paragraphs MUST render strictly in high-contrast pure white (`text-white` / `#ffffff` or `text-slate-100`).
  2. **Link Color**: All hyperlinks, internal navigation anchors, command bullet links, and reference URLs MUST render strictly in vibrant emerald green (`text-[#04AA6D] hover:text-[#039861] underline decoration-[#04AA6D] font-semibold`).
  3. **Cookie Agreement Button**: The "Accept All & Continue" cookie consent button MUST render in simple white text with a solid black background (`bg-black text-white hover:bg-slate-900 border border-white/20 font-bold`).
  1. **Single-Stream Clean Lesson Content**: Primary, high-quality, visual English developer content. Do NOT include or require multiple language variants (English/Hinglish/Hindi) or Kid vs Pro complexity mode toggles.
  2. **Interactive MCQ Exercise**: Standard `{ question, options, correctAnswer, hint }` exercise block for knowledge checks.
  3. **Dashboard Back Link**: All lesson pages must include a header link back to their subject dashboard (e.g. `/html`, `/cli`).
  4. **SEO Slugs**: All lesson URLs must be descriptive and SEO-optimized (e.g. `/cli/learn-windows-command-prompt-cmd-basics`).
  5. **AdMob/AdSense PDF Download**: Each lesson must include a "Download Lesson PDF" option.
  6. **Beginner-Friendly Full Stack Web Developer Focus**: 100% focused on pure Full Stack Web Developer pathways (HTML, CSS, JavaScript, React, Node.js, Express, Databases, Git, 🪟 Windows CMD CLI, and Cloud Deployment).
- **Exclusion of Non-Coding Office Software**: Do not include or feature MS Word, MS Excel, PowerPoint, Google Docs, email writing, professional email etiquette, or resume writing topics. Keep all content strictly focused on software engineering and web development.
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






