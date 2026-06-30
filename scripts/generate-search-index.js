const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const CONTENT_DIR = path.join(__dirname, '../src/content');
const OUTPUT_FILE = path.join(__dirname, '../src/data/searchIndex.json');

const PHASE_METADATA = {
  'p0-developer-setup': { phase: 'P0', duration: '10 mins read', color: 'bg-blue-600', icon: '💻' },
  'p1-1-intro-and-text': { phase: 'P1.1', duration: '8 mins read', color: 'bg-violet-600', icon: '📄' },
  'p1-2-links-and-media': { phase: 'P1.2', duration: '9 mins read', color: 'bg-violet-600', icon: '🔗' },
  'p1-3-lists-and-tables': { phase: 'P1.3', duration: '9 mins read', color: 'bg-violet-600', icon: '📊' },
  'p1-4-forms-and-inputs': { phase: 'P1.4', duration: '12 mins read', color: 'bg-violet-600', icon: '📝' },
  'p1-5-semantics-and-seo': { phase: 'P1.5', duration: '11 mins read', color: 'bg-violet-600', icon: '🎯' },
  'p1-6-html5-tags': { phase: 'P1.6', duration: '15 mins read', color: 'bg-violet-600', icon: '📚' },
  'p2-css-practical': { phase: 'P2', duration: '14 mins read', color: 'bg-pink-600', icon: '🎨' },
  'p3-js-practical': { phase: 'P3', duration: '15 mins read', color: 'bg-amber-600', icon: '⚡' },
  'p4-react': { phase: 'P4', duration: '16 mins read', color: 'bg-cyan-600', icon: '⚛️' },
  'p5-node-mongodb': { phase: 'P5', duration: '18 mins read', color: 'bg-emerald-600', icon: '🟢' },
  'p6-capstone': { phase: 'P6', duration: '20 mins read', color: 'bg-fuchsia-600', icon: '🚀' },
  'p7-placement': { phase: 'P7', duration: '15 mins read', color: 'bg-purple-600', icon: '💼' }
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
    const meta = PHASE_METADATA[id] || { phase: 'Info', duration: '5 mins read', color: 'bg-slate-600', icon: '📖' };

    // Clean up content slightly (remove backticks, markdown headers symbols for raw search cleanliness, but keep tag names)
    const cleanContent = content
      .replace(/#+\s+/g, '') // remove markdown titles
      .replace(/```[a-z]*/g, '') // remove code fence tags
      .trim();

    searchIndex.push({
      id,
      title: data.title || id.replace('-', ' '),
      content: cleanContent,
      phase: meta.phase,
      duration: meta.duration,
      color: meta.color,
      icon: meta.icon
    });
  }

  // Create output parent folder if it doesn't exist
  const outputDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(searchIndex, null, 2), 'utf8');
  console.log(`Successfully generated full-text search index with ${searchIndex.length} items at ${OUTPUT_FILE}`);
}

generateIndex();
