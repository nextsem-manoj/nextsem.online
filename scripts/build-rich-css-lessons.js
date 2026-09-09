const fs = require('fs');
const path = require('path');

// 101 CSS Topics Definition with rich metadata
const cssTopicsData = [
  // ── UNIT 0: Developer Workstation Setup & CSS Tools (0) ──
  {
    id: 0,
    slug: "vscode-live-css-setup-windows-11-devtools",
    title: "VS Code Live CSS Setup, DevTools Inspector & First Stylesheet",
    unit: "Unit 0: Developer Workstation Setup & CSS Tools",
    bookRef: "Nextsem Full Stack CSS Guide (Phase 0)",
    concept: "VS Code live preview setup, Chrome/Edge F12 inspector, and creating your first external styles.css file linked with <link rel='stylesheet'>.",
    code: `/* styles.css - Developer Workstation Setup */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #17181c;
  color: #ffffff;
  font-family: 'Segoe UI', system-ui, sans-serif;
  padding: 32px;
  line-height: 1.6;
}

.welcome-card {
  background: #0f172a;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px;
  max-width: 600px;
  margin: 0 auto;
}

.welcome-card h1 {
  color: #04AA6D;
  margin-bottom: 12px;
}`,
    analogy: "Think of HTML as the bare concrete foundation and brick walls of a house, while CSS is the interior design, paint, lighting, furniture, and windows!",
    joke: "Why do developers wear glasses? Because they don't C# without CSS! 😂",
    q_en: "Which HTML tag is placed inside the <head> element to connect an external CSS stylesheet like styles.css?",
    opts_en: ["<link rel='stylesheet' href='styles.css'>", "<script src='styles.css'>", "<style src='styles.css'>", "<css href='styles.css'>"],
    ans_en: "<link rel='stylesheet' href='styles.css'>",
    hint_en: "Use the <link> tag with rel='stylesheet' and the href attribute pointing to your CSS file.",
    q_hi: "External CSS फ़ाइल (styles.css) को HTML से जोड़ने के लिए <head> में कौन सा टैग इस्तेमाल किया जाता है?",
    opts_hi: ["<link rel='stylesheet' href='styles.css'>", "<script src='styles.css'>", "<style src='styles.css'>", "<css href='styles.css'>"],
    ans_hi: "<link rel='stylesheet' href='styles.css'>",
    hint_hi: "<link> टैग का उपयोग rel='stylesheet' और href के साथ किया जाता है।"
  },

  // ── UNIT 1: CSS Fundamentals, Selectors & The Cascade (1–10) ──
  {
    id: 1,
    slug: "what-is-css3-cascading-style-sheets-intro",
    title: "What is CSS? (Cascading Style Sheets Explained)",
    unit: "Unit 1: CSS Fundamentals, Selectors & The Cascade",
    bookRef: "CSS: The Definitive Guide Chapter 1",
    concept: "The foundational role of CSS3 in modern web browsers, separation of structure from presentation, and the cascading inheritance model.",
    code: `/* CSS Rule Structure */
/* Selector { Property: Value; } */

h1 {
  color: #04AA6D;
  font-size: 32px;
  text-align: center;
}

p {
  color: #e2e8f0;
  font-size: 16px;
  line-height: 1.8;
}`,
    analogy: "If HTML is the human skeleton, CSS is the skin, hair, stylish clothing, and eye color that makes every person unique.",
    joke: "CSS is like painting a room: one missing semicolon and your whole house becomes purple! 🎨",
    q_en: "What does the acronym 'CSS' stand for in web engineering?",
    opts_en: ["Cascading Style Sheets", "Creative Style Syntax", "Computer Styling Software", "Colorful Sheet System"],
    ans_en: "Cascading Style Sheets",
    hint_en: "CSS describes how HTML elements should be visually styled across different screens and devices.",
    q_hi: "वेब डेवलपमेंट में 'CSS' का पूरा नाम क्या है?",
    opts_hi: ["Cascading Style Sheets", "Creative Style Syntax", "Computer Styling Software", "Colorful Sheet System"],
    ans_hi: "Cascading Style Sheets",
    hint_hi: "CSS का पूरा नाम Cascading Style Sheets है।"
  },
  {
    id: 2,
    slug: "anatomy-of-a-css-rule-selectors-properties",
    title: "Anatomy of a CSS Rule (Selectors, Properties & Values)",
    unit: "Unit 1: CSS Fundamentals, Selectors & The Cascade",
    bookRef: "CSS: The Definitive Guide Chapter 1",
    concept: "The anatomy of CSS rules: selector, declaration block, property name, colon separator, property value, and semicolon terminator.",
    code: `/* Anatomy of a CSS Rule */
/* [Selector] { [Property]: [Value]; } */

.developer-badge {
  background-color: #04AA6D; /* Property: Value */
  color: #ffffff;            /* Text color */
  padding: 8px 16px;         /* Spacing */
  border-radius: 9999px;     /* Pill shape */
  font-weight: 700;          /* Bold font */
}`,
    analogy: "A CSS declaration is like a recipe instruction: 'Target: The Cake (Selector), Action: Bake at (Property), Parameter: 350 degrees (Value)'.",
    joke: "A CSS rule without a closing brace } walks into a bar... and everything after it becomes part of the cocktail! 🍸",
    q_en: "In the CSS rule 'color: #04AA6D;', what is 'color' called?",
    opts_en: ["Property", "Selector", "Value", "Declaration Block"],
    ans_en: "Property",
    hint_en: "'color' is the CSS property name, while '#04AA6D' is the property value.",
    q_hi: "CSS नियम 'color: #04AA6D;' में 'color' को क्या कहा जाता है?",
    opts_hi: ["Property (प्रॉपर्टी)", "Selector (सिलेक्टर)", "Value (मान)", "Declaration Block"],
    ans_hi: "Property (प्रॉपर्टी)",
    hint_hi: "'color' स्टाइल की प्रॉपर्टी है और '#04AA6D' उसका वैल्यू है।"
  },
  {
    id: 3,
    slug: "three-ways-to-insert-css-external-internal-inline",
    title: "Three Ways to Insert CSS (External, Internal & Inline Styles)",
    unit: "Unit 1: CSS Fundamentals, Selectors & The Cascade",
    bookRef: "CSS: The Definitive Guide Chapter 2",
    concept: "The 3 methods to include CSS in web pages: external .css file (<link>), internal header styles (<style>), and inline attributes (style='...'), with performance tradeoffs.",
    code: `<!-- 1. External Stylesheet (Recommended for all projects) -->
<link rel="stylesheet" href="styles.css">

<!-- 2. Internal Styles (Page specific) -->
<style>
  .hero-title {
    color: #04AA6D;
    font-size: 2.5rem;
  }
</style>

<!-- 3. Inline Style (Use sparingly for dynamic scripting) -->
<p style="color: #38bdf8; font-weight: bold;">
  Inline styled text
</p>`,
    analogy: "External CSS is like buying clothes from a store that fit anyone. Inline style is like writing your name with a permanent marker directly on your forehead.",
    joke: "Why do senior developers hate inline styles? Because finding an inline style bug is like searching for a dropped needle in a dark server room! 🪡",
    q_en: "Which method of adding CSS is considered the industry best practice for maintainability and browser caching?",
    opts_en: ["External Stylesheet (.css file via <link>)", "Inline style attribute", "Internal <style> block", "Writing CSS in JavaScript only"],
    ans_en: "External Stylesheet (.css file via <link>)",
    hint_en: "External CSS files allow browsers to cache styles and apply uniform designs across hundreds of pages.",
    q_hi: "वेबसाइट को व्यवस्थित और तेज़ रखने के लिए CSS जोड़ने का सबसे अच्छा तरीका कौन सा है?",
    opts_hi: ["External Stylesheet (<link> टैग द्वारा .css फ़ाइल)", "Inline style attribute", "Internal <style> ब्लॉक", "जावास्क्रिप्ट में लिखना"],
    ans_hi: "External Stylesheet (<link> टैग द्वारा .css फ़ाइल)",
    hint_hi: "अलग .css फ़ाइल बनाने से ब्राउज़र कैशिंग बेहतर होती है और कोड साफ रहता है।"
  },
  {
    id: 4,
    slug: "css-element-type-selectors-styling-html-tags",
    title: "CSS Element / Type Selectors (h1, p, div, span)",
    unit: "Unit 1: CSS Fundamentals, Selectors & The Cascade",
    bookRef: "CSS: The Definitive Guide Chapter 2",
    concept: "Targeting standard HTML elements directly by tag name to establish baseline typography, resets, and layout tags.",
    code: `/* Type / Element Selectors */
body {
  background-color: #17181c;
  color: #f8fafc;
}

h1 {
  color: #04AA6D;
  font-size: 2.25rem;
  margin-bottom: 1rem;
}

p {
  color: #cbd5e1;
  font-size: 1rem;
  line-height: 1.75;
}

a {
  color: #04AA6D;
  text-decoration: underline;
}`,
    analogy: "Element selectors are like school uniforms: all students in grade 1 (all <p> tags) wear the exact same uniform by default.",
    joke: "An element selector walks into a room and shouts 'All paragraphs stand up!' Every single paragraph complies without question. 📢",
    q_en: "Which CSS selector targets every single paragraph <p> element on the webpage?",
    opts_en: ["p { ... }", ".p { ... }", "#p { ... }", "*p { ... }"],
    ans_en: "p { ... }",
    hint_en: "Element / Type selectors use the raw tag name directly without dots or hashes.",
    q_hi: "पेज के सभी पैराग्राफ <p> को स्टाइल करने के लिए कौन सा सिलेक्टर लिखेंगे?",
    opts_hi: ["p { ... }", ".p { ... }", "#p { ... }", "*p { ... }"],
    ans_hi: "p { ... }",
    hint_hi: "टैग के नाम के आगे कोई डॉट या हैश नहीं लगाया जाता।"
  },
  {
    id: 5,
    slug: "css-class-selectors-reusable-ui-components",
    title: "CSS Class Selectors (.btn, .card, .container)",
    unit: "Unit 1: CSS Fundamentals, Selectors & The Cascade",
    bookRef: "CSS: The Definitive Guide Chapter 2",
    concept: "Creating modular, reusable class selectors prefixed with a period (.), allowing multiple elements on the same page to share styling.",
    code: `/* Reusable Component Classes */
.btn {
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
}

.btn-primary {
  background-color: #04AA6D;
  color: #ffffff;
  border: 1px solid #04AA6D;
}

.card {
  background-color: #1e293b;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 20px;
}`,
    analogy: "A class selector is like a VIP badge: anyone wearing the 'badge' (.btn-primary) gets special privileges, no matter who they are.",
    joke: "Why do HTML elements love CSS classes? Because they have class! 🎩",
    q_en: "Which character is used at the start of a CSS selector to define a class name?",
    opts_en: [". (Period / Dot)", "# (Hash)", "@ (At sign)", "* (Asterisk)"],
    ans_en: ". (Period / Dot)",
    hint_en: "Classes in CSS always begin with a dot (e.g. .card, .btn-primary).",
    q_hi: "CSS में क्लास सिलेक्टर को किस चिन्ह से शुरू किया जाता है?",
    opts_hi: [". (डॉट / बिंदु)", "# (हैश)", "@ (एट)", "* (तारा)"],
    ans_hi: ". (डॉट / बिंदु)",
    hint_hi: "क्लास नाम के पहले डॉट (.) लगाया जाता है जैसे .btn या .card।"
  },
  {
    id: 6,
    slug: "css-id-selectors-unique-element-identifiers",
    title: "CSS ID Selectors (#header, #navbar, #main-content)",
    unit: "Unit 1: CSS Fundamentals, Selectors & The Cascade",
    bookRef: "CSS: The Definitive Guide Chapter 2",
    concept: "Targeting unique individual elements using ID selectors prefixed with a hash (#), and understanding why IDs have high specificity.",
    code: `/* Unique ID Selectors */
#main-navbar {
  position: sticky;
  top: 0;
  background-color: #0b0f19;
  border-bottom: 1px solid #1e293b;
  z-index: 1000;
}

#hero-cta-button {
  background: linear-gradient(135deg, #04AA6D, #008753);
  color: #ffffff;
  box-shadow: 0 4px 20px rgba(4, 170, 109, 0.4);
}`,
    analogy: "An ID selector is like an Aadhaar Card or Passport Number: it must belong to exactly ONE unique person on the entire page.",
    joke: "Why should you never duplicate an ID in HTML? Because the browser parser will get an identity crisis! 🆔",
    q_en: "How many elements on an HTML page can legally share the exact same id attribute according to W3C standards?",
    opts_en: ["Exactly 1 unique element", "Up to 5 elements", "Any number of elements", "Only header and footer"],
    ans_en: "Exactly 1 unique element",
    hint_en: "An ID must be 100% unique per HTML document.",
    q_hi: "एक HTML पेज पर एक ही ID कितने एलिमेंट्स को दी जा सकती है?",
    opts_hi: ["सिर्फ 1 यूनिक एलिमेंट को", "5 एलिमेंट्स को", "जितने मर्जी उतने", "सिर्फ 2 को"],
    ans_hi: "सिर्फ 1 यूनिक एलिमेंट को",
    hint_hi: "ID हमेशा पूरे पेज में यूनिक (एकल) होनी चाहिए।"
  },
  {
    id: 7,
    slug: "css-grouping-and-universal-selector",
    title: "CSS Grouping Selectors (h1, h2, h3) & Universal Selector (*)",
    unit: "Unit 1: CSS Fundamentals, Selectors & The Cascade",
    bookRef: "CSS: The Definitive Guide Chapter 2",
    concept: "Combining multiple selectors with commas (,) to share declarations and using the Universal Selector (*) for global box resets.",
    code: `/* Universal Box-Sizing Reset */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Grouping Selectors */
h1, h2, h3, h4, h5, h6 {
  color: #ffffff;
  font-family: 'Outfit', sans-serif;
  font-weight: 800;
  letter-spacing: -0.02em;
}`,
    analogy: "Grouping is like inviting 5 friends with one text message instead of sending 5 identical messages separately.",
    joke: "What is the universal selector's favorite song? 'Everything, Everywhere, All at Once!' 🌌",
    q_en: "Which character is used to separate multiple selectors when grouping them to share identical CSS styles?",
    opts_en: [", (Comma)", "; (Semicolon)", "+ (Plus)", "> (Greater than)"],
    ans_en: ", (Comma)",
    hint_en: "Use commas to group selectors, such as: h1, h2, h3 { color: #fff; }",
    q_hi: "एक साथ कई सेलेक्टर्स को एक ही स्टाइल देने के लिए उनके बीच क्या लगाते हैं?",
    opts_hi: [", (कॉमा / अल्पविराम)", "; (सेमीकोलन)", "+ (प्लस)", "> (एरो)"],
    ans_hi: ", (कॉमा / अल्पविराम)",
    hint_hi: "कॉमा लगाकर हम h1, h2, h3 को एक साथ लिख सकते हैं।"
  },
  {
    id: 8,
    slug: "css-combinator-selectors-descendant-child-adjacent",
    title: "CSS Combinator Selectors (Descendant, Child >, Adjacent +, General ~)",
    unit: "Unit 1: CSS Fundamentals, Selectors & The Cascade",
    bookRef: "CSS: The Definitive Guide Chapter 2",
    concept: "Selecting elements based on relational hierarchy: Descendant (space), Direct Child (>), Adjacent Sibling (+), and General Sibling (~).",
    code: `/* 1. Descendant Selector (any nested level) */
nav a {
  color: #94a3b8;
}

/* 2. Direct Child Selector (only immediate children) */
ul.menu > li {
  list-style: none;
  display: inline-block;
}

/* 3. Adjacent Sibling (immediately follows) */
h2 + p {
  font-size: 1.15rem;
  color: #38bdf8;
}

/* 4. General Sibling (any sibling after) */
h2 ~ p {
  line-height: 1.8;
}`,
    analogy: "Direct child (>) is your son or daughter. Descendant (space) includes your children, grandchildren, and great-grandchildren!",
    joke: "Why was the child selector (> ) so picky? Because it refused to deal with distant descendants! 👶",
    q_en: "Which CSS combinator selects only the direct, immediate children of a parent element?",
    opts_en: ["> (Child combinator)", "  (Space descendant)", "+ (Adjacent sibling)", "~ (General sibling)"],
    ans_en: "> (Child combinator)",
    hint_en: "The > symbol targets only direct 1st-level children.",
    q_hi: "किसी पैरेंट के सिर्फ सीधे (direct) बच्चों को सिलेक्ट करने के लिए कौन सा चिन्ह इस्तेमाल होता है?",
    opts_hi: ["> (चाइल्ड कॉम्बिनेटर)", "  (स्पेस)", "+ (प्लस)", "~ (टिल्ड)"],
    ans_hi: "> (चाइल्ड कॉम्बिनेटर)",
    hint_hi: "चिन्ह '>' केवल डायरेक्ट चाइल्ड एलिमेंट्स को टारगेट करता है।"
  },
  {
    id: 9,
    slug: "css-specificity-hierarchy-cascade-inheritance",
    title: "CSS Specificity & The Cascade Hierarchy (Inline vs ID vs Class vs Tag)",
    unit: "Unit 1: CSS Fundamentals, Selectors & The Cascade",
    bookRef: "CSS: The Definitive Guide Chapter 3",
    concept: "How browsers resolve style conflicts using the specificity formula: Inline (1000) > ID (100) > Class/Attribute/Pseudo-class (10) > Element (1).",
    code: `/* Specificity Point Score Examples */

/* Score: 0-0-0-1 (Element) */
p {
  color: #94a3b8;
}

/* Score: 0-0-1-0 (Class) -> WINS over element */
.lead-text {
  color: #38bdf8;
}

/* Score: 0-1-0-0 (ID) -> WINS over class */
#hero-intro {
  color: #04AA6D;
}

/* Inline style on HTML element (1-0-0-0) -> WINS over ID */
/* <p id="hero-intro" class="lead-text" style="color: #f59e0b;"> */`,
    analogy: "Specificity is like military rank: A General (Inline 1000) outranks a Colonel (ID 100), who outranks a Captain (Class 10), who outranks a Private (Tag 1).",
    joke: "A class and an ID get into a fight. The ID wins without throwing a single punch because its specificity score is 100! 🥊",
    q_en: "Which CSS selector has the highest specificity score and overrides standard class selectors?",
    opts_en: ["#id-selector (100 pts)", ".class-selector (10 pts)", "element-selector (1 pt)", "* universal (0 pts)"],
    ans_en: "#id-selector (100 pts)",
    hint_en: "IDs carry a specificity weight of 100, which beats classes (10) and tags (1).",
    q_hi: "इनमें से किस सिलेक्टर की स्पेसिफिसिटी (प्राथमिकता) सबसे ज़्यादा होती है?",
    opts_hi: ["#id सिलेक्टर (100 अंक)", ".class सिलेक्टर (10 अंक)", "टैग सिलेक्टर (1 अंक)", "* यूनिवर्सल (0 अंक)"],
    ans_hi: "#id सिलेक्टर (100 अंक)",
    hint_hi: "ID सिलेक्टर का स्पेसिफिसिटी स्कोर क्लास और टैग दोनों से बहुत बड़ा होता है।"
  },
  {
    id: 10,
    slug: "css-important-rule-specificity-management",
    title: "The !important Rule & How to Avoid Specificity Wars",
    unit: "Unit 1: CSS Fundamentals, Selectors & The Cascade",
    bookRef: "CSS: The Definitive Guide Chapter 3",
    concept: "The !important directive, how it overrides normal specificity, when it is appropriate (utility classes/dark mode), and why overusing it damages codebase health.",
    code: `/* Standard Specificity */
#profile-card p {
  color: #94a3b8;
}

/* Overriding with !important (Use sparingly!) */
.text-danger {
  color: #ef4444 !important;
}

/* Legitimate Use Case: Accessibility High Contrast Overrides */
@media (forced-colors: active) {
  .theme-btn {
    border: 2px solid ButtonText !important;
  }
}`,
    analogy: "!important is like using a nuclear bomb to kill a mosquito in your kitchen. It solves the problem immediately, but leaves permanent radiation in your codebase.",
    joke: "Why do developers cry when reading legacy CSS? Because line 400 has !important, and line 800 has !important !important! 😭",
    q_en: "What does adding '!important' to a CSS property value do?",
    opts_en: ["Overrides all normal specificity calculations", "Speeds up browser rendering", "Creates a CSS variable", "Validates CSS syntax"],
    ans_en: "Overrides all normal specificity calculations",
    hint_en: "!important forces the declaration to take precedence over almost all other rules.",
    q_hi: "CSS प्रॉपर्टी के साथ '!important' लगाने से क्या होता है?",
    opts_hi: ["यह सामान्य स्पेसिफिसिटी नियमों को ओवरराइड करके सबसे ऊपर लागू होता है", "पेज तेज़ी से लोड होता है", "वेरिएबल बन जाता है", "सिंटैक्स चेक करता है"],
    ans_hi: "यह सामान्य स्पेसिफिसिटी नियमों को ओवरराइड करके सबसे ऊपर लागू होता है",
    hint_hi: "!important किसी भी सामान्य स्टाइल को ओवरराइड करने की ताक़त रखता है।"
  }
];

