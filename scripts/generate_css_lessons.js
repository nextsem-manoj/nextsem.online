const fs = require('fs');
const path = require('path');

const cssLessons = [
  // ── UNIT 1: CSS FOUNDATIONS & SELECTORS ──
  {
    id: 1,
    slug: "css-introduction-syntax-selectors",
    title: "CSS3 Introduction, Syntax & Universal Selectors",
    unit: "Unit 1: CSS Foundations & Selectors",
    content: `Welcome to the CSS3 Styling & Modern UI Architecture course!

## 1. What is CSS3?
* **CSS** stands for **Cascading Style Sheets**.
* It controls visual layout, colors, typography, spacing, and micro-animations for HTML5 documents.
* CSS separates page structure (HTML) from presentation (CSS), keeping code clean and scalable.

---

## 2. CSS Syntax Rule Structure
A CSS rule contains a **selector** and a **declaration block**:

\`\`\`css
/* Selector targeting all <h1> headings */
h1 {
  color: #04AA6D;       /* Property: Value */
  font-size: 32px;
  text-align: center;
}
\`\`\`

---

## 3. The 3 Methods to Apply CSS
1. **External Stylesheet (Industry Standard):** Linked with \`<link rel="stylesheet" href="styles.css">\` in HTML \`<head>\`.
2. **Internal CSS:** Written inside a \`<style>\` tag in HTML \`<head>\`.
3. **Inline CSS:** Applied directly to an HTML element with the \`style=""\` attribute.

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
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
`
  },
  {
    id: 2,
    slug: "css-selectors-mastery-class-id",
    title: "CSS Selectors Mastery (Element, Class, ID & Grouping)",
    unit: "Unit 1: CSS Foundations & Selectors",
    content: `Mastering CSS selectors is the foundation of writing efficient, maintainable stylesheets without styling conflicts.

## 1. Primary Selector Types
* **Universal Selector (\`*\`):** Targets every single element on the page. Commonly used for CSS resets.
* **Element / Type Selector (\`h1\`, \`p\`, \`button\`):** Targets all elements of that HTML tag.
* **Class Selector (\`.class-name\`):** Targets all elements with a specific \`class=""\`. Reusable across many elements.
* **ID Selector (\`#id-name\`):** Targets a unique element with a specific \`id=""\`. Highest specificity.

\`\`\`css
/* 1. Universal reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 2. Element selector */
p {
  color: #94a3b8;
}

/* 3. Class selector (Reusable) */
.btn-primary {
  background-color: #04AA6D;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 8px;
}

/* 4. ID selector (Unique) */
#main-navigation {
  background-color: #0c1328;
}
\`\`\`

---

## 2. Grouping Selectors
If multiple selectors share identical styles, separate them with commas to eliminate duplicated code:

\`\`\`css
h1, h2, h3, h4 {
  font-family: 'Inter', sans-serif;
  color: #ffffff;
  letter-spacing: -0.02em;
}
\`\`\`
`
  },
  {
    id: 3,
    slug: "css-combinators-descendant-child",
    title: "CSS Combinators (Descendant, Child, Adjacent & Sibling)",
    unit: "Unit 1: CSS Foundations & Selectors",
    content: `Combinators explain the relationship between two selectors, allowing precise targeting based on DOM hierarchy.

## 1. The 4 CSS Combinators
1. **Descendant Selector (\`space\`):** Matches all matching elements inside the parent, no matter how deeply nested.
2. **Child Selector (\`>\`):** Matches only direct children (one level down) of the parent element.
3. **Adjacent Sibling (\`+\`):** Matches the element that immediately follows another specific element.
4. **General Sibling (\`~\`):** Matches all sibling elements that follow another element under the same parent.

\`\`\`css
/* Descendant: all <p> inside .article */
.article p {
  line-height: 1.8;
}

/* Child: only direct <li> children of .nav-menu */
.nav-menu > li {
  display: inline-block;
}

/* Adjacent: <p> immediately after an <h2> */
h2 + p {
  font-size: 1.2rem;
  color: #04AA6D;
}

/* General Sibling: all <p> following <h2> */
h2 ~ p {
  margin-bottom: 1rem;
}
\`\`\`
`
  },
  {
    id: 4,
    slug: "css-colors-rgb-hsl-alpha-hex",
    title: "CSS Colors & Color Models (Hex, RGB, HSL & Alpha)",
    unit: "Unit 1: CSS Foundations & Selectors",
    content: `Modern CSS supports multiple color formats, allowing precise color matching and dynamic transparency.

## 1. Common Color Formats
* **Hex Codes (\`#04AA6D\` / \`#ffffff\`):** 6-character hexadecimal codes for red, green, and blue channels.
* **RGB & RGBA (\`rgb(4, 170, 109)\` / \`rgba(4, 170, 109, 0.8)\`):** Red, Green, Blue values (0 to 255) with optional Alpha opacity (0.0 to 1.0).
* **HSL & HSLA (\`hsl(158, 95%, 34%)\`):** Hue (0–360° on color wheel), Saturation (%), Lightness (%). Highly intuitive for building color schemes!

\`\`\`css
.card {
  /* Hex color */
  color: #ffffff;
  
  /* Modern HSL Background */
  background-color: hsl(222, 47%, 11%);
  
  /* RGBA Semi-transparent Border */
  border: 1px solid rgba(4, 170, 109, 0.3);
}
\`\`\`
`
  },
  {
    id: 5,
    slug: "css-units-px-rem-em-vw-vh",
    title: "CSS Units & Sizing (Pixels, REM, EM, Viewport & %)",
    unit: "Unit 1: CSS Foundations & Selectors",
    content: `Understanding absolute vs relative CSS units is crucial for creating fluid, responsive user interfaces.

## 1. Absolute Units vs Relative Units
* **\`px\` (Pixels):** Absolute unit fixed in physical screen dots. Best for thin borders and small fixed details.
* **\`rem\` (Root EM):** Relative to the root \`<html>\` font-size (default: \`1rem = 16px\`). Best for typography, padding, and margins!
* **\`em\`:** Relative to the font-size of the current element's parent.
* **\`%\` (Percentage):** Relative to parent element dimensions.
* **\`vw\` & \`vh\`:** Viewport Width & Height (\`100vw = 100%\` of window width, \`100vh = 100%\` of window height).

\`\`\`css
html {
  font-size: 16px; /* 1rem = 16px */
}

.hero-section {
  width: 100%;
  min-height: 100vh;      /* Full screen height */
  padding: 2.5rem 1.5rem; /* Responsive spacing */
}

h1 {
  font-size: 2.25rem;     /* 36px */
}
\`\`\`
`
  },
  {
    id: 6,
    slug: "css-comments-devtools-inspection",
    title: "CSS Comments, Best Practices & DevTools Inspection",
    unit: "Unit 1: CSS Foundations & Selectors",
    content: `Clean stylesheets follow organizational standards, structured comments, and browser inspection workflows.

## 1. Writing CSS Comments
CSS comments start with \`/*\` and end with \`*/\`. They can span single or multiple lines:

\`\`\`css
/* ==========================================================================
   NAVIGATION BAR STYLES
   ========================================================================== */

/* Main Header Container */
.header-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
\`\`\`

---

## 2. Using Browser Chrome DevTools to Debug CSS
* Press \`F12\` or right-click any element and choose **Inspect**.
* In the **Elements > Styles** pane, inspect computed values, active cascade rules, and override styles in real time!
`
  },

  // ── UNIT 2: BOX MODEL, TYPOGRAPHY & SPACING ──
  {
    id: 7,
    slug: "css-box-model-content-padding-border",
    title: "The CSS Box Model & `box-sizing: border-box`",
    unit: "Unit 2: Box Model, Typography & Spacing",
    content: `Every HTML element on a webpage is treated as a rectangular box by the browser's layout engine.

## 1. The 4 Layers of the Box Model
1. **Content:** The actual text, image, or child element.
2. **Padding:** Transparent space inside the box surrounding the content.
3. **Border:** The stroke surrounding the padding and content.
4. **Margin:** Transparent space outside the border separating the box from neighbors.

---

## 2. The Universal \`box-sizing: border-box\` Rule
By default, \`box-sizing: content-box\` adds padding and border onto specified widths, breaking layouts. \`border-box\` fixes this:

\`\`\`css
/* Industry standard CSS Reset */
*, *::before, *::after {
  box-sizing: border-box;
}

.card {
  width: 300px;
  padding: 20px;
  border: 2px solid #04AA6D;
  margin: 15px;
  /* Total width remains exactly 300px with border-box! */
}
\`\`\`
`
  },
  {
    id: 8,
    slug: "css-margin-collapse-centering-elements",
    title: "Margin Collapse, Negative Margins & Auto Centering",
    unit: "Unit 2: Box Model, Typography & Spacing",
    content: `Margins control spacing between elements. Understanding margin behavior prevents unexpected vertical gaps.

## 1. Margin Collapse
When two vertical margins meet, they do not add together. Instead, the browser collapses them into the single largest margin:

\`\`\`css
/* If top element has margin-bottom: 30px and bottom has margin-top: 20px,
   the resulting gap is 30px (not 50px). */
.top-box {
  margin-bottom: 30px;
}
.bottom-box {
  margin-top: 20px;
}
\`\`\`

---

## 2. Centering Block Elements with \`margin: auto\`
\`\`\`css
.container {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  /* Shorthand: margin: 0 auto; */
}
\`\`\`
`
  },
  {
    id: 9,
    slug: "css-typography-google-fonts-webfonts",
    title: "CSS Typography, Web Fonts & `@font-face`",
    unit: "Unit 2: Box Model, Typography & Spacing",
    content: `Typography establishes readability, visual hierarchy, and brand character across modern web applications.

## 1. Key Typography Properties
* \`font-family\`: Defines primary font with fallback font stack.
* \`font-size\`: Sets character scale (using \`rem\` or \`px\`).
* \`font-weight\`: \`400\` (regular), \`600\` (semibold), \`700\` (bold), \`900\` (black).
* \`line-height\`: Distance between lines (e.g. \`1.6\` for readable body text).

\`\`\`css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');

body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #f1f5f9;
}
\`\`\`
`
  },
  {
    id: 10,
    slug: "css-text-effects-shadow-overflow",
    title: "CSS Text Formatting, Text Shadows & Overflow Truncation",
    unit: "Unit 2: Box Model, Typography & Spacing",
    content: `Format text with alignments, letter spacing, text shadows, and single-line ellipsis truncation.

## 1. Text Properties & Effects
\`\`\`css
.title-glow {
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  /* offset-x | offset-y | blur-radius | color */
  text-shadow: 0 0 10px rgba(4, 170, 109, 0.6);
}

/* Single line text truncation with '...' */
.truncate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 250px;
}
\`\`\`
`
  },
  {
    id: 11,
    slug: "css-display-block-inline-none",
    title: "CSS Display (`block`, `inline`, `inline-block`, `none` vs `visibility`)",
    unit: "Unit 2: Box Model, Typography & Spacing",
    content: `The \`display\` property dictates how an element renders in the document flow and behaves with sizing.

## 1. Core Display Values
* **\`block\` (\`<div>\`, \`<p>\`, \`<h1>\`):** Starts on a new line and expands to fill the full parent width. Accepts width and height.
* **\`inline\` (\`<span>\`, \`<a>\`, \`<strong>\`):** Sits inline with text. Ignores width and height.
* **\`inline-block\`:** Sits inline with text, but respects custom width, height, padding, and margins!
* **\`none\` vs \`visibility: hidden\`:** \`display: none\` removes the element completely from page flow. \`visibility: hidden\` hides the element but keeps its empty space reserved.

\`\`\`css
.badge {
  display: inline-block;
  padding: 4px 12px;
  background-color: #04AA6D;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: bold;
}
\`\`\`
`
  },
  {
    id: 12,
    slug: "css-backgrounds-gradients-images",
    title: "CSS Backgrounds, Linear & Radial Gradients",
    unit: "Unit 2: Box Model, Typography & Spacing",
    content: `Create visual depth and vibrant headers using CSS background colors, images, and smooth gradients.

## 1. Background Properties & Linear Gradients
\`\`\`css
.hero-card {
  /* Linear Gradient (Angle, Color Stops) */
  background: linear-gradient(135deg, #09101f 0%, #15203b 100%);
  border: 1px solid #1e293b;
  border-radius: 16px;
  padding: 2rem;
}

.background-image-cover {
  background-image: url('/assets/wallpaper.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
\`\`\`
`
  },

  // ── UNIT 3: POSITIONING, LAYERS & FLEXBOX ──
  {
    id: 13,
    slug: "css-positioning-static-relative-absolute",
    title: "CSS Positioning (Static, Relative, Absolute, Fixed & Sticky)",
    unit: "Unit 3: Positioning, Layers & Flexbox",
    content: `Positioning gives precise control over where elements sit on the screen relative to their parent or viewport.

## 1. The 5 Positioning Models
1. **\`static\` (Default):** Normal document flow. Ignores \`top\`, \`left\`, \`right\`, \`bottom\`.
2. **\`relative\`:** Remains in normal flow, but allows offset with \`top\`/\`left\`. Acts as an anchor for absolute children!
3. **\`absolute\`:** Removed from normal flow. Positioned relative to the nearest positioned ancestor.
4. **\`fixed\`:** Positioned relative to the browser viewport. Stays in place when scrolling.
5. **\`sticky\`:** Toggles between relative and fixed based on scroll position.

\`\`\`css
.parent-card {
  position: relative; /* Anchor for absolute children */
  padding: 20px;
}

.close-button {
  position: absolute;
  top: 12px;
  right: 12px;
}

.sticky-header {
  position: sticky;
  top: 0;
  z-index: 50;
}
\`\`\`
`
  },
  {
    id: 14,
    slug: "css-z-index-stacking-context-layers",
    title: "CSS `z-index` & Stacking Context Layering Hierarchy",
    unit: "Unit 3: Positioning, Layers & Flexbox",
    content: `Control which element appears in front when multiple positioned boxes overlap on the screen.

## 1. How \`z-index\` Works
* \`z-index\` only applies to elements that have a \`position\` other than \`static\` (e.g. \`relative\`, \`absolute\`, \`fixed\`, \`sticky\`) or Flex/Grid items.
* Higher integers sit in front of lower integers.

\`\`\`css
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  z-index: 90;
}

.modal-dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100; /* In front of backdrop */
}
\`\`\`
`
  },
  {
    id: 15,
    slug: "css-overflow-custom-scrollbars",
    title: "CSS Overflow Control & Modern Custom Scrollbars",
    unit: "Unit 3: Positioning, Layers & Flexbox",
    content: `Manage content that exceeds its container boundaries and customize sleek dark mode scrollbars.

## 1. Overflow Values
* \`overflow: visible\` (Default): Content spills outside container.
* \`overflow: hidden\`: Clips excess content cleanly.
* \`overflow: auto\`: Adds scrollbars only when content exceeds boundaries.
* \`overflow-x: auto; overflow-y: hidden;\`: Creates horizontal scrolling trays (like tab bars).

\`\`\`css
.scroll-box {
  max-height: 300px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #04AA6D #0c1328;
}
\`\`\`
`
  },
  {
    id: 16,
    slug: "css-flexbox-fundamentals-direction-alignment",
    title: "CSS Flexbox Fundamentals (Direction, Justify & Align)",
    unit: "Unit 3: Positioning, Layers & Flexbox",
    content: `Flexbox is a 1-dimensional layout model designed for distributing space and aligning items along a single axis.

## 1. Core Flexbox Container Properties
* \`display: flex\`: Turns the container into a flex context.
* \`flex-direction\`: \`row\` (horizontal) or \`column\` (vertical).
* \`justify-content\`: Aligns items along the **Main Axis** (\`flex-start\`, \`center\`, \`flex-end\`, \`space-between\`, \`space-around\`).
* \`align-items\`: Aligns items along the **Cross Axis** (\`stretch\`, \`center\`, \`flex-start\`, \`flex-end\`).

\`\`\`css
/* Perfect Centering in 3 lines of CSS! */
.center-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}
\`\`\`
`
  },
  {
    id: 17,
    slug: "css-flexbox-advanced-wrap-grow-shrink",
    title: "Advanced Flexbox (`flex-wrap`, `gap`, `flex-grow`, `flex-shrink`)",
    unit: "Unit 3: Positioning, Layers & Flexbox",
    content: `Master responsive multi-line wraps, spacing gaps, and flexible item sizing proportions.

## 1. Wrapping and Spacing
\`\`\`css
.tag-container {
  display: flex;
  flex-wrap: wrap; /* Allows items to wrap onto next line */
  gap: 12px;       /* Modern spacing between row and column items */
}

.flex-item-grow {
  flex-grow: 1;    /* Expands to fill all remaining empty space */
}

.flex-item-fixed {
  flex-shrink: 0;  /* Prevents item from shrinking when space is tight */
  width: 120px;
}
\`\`\`
`
  },
  {
    id: 18,
    slug: "css-grid-fundamentals-tracks-fr-units",
    title: "CSS Grid Fundamentals (`grid-template-columns`, `fr` Units)",
    unit: "Unit 3: Positioning, Layers & Flexbox",
    content: `CSS Grid is a 2-dimensional layout system for organizing content simultaneously into rows and columns.

## 1. Basic Grid Structure
* \`display: grid\`: Activates grid layout context.
* \`grid-template-columns\`: Defines columns.
* \`fr\` (Fractional Unit): Represents a fraction of the available free space.

\`\`\`css
.card-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* 3 Equal Columns */
  gap: 20px;
}
\`\`\`
`
  },

  // ── UNIT 4: ADVANCED CSS GRID & MODERN MATH ──
  {
    id: 19,
    slug: "css-grid-advanced-areas-repeat-minmax",
    title: "Advanced CSS Grid (Template Areas, `repeat()`, `minmax()`, `auto-fit`)",
    unit: "Unit 4: Advanced CSS Grid & Modern Math",
    content: `Build automatically responsive card grids without writing media queries using \`auto-fit\` and \`minmax()\`.

## 1. The Holy Grail Responsive Grid
\`\`\`css
/* Automatically adds/removes columns based on screen width! */
.responsive-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}
\`\`\`

---

## 2. Named Grid Template Areas
\`\`\`css
.dashboard-layout {
  display: grid;
  grid-template-areas:
    "header  header"
    "sidebar main"
    "footer  footer";
  grid-template-columns: 260px 1fr;
  grid-template-rows: 60px 1fr 40px;
}

header { grid-area: header; }
aside  { grid-area: sidebar; }
main   { grid-area: main; }
footer { grid-area: footer; }
\`\`\`
`
  },
  {
    id: 20,
    slug: "css-flexbox-vs-grid-architecture",
    title: "Flexbox vs CSS Grid Architecture (1D vs 2D Strategy)",
    unit: "Unit 4: Advanced CSS Grid & Modern Math",
    content: `Understand when to select Flexbox vs CSS Grid for optimal web development architecture.

## 1. Decision Matrix: Flexbox vs Grid
* **Use Flexbox for 1D (One Direction):** Navbars, button groups, icon+label rows, form inputs, toolbars.
* **Use CSS Grid for 2D (Rows AND Columns):** Page layouts, photo galleries, dashboard widgets, card catalogs.

\`\`\`css
/* Grid for Page Scaffold */
.app-container {
  display: grid;
  grid-template-columns: 280px 1fr;
}

/* Flexbox for Navbar inside Header */
.navbar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
\`\`\`
`
  },
  {
    id: 21,
    slug: "css-math-functions-calc-clamp-min-max",
    title: "Modern CSS Math Functions (`calc()`, `clamp()`, `min()`, `max()`)",
    unit: "Unit 4: Advanced CSS Grid & Modern Math",
    content: `CSS Math functions perform dynamic calculations inside property values for responsive typography and fluid layouts.

## 1. The Core CSS Math Functions
* **\`calc()\`:** Calculates expressions (e.g. \`calc(100% - 40px)\`).
* **\`clamp(min, preferred, max)\`:** Keeps a value within an upper and lower bound. The ultimate tool for fluid responsive typography!

\`\`\`css
/* Font scales smoothly between 1.5rem and 3.5rem based on viewport! */
h1 {
  font-size: clamp(1.5rem, 5vw + 1rem, 3.5rem);
}

.sidebar {
  width: min(300px, 80vw);
}
\`\`\`
`
  },
  {
    id: 22,
    slug: "css-pseudo-classes-hover-focus-active",
    title: "CSS Interactive Pseudo-Classes (`:hover`, `:focus-visible`, `:active`)",
    unit: "Unit 4: Advanced CSS Grid & Modern Math",
    content: `Pseudo-classes style elements based on user interaction state, form validity, or link visit history.

## 1. Common Interactive Pseudo-Classes
* \`:hover\`: When the mouse cursor hovers over an element.
* \`:active\`: When the element is being clicked down.
* \`:focus-visible\`: When keyboard navigation (Tab key) focuses an element (crucial for accessibility!).
* \`:disabled\`: Styles disabled form buttons and inputs.

\`\`\`css
.button {
  background-color: #04AA6D;
  transition: background-color 0.2s ease, transform 0.1s ease;
}

.button:hover {
  background-color: #039861;
}

.button:active {
  transform: scale(0.97);
}

.button:focus-visible {
  outline: 2px solid #00e676;
  outline-offset: 2px;
}
\`\`\`
`
  },
  {
    id: 23,
    slug: "css-structural-pseudo-classes-nth-child",
    title: "Structural Pseudo-Classes (`:nth-child()`, `:first-child`, `:not()`, `:is()`)",
    unit: "Unit 4: Advanced CSS Grid & Modern Math",
    content: `Target specific elements in lists or tables based on their position without adding extra class names.

## 1. Structural Selectors
* \`:first-child\` / \`:last-child\`: First or last element in container.
* \`:nth-child(even)\` / \`:nth-child(odd)\`: Alternating table row stripes.
* \`:not(.special)\`: Targets elements that do NOT match the selector.

\`\`\`css
/* Zebra striping table rows */
tbody tr:nth-child(even) {
  background-color: #0f172a;
}

/* Remove bottom border from last list item */
.list-item:last-child {
  border-bottom: none;
}
\`\`\`
`
  },
  {
    id: 24,
    slug: "css-pseudo-elements-before-after",
    title: "CSS Pseudo-Elements (`::before`, `::after`, `::placeholder`)",
    unit: "Unit 4: Advanced CSS Grid & Modern Math",
    content: `Pseudo-elements create cosmetic visual elements directly in CSS without adding unnecessary HTML tags.

## 1. The \`::before\` and \`::after\` Elements
Always require \`content: ""\` to render:

\`\`\`css
/* Custom decorative green dot before heading */
.section-title::before {
  content: "";
  display: inline-block;
  width: 8px;
  height: 8px;
  background-color: #04AA6D;
  border-radius: 50%;
  margin-right: 8px;
}

/* Custom styled placeholder in search inputs */
input::placeholder {
  color: #64748b;
  font-style: italic;
}
\`\`\`
`
  },

  // ── UNIT 5: TRANSITIONS, ANIMATIONS & MODERN UI ──
  {
    id: 25,
    slug: "css-transitions-timing-functions-easing",
    title: "CSS Transitions & Timing Functions (`cubic-bezier`, Duration)",
    unit: "Unit 5: Transitions, Animations & Modern UI",
    content: `Smooth state changes (like button hovers and dropdowns) give web apps a responsive, premium feel.

## 1. Transition Properties
* \`transition-property\`: Properties to animate (e.g. \`background-color\`, \`transform\`). Avoid \`all\` for performance!
* \`transition-duration\`: Time taken (e.g. \`0.25s\`, \`300ms\`).
* \`transition-timing-function\`: \`ease\`, \`linear\`, \`ease-in-out\`, or custom \`cubic-bezier()\`.

\`\`\`css
.card {
  transform: translateY(0);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(4, 170, 109, 0.25);
}
\`\`\`
`
  },
  {
    id: 26,
    slug: "css-transforms-2d-3d-rotate-scale",
    title: "CSS 2D & 3D Transforms (`translate`, `scale`, `rotate`, `perspective`)",
    unit: "Unit 5: Transitions, Animations & Modern UI",
    content: `Transforms move, rotate, scale, and skew elements in hardware-accelerated 2D and 3D space.

## 1. Core Transform Functions
* \`translate(x, y)\`: Moves elements without breaking document layout.
* \`scale(factor)\`: Enlarges or shrinks elements.
* \`rotate(angle)\`: Rotates elements (e.g. \`rotate(45deg)\`, \`rotate(-180deg)\`).

\`\`\`css
.icon-button:hover svg {
  transform: rotate(90deg) scale(1.15);
  transition: transform 0.2s ease;
}

/* 3D Card Flip */
.flip-card {
  perspective: 1000px;
}
.flip-card-inner {
  transition: transform 0.6s;
  transform-style: preserve-3d;
}
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}
\`\`\`
`
  },
  {
    id: 27,
    slug: "css-keyframes-animations-infinite-pulses",
    title: "CSS Keyframe Animations & Infinite Micro-Interactions",
    unit: "Unit 5: Transitions, Animations & Modern UI",
    content: `Keyframe animations allow complex multi-step timelines that loop indefinitely or trigger on page load.

## 1. Defining and Applying Keyframe Animations
\`\`\`css
/* 1. Define Keyframe sequence */
@keyframes pulseGlow {
  0% {
    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0.7);
    transform: scale(1);
  }
  70% {
    box-shadow: 0 0 0 12px rgba(4, 170, 109, 0);
    transform: scale(1.05);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0);
    transform: scale(1);
  }
}

/* 2. Apply to Live Badge element */
.live-pulse-badge {
  animation: pulseGlow 2s infinite ease-in-out;
}
\`\`\`
`
  },
  {
    id: 28,
    slug: "css-responsive-design-media-queries",
    title: "Responsive Web Design, Media Queries & Mobile-First Breakpoints",
    unit: "Unit 5: Transitions, Animations & Modern UI",
    content: `Responsive Web Design guarantees that pages look gorgeous on mobile phones, tablets, and desktop displays.

## 1. Mobile-First Media Queries
Write baseline mobile CSS first, then expand with \`min-width\` queries for larger viewports:

\`\`\`css
/* Base Mobile Styles (Small Screens) */
.layout-grid {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

/* Tablet (md: >= 768px) */
@media (min-width: 768px) {
  .layout-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 2rem;
  }
}

/* Desktop (lg: >= 1024px) */
@media (min-width: 1024px) {
  .layout-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
\`\`\`
`
  },
  {
    id: 29,
    slug: "css-custom-properties-variables-dark-mode",
    title: "CSS Custom Properties (Variables) & Dark Mode Theming",
    unit: "Unit 5: Transitions, Animations & Modern UI",
    content: `CSS Variables (\`--variable-name\`) provide centralized design tokens for instant light and dark theme switching.

## 1. Defining and Consuming CSS Variables
\`\`\`css
:root {
  --primary-accent: #04AA6D;
  --bg-canvas: #060c18;
  --bg-surface: #0c1328;
  --text-main: #ffffff;
  --text-muted: #94a3b8;
  --border-color: #1e293b;
}

/* Automatic Dark Mode Media Query */
@media (prefers-color-scheme: light) {
  :root {
    --bg-canvas: #f8fafc;
    --bg-surface: #ffffff;
    --text-main: #0f172a;
    --text-muted: #64748b;
    --border-color: #e2e8f0;
  }
}

body {
  background-color: var(--bg-canvas);
  color: var(--text-main);
}

.card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-color);
}
\`\`\`
`
  },
  {
    id: 30,
    slug: "css-modern-ui-glassmorphism-shadows-glow",
    title: "Modern UI Effects, Glassmorphism, Shadows & Neon Glows",
    unit: "Unit 5: Transitions, Animations & Modern UI",
    content: `Combine modern backdrop filters, semi-transparent surfaces, and neon glow accents for state-of-the-art UI design.

## 1. Glassmorphism Card Architecture
\`\`\`css
.glass-panel {
  background: rgba(12, 19, 40, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  border-radius: 16px;
  padding: 2rem;
  color: #ffffff;
}

.neon-border {
  border: 1px solid #04AA6D;
  box-shadow: 0 0 15px rgba(4, 170, 109, 0.4);
}
\`\`\`
`
  }
];

const targetPath = path.join(__dirname, '../src/data/cssLessonsData.ts');
const fileContent = `export interface CssLesson {
  id: number;
  slug: string;
  title: string;
  unit: string;
  content: string;
}

export const cssLessons: CssLesson[] = ${JSON.stringify(cssLessons, null, 2)};
`;

fs.writeFileSync(targetPath, fileContent, 'utf8');
console.log('Successfully generated 30 CSS lessons in src/data/cssLessonsData.ts!');
