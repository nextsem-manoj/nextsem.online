export interface CssLesson {
  id: number;
  slug: string;
  title: string;
  unit: string;
  content: string;
}

export const cssLessons: CssLesson[] = [
  {
    "id": 1,
    "slug": "css-introduction-syntax-selectors",
    "title": "CSS3 Introduction, Syntax & Universal Selectors",
    "unit": "Unit 1: CSS Foundations & Selectors",
    "content": "Welcome to the CSS3 Styling & Modern UI Architecture course!\n\n## 1. What is CSS3?\n* **CSS** stands for **Cascading Style Sheets**.\n* It controls visual layout, colors, typography, spacing, and micro-animations for HTML5 documents.\n* CSS separates page structure (HTML) from presentation (CSS), keeping code clean and scalable.\n\n---\n\n## 2. CSS Syntax Rule Structure\nA CSS rule contains a **selector** and a **declaration block**:\n\n```css\n/* Selector targeting all <h1> headings */\nh1 {\n  color: #04AA6D;       /* Property: Value */\n  font-size: 32px;\n  text-align: center;\n}\n```\n\n---\n\n## 3. The 3 Methods to Apply CSS\n1. **External Stylesheet (Industry Standard):** Linked with `<link rel=\"stylesheet\" href=\"styles.css\">` in HTML `<head>`.\n2. **Internal CSS:** Written inside a `<style>` tag in HTML `<head>`.\n3. **Inline CSS:** Applied directly to an HTML element with the `style=\"\"` attribute.\n\n```html\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>CSS Syntax Demo</title>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n  <style>\n    p {\n      color: #cbd5e1;\n      line-height: 1.6;\n    }\n  </style>\n</head>\n<body>\n  <h1>Hello CSS3 Styling!</h1>\n  <p>Learn responsive layout design from scratch.</p>\n</body>\n</html>\n```\n"
  },
  {
    "id": 2,
    "slug": "css-selectors-mastery-class-id",
    "title": "CSS Selectors Mastery (Element, Class, ID & Grouping)",
    "unit": "Unit 1: CSS Foundations & Selectors",
    "content": "Mastering CSS selectors is the foundation of writing efficient, maintainable stylesheets without styling conflicts.\n\n## 1. Primary Selector Types\n* **Universal Selector (`*`):** Targets every single element on the page. Commonly used for CSS resets.\n* **Element / Type Selector (`h1`, `p`, `button`):** Targets all elements of that HTML tag.\n* **Class Selector (`.class-name`):** Targets all elements with a specific `class=\"\"`. Reusable across many elements.\n* **ID Selector (`#id-name`):** Targets a unique element with a specific `id=\"\"`. Highest specificity.\n\n```css\n/* 1. Universal reset */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n/* 2. Element selector */\np {\n  color: #94a3b8;\n}\n\n/* 3. Class selector (Reusable) */\n.btn-primary {\n  background-color: #04AA6D;\n  color: #ffffff;\n  padding: 10px 20px;\n  border-radius: 8px;\n}\n\n/* 4. ID selector (Unique) */\n#main-navigation {\n  background-color: #0c1328;\n}\n```\n\n---\n\n## 2. Grouping Selectors\nIf multiple selectors share identical styles, separate them with commas to eliminate duplicated code:\n\n```css\nh1, h2, h3, h4 {\n  font-family: 'Inter', sans-serif;\n  color: #ffffff;\n  letter-spacing: -0.02em;\n}\n```\n"
  },
  {
    "id": 3,
    "slug": "css-combinators-descendant-child",
    "title": "CSS Combinators (Descendant, Child, Adjacent & Sibling)",
    "unit": "Unit 1: CSS Foundations & Selectors",
    "content": "Combinators explain the relationship between two selectors, allowing precise targeting based on DOM hierarchy.\n\n## 1. The 4 CSS Combinators\n1. **Descendant Selector (`space`):** Matches all matching elements inside the parent, no matter how deeply nested.\n2. **Child Selector (`>`):** Matches only direct children (one level down) of the parent element.\n3. **Adjacent Sibling (`+`):** Matches the element that immediately follows another specific element.\n4. **General Sibling (`~`):** Matches all sibling elements that follow another element under the same parent.\n\n```css\n/* Descendant: all <p> inside .article */\n.article p {\n  line-height: 1.8;\n}\n\n/* Child: only direct <li> children of .nav-menu */\n.nav-menu > li {\n  display: inline-block;\n}\n\n/* Adjacent: <p> immediately after an <h2> */\nh2 + p {\n  font-size: 1.2rem;\n  color: #04AA6D;\n}\n\n/* General Sibling: all <p> following <h2> */\nh2 ~ p {\n  margin-bottom: 1rem;\n}\n```\n"
  },
  {
    "id": 4,
    "slug": "css-colors-rgb-hsl-alpha-hex",
    "title": "CSS Colors & Color Models (Hex, RGB, HSL & Alpha)",
    "unit": "Unit 1: CSS Foundations & Selectors",
    "content": "Modern CSS supports multiple color formats, allowing precise color matching and dynamic transparency.\n\n## 1. Common Color Formats\n* **Hex Codes (`#04AA6D` / `#ffffff`):** 6-character hexadecimal codes for red, green, and blue channels.\n* **RGB & RGBA (`rgb(4, 170, 109)` / `rgba(4, 170, 109, 0.8)`):** Red, Green, Blue values (0 to 255) with optional Alpha opacity (0.0 to 1.0).\n* **HSL & HSLA (`hsl(158, 95%, 34%)`):** Hue (0–360° on color wheel), Saturation (%), Lightness (%). Highly intuitive for building color schemes!\n\n```css\n.card {\n  /* Hex color */\n  color: #ffffff;\n  \n  /* Modern HSL Background */\n  background-color: hsl(222, 47%, 11%);\n  \n  /* RGBA Semi-transparent Border */\n  border: 1px solid rgba(4, 170, 109, 0.3);\n}\n```\n"
  },
  {
    "id": 5,
    "slug": "css-units-px-rem-em-vw-vh",
    "title": "CSS Units & Sizing (Pixels, REM, EM, Viewport & %)",
    "unit": "Unit 1: CSS Foundations & Selectors",
    "content": "Understanding absolute vs relative CSS units is crucial for creating fluid, responsive user interfaces.\n\n## 1. Absolute Units vs Relative Units\n* **`px` (Pixels):** Absolute unit fixed in physical screen dots. Best for thin borders and small fixed details.\n* **`rem` (Root EM):** Relative to the root `<html>` font-size (default: `1rem = 16px`). Best for typography, padding, and margins!\n* **`em`:** Relative to the font-size of the current element's parent.\n* **`%` (Percentage):** Relative to parent element dimensions.\n* **`vw` & `vh`:** Viewport Width & Height (`100vw = 100%` of window width, `100vh = 100%` of window height).\n\n```css\nhtml {\n  font-size: 16px; /* 1rem = 16px */\n}\n\n.hero-section {\n  width: 100%;\n  min-height: 100vh;      /* Full screen height */\n  padding: 2.5rem 1.5rem; /* Responsive spacing */\n}\n\nh1 {\n  font-size: 2.25rem;     /* 36px */\n}\n```\n"
  },
  {
    "id": 6,
    "slug": "css-comments-devtools-inspection",
    "title": "CSS Comments, Best Practices & DevTools Inspection",
    "unit": "Unit 1: CSS Foundations & Selectors",
    "content": "Clean stylesheets follow organizational standards, structured comments, and browser inspection workflows.\n\n## 1. Writing CSS Comments\nCSS comments start with `/*` and end with `*/`. They can span single or multiple lines:\n\n```css\n/* ==========================================================================\n   NAVIGATION BAR STYLES\n   ========================================================================== */\n\n/* Main Header Container */\n.header-nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n```\n\n---\n\n## 2. Using Browser Chrome DevTools to Debug CSS\n* Press `F12` or right-click any element and choose **Inspect**.\n* In the **Elements > Styles** pane, inspect computed values, active cascade rules, and override styles in real time!\n"
  },
  {
    "id": 7,
    "slug": "css-box-model-content-padding-border",
    "title": "The CSS Box Model & `box-sizing: border-box`",
    "unit": "Unit 2: Box Model, Typography & Spacing",
    "content": "Every HTML element on a webpage is treated as a rectangular box by the browser's layout engine.\n\n## 1. The 4 Layers of the Box Model\n1. **Content:** The actual text, image, or child element.\n2. **Padding:** Transparent space inside the box surrounding the content.\n3. **Border:** The stroke surrounding the padding and content.\n4. **Margin:** Transparent space outside the border separating the box from neighbors.\n\n---\n\n## 2. The Universal `box-sizing: border-box` Rule\nBy default, `box-sizing: content-box` adds padding and border onto specified widths, breaking layouts. `border-box` fixes this:\n\n```css\n/* Industry standard CSS Reset */\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\n.card {\n  width: 300px;\n  padding: 20px;\n  border: 2px solid #04AA6D;\n  margin: 15px;\n  /* Total width remains exactly 300px with border-box! */\n}\n```\n"
  },
  {
    "id": 8,
    "slug": "css-margin-collapse-centering-elements",
    "title": "Margin Collapse, Negative Margins & Auto Centering",
    "unit": "Unit 2: Box Model, Typography & Spacing",
    "content": "Margins control spacing between elements. Understanding margin behavior prevents unexpected vertical gaps.\n\n## 1. Margin Collapse\nWhen two vertical margins meet, they do not add together. Instead, the browser collapses them into the single largest margin:\n\n```css\n/* If top element has margin-bottom: 30px and bottom has margin-top: 20px,\n   the resulting gap is 30px (not 50px). */\n.top-box {\n  margin-bottom: 30px;\n}\n.bottom-box {\n  margin-top: 20px;\n}\n```\n\n---\n\n## 2. Centering Block Elements with `margin: auto`\n```css\n.container {\n  max-width: 1200px;\n  margin-left: auto;\n  margin-right: auto;\n  /* Shorthand: margin: 0 auto; */\n}\n```\n"
  },
  {
    "id": 9,
    "slug": "css-typography-google-fonts-webfonts",
    "title": "CSS Typography, Web Fonts & `@font-face`",
    "unit": "Unit 2: Box Model, Typography & Spacing",
    "content": "Typography establishes readability, visual hierarchy, and brand character across modern web applications.\n\n## 1. Key Typography Properties\n* `font-family`: Defines primary font with fallback font stack.\n* `font-size`: Sets character scale (using `rem` or `px`).\n* `font-weight`: `400` (regular), `600` (semibold), `700` (bold), `900` (black).\n* `line-height`: Distance between lines (e.g. `1.6` for readable body text).\n\n```css\n@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');\n\nbody {\n  font-family: 'Inter', system-ui, -apple-system, sans-serif;\n  font-size: 1rem;\n  line-height: 1.6;\n  color: #f1f5f9;\n}\n```\n"
  },
  {
    "id": 10,
    "slug": "css-text-effects-shadow-overflow",
    "title": "CSS Text Formatting, Text Shadows & Overflow Truncation",
    "unit": "Unit 2: Box Model, Typography & Spacing",
    "content": "Format text with alignments, letter spacing, text shadows, and single-line ellipsis truncation.\n\n## 1. Text Properties & Effects\n```css\n.title-glow {\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  /* offset-x | offset-y | blur-radius | color */\n  text-shadow: 0 0 10px rgba(4, 170, 109, 0.6);\n}\n\n/* Single line text truncation with '...' */\n.truncate-text {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 250px;\n}\n```\n"
  },
  {
    "id": 11,
    "slug": "css-display-block-inline-none",
    "title": "CSS Display (`block`, `inline`, `inline-block`, `none` vs `visibility`)",
    "unit": "Unit 2: Box Model, Typography & Spacing",
    "content": "The `display` property dictates how an element renders in the document flow and behaves with sizing.\n\n## 1. Core Display Values\n* **`block` (`<div>`, `<p>`, `<h1>`):** Starts on a new line and expands to fill the full parent width. Accepts width and height.\n* **`inline` (`<span>`, `<a>`, `<strong>`):** Sits inline with text. Ignores width and height.\n* **`inline-block`:** Sits inline with text, but respects custom width, height, padding, and margins!\n* **`none` vs `visibility: hidden`:** `display: none` removes the element completely from page flow. `visibility: hidden` hides the element but keeps its empty space reserved.\n\n```css\n.badge {\n  display: inline-block;\n  padding: 4px 12px;\n  background-color: #04AA6D;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: bold;\n}\n```\n"
  },
  {
    "id": 12,
    "slug": "css-backgrounds-gradients-images",
    "title": "CSS Backgrounds, Linear & Radial Gradients",
    "unit": "Unit 2: Box Model, Typography & Spacing",
    "content": "Create visual depth and vibrant headers using CSS background colors, images, and smooth gradients.\n\n## 1. Background Properties & Linear Gradients\n```css\n.hero-card {\n  /* Linear Gradient (Angle, Color Stops) */\n  background: linear-gradient(135deg, #09101f 0%, #15203b 100%);\n  border: 1px solid #1e293b;\n  border-radius: 16px;\n  padding: 2rem;\n}\n\n.background-image-cover {\n  background-image: url('/assets/wallpaper.webp');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n```\n"
  },
  {
    "id": 13,
    "slug": "css-positioning-static-relative-absolute",
    "title": "CSS Positioning (Static, Relative, Absolute, Fixed & Sticky)",
    "unit": "Unit 3: Positioning, Layers & Flexbox",
    "content": "Positioning gives precise control over where elements sit on the screen relative to their parent or viewport.\n\n## 1. The 5 Positioning Models\n1. **`static` (Default):** Normal document flow. Ignores `top`, `left`, `right`, `bottom`.\n2. **`relative`:** Remains in normal flow, but allows offset with `top`/`left`. Acts as an anchor for absolute children!\n3. **`absolute`:** Removed from normal flow. Positioned relative to the nearest positioned ancestor.\n4. **`fixed`:** Positioned relative to the browser viewport. Stays in place when scrolling.\n5. **`sticky`:** Toggles between relative and fixed based on scroll position.\n\n```css\n.parent-card {\n  position: relative; /* Anchor for absolute children */\n  padding: 20px;\n}\n\n.close-button {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n}\n\n.sticky-header {\n  position: sticky;\n  top: 0;\n  z-index: 50;\n}\n```\n"
  },
  {
    "id": 14,
    "slug": "css-z-index-stacking-context-layers",
    "title": "CSS `z-index` & Stacking Context Layering Hierarchy",
    "unit": "Unit 3: Positioning, Layers & Flexbox",
    "content": "Control which element appears in front when multiple positioned boxes overlap on the screen.\n\n## 1. How `z-index` Works\n* `z-index` only applies to elements that have a `position` other than `static` (e.g. `relative`, `absolute`, `fixed`, `sticky`) or Flex/Grid items.\n* Higher integers sit in front of lower integers.\n\n```css\n.modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.75);\n  z-index: 90;\n}\n\n.modal-dialog {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 100; /* In front of backdrop */\n}\n```\n"
  },
  {
    "id": 15,
    "slug": "css-overflow-custom-scrollbars",
    "title": "CSS Overflow Control & Modern Custom Scrollbars",
    "unit": "Unit 3: Positioning, Layers & Flexbox",
    "content": "Manage content that exceeds its container boundaries and customize sleek dark mode scrollbars.\n\n## 1. Overflow Values\n* `overflow: visible` (Default): Content spills outside container.\n* `overflow: hidden`: Clips excess content cleanly.\n* `overflow: auto`: Adds scrollbars only when content exceeds boundaries.\n* `overflow-x: auto; overflow-y: hidden;`: Creates horizontal scrolling trays (like tab bars).\n\n```css\n.scroll-box {\n  max-height: 300px;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  scrollbar-color: #04AA6D #0c1328;\n}\n```\n"
  },
  {
    "id": 16,
    "slug": "css-flexbox-fundamentals-direction-alignment",
    "title": "CSS Flexbox Fundamentals (Direction, Justify & Align)",
    "unit": "Unit 3: Positioning, Layers & Flexbox",
    "content": "Flexbox is a 1-dimensional layout model designed for distributing space and aligning items along a single axis.\n\n## 1. Core Flexbox Container Properties\n* `display: flex`: Turns the container into a flex context.\n* `flex-direction`: `row` (horizontal) or `column` (vertical).\n* `justify-content`: Aligns items along the **Main Axis** (`flex-start`, `center`, `flex-end`, `space-between`, `space-around`).\n* `align-items`: Aligns items along the **Cross Axis** (`stretch`, `center`, `flex-start`, `flex-end`).\n\n```css\n/* Perfect Centering in 3 lines of CSS! */\n.center-box {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 200px;\n}\n```\n"
  },
  {
    "id": 17,
    "slug": "css-flexbox-advanced-wrap-grow-shrink",
    "title": "Advanced Flexbox (`flex-wrap`, `gap`, `flex-grow`, `flex-shrink`)",
    "unit": "Unit 3: Positioning, Layers & Flexbox",
    "content": "Master responsive multi-line wraps, spacing gaps, and flexible item sizing proportions.\n\n## 1. Wrapping and Spacing\n```css\n.tag-container {\n  display: flex;\n  flex-wrap: wrap; /* Allows items to wrap onto next line */\n  gap: 12px;       /* Modern spacing between row and column items */\n}\n\n.flex-item-grow {\n  flex-grow: 1;    /* Expands to fill all remaining empty space */\n}\n\n.flex-item-fixed {\n  flex-shrink: 0;  /* Prevents item from shrinking when space is tight */\n  width: 120px;\n}\n```\n"
  },
  {
    "id": 18,
    "slug": "css-grid-fundamentals-tracks-fr-units",
    "title": "CSS Grid Fundamentals (`grid-template-columns`, `fr` Units)",
    "unit": "Unit 3: Positioning, Layers & Flexbox",
    "content": "CSS Grid is a 2-dimensional layout system for organizing content simultaneously into rows and columns.\n\n## 1. Basic Grid Structure\n* `display: grid`: Activates grid layout context.\n* `grid-template-columns`: Defines columns.\n* `fr` (Fractional Unit): Represents a fraction of the available free space.\n\n```css\n.card-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr; /* 3 Equal Columns */\n  gap: 20px;\n}\n```\n"
  },
  {
    "id": 19,
    "slug": "css-grid-advanced-areas-repeat-minmax",
    "title": "Advanced CSS Grid (Template Areas, `repeat()`, `minmax()`, `auto-fit`)",
    "unit": "Unit 4: Advanced CSS Grid & Modern Math",
    "content": "Build automatically responsive card grids without writing media queries using `auto-fit` and `minmax()`.\n\n## 1. The Holy Grail Responsive Grid\n```css\n/* Automatically adds/removes columns based on screen width! */\n.responsive-gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 1.5rem;\n}\n```\n\n---\n\n## 2. Named Grid Template Areas\n```css\n.dashboard-layout {\n  display: grid;\n  grid-template-areas:\n    \"header  header\"\n    \"sidebar main\"\n    \"footer  footer\";\n  grid-template-columns: 260px 1fr;\n  grid-template-rows: 60px 1fr 40px;\n}\n\nheader { grid-area: header; }\naside  { grid-area: sidebar; }\nmain   { grid-area: main; }\nfooter { grid-area: footer; }\n```\n"
  },
  {
    "id": 20,
    "slug": "css-flexbox-vs-grid-architecture",
    "title": "Flexbox vs CSS Grid Architecture (1D vs 2D Strategy)",
    "unit": "Unit 4: Advanced CSS Grid & Modern Math",
    "content": "Understand when to select Flexbox vs CSS Grid for optimal web development architecture.\n\n## 1. Decision Matrix: Flexbox vs Grid\n* **Use Flexbox for 1D (One Direction):** Navbars, button groups, icon+label rows, form inputs, toolbars.\n* **Use CSS Grid for 2D (Rows AND Columns):** Page layouts, photo galleries, dashboard widgets, card catalogs.\n\n```css\n/* Grid for Page Scaffold */\n.app-container {\n  display: grid;\n  grid-template-columns: 280px 1fr;\n}\n\n/* Flexbox for Navbar inside Header */\n.navbar-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n```\n"
  },
  {
    "id": 21,
    "slug": "css-math-functions-calc-clamp-min-max",
    "title": "Modern CSS Math Functions (`calc()`, `clamp()`, `min()`, `max()`)",
    "unit": "Unit 4: Advanced CSS Grid & Modern Math",
    "content": "CSS Math functions perform dynamic calculations inside property values for responsive typography and fluid layouts.\n\n## 1. The Core CSS Math Functions\n* **`calc()`:** Calculates expressions (e.g. `calc(100% - 40px)`).\n* **`clamp(min, preferred, max)`:** Keeps a value within an upper and lower bound. The ultimate tool for fluid responsive typography!\n\n```css\n/* Font scales smoothly between 1.5rem and 3.5rem based on viewport! */\nh1 {\n  font-size: clamp(1.5rem, 5vw + 1rem, 3.5rem);\n}\n\n.sidebar {\n  width: min(300px, 80vw);\n}\n```\n"
  },
  {
    "id": 22,
    "slug": "css-pseudo-classes-hover-focus-active",
    "title": "CSS Interactive Pseudo-Classes (`:hover`, `:focus-visible`, `:active`)",
    "unit": "Unit 4: Advanced CSS Grid & Modern Math",
    "content": "Pseudo-classes style elements based on user interaction state, form validity, or link visit history.\n\n## 1. Common Interactive Pseudo-Classes\n* `:hover`: When the mouse cursor hovers over an element.\n* `:active`: When the element is being clicked down.\n* `:focus-visible`: When keyboard navigation (Tab key) focuses an element (crucial for accessibility!).\n* `:disabled`: Styles disabled form buttons and inputs.\n\n```css\n.button {\n  background-color: #04AA6D;\n  transition: background-color 0.2s ease, transform 0.1s ease;\n}\n\n.button:hover {\n  background-color: #039861;\n}\n\n.button:active {\n  transform: scale(0.97);\n}\n\n.button:focus-visible {\n  outline: 2px solid #00e676;\n  outline-offset: 2px;\n}\n```\n"
  },
  {
    "id": 23,
    "slug": "css-structural-pseudo-classes-nth-child",
    "title": "Structural Pseudo-Classes (`:nth-child()`, `:first-child`, `:not()`, `:is()`)",
    "unit": "Unit 4: Advanced CSS Grid & Modern Math",
    "content": "Target specific elements in lists or tables based on their position without adding extra class names.\n\n## 1. Structural Selectors\n* `:first-child` / `:last-child`: First or last element in container.\n* `:nth-child(even)` / `:nth-child(odd)`: Alternating table row stripes.\n* `:not(.special)`: Targets elements that do NOT match the selector.\n\n```css\n/* Zebra striping table rows */\ntbody tr:nth-child(even) {\n  background-color: #0f172a;\n}\n\n/* Remove bottom border from last list item */\n.list-item:last-child {\n  border-bottom: none;\n}\n```\n"
  },
  {
    "id": 24,
    "slug": "css-pseudo-elements-before-after",
    "title": "CSS Pseudo-Elements (`::before`, `::after`, `::placeholder`)",
    "unit": "Unit 4: Advanced CSS Grid & Modern Math",
    "content": "Pseudo-elements create cosmetic visual elements directly in CSS without adding unnecessary HTML tags.\n\n## 1. The `::before` and `::after` Elements\nAlways require `content: \"\"` to render:\n\n```css\n/* Custom decorative green dot before heading */\n.section-title::before {\n  content: \"\";\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  background-color: #04AA6D;\n  border-radius: 50%;\n  margin-right: 8px;\n}\n\n/* Custom styled placeholder in search inputs */\ninput::placeholder {\n  color: #64748b;\n  font-style: italic;\n}\n```\n"
  },
  {
    "id": 25,
    "slug": "css-transitions-timing-functions-easing",
    "title": "CSS Transitions & Timing Functions (`cubic-bezier`, Duration)",
    "unit": "Unit 5: Transitions, Animations & Modern UI",
    "content": "Smooth state changes (like button hovers and dropdowns) give web apps a responsive, premium feel.\n\n## 1. Transition Properties\n* `transition-property`: Properties to animate (e.g. `background-color`, `transform`). Avoid `all` for performance!\n* `transition-duration`: Time taken (e.g. `0.25s`, `300ms`).\n* `transition-timing-function`: `ease`, `linear`, `ease-in-out`, or custom `cubic-bezier()`.\n\n```css\n.card {\n  transform: translateY(0);\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);\n  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease;\n}\n\n.card:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 12px 24px rgba(4, 170, 109, 0.25);\n}\n```\n"
  },
  {
    "id": 26,
    "slug": "css-transforms-2d-3d-rotate-scale",
    "title": "CSS 2D & 3D Transforms (`translate`, `scale`, `rotate`, `perspective`)",
    "unit": "Unit 5: Transitions, Animations & Modern UI",
    "content": "Transforms move, rotate, scale, and skew elements in hardware-accelerated 2D and 3D space.\n\n## 1. Core Transform Functions\n* `translate(x, y)`: Moves elements without breaking document layout.\n* `scale(factor)`: Enlarges or shrinks elements.\n* `rotate(angle)`: Rotates elements (e.g. `rotate(45deg)`, `rotate(-180deg)`).\n\n```css\n.icon-button:hover svg {\n  transform: rotate(90deg) scale(1.15);\n  transition: transform 0.2s ease;\n}\n\n/* 3D Card Flip */\n.flip-card {\n  perspective: 1000px;\n}\n.flip-card-inner {\n  transition: transform 0.6s;\n  transform-style: preserve-3d;\n}\n.flip-card:hover .flip-card-inner {\n  transform: rotateY(180deg);\n}\n```\n"
  },
  {
    "id": 27,
    "slug": "css-keyframes-animations-infinite-pulses",
    "title": "CSS Keyframe Animations & Infinite Micro-Interactions",
    "unit": "Unit 5: Transitions, Animations & Modern UI",
    "content": "Keyframe animations allow complex multi-step timelines that loop indefinitely or trigger on page load.\n\n## 1. Defining and Applying Keyframe Animations\n```css\n/* 1. Define Keyframe sequence */\n@keyframes pulseGlow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0.7);\n    transform: scale(1);\n  }\n  70% {\n    box-shadow: 0 0 0 12px rgba(4, 170, 109, 0);\n    transform: scale(1.05);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0);\n    transform: scale(1);\n  }\n}\n\n/* 2. Apply to Live Badge element */\n.live-pulse-badge {\n  animation: pulseGlow 2s infinite ease-in-out;\n}\n```\n"
  },
  {
    "id": 28,
    "slug": "css-responsive-design-media-queries",
    "title": "Responsive Web Design, Media Queries & Mobile-First Breakpoints",
    "unit": "Unit 5: Transitions, Animations & Modern UI",
    "content": "Responsive Web Design guarantees that pages look gorgeous on mobile phones, tablets, and desktop displays.\n\n## 1. Mobile-First Media Queries\nWrite baseline mobile CSS first, then expand with `min-width` queries for larger viewports:\n\n```css\n/* Base Mobile Styles (Small Screens) */\n.layout-grid {\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n}\n\n/* Tablet (md: >= 768px) */\n@media (min-width: 768px) {\n  .layout-grid {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    padding: 2rem;\n  }\n}\n\n/* Desktop (lg: >= 1024px) */\n@media (min-width: 1024px) {\n  .layout-grid {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n```\n"
  },
  {
    "id": 29,
    "slug": "css-custom-properties-variables-dark-mode",
    "title": "CSS Custom Properties (Variables) & Dark Mode Theming",
    "unit": "Unit 5: Transitions, Animations & Modern UI",
    "content": "CSS Variables (`--variable-name`) provide centralized design tokens for instant light and dark theme switching.\n\n## 1. Defining and Consuming CSS Variables\n```css\n:root {\n  --primary-accent: #04AA6D;\n  --bg-canvas: #060c18;\n  --bg-surface: #0c1328;\n  --text-main: #ffffff;\n  --text-muted: #94a3b8;\n  --border-color: #1e293b;\n}\n\n/* Automatic Dark Mode Media Query */\n@media (prefers-color-scheme: light) {\n  :root {\n    --bg-canvas: #f8fafc;\n    --bg-surface: #ffffff;\n    --text-main: #0f172a;\n    --text-muted: #64748b;\n    --border-color: #e2e8f0;\n  }\n}\n\nbody {\n  background-color: var(--bg-canvas);\n  color: var(--text-main);\n}\n\n.card {\n  background-color: var(--bg-surface);\n  border: 1px solid var(--border-color);\n}\n```\n"
  },
  {
    "id": 30,
    "slug": "css-modern-ui-glassmorphism-shadows-glow",
    "title": "Modern UI Effects, Glassmorphism, Shadows & Neon Glows",
    "unit": "Unit 5: Transitions, Animations & Modern UI",
    "content": "Combine modern backdrop filters, semi-transparent surfaces, and neon glow accents for state-of-the-art UI design.\n\n## 1. Glassmorphism Card Architecture\n```css\n.glass-panel {\n  background: rgba(12, 19, 40, 0.7);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);\n  border-radius: 16px;\n  padding: 2rem;\n  color: #ffffff;\n}\n\n.neon-border {\n  border: 1px solid #04AA6D;\n  box-shadow: 0 0 15px rgba(4, 170, 109, 0.4);\n}\n```\n"
  }
];