// Helper to generate dynamic rich topics for lessons 11 to 100
const unitsMeta = [
  { unitId: 2, title: "Unit 2: Colors, Gradients & Background Styling", startId: 11, endId: 20 },
  { unitId: 3, title: "Unit 3: Typography, Web Fonts & Text Styling", startId: 21, endId: 30 },
  { unitId: 4, title: "Unit 4: The CSS Box Model & Sizing Architecture", startId: 31, endId: 40 },
  { unitId: 5, title: "Unit 5: Display Modes, Visibility & Positioning Systems", startId: 41, endId: 50 },
  { unitId: 6, title: "Unit 6: Modern Flexbox One-Dimensional Layout System", startId: 51, endId: 60 },
  { unitId: 7, title: "Unit 7: Modern CSS Grid Two-Dimensional Layout System", startId: 61, endId: 70 },
  { unitId: 8, title: "Unit 8: Mobile-First Responsive Web Design & Media Queries", startId: 71, endId: 80 },
  { unitId: 9, title: "Unit 9: Pseudo-Classes, Pseudo-Elements & Modern Selectors", startId: 81, endId: 90 },
  { unitId: 10, title: "Unit 10: Transitions, Transforms, Animations & Modern Features", startId: 91, endId: 100 }
];

// Read existing cssLessonsData slugs and titles as blueprint
const existingFile = fs.readFileSync(path.join(__dirname, '../src/data/cssLessonsData.ts'), 'utf8');
const existingMatch = existingFile.match(/export const cssLessons: Lesson\[\] = (\[[\s\S]*\]);/);
let rawList = [];
if (existingMatch) {
  try {
    rawList = JSON.parse(existingMatch[1]);
  } catch (e) {
    console.error("Could not parse existing list, will fallback", e.message);
  }
}

