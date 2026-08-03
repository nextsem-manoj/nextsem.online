const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const CONTENT_DIR = path.join(__dirname, '../src/content');
const OUTPUT_FILE = path.join(__dirname, '../src/data/searchIndex.json');

const PHASE_METADATA = {
  // Phase CLI (Windows 11 CLI)
  'p0-2-terminal': { phase: 'Windows CLI', duration: '5 mins read', color: 'bg-[#1f1f1f]', icon: '💻' },
  'cli-ch1-basics': { phase: 'Windows CLI', duration: '5 mins read', color: 'bg-[#1f1f1f]', icon: '🖥️' },
  'cli-ch2-drives': { phase: 'Windows CLI', duration: '3 mins read', color: 'bg-[#1f1f1f]', icon: '💾' },
  'cli-ch3-prompt': { phase: 'Windows CLI', duration: '3 mins read', color: 'bg-[#1f1f1f]', icon: '⚡' },
  'cli-ch4-directories': { phase: 'Windows CLI', duration: '6 mins read', color: 'bg-[#1f1f1f]', icon: '📂' },
  'cli-ch5-attributes': { phase: 'Windows CLI', duration: '6 mins read', color: 'bg-[#1f1f1f]', icon: '🔒' },
  'cli-ch6-redirection': { phase: 'Windows CLI', duration: '5 mins read', color: 'bg-[#1f1f1f]', icon: '🔍' },
  'cli-ch7-operations': { phase: 'Windows CLI', duration: '6 mins read', color: 'bg-[#1f1f1f]', icon: '📑' },
  'cli-ch8-networking': { phase: 'Windows CLI', duration: '6 mins read', color: 'bg-[#1f1f1f]', icon: '🌐' },
  'cli-ch9-disk': { phase: 'Windows CLI', duration: '4 mins read', color: 'bg-[#1f1f1f]', icon: '💿' },
  'cli-ch10-shares': { phase: 'Windows CLI', duration: '4 mins read', color: 'bg-[#1f1f1f]', icon: '🔗' },
  'cli-ch11-users': { phase: 'Windows CLI', duration: '4 mins read', color: 'bg-[#1f1f1f]', icon: '👥' },
  'cli-ch12-remote': { phase: 'Windows CLI', duration: '5 mins read', color: 'bg-[#1f1f1f]', icon: '📶' },
  'cli-ch13-batch': { phase: 'Windows CLI', duration: '6 mins read', color: 'bg-[#1f1f1f]', icon: '📄' },
  'cli-ch14-tasks': { phase: 'Windows CLI', duration: '6 mins read', color: 'bg-[#1f1f1f]', icon: '⚙️' },
  // Phase 0
  'p0-setup': { phase: 'Coding Setup', duration: '5 mins read', color: 'bg-[#5b2c6f]', icon: '📖' },
  'p0-1-setup': { phase: 'Coding Setup', duration: '5 mins read', color: 'bg-[#5b2c6f]', icon: '📥' },
  'p0-3-vscode': { phase: 'Coding Setup', duration: '8 mins read', color: 'bg-[#5b2c6f]', icon: '⚡' },
  'p0-4-git': { phase: 'Coding Setup', duration: '10 mins read', color: 'bg-[#5b2c6f]', icon: '🌿' },
  'p0-5-devtools': { phase: 'Coding Setup', duration: '8 mins read', color: 'bg-[#5b2c6f]', icon: '🔍' },
  // Phase 1
  'p1-1-intro-and-text': { phase: 'HTML5 Web Dev', duration: '8 mins read', color: 'bg-[#2980b9]', icon: '📄' },
  'p1-2-links-and-media': { phase: 'HTML5 Web Dev', duration: '9 mins read', color: 'bg-[#2980b9]', icon: '🔗' },
  'p1-3-lists-and-tables': { phase: 'HTML5 Web Dev', duration: '9 mins read', color: 'bg-[#2980b9]', icon: '📊' },
  'p1-4-forms-and-inputs': { phase: 'HTML5 Web Dev', duration: '12 mins read', color: 'bg-[#2980b9]', icon: '📝' },
  'p1-5-semantics-and-seo': { phase: 'HTML5 Web Dev', duration: '11 mins read', color: 'bg-[#2980b9]', icon: '🎯' },
  'p1-6-html5-tags': { phase: 'HTML5 Web Dev', duration: '15 mins read', color: 'bg-[#2980b9]', icon: '📚' },
  // Phase 2
  'p2-1-selectors': { phase: 'CSS3 Styling', duration: '10 mins read', color: 'bg-[#1abc9c]', icon: '🎨' },
  'p2-2-colors': { phase: 'CSS3 Styling', duration: '9 mins read', color: 'bg-[#1abc9c]', icon: '🌈' },
  'p2-3-box-model': { phase: 'CSS3 Styling', duration: '12 mins read', color: 'bg-[#1abc9c]', icon: '📦' },
  'p2-4-positioning': { phase: 'CSS3 Styling', duration: '11 mins read', color: 'bg-[#1abc9c]', icon: '📍' },
  'p2-5-flexbox': { phase: 'CSS3 Styling', duration: '13 mins read', color: 'bg-[#1abc9c]', icon: '🍱' },
  'p2-6-grid': { phase: 'CSS3 Styling', duration: '14 mins read', color: 'bg-[#1abc9c]', icon: '🕸️' },
  'p2-7-transitions': { phase: 'CSS3 Styling', duration: '10 mins read', color: 'bg-[#1abc9c]', icon: '🎬' },
  'p2-8-variables-themes': { phase: 'CSS3 Styling', duration: '12 mins read', color: 'bg-[#1abc9c]', icon: '🌓' },
  // Phase 3
  'p3-1-basics': { phase: 'JavaScript ES6+', duration: '12 mins read', color: 'bg-[#f39c12]', icon: '🔢' },
  'p3-2-control-flow': { phase: 'JavaScript ES6+', duration: '14 mins read', color: 'bg-[#f39c12]', icon: '🔄' },
  'p3-3-functions': { phase: 'JavaScript ES6+', duration: '15 mins read', color: 'bg-[#f39c12]', icon: '🛠️' },
  'p3-4-arrays': { phase: 'JavaScript ES6+', duration: '12 mins read', color: 'bg-[#f39c12]', icon: '🧺' },
  'p3-5-array-iterators': { phase: 'JavaScript ES6+', duration: '15 mins read', color: 'bg-[#f39c12]', icon: '🗺️' },
  'p3-6-objects': { phase: 'JavaScript ES6+', duration: '13 mins read', color: 'bg-[#f39c12]', icon: '📦' },
  'p3-7-dom-selection': { phase: 'JavaScript ES6+', duration: '11 mins read', color: 'bg-[#f39c12]', icon: '🎯' },
  'p3-8-dom-manipulation': { phase: 'JavaScript ES6+', duration: '13 mins read', color: 'bg-[#f39c12]', icon: '✏️' },
  'p3-9-events': { phase: 'JavaScript ES6+', duration: '14 mins read', color: 'bg-[#f39c12]', icon: '🖱️' },
  'p3-10-storages': { phase: 'JavaScript ES6+', duration: '12 mins read', color: 'bg-[#f39c12]', icon: '💾' },
  // Phase 4
  'p4-1-jsx': { phase: 'React.js', duration: '12 mins read', color: 'bg-[#e74c3c]', icon: '⚛️' },
  'p4-2-components': { phase: 'React.js', duration: '13 mins read', color: 'bg-[#e74c3c]', icon: '🧩' },
  'p4-3-props': { phase: 'React.js', duration: '10 mins read', color: 'bg-[#e74c3c]', icon: '📥' },
  'p4-4-state': { phase: 'React.js', duration: '15 mins read', color: 'bg-[#e74c3c]', icon: '🧠' },
  'p4-5-lifecycle': { phase: 'React.js', duration: '16 mins read', color: 'bg-[#e74c3c]', icon: '🔄' },
  'p4-6-refs': { phase: 'React.js', duration: '11 mins read', color: 'bg-[#e74c3c]', icon: '🔑' },
  'p4-7-routing': { phase: 'React.js', duration: '14 mins read', color: 'bg-[#e74c3c]', icon: '🧭' },
  'p4-8-context': { phase: 'React.js', duration: '15 mins read', color: 'bg-[#e74c3c]', icon: '🌐' },
  // Phase 5
  'p5-1-node': { phase: 'Node.js & Express', duration: '13 mins read', color: 'bg-[#27ae60]', icon: '🟢' },
  'p5-2-rest-apis': { phase: 'Node.js & Express', duration: '15 mins read', color: 'bg-[#27ae60]', icon: '📡' },
  'p5-3-mongodb': { phase: 'Node.js & Express', duration: '16 mins read', color: 'bg-[#27ae60]', icon: '🍃' },
  'p5-4-deployment': { phase: 'Node.js & Express', duration: '14 mins read', color: 'bg-[#27ae60]', icon: '☁️' },
  // Phase 6
  'p6-1-portfolio': { phase: 'Full Stack Projects', duration: '15 mins read', color: 'bg-[#2c3e50]', icon: '👤' },
  'p6-2-dashboard': { phase: 'Full Stack Projects', duration: '18 mins read', color: 'bg-[#2c3e50]', icon: '📊' },
  'p6-3-ecommerce': { phase: 'Full Stack Projects', duration: '22 mins read', color: 'bg-[#2c3e50]', icon: '🛒' },
  'p6-4-chat': { phase: 'Full Stack Projects', duration: '20 mins read', color: 'bg-[#2c3e50]', icon: '💬' },
  // Phase 7
  'p7-1-interview': { phase: 'Career & System Design', duration: '18 mins read', color: 'bg-[#34495e]', icon: '🗣️' },
  'p7-2-resume': { phase: 'Career & System Design', duration: '12 mins read', color: 'bg-[#34495e]', icon: '📄' },
  'p7-3-github': { phase: 'Career & System Design', duration: '13 mins read', color: 'bg-[#34495e]', icon: '🐙' },
  'p7-4-hiring': { phase: 'Career & System Design', duration: '15 mins read', color: 'bg-[#34495e]', icon: '💼' }
};

