export interface CssLesson {
  id: number;
  slug: string;
  title: string;
  unit: string;
  content: string;
}

export const cssLessons: CssLesson[] = [
  {
    id: 1,
    slug: "css-introduction-syntax-selectors",
    title: "CSS3 Introduction, Syntax & Universal Selectors",
    unit: "Unit 1: CSS Foundations & Style Selectors",
    content: `Welcome to the CSS3 Styling & Modern UI Architecture course!

## 1. What is CSS3?
* **CSS** stands for **Cascading Style Sheets**.
* It controls the visual layout, colors, typography, spacing, and animations of HTML5 documents.
* CSS separates page structure (HTML) from presentation (CSS), keeping web development clean and maintainable.

---

## 2. CSS Syntax Rule Structure
A CSS rule consists of a **selector** and a **declaration block**:

\`\`\`css
/* Selector targeting all <h1> elements */
h1 {
  color: #04AA6D;       /* Property: Value */
  font-size: 32px;
  text-align: center;
}
\`\`\`

---

## 3. The 3 Methods to Apply CSS
1. **External Stylesheet (Recommended):** Linked via \`<link rel="stylesheet" href="styles.css">\` in the HTML \`<head>\`.
2. **Internal CSS:** Written inside a \`<style>\` tag within the HTML \`<head>\`.
3. **Inline CSS:** Applied directly to an element via the \`style=""\` attribute.

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>CSS Syntax Demo</title>
  <link rel="stylesheet" href="styles.css">
  <style>
    p {
      color: #cbd5e1;
      line-height: 1.6;
    }
  </style>
</head>
<body>
  <h1>Hello CSS3 Styling!</h1>
  <p>Learn responsive layout design from scratch.</p>
</body>
</html>
\`\`\`

---

## 4. Core CSS Selectors
* **Element Selector:** Targets HTML tag names directly (e.g. \`p\`, \`h1\`, \`button\`).
* **Class Selector (\`.\`):** Targets elements with a specific class attribute (e.g. \`.btn-primary\`). Reusable across multiple elements.
* **ID Selector (\`#\`):** Targets a unique element with a specific ID (e.g. \`#main-header\`). Must be unique per page.
* **Universal Selector (\`*\`):** Targets every single element on the page, commonly used for CSS resets.

\`\`\`css
/* Universal Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Class Selector */
.card {
  background-color: #0c1328;
  border: 1px solid #1e293b;
  border-radius: 12px;
  padding: 24px;
}

/* ID Selector */
#hero-section {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
\`\`\`

---

## 5. Key Developer Takeaways
* Always use a universal reset (\`box-sizing: border-box\`) at the top of your stylesheet.
* Prefer **Class Selectors** over ID selectors for reusable, scalable UI component design.
`
  },
  {
    id: 2,
    slug: "css-colors-hex-rgb-hsl-gradients",
    title: "CSS Colors, HSL, Alpha Transparency & Linear Gradients",
    unit: "Unit 1: CSS Foundations & Style Selectors",
    content: `Mastering color models is essential for crafting modern, high-contrast dark and light user interfaces.

## 1. CSS Color Formats
* **Named Colors:** Built-in keywords like \`white\`, \`black\`, \`crimson\`, \`rebeccapurple\`.
* **HEX (#RRGGBB / #RRGGBBAA):** 6-digit hexadecimal format (e.g. \`#04AA6D\`, \`#0c1328\`).
* **RGB / RGBA:** Red, Green, Blue from 0 to 255 with an optional alpha channel for opacity (\`rgba(4, 170, 109, 0.85)\`).
* **HSL / HSLA:** Hue (0-360deg), Saturation (0-100%), Lightness (0-100%), and Alpha. Highly intuitive for designing harmonious palettes!

\`\`\`css
.element-hex {
  color: #04AA6D;
  background-color: #0c1328;
}

.element-rgba {
  /* 50% transparent white background */
  background-color: rgba(255, 255, 255, 0.5);
}

.element-hsl {
  /* Vibrant Emerald Green */
  color: hsl(158, 95%, 34%);
}
\`\`\`

---

## 2. Linear & Radial Gradients
Gradients create rich, multi-tone backgrounds without requiring heavy external image assets.

\`\`\`css
/* Linear Gradient from Cyan to Emerald */
.gradient-banner {
  background: linear-gradient(135deg, #06b6d4 0%, #04AA6D 100%);
  color: #ffffff;
  padding: 32px;
  border-radius: 16px;
}

/* Radial Glow for Modern Dark Mode */
.dark-hero-glow {
  background: radial-gradient(circle at center, rgba(4, 170, 109, 0.15) 0%, transparent 70%);
}
\`\`\`

---

## 3. Working Example: Glowing Gradient Badge
\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    body {
      background-color: #060c18;
      font-family: system-ui, sans-serif;
      padding: 40px;
    }
    .badge {
      display: inline-block;
      padding: 8px 18px;
      font-size: 13px;
      font-weight: 700;
      color: #ffffff;
      background: linear-gradient(90deg, #10b981, #06b6d4);
      border-radius: 9999px;
      box-shadow: 0 0 20px rgba(16, 185, 129, 0.4);
    }
  </style>
</head>
<body>
  <div class="badge">🚀 Full Stack Developer Ready</div>
</body>
</html>
\`\`\`
`
  },
  {
    id: 3,
    slug: "css-box-model-margin-border-padding",
    title: "The CSS Box Model, Box-Sizing & Spacing Architecture",
    unit: "Unit 2: Box Model & Layout Fundamentals",
    content: `Every HTML element rendered in a web browser is a rectangular box. Understanding the CSS Box Model is the foundation of responsive web layouts.

## 1. The 4 Layers of the Box Model
1. **Content:** The actual text, image, or video inside the element.
2. **Padding:** Transparent space clearing around the content, inside the border.
3. **Border:** A stroke wrapping around the padding and content.
4. **Margin:** Transparent space outside the border, separating the element from neighbors.

\`\`\`css
.box-demo {
  width: 300px;
  padding: 20px;              /* Inside space */
  border: 2px solid #04AA6D;  /* Boundary line */
  margin: 24px auto;          /* Outside space (centered) */
  background-color: #0c1328;
}
\`\`\`

---

## 2. The Power of \`box-sizing: border-box\`
* **\`content-box\` (Default):** Setting \`width: 300px\` makes the content 300px, but adding 20px padding and 2px border expands the total element width to **344px**! This often causes unexpected layout overflow.
* **\`border-box\` (Modern Standard):** The specified width includes padding and border. \`width: 300px\` guarantees the box is precisely **300px wide** total!

\`\`\`css
/* Apply globally to prevent layout overflow */
*, *::before, *::after {
  box-sizing: border-box;
}
\`\`\`

---

## 3. Margin Collapsing
* Top and bottom margins of adjoining block elements collapse into a single margin equal to the largest of the two.
* Horizontal margins (left/right) **never collapse**.
`
  },
  {
    id: 4,
    slug: "css-typography-fonts-line-height",
    title: "CSS Typography, Google Fonts, Line-Height & Web Text Styling",
    unit: "Unit 2: Box Model & Layout Fundamentals",
    content: `Typography determines the legibility, hierarchy, and professional feel of a modern website.

## 1. Key Typography Properties
* **\`font-family\`:** Specifies the typeface font stack (e.g. \`'Inter', sans-serif\`).
* **\`font-size\`:** Sets text size (\`16px\`, \`1.25rem\`, \`clamp(1rem, 2.5vw, 2rem)\`).
* **\`font-weight\`:** Controls thickness (e.g. \`400\` regular, \`600\` semibold, \`800\` extrabold).
* **\`line-height\`:** Distance between lines of text. Best practice: **\`1.5\` to \`1.75\`** for high-readability body copy.
* **\`letter-spacing\`:** Tracking between letters (e.g. \`-0.02em\` for sleek modern headings).

\`\`\`css
h1 {
  font-family: 'Outfit', sans-serif;
  font-size: 2.5rem;
  font-weight: 800;
  letter-spacing: -0.025em;
  color: #ffffff;
}

p {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  line-height: 1.7;
  color: #cbd5e1;
}
\`\`\`

---

## 2. Importing Google Fonts
Include Google Fonts in your HTML \`<head>\` or import them at the top of your CSS file:

\`\`\`css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');

body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
}
\`\`\`
`
  },
  {
    id: 5,
    slug: "css-display-block-inline-none",
    title: "CSS Display: Block, Inline, Inline-Block, and None",
    unit: "Unit 2: Box Model & Layout Fundamentals",
    content: `The \`display\` property specifies how an element behaves in the document layout flow.

## 1. Display Types Comparison
* **\`display: block\`:** Starts on a new line and takes up the full width available (e.g. \`<div>\`, \`<p>\`, \`<h1>\`). Accepts \`width\`, \`height\`, \`margin\`, and \`padding\`.
* **\`display: inline\`:** Sits inline with surrounding text (e.g. \`<span>\`, \`<a>\`, \`<strong>\`). Does not force line breaks. Ignores vertical \`width\` and \`height\`.
* **\`display: inline-block\`:** Sits inline on the same line as neighboring elements, but **honors width, height, padding, and margin**. Perfect for interactive buttons and pill tags!
* **\`display: none\`:** Completely removes the element from the document render tree (takes up zero space).

\`\`\`css
/* Inline-block buttons sitting side-by-side */
.nav-btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #04AA6D;
  color: #ffffff;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 700;
  margin-right: 12px;
}
\`\`\`
`
  },
  {
    id: 6,
    slug: "css-positioning-relative-absolute-sticky-fixed",
    title: "CSS Positioning: Static, Relative, Absolute, Fixed, and Sticky",
    unit: "Unit 3: Advanced Layouts & Positioning",
    content: `CSS positioning lets you position elements anywhere on the screen, overlay modal dialogs, and create sticky navigation headers.

## 1. The 5 Position Values
* **\`static\` (Default):** Follows the normal HTML document flow. Top, right, bottom, left properties have no effect.
* **\`relative\`:** Positioned relative to its normal position. Keeps its original layout footprint in the document flow. Crucially acts as an **anchor parent** for absolutely positioned children!
* **\`absolute\`:** Positioned relative to the nearest positioned ancestor (an ancestor with \`position: relative\`, \`absolute\`, or \`fixed\`). Removed from normal document flow.
* **\`fixed\`:** Positioned relative to the browser viewport. Stays fixed on screen even when the user scrolls (e.g. floating action buttons, cookie banners).
* **\`sticky\`:** Toggles between \`relative\` and \`fixed\` based on scroll position. Stays in normal flow until a scroll threshold (e.g. \`top: 0\`) is reached!

\`\`\`css
/* Sticky Navigation Bar */
.header-nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: #060c18;
  border-bottom: 1px solid #1e293b;
}

/* Card with Floating Absolute Badge */
.card-container {
  position: relative; /* Anchor parent */
  background-color: #0c1328;
  padding: 24px;
  border-radius: 16px;
}

.hot-badge {
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: #f43f5e;
  color: #ffffff;
  padding: 4px 10px;
  font-size: 11px;
  font-weight: 800;
  border-radius: 9999px;
}
\`\`\`
`
  },
  {
    id: 7,
    slug: "css-flexbox-container-items-align-justify",
    title: "CSS Flexbox: 1D Layouts, Justify-Content, Align-Items & Flex-Wrap",
    unit: "Unit 3: Advanced Layouts & Positioning",
    content: `CSS Flexbox (Flexible Box Layout) is the industry standard for distributing space and aligning items along a single axis (row or column).

## 1. Flex Container Properties
\`\`\`css
.flex-container {
  display: flex;
  flex-direction: row;        /* row (default) | column */
  justify-content: space-between; /* Horizontal alignment along main axis */
  align-items: center;        /* Vertical alignment along cross axis */
  flex-wrap: wrap;            /* nowrap (default) | wrap */
  gap: 16px;                  /* Spacing between child items */
}
\`\`\`

---

## 2. Centering Anything in 2 Lines of CSS
\`\`\`css
.perfect-center {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
\`\`\`

---

## 3. Flex Item Properties (\`flex: 1\`, \`flex-grow\`, \`flex-shrink\`)
* **\`flex-grow: 1\`:** The item expands to fill any remaining available space.
* **\`flex-shrink: 0\`:** Prevents the item from shrinking when container width decreases.
* **\`flex: 1\`:** Shorthand for \`flex: 1 1 0%\` (equal distribution across siblings).
`
  },
  {
    id: 8,
    slug: "css-grid-layout-template-columns-rows-minmax",
    title: "CSS Grid Layout: 2D Grid Systems, Repeat & Auto-Fit MinMax",
    unit: "Unit 3: Advanced Layouts & Positioning",
    content: `CSS Grid is a 2-dimensional layout engine designed for handling both columns and rows simultaneously.

## 1. Modern Responsive Grid without Media Queries
By combining \`repeat()\`, \`auto-fit\`, and \`minmax()\`, you can build responsive card grids that automatically adjust to any screen size!

\`\`\`css
.card-grid {
  display: grid;
  /* Automatically create as many columns as will fit, min 280px wide each */
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}
\`\`\`

---

## 2. Named Grid Areas Template
\`\`\`css
.app-layout {
  display: grid;
  grid-template-areas:
    "header  header"
    "sidebar main"
    "footer  footer";
  grid-template-columns: 260px 1fr;
  grid-template-rows: 60px 1fr 50px;
  min-height: 100vh;
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }
\`\`\`
`
  },
  {
    id: 9,
    slug: "css-media-queries-responsive-mobile-design",
    title: "CSS Media Queries, Mobile-First Design & Responsive Breakpoints",
    unit: "Unit 4: Responsive Web Design & Modern Techniques",
    content: `Mobile-first responsive design ensures your web application works seamlessly on smartphones, tablets, laptops, and ultra-wide desktop monitors.

## 1. Standard Responsive Breakpoints
* **Mobile Viewports:** \`< 640px\` (Default base CSS)
* **Tablets (\`sm\` / \`md\`):** \`@media (min-width: 768px)\`
* **Laptops (\`lg\`):** \`@media (min-width: 1024px)\`
* **Desktop Workstations (\`xl\`):** \`@media (min-width: 1280px)\`

\`\`\`css
/* 1. Mobile Default Base */
.hero-title {
  font-size: 1.75rem;
  text-align: center;
}

/* 2. Tablet & Above */
@media (min-width: 768px) {
  .hero-title {
    font-size: 2.75rem;
  }
}

/* 3. Desktop Workstation */
@media (min-width: 1024px) {
  .hero-title {
    font-size: 3.5rem;
  }
}
\`\`\`
`
  },
  {
    id: 10,
    slug: "css-transitions-transforms-keyframe-animations",
    title: "CSS Transitions, 2D/3D Transforms & Keyframe Animations",
    unit: "Unit 4: Responsive Web Design & Modern Techniques",
    content: `Micro-animations and smooth transitions make web user interfaces feel responsive, dynamic, and premium.

## 1. CSS Transitions & Transforms
\`\`\`css
.interactive-card {
  background-color: #0c1328;
  border: 1px solid #1e293b;
  border-radius: 16px;
  padding: 24px;
  /* Animate transform and border color changes */
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}

.interactive-card:hover {
  transform: translateY(-4px);
  border-color: #04AA6D;
  box-shadow: 0 12px 30px rgba(4, 170, 109, 0.2);
}
\`\`\`

---

## 2. Keyframe Animations (\`@keyframes\`)
\`\`\`css
@keyframes pulseGlow {
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
}

.pulsing-badge {
  animation: pulseGlow 2s infinite ease-in-out;
  will-change: transform;
}
\`\`\`
`
  },
  {
    id: 11,
    slug: "css-custom-properties-variables-dark-mode",
    title: "CSS Custom Properties (Variables) & Dark Mode Theming",
    unit: "Unit 4: Responsive Web Design & Modern Techniques",
    content: `CSS Variables (\`--custom-property\`) provide clean, centralized design token management for colors, spacing, and instant dark mode switching.

## 1. Defining and Consuming CSS Variables
\`\`\`css
:root {
  --primary-accent: #04AA6D;
  --bg-surface: #0c1328;
  --text-main: #ffffff;
  --text-muted: #94a3b8;
  --border-subtle: #1e293b;
}

body {
  background-color: #060c18;
  color: var(--text-main);
}

.card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  color: var(--text-main);
}

.card .subtitle {
  color: var(--text-muted);
}
\`\`\`
`
  },
  {
    id: 12,
    slug: "css-shadow-effects-box-shadow-glow",
    title: "CSS Box-Shadows, Neon Glows & Drop-Shadow Filters",
    unit: "Unit 4: Responsive Web Design & Modern Techniques",
    content: `Shadows and glows add depth, elevation hierarchy, and futuristic visual impact to web interfaces.

## 1. Box-Shadow Syntax
\`\`\`css
/* offset-x | offset-y | blur-radius | spread-radius | color */
.elevated-card {
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.5);
}

/* Neon Cyberpulse Glow */
.neon-button {
  background-color: #0c1328;
  border: 2px solid #06b6d4;
  color: #ffffff;
  box-shadow: 0 0 15px rgba(6, 182, 212, 0.4);
}
\`\`\`
`
  }
];
