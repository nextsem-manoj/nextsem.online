const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components');
const appDir = path.join(__dirname, 'src', 'app');

const files = [
  path.join(dir, 'Sidebar.tsx'),
  path.join(dir, 'PhaseCard.tsx'),
  path.join(dir, 'BottomFeatures.tsx'),
  path.join(dir, 'CourseTimeline.tsx'),
  path.join(appDir, 'page.tsx')
];

files.forEach(f => {
  if (!fs.existsSync(f)) return;
  let content = fs.readFileSync(f, 'utf8');

  // Replace colors to support dark mode
  content = content.replace(/bg-white(?!\/)/g, 'bg-white dark:bg-slate-800');
  content = content.replace(/bg-\[\#f8f9fa\]/g, 'bg-[#f8f9fa] dark:bg-slate-900');
  content = content.replace(/text-gray-700/g, 'text-gray-700 dark:text-gray-300');
  content = content.replace(/text-gray-600/g, 'text-gray-600 dark:text-gray-400');
  content = content.replace(/text-\[\#0f172a\]/g, 'text-[#0f172a] dark:text-white');
  content = content.replace(/border-gray-200/g, 'border-gray-200 dark:border-slate-700');
  content = content.replace(/border-\[\#e0e0e0\]/g, 'border-[#e0e0e0] dark:border-slate-700');
  content = content.replace(/bg-gray-50(?!\/)/g, 'bg-gray-50 dark:bg-slate-900');
  content = content.replace(/bg-gray-100(?!\/)/g, 'bg-gray-100 dark:bg-slate-800');

  fs.writeFileSync(f, content);
});

console.log('Injected dark mode classes');
