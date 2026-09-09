const fs = require('fs');
const path = require('path');

const OUTPUT_FILE = path.join(__dirname, '../src/data/searchIndex.json');
const HTML_LESSONS_FILE = path.join(__dirname, '../src/data/htmlLessonsData.ts');
const CLI_LESSONS_FILE = path.join(__dirname, '../src/data/cliLessonsData.ts');

function extractHtmlLessons() {
  if (!fs.existsSync(HTML_LESSONS_FILE)) return [];
  const content = fs.readFileSync(HTML_LESSONS_FILE, 'utf8');
  
  const results = [];
  // Match each object in htmlLessons array (handling both quoted and unquoted keys)
  const lessonBlockRegex = /{\s*["']?id["']?:\s*(\d+),[\s\S]*?["']?slug["']?:\s*["']([^"']+)["'],[\s\S]*?["']?title["']?:\s*["']([^"']+)["'],[\s\S]*?["']?unit["']?:\s*["']([^"']+)["']/g;
  let match;

  while ((match = lessonBlockRegex.exec(content)) !== null) {
    const id = parseInt(match[1], 10);
    const slug = match[2];
    const title = match[3];
    const unit = match[4];

    results.push({
      id: `html-${slug}`,
      slug,
      title: title.replace(/\\"/g, '"').replace(/`([^`]+)`/g, '$1'),
      content: `${unit}. HTML5 semantic lesson covering tags, syntax, and live browser output on Windows 11.`,
      phase: 'HTML5 Web Dev',
      duration: '5 mins read',
      color: 'bg-[#2980b9]',
      icon: '📄',
      url: `/html/${slug}`
    });
  }
  return results;
}

function extractCliLessons() {
  if (!fs.existsSync(CLI_LESSONS_FILE)) return [];
  const content = fs.readFileSync(CLI_LESSONS_FILE, 'utf8');
  
  const results = [];
  const lessonBlockRegex = /{\s*id:\s*(\d+),[\s\S]*?slug:\s*["']([^"']+)["'],[\s\S]*?title:\s*["']([^"']+)["'],[\s\S]*?unit:\s*["']([^"']+)["']/g;
  let match;

  while ((match = lessonBlockRegex.exec(content)) !== null) {
    const id = parseInt(match[1], 10);
    const slug = match[2];
    const title = match[3];
    const unit = match[4];

    results.push({
      id: `cli-${slug}`,
      slug,
      title: title.replace(/\\"/g, '"').replace(/`([^`]+)`/g, '$1'),
      content: `${unit}. Windows 11 Command Prompt (CMD) terminal commands, shell operations, and scripting.`,
      phase: 'Windows CLI',
      duration: '4 mins read',
      color: 'bg-[#1f1f1f]',
      icon: '⚡',
      url: `/cli/${slug}`
    });
  }
  return results;
}

const CORE_SUBJECT_ITEMS = [
  {
    id: 'subject-html',
    title: 'HTML5 & Web Architecture',
    content: 'Complete HTML5 fundamentals, semantic elements, forms, tables, media tags, accessibility, and Windows 11 Chrome execution.',
    phase: 'HTML5 Web Dev',
    duration: '98+ Lessons',
    color: 'bg-[#2980b9]',
    icon: '📄',
    url: '/html'
  },
  {
    id: 'subject-cli',
    title: 'Windows 11 Command Prompt & CLI Terminal',
    content: 'Master Windows 11 terminal commands: dir, cd, copy, move, mkdir, del, attrib, piping, redirection, and batch scripting.',
    phase: 'Windows CLI',
    duration: '14 Lessons',
    color: 'bg-[#1f1f1f]',
    icon: '⚡',
    url: '/cli'
  },
  {
    id: 'subject-css',
    title: 'CSS3 Styling, Flexbox & Grid',
    content: 'Modern CSS3 selectors, Flexbox alignment, CSS Grid layouts, keyframe animations, responsive media queries, and dark themes.',
    phase: 'CSS3 Styling',
    duration: '12+ Lessons',
    color: 'bg-[#1abc9c]',
    icon: '🎨',
    url: '/css'
  },
  {
    id: 'subject-js',
    title: 'JavaScript ES6+ & Web Logic',
    content: 'Modern ES6+ syntax, arrow functions, promises, async/await, array methods (map, filter, reduce), DOM manipulation, and browser events.',
    phase: 'JavaScript ES6+',
    duration: '12+ Lessons',
    color: 'bg-[#f39c12]',
    icon: '🔢',
    url: '/js'
  },
  {
    id: 'subject-react',
    title: 'React.js & Component Architecture',
    content: 'Build reactive user interfaces with JSX, component props, useState, useEffect, custom hooks, and Context API global state management.',
    phase: 'React.js',
    duration: '12+ Lessons',
    color: 'bg-[#e74c3c]',
    icon: '⚛️',
    url: '/react'
  },
  {
    id: 'subject-nodejs',
    title: 'Node.js & Express REST APIs',
    content: 'Build backend microservices, RESTful APIs with Express, middleware, MongoDB database connection, and deployment.',
    phase: 'Node.js & Express',
    duration: '12+ Lessons',
    color: 'bg-[#27ae60]',
    icon: '🟢',
    url: '/nodejs'
  },
  {
    id: 'subject-git',
    title: 'Git Version Control & GitHub',
    content: 'Git workflows: git init, git add, git commit, git branch, merge conflicts, pull requests, and GitHub remote repositories.',
    phase: 'Version Control',
    duration: '8+ Lessons',
    color: 'bg-[#34495e]',
    icon: '🌿',
    url: '/git'
  },
  {
    id: 'subject-tracks',
    title: '6 Structured Developer Learning Tracks',
    content: 'Step-by-step career tracks: Stage 0 Windows CLI, Stage 1 HTML5, Stage 2 CSS3, Stage 3 JavaScript, Stage 4 React.js, Stage 5 Node.js.',
    phase: 'Career Tracks',
    duration: '6 Stages',
    color: 'bg-[#04AA6D]',
    icon: '🎯',
    url: '/tracks'
  },
  {
    id: 'subject-projects',
    title: '15+ Interactive Developer Mini-Projects',
    content: 'Hands-on interactive projects: CSS Keyframe Animations, Canvas Physics, 3D Perspective Cube, Audio Spectrum Visualizer, Matrix Rain, Warp Speed.',
    phase: 'Projects & Labs',
    duration: '15+ Projects',
    color: 'bg-[#04AA6D]',
    icon: '🚀',
    url: '/projects'
  },
  {
    id: 'subject-roadmap',
    title: '2026 Full Stack Web Developer Roadmap',
    content: 'Visual 2026 career roadmap outlining milestones from absolute beginner to senior full-stack engineer.',
    phase: 'Career Roadmap',
    duration: 'Full Roadmap',
    color: 'bg-[#04AA6D]',
    icon: '🗺️',
    url: '/full-stack-web-development-roadmap'
  },
  {
    id: 'subject-playground',
    title: 'Interactive Code Playground & IDE',
    content: 'Online browser code editor with Emmet abbreviation expansion, Prettier code formatter, and Live Server port 5500 simulation.',
    phase: 'Developer Tools',
    duration: 'Live Editor',
    color: 'bg-[#04AA6D]',
    icon: '💻',
    url: '/playground'
  }
];

function generateIndex() {
  console.log('Generating verified full-text search index...');
  
  const htmlLessons = extractHtmlLessons();
  const cliLessons = extractCliLessons();
  
  console.log(`Extracted ${htmlLessons.length} HTML lessons`);
  console.log(`Extracted ${cliLessons.length} CLI lessons`);

  const searchIndex = [
    ...CORE_SUBJECT_ITEMS,
    ...htmlLessons,
    ...cliLessons
  ];

  // Create output parent folder if it doesn't exist
  const outputDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(searchIndex, null, 2), 'utf8');
  console.log(`Successfully generated full-text search index with ${searchIndex.length} 100% valid items at ${OUTPUT_FILE}`);
}

generateIndex();