function generateIndex() {
  console.log('Generating full-text search index...');
  
  if (!fs.existsSync(CONTENT_DIR)) {
    console.warn('Content directory does not exist. Skipping index generation.');
    return;
  }

  const files = fs.readdirSync(CONTENT_DIR).filter(file => file.endsWith('.mdx'));
  const searchIndex = [];

  for (const file of files) {
    const filePath = path.join(CONTENT_DIR, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Parse Frontmatter
    const { data, content } = matter(fileContent);
    const id = file.replace('.mdx', '');
    const meta = PHASE_METADATA[id] || { phase: 'windows 11 command Line interface CLI', duration: '5 mins read', color: 'bg-slate-600', icon: '📖' };

    // Clean up content slightly (remove backticks, markdown headers symbols for raw search cleanliness, but keep tag names)
    const cleanContent = content
      .replace(/#+\s+/g, '') // remove markdown titles
      .replace(/```[a-z]*/g, '') // remove code fence tags
      .trim();

    const rawTitle = data.title || id.replace('-', ' ');
    const cleanTitle = rawTitle.replace(/^(CLI\.\d+:|P\d+\.\d+:|Phase\s+\d+:)\s*/i, '').trim();

    searchIndex.push({
      id,
      title: cleanTitle,
      content: cleanContent,
      phase: meta.phase,
      duration: meta.duration,
      color: meta.color,
      icon: meta.icon
    });
  }

  // Sort searchIndex items by phase code (e.g. P0.0, P0.1, P1.1, etc.)
  searchIndex.sort((a, b) => {
    return a.phase.localeCompare(b.phase, undefined, { numeric: true, sensitivity: 'base' });
  });

  // Create output parent folder if it doesn't exist
  const outputDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(searchIndex, null, 2), 'utf8');
  console.log(`Successfully generated full-text search index with ${searchIndex.length} items at ${OUTPUT_FILE}`);
}

generateIndex();
