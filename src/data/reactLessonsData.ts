export interface ReactLesson {
  id: number;
  slug: string;
  title: string;
  unit: string;
  content: string;
}

export const reactLessons: ReactLesson[] = [
  {
    id: 1,
    slug: "react-introduction-jsx-virtual-dom-setup",
    title: "React.js Introduction, JSX Syntax & Virtual DOM Architecture",
    unit: "Unit 1: React Foundations & Components",
    content: `Welcome to the React.js & Modern Frontend Architecture Course!

## 1. What is React.js?
* **React** is the world's most popular open-source JavaScript UI library created by Meta.
* It uses a **component-based architecture** and a fast **Virtual DOM** diffing engine to render lightning-fast user interfaces without manual DOM queries.

---

## 2. What is JSX (JavaScript XML)?
JSX is a syntax extension for JavaScript that allows you to write HTML-like markup directly inside your JavaScript code.

\`\`\`jsx
function WelcomeBanner() {
  const student = "Developer";
  return (
    <div className="p-6 bg-slate-900 border border-emerald-500 rounded-2xl text-white">
      <h1 className="text-2xl font-black text-emerald-400">Welcome, {student}!</h1>
      <p className="text-sm text-slate-300">Ready to build reactive React applications.</p>
    </div>
  );
}

export default WelcomeBanner;
\`\`\`

---

## 3. Core JSX Rules
1. **Return a Single Root Element:** Or wrap in a React Fragment (\`<> ... </>\`).
2. **Close All Tags:** Self-closing tags require a forward slash (e.g. \`<img />\`, \`<input />\`, \`<br />\`).
3. **Use camelCase for HTML Attributes:** \`class\` becomes \`className\`, \`for\` becomes \`htmlFor\`, \`tabindex\` becomes \`tabIndex\`.
`
  },
  {
    id: 2,
    slug: "react-functional-components-composition-export",
    title: "Functional Components, Component Composition & Export/Import",
    unit: "Unit 1: React Foundations & Components",
    content: `React applications are built by composing small, isolated, reusable functional components together.

## 1. Building and Composing Components
\`\`\`jsx
// Button Component
function ActionButton({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl transition-all"
    >
      {label}
    </button>
  );
}

// Header Component composing the button
export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-[#060c18] border-b border-slate-800">
      <span className="font-extrabold text-white text-lg">NextSem Academy</span>
      <ActionButton label="Get Started" onClick={() => alert("Welcome!")} />
    </header>
  );
}
\`\`\`
`
  },
  {
    id: 3,
    slug: "react-props-passing-data-destructuring",
    title: "React Props, Data Passing, Default Values & Children",
    unit: "Unit 1: React Foundations & Components",
    content: `Props (short for properties) allow parent components to pass data and callbacks down to child components.

## 1. Passing and Destructuring Props
\`\`\`jsx
interface CourseCardProps {
  title: string;
  lessonsCount: number;
  isPopular?: boolean;
}

export function CourseCard({ title, lessonsCount, isPopular = false }: CourseCardProps) {
  return (
    <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold text-white text-base">{title}</h3>
        {isPopular && (
          <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-extrabold px-2 py-0.5 rounded-full">
            POPULAR
          </span>
        )}
      </div>
      <p className="text-xs text-slate-400">ðŸ“š {lessonsCount} Lessons</p>
    </div>
  );
}
\`\`\`
`
  },
  {
    id: 4,
    slug: "react-usestate-hook-state-management",
    title: "useState Hook: Reactive State, Immutability & Counters",
    unit: "Unit 2: State Management & Event Handling",
    content: `The \`useState\` hook introduces reactive state to functional components. When state changes, React automatically re-renders the component.

## 1. Counter with useState
\`\`\`jsx
import React, { useState } from 'react';

export default function InteractiveCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl text-center space-y-4 max-w-xs mx-auto">
      <h2 className="text-xl font-bold text-white">Current Count</h2>
      <p className="text-4xl font-extrabold text-emerald-400">{count}</p>
      
      <div className="flex justify-center gap-2">
        <button
          onClick={() => setCount(prev => prev - 1)}
          className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold"
        >
          - Decrement
        </button>
        <button
          onClick={() => setCount(prev => prev + 1)}
          className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold"
        >
          + Increment
        </button>
      </div>
    </div>
  );
}
\`\`\`
`
  },
  {
    id: 5,
    slug: "react-event-handling-controlled-form-inputs",
    title: "Handling Events & Controlled Form Input Architecture",
    unit: "Unit 2: State Management & Event Handling",
    content: `In controlled components, form input values are bound directly to React state.

\`\`\`jsx
import React, { useState } from 'react';

export default function ProjectForm() {
  const [projectName, setProjectName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (projectName.trim()) {
      setSubmittedName(projectName);
      setProjectName("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        placeholder="Enter project name..."
        className="w-full px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-emerald-500"
      />
      <button
        type="submit"
        className="w-full py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl"
      >
        Save Project
      </button>
      {submittedName && <p className="text-emerald-400 text-sm font-semibold">Saved: {submittedName}</p>}
    </form>
  );
}
\`\`\`
`
  },
  {
    id: 6,
    slug: "react-conditional-rendering-lists-keys",
    title: "Conditional Rendering, Lists & Keys in React",
    unit: "Unit 2: State Management & Event Handling",
    content: `Render elements conditionally using ternary operators (\`? :\`) or short-circuit evaluation (\`&&\`), and map array lists with unique \`key\` props.

\`\`\`jsx
export default function LessonsList({ lessons }) {
  if (!lessons || lessons.length === 0) {
    return <p className="text-slate-400">No lessons available yet.</p>;
  }

  return (
    <ul className="space-y-2">
      {lessons.map((lesson) => (
        <li
          key={lesson.id}
          className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-200 flex justify-between"
        >
          <span>{lesson.title}</span>
          <span className="text-emerald-400 font-bold">#{lesson.id}</span>
        </li>
      ))}
    </ul>
  );
}
\`\`\`
`
  },
  {
    id: 7,
    slug: "react-useeffect-hook-api-fetching-lifecycle",
    title: "useEffect Hook, Component Lifecycle & Async Data Fetching",
    unit: "Unit 3: Hooks & Side Effects",
    content: `The \`useEffect\` hook handles side effects like data fetching, subscriptions, timers, and DOM mutations.

\`\`\`jsx
import React, { useState, useEffect } from 'react';

export default function UserDataFetcher({ username }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isCancelled = false;
    setLoading(true);

    fetch(\`https://api.github.com/users/\${username}\`)
      .then(res => res.json())
      .then(data => {
        if (!isCancelled) {
          setUser(data);
          setLoading(false);
        }
      });

    return () => {
      isCancelled = true; // Cleanup on unmount or username change
    };
  }, [username]);

  if (loading) return <p className="text-slate-400">Loading user profile...</p>;
  return <div className="text-white font-bold">{user?.name} ({user?.public_repos} Repos)</div>;
}
\`\`\`
`
  },
  {
    id: 8,
    slug: "react-useref-hook-dom-focus-mutable-refs",
    title: "useRef Hook: Physical DOM Nodes & Mutable Values",
    unit: "Unit 3: Hooks & Side Effects",
    content: `\`useRef\` creates a mutable reference that persists across re-renders without triggering a component re-render when mutated.

\`\`\`jsx
import React, { useRef } from 'react';

export default function SearchBar() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="flex gap-2">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search documentation..."
        className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white"
      />
      <button onClick={handleFocus} className="px-4 py-2 bg-slate-800 text-white rounded-xl">
        Focus Input (Ctrl+K)
      </button>
    </div>
  );
}
\`\`\`
`
  },
  {
    id: 9,
    slug: "react-custom-hooks-reusable-logic",
    title: "Building Custom React Hooks for Reusable Component Logic",
    unit: "Unit 3: Hooks & Side Effects",
    content: `Custom hooks let you extract and reuse stateful logic across multiple components.

\`\`\`jsx
import { useState, useEffect } from 'react';

// Custom hook to detect window dimensions
export function useWindowDimensions() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { isMobile };
}
\`\`\`
`
  },
  {
    id: 10,
    slug: "react-context-api-usecontext-global-state",
    title: "Context API, useContext & Global Application State",
    unit: "Unit 4: Advanced React Architecture",
    content: `Master state management in modern React applications by sharing state globally across components without prop drilling.

## 1. The Prop Drilling Problem
* In standard React, data flows downward through props from parent to child components.
* When deeply nested components (e.g. 5 layers deep) need access to global state (such as the current authenticated user, active UI theme, or shopping cart), passing props through intermediate components that do not need them creates **prop drilling**.
* **React Context** provides a way to pass data through the component tree without having to pass props down manually at every level.

---

## 2. Creating Context with createContext
Create a Context object and establish fallback default values:

\`\`\`jsx
import { createContext } from 'react';

// Create context with sensible default values
export const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => {}
});
\`\`\`

---

## 3. The Context Provider Pattern
Wrap your component tree in a custom Provider component that owns and manages the state:

\`\`\`jsx
import React, { useState } from 'react';
import { ThemeContext } from './ThemeContext';

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === 'dark' ? 'bg-[#060c18] text-white' : 'bg-white text-slate-900'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
\`\`\`

---

## 4. Consuming State with useContext
Create a custom consumer hook to safely access the context anywhere in your application:

\`\`\`jsx
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
\`\`\`

---

## 5. Complete Global State Implementation
Here is how consumer components cleanly toggle and read global state:

\`\`\`jsx
import React from 'react';
import { useTheme } from './ThemeContext';

export function HeaderNav() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex items-center justify-between p-4 border-b border-slate-800">
      <h1 className="text-xl font-bold">Nextsem Academy</h1>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-[#04AA6D] hover:bg-[#039861] text-white font-bold rounded-lg transition-colors"
      >
        Current Theme: {theme.toUpperCase()}
      </button>
    </header>
  );
}
\`\`\`

---

## 6. Context Performance Best Practices
* **Split Independent Contexts:** Avoid putting all state into a single giant context object. Keep authentication, UI theme, and notification state in separate providers.
* **Separate State and Dispatch:** If a component only needs to trigger an action (e.g. dispatch a toggle), provide a separate context for action handlers so state updates do not re-render that component.
`
  },
  {
    id: 11,
    slug: "react-router-dom-spa-routes-links",
    title: "React Router & Next.js App Router Architecture",
    unit: "Unit 4: Advanced React Architecture",
    content: `Build seamless Single Page Applications (SPAs) with modern declarative routing, dynamic parameters, and instant page transitions.

## 1. Client-Side Routing vs Multi-Page Apps
* **Traditional Websites:** Every link click triggers a full browser reload, fetching HTML from the server and reloading all CSS/JS assets from scratch.
* **Single Page Applications (SPAs):** The browser loads one initial bundle. When links are clicked, client-side routing intercepts navigation, updates the browser URL via the History API, and renders matching components instantly without any page flash.

---

## 2. Declarative Navigation with Link
Never use standard HTML \`<a>\` tags for internal links in React or Next.js, as they trigger full page reloads. Always use the optimized \`<Link>\` component:

\`\`\`jsx
import Link from 'next/link';

export function NavigationBar() {
  return (
    <nav className="flex items-center gap-6 p-4 bg-[#09101f] border-b border-slate-800">
      <Link href="/html" className="text-slate-300 hover:text-[#04AA6D] font-bold transition-colors">
        HTML5 Lessons
      </Link>
      <Link href="/css" className="text-slate-300 hover:text-[#04AA6D] font-bold transition-colors">
        CSS3 Mastery
      </Link>
      <Link href="/react" className="text-slate-300 hover:text-[#04AA6D] font-bold transition-colors">
        React.js Architecture
      </Link>
      <Link href="/nodejs" className="text-slate-300 hover:text-[#04AA6D] font-bold transition-colors">
        Node.js Backend
      </Link>
    </nav>
  );
}
\`\`\`

---

## 3. Programmatic Navigation with useRouter
When you need to redirect users after an asynchronous action (such as login completion or quiz submission), use programmatic navigation:

\`\`\`jsx
'use client';

import { useRouter } from 'next/navigation';

export function QuizSubmitButton({ score, totalQuestions }) {
  const router = useRouter();

  const handleFinish = async () => {
    // Save student score to database
    await saveScore(score);

    // Programmatically navigate to results page
    router.push('/quiz/results');
  };

  return (
    <button
      onClick={handleFinish}
      className="px-6 py-2.5 bg-[#04AA6D] hover:bg-[#039861] text-white font-black rounded-xl shadow-lg"
    >
      Complete Assessment
    </button>
  );
}
\`\`\`

---

## 4. Dynamic Route Segments
Dynamic segments allow your application to render matching content from database slugs (e.g. \`/react/[slug]\`):

\`\`\`jsx
// src/app/react/[slug]/page.tsx
export default async function LessonPage({ params }) {
  const { slug } = await params;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-extrabold text-white">Active Lesson: {slug}</h1>
    </div>
  );
}
\`\`\`
`
  },
  {
    id: 12,
    slug: "react-performance-memo-usememo-usecallback",
    title: "React Performance: React.memo, useMemo & useCallback",
    unit: "Unit 4: Advanced React Architecture",
    content: `Master React performance optimization by eliminating unnecessary component re-renders, caching expensive computations, and maintaining stable function references.

## 1. How React Re-renders Components
* By default, whenever a parent component re-renders, **all of its children re-render recursively**, regardless of whether their props changed.
* In JavaScript, objects and functions are compared by **reference equality**, not value:
  * \`{} !== {}\` (two separate object instances)
  * \`(() => {}) !== (() => {})\` (two separate function instances)
* Passing inline objects or callbacks causes child components to see "new" props on every render, triggering redundant redraw cycles.

---

## 2. React.memo: Component-Level Memoization
Wrap a functional component with \`React.memo\` to skip re-rendering if its incoming props are shallowly equal:

\`\`\`jsx
import React, { memo } from 'react';

// This component only re-renders if 'title' or 'count' value actually changes
export const MetricCard = memo(function MetricCard({ title, count }) {
  console.log('Rendering MetricCard:', title);
  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
      <span className="text-xs text-slate-400 font-bold uppercase">{title}</span>
      <p className="text-2xl font-black text-[#04AA6D]">{count}</p>
    </div>
  );
});
\`\`\`

---

## 3. useMemo: Caching Expensive Computations
Use \`useMemo\` to cache the calculated result of expensive operations (e.g. filtering 10,000 items, calculating statistics) between renders:

\`\`\`jsx
import React, { useState, useMemo } from 'react';

export function TransactionAnalytics({ transactions }) {
  const [filter, setFilter] = useState('all');

  // Cache filtered calculation: only re-calculates when transactions or filter change
  const totalVolume = useMemo(() => {
    console.log('Calculating total transaction volume...');
    return transactions
      .filter((item) => filter === 'all' || item.type === filter)
      .reduce((sum, item) => sum + item.amount, 0);
  }, [transactions, filter]);

  return (
    <div className="p-6 bg-[#0c1328] border border-slate-800 rounded-2xl">
      <h2 className="text-xl font-bold text-white">Total Volume: \${totalVolume.toLocaleString()}</h2>
      <div className="flex gap-2 mt-4">
        <button onClick={() => setFilter('all')} className="px-3 py-1 bg-slate-800 text-white rounded">All</button>
        <button onClick={() => setFilter('crypto')} className="px-3 py-1 bg-slate-800 text-white rounded">Crypto</button>
      </div>
    </div>
  );
}
\`\`\`

---

## 4. useCallback: Preserving Function References
Use \`useCallback\` to memoize a callback function instance between renders, preventing memoized child components from re-rendering:

\`\`\`jsx
import React, { useState, useCallback } from 'react';
import { MetricCard } from './MetricCard';

export function PerformanceDashboard() {
  const [counter, setCounter] = useState(0);

  // Stable callback reference: function identity does not change on counter updates
  const handleExport = useCallback((format) => {
    console.log('Exporting analytics report in format:', format);
  }, []);

  return (
    <div className="space-y-4">
      <button
        onClick={() => setCounter((c) => c + 1)}
        className="px-4 py-2 bg-[#04AA6D] text-white font-bold rounded-lg"
      >
        Increment: {counter}
      </button>

      {/* MetricCard will NOT re-render when counter increments */}
      <MetricCard title="Completed Lessons" count={counter} onExport={handleExport} />
    </div>
  );
}
\`\`\`

---

## 5. Golden Rules for Performance
1. **Profile Before Optimizing:** Do not wrap every single component in \`React.memo\` or every function in \`useCallback\`. Memoization has its own memory and comparison overhead.
2. **Use useMemo for Expensive Loops:** Calculations with hundreds or thousands of array iterations benefit most from \`useMemo\`.
3. **Use useCallback with React.memo:** \`useCallback\` is primarily useful when passing functions to child components wrapped in \`React.memo\` or to \`useEffect\` dependency arrays.
`
  }
];