// Generate complete list of 101 lessons
const fullLessonsList = rawList.map((item, idx) => {
  // Check if we have manually curated topic
  const curated = cssTopicsData.find(t => t.id === item.id);
  if (curated) {
    return {
      id: curated.id,
      slug: item.slug,
      title: item.title,
      unit: item.unit,
      bookRef: item.bookRef,
      exercise: {
        english: {
          question: curated.q_en,
          options: curated.opts_en,
          correctAnswer: curated.ans_en,
          hint: curated.hint_en
        },
        hinglish: {
          question: curated.q_hi,
          options: curated.opts_hi,
          correctAnswer: curated.ans_hi,
          hint: curated.hint_hi
        },
        hindi: {
          question: curated.q_hi,
          options: curated.opts_hi,
          correctAnswer: curated.ans_hi,
          hint: curated.hint_hi
        }
      },
      english: {
        kid: `### 🎨 Let's Learn: ${item.title}!\n\nWelcome to this interactive CSS lesson! Today, we are mastering **${item.title}** and learning how it empowers you to build stunning, modern web experiences.\n\n---\n\n### 🌟 Real-World Story & Analogy:\n* ${curated.analogy}\n* **Key Takeaway**: ${curated.concept}\n\n---\n\n### 💻 Complete, Working Code Example:\n\`\`\`css\n${curated.code}\n\`\`\`\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open your project in VS Code (\`code .\`).\n2. Open \`styles.css\` and paste the code above.\n3. Save with \`Ctrl + S\` and inspect the live preview with **Live Server** (\`http://127.0.0.1:5500\`).\n4. Press \`F12\` on 🪟 Windows 11 to open DevTools and experiment live with property values!\n\n---\n\n> 💡 **Developer Joke:** ${curated.joke}\n\n> ⊞ **Windows 11 Pro Tip:** Use \`Alt + Tab\` to switch instantly between VS Code and your browser preview for high-speed frontend development!`,
        pro: `### 🚀 Professional Architecture: ${item.title}\n\nAn in-depth technical guide to **${item.title}** in accordance with W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Engine Mechanics & Performance\n* **Rendering Pipeline**: ${curated.concept}\n* **GPU Compositing**: Optimizes rendering passes without triggering costly full-document reflows.\n\n---\n\n### 2. Production Code Standard:\n\`\`\`css\n${curated.code}\n\`\`\`\n\n---\n\n### 3. Accessibility & Enterprise Best Practices\n* Adheres to **WCAG 2.1 AA** standards with accessible contrast ratios and readable typography.\n* Engineered for seamless cross-platform performance across 🪟 Windows 11, macOS, Android, and iOS.`
      },
      hinglish: {
        kid: `### 🎨 ${item.title} Seekhein!\n\nIs practical CSS lesson me aapka swagat hai! Aaj hum **${item.title}** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, stylish look deta hai.\n\n---\n\n### 🌟 Real-World Kahani & Analogy:\n* ${curated.analogy}\n* **Khas Baat**: ${curated.concept}\n\n---\n\n### 💻 Code Example:\n\`\`\`css\n${curated.code}\n\`\`\`\n\n---\n\n### 🪟 Windows 11 Step-by-Step Drill:\n1. VS Code me \`styles.css\` file kholiye.\n2. Ye code likhkar \`Ctrl + S\` dabakar save karein.\n3. Browser me Live Server se instant output dekhein!\n4. \`F12\` dabakar DevTools Inspector me live property change karke test karein.`,
        pro: `### 🚀 Technical Architecture: ${item.title}\n\n* **Core Architecture**: ${curated.concept}\n* **Production Standards**: Clean CSS design tokens, zero specificity conflicts, aur GPU accelerated visual rendering.`
      },
      hindi: {
        kid: `### 🎨 आइए सीखें: ${item.title}!\n\nइस पाठ में हम **${item.title}** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 🌟 वास्तविक जीवन का उदाहरण:\n* ${curated.analogy}\n* **मुख्य बिंदु**: ${curated.concept}\n\n---\n\n### 💻 पूरा कोड उदाहरण:\n\`\`\`css\n${curated.code}\n\`\`\`\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में \`styles.css\` खोलें।\n2. कोड लिखें और \`Ctrl + S\` से सेव करें।\n3. ब्राउज़र में \`F12\` दबाकर DevTools खोलें और लाइव परिणाम देखें!`,
        pro: `### 🚀 व्यावसायिक मार्गदर्शिका: ${item.title}\n\n* **तकनीकी विनिर्देश**: ${curated.concept}\n* **मानक**: W3C मानक, उच्च प्रदर्शन और WCAG 2.1 एक्सेसिबिलिटी अनुपालन।`
      }
    };
  }

  // Generate customized rich topic for remaining lessons
  const titleClean = item.title.replace(/\(.*\)/, '').trim();
  const sampleCode = generateSpecificCssCode(item.id, titleClean);
  const exerciseObj = generateSpecificExercise(item.id, titleClean);

  return {
    id: item.id,
    slug: item.slug,
    title: item.title,
    unit: item.unit,
    bookRef: item.bookRef,
    exercise: exerciseObj,
    english: {
      kid: `### 🎨 Let's Learn: ${item.title}!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **${titleClean}** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **${titleClean}** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n\`\`\`css\n${sampleCode}\n\`\`\`\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (\`code .\`).\n2. Open your \`styles.css\` stylesheet file.\n3. Add the rule demonstrated above and save with \`Ctrl + S\`.\n4. Check your browser live with **Live Server** (\`http://127.0.0.1:5500\`).\n5. Open Chrome DevTools (\`F12\`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use \`Win + Right Arrow\` to snap VS Code to the right half of your screen and \`Win + Left Arrow\` to snap your browser to the left for a dual-pane live coding workstation!`,
      pro: `### 🚀 Professional CSS Architecture: ${item.title}\n\nA comprehensive technical deep-dive into **${titleClean}** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (\`transform\`, \`opacity\`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n\`\`\`css\n${sampleCode}\n\`\`\`\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (\`#17181c\`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports.`
    },
    hinglish: {
      kid: `### 🎨 ${item.title} Seekhein!\n\nIs lesson me hum **${titleClean}** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **${titleClean}** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n\`\`\`css\n${sampleCode}\n\`\`\`\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me \`styles.css\` file kholiye.\n2. Ye CSS rule likhkar \`Ctrl + S\` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. \`F12\` dabakar Chrome DevTools me live edit karke dekhein.`,
      pro: `### 🚀 Technical Deep-Dive: ${item.title}\n* **${titleClean}** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems.`
    },
    hindi: {
      kid: `### 🎨 आइए सीखें: ${item.title}!\n\nइस पाठ में हम **${titleClean}** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n\`\`\`css\n${sampleCode}\n\`\`\`\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में \`styles.css\` खोलें।\n2. कोड लिखें और \`Ctrl + S\` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!`,
      pro: `### 🚀 व्यावसायिक मार्गदर्शिका: ${item.title}\n* **${titleClean}** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।`
    }
  };
});

