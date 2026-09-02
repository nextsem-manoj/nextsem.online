const fs = require('fs');
const content = fs.readFileSync('src/data/htmlLessonsData.ts', 'utf8');

// Match all lessons
const lessons = [];
// Find all id patterns
const matches = content.match(/\{\s*(?:"id"|id):\s*(\d+)[\s\S]*?(?=\n\s*\{\s*(?:"id"|id):|\n\s*\];)/g) || [];

for (const m of matches) {
  const idMatch = m.match(/(?:"id"|id):\s*(\d+)/);
  const titleMatch = m.match(/(?:"title"|title):\s*"([^"]+)"/);
  const unitMatch = m.match(/(?:"unit"|unit):\s*"([^"]+)"/);
  const slugMatch = m.match(/(?:"slug"|slug):\s*"([^"]+)"/);

  if (idMatch && titleMatch) {
    const id = parseInt(idMatch[1], 10);
    const title = titleMatch[1];
    const unit = unitMatch ? unitMatch[1] : '';
    const slug = slugMatch ? slugMatch[1] : '';

    const isPlaceholder = m.includes("<!-- Example use of") || m.includes("<!-- Example use") || m.includes("<!-- Semantically valid usage");
    lessons.push({ id, title, unit, slug, isPlaceholder });
  }
}

const placeholderLessons = lessons.filter(l => l.isPlaceholder);
const richLessons = lessons.filter(l => !l.isPlaceholder);

console.log("Total Lessons Found:", lessons.length);
console.log("Complete Rich Lessons (IDs):", richLessons.map(l => l.id).join(', '));
console.log("Empty/Placeholder Lessons Count:", placeholderLessons.length);
console.log("\nALL PLACEHOLDER LESSONS (ID, Title, Unit):");
placeholderLessons.forEach(l => {
  console.log(`Lesson #${l.id}: "${l.title}" (${l.unit})`);
});
