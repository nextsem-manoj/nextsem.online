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
      <p className="text-xs text-slate-400">📚 {lessonsCount} Lessons</p>
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
    content: `React Context allows you to share global state (e.g. current user, theme, cart items) across the entire component tree without prop drilling.

\`\`\`jsx
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext({ theme: 'dark', toggleTheme: () => {} });

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
\`\`\`
`
  },
  {
    id: 11,
    slug: "react-router-dom-spa-routes-links",
    title: "React Router & Next.js App Router Architecture",
    unit: "Unit 4: Advanced React Architecture",
    content: `Single Page Applications (SPAs) use client-side routing to switch views instantly without full browser page reloads.

\`\`\`jsx
import Link from 'next/link';

export function NavigationBar() {
  return (
    <nav className="flex gap-4">
      <Link href="/html" className="text-emerald-400 hover:underline">HTML Lessons</Link>
      <Link href="/css" className="text-emerald-400 hover:underline">CSS Lessons</Link>
      <Link href="/react" className="text-emerald-400 hover:underline">React Lessons</Link>
    </nav>
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
    content: `Optimize high-scale React applications by eliminating unnecessary component re-renders.

\`\`\`jsx
import React, { useMemo, useCallback } from 'react';

export function AnalyticsDashboard({ rawData, onExport }) {
  // Memoize expensive calculations
  const totalRevenue = useMemo(() => {
    return rawData.reduce((acc, curr) => acc + curr.amount, 0);
  }, [rawData]);

  // Memoize callback function reference
  const handleExport = useCallback(() => {
    onExport(totalRevenue);
  }, [onExport, totalRevenue]);

  return (
    <div className="p-6 bg-slate-900 rounded-2xl text-white">
      <h2 className="text-xl font-bold">Total Revenue: \${totalRevenue.toLocaleString()}</h2>
      <button onClick={handleExport} className="mt-4 px-4 py-2 bg-emerald-500 rounded-xl font-bold">
        Export CSV
      </button>
    </div>

  );
}
\`\`\`
`
  }
];