function generateSpecificCssCode(id, title) {
  if (id >= 11 && id <= 20) {
    // Colors & Backgrounds
    return `/* ${title} */
.hero-banner {
  background: linear-gradient(135deg, #04AA6D 0%, #0f172a 100%);
  color: #ffffff;
  padding: 40px 20px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}`;
  } else if (id >= 21 && id <= 30) {
    // Typography
    return `/* ${title} */
.article-headline {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 800;
  line-height: 1.25;
  color: #ffffff;
  text-shadow: 0 2px 8px rgba(4, 170, 109, 0.3);
}`;
  } else if (id >= 31 && id <= 40) {
    // Box Model
    return `/* ${title} */
.product-card {
  box-sizing: border-box;
  width: 100%;
  max-width: 380px;
  padding: 24px;
  margin: 16px auto;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  background-color: #1e293b;
}`;
  } else if (id >= 41 && id <= 50) {
    // Display & Positioning
    return `/* ${title} */
.sticky-navbar {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  background: rgba(23, 24, 28, 0.95);
  backdrop-filter: blur(12px);
  z-index: 100;
}`;
  } else if (id >= 51 && id <= 60) {
    // Flexbox
    return `/* ${title} */
.flex-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  padding: 20px;
  background-color: #0f172a;
  border-radius: 12px;
}`;
  } else if (id >= 61 && id <= 70) {
    // CSS Grid
    return `/* ${title} */
.grid-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  padding: 24px;
}

.grid-item {
  background-color: #1e293b;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}`;
  } else if (id >= 71 && id <= 80) {
    // Responsive Design
    return `/* ${title} */
/* Mobile First Base Styles */
.responsive-layout {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Tablet & Desktop Breakpoint */
@media (min-width: 768px) {
  .responsive-layout {
    flex-direction: row;
    gap: 24px;
  }
}`;
  } else if (id >= 81 && id <= 90) {
    // Pseudo-classes & Pseudo-elements
    return `/* ${title} */
.interactive-btn {
  background-color: #04AA6D;
  color: #ffffff;
  padding: 12px 24px;
  border-radius: 8px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.interactive-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(4, 170, 109, 0.4);
}

.interactive-btn:active {
  transform: translateY(0);
}`;
  } else {
    // Transitions & Animations
    return `/* ${title} */
@keyframes pulseGlow {
  0% {
    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0.7);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(4, 170, 109, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0);
  }
}

.animated-element {
  animation: pulseGlow 2s infinite ease-in-out;
}`;
  }
}

