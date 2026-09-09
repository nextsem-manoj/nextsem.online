const fs = require('fs');
const content = fs.readFileSync('src/data/htmlLessonsData.ts', 'utf8');

const regex = /{\s*id:\s*(\d+)[\s\S]*?slug:\s*"([^"]+)"[\s\S]*?title:\s*"([^"]+)"[\s\S]*?unit:\s*"([^"]+)"/g;

// Also test each lesson content block
const lessons = [];
const lessonBlocks = content.split(/\{\s*id:\s*/);

for (let i = 1; i < lessonBlocks.length; i++) {
  const block = lessonBlocks[i];
  const idMatch = block.match(/^(\d+)/);
  const titleMatch = block.match(/title:\s*"([^"]+)"/);
  const unitMatch = block.match(/unit:\s*"([^"]+)"/);
  const slugMatch = block.match(/slug:\s*"([^"]+)"/);

  if (idMatch && titleMatch) {
    const id = parseInt(idMatch[1], 10);
    const title = titleMatch[1];
    const unit = unitMatch ? unitMatch[1] : '';
    const slug = slugMatch ? slugMatch[1] : '';

    const isPlaceholder = block.includes("<!-- Example use of") || block.includes("<!-- Example use");
    lessons.push({ id, title, unit, slug, isPlaceholder });
  }
}

const placeholderLessons = lessons.filter(l => l.isPlaceholder);
const richLessons = lessons.filter(l => !l.isPlaceholder);

console.log("TOTAL LESSONS:", lessons.length);
console.log("RICH LESSONS (0 to 32):", richLessons.length, "lessons: IDs", richLessons.map(l => l.id).join(', '));
console.log("PLACEHOLDER LESSONS (33 to 100):", placeholderLessons.length, "lessons: IDs", placeholderLessons.map(l => l.id).join(', '));
