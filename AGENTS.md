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