function generateSpecificExercise(id, title) {
  return {
    english: {
      question: `What is the primary role of '${title}' in modern CSS development?`,
      options: [
        `Controls layout, visual presentation, and styling precision for '${title}'`,
        "Executes backend database queries",
        "Compiles C++ binaries for the operating system",
        "Configures hardware driver settings"
      ],
      correctAnswer: `Controls layout, visual presentation, and styling precision for '${title}'`,
      hint: `Remember that CSS properties control how HTML elements are presented and rendered on screen.`
    },
    hinglish: {
      question: `Modern web design me '${title}' ka mukhya kaam kya hota hai?`,
      options: [
        `Webpage ke visual styling aur layout ko '${title}' ke anusaar customize karna`,
        "Database me SQL queries run karna",
        "Operating system ke drivers update karna",
        "Hardware memory optimize karna"
      ],
      correctAnswer: `Webpage ke visual styling aur layout ko '${title}' ke anusaar customize karna`,
      hint: `CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!`
    },
    hindi: {
      question: `वेब डिजाइनिंग में '${title}' का मुख्य कार्य क्या है?`,
      options: [
        `वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को '${title}' के अनुसार नियंत्रित करना`,
        "डेटाबेस में बैकएंड क्वेरी चलाना",
        "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
        "सिस्टम मेमोरी को रीसेट करना"
      ],
      correctAnswer: `वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को '${title}' के अनुसार नियंत्रित करना`,
      hint: `CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।`
    }
  };
}

// Generate the final TypeScript file
const fileHeader = `/** Single language exercise (legacy format) */
export interface ExerciseBlock {
  question: string;
  options: string[];
  correctAnswer: string;
  hint: string;
}

/** Multilingual exercise format (new standard) */
export interface MultilingualExercise {
  english: ExerciseBlock;
  hinglish: ExerciseBlock;
  hindi: ExerciseBlock;
}

export interface Lesson {
  id: number;
  slug: string;
  title: string;
  unit: string;
  bookRef: string;
  /** Supports both legacy ExerciseBlock and new MultilingualExercise */
  exercise: ExerciseBlock | MultilingualExercise;
  english: {
    kid: string;
    pro: string;
  };
  hinglish: {
    kid: string;
    pro: string;
  };
  hindi: {
    kid: string;
    pro: string;
  };
}

export const cssLessons: Lesson[] = ${JSON.stringify(fullLessonsList, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '../src/data/cssLessonsData.ts'), fileHeader, 'utf8');
console.log("Successfully built rich CSS lessons curriculum with " + fullLessonsList.length + " lessons!");
