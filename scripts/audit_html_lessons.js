const fs = require('fs');
const content = fs.readFileSync('src/data/htmlLessonsData.ts', 'utf8');

// Parse lessons
const idMatches = [...content.matchAll(/id:\s*(\d+)/g)];
console.log('Total id occurrences:', idMatches.length);

const lessons = [];
const blocks = content.split(/\n\s*\{\s*\n\s*id:\s*(\d+),/g);

for (let i = 1; i < blocks.length; i += 2) {
  const id = blocks[i];
  const body = blocks[i + 1];
  
  const title = (body.match(/title:\s*"([^"]+)"/) || [])[1] || 'Unknown';
  const slug = (body.match(/slug:\s*"([^"]+)"/) || [])[1] || 'Unknown';
  const unit = (body.match(/unit:\s*"([^"]+)"/) || [])[1] || 'Unknown';
  
  const engKid = body.includes('english:') && body.includes('kid:');
  const engPro = body.includes('english:') && body.includes('pro:');
  const hingKid = body.includes('hinglish:') && body.includes('kid:');
  const hingPro = body.includes('hinglish:') && body.includes('pro:');
  const hinKid = body.includes('hindi:') && body.includes('kid:');
  const hinPro = body.includes('hindi:') && body.includes('pro:');
  const ex = body.includes('exercise:');
  
  lessons.push({
    id: parseInt(id),
    slug,
    title,
    unit,
    variants: { engKid, engPro, hingKid, hingPro, hinKid, hinPro, ex },
    chars: body.length
  });
}

console.log(`Found ${lessons.length} structured lessons:`);
lessons.forEach(l => {
  console.log(`[#${l.id.toString().padStart(2, '0')}] ${l.title}`);
  console.log(`     Unit: ${l.unit}`);
  console.log(`     Slug: /html/${l.slug}`);
  console.log(`     Variants: Eng(${l.variants.engKid && l.variants.engPro ? '✓' : '✗'}), Hing(${l.variants.hingKid && l.variants.hingPro ? '✓' : '✗'}), Hin(${l.variants.hinKid && l.variants.hinPro ? '✓' : '✗'}), MCQ(${l.variants.ex ? '✓' : '✗'}) | ~${(l.chars / 1000).toFixed(1)}k chars`);
});
