const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'htmlLessonsData.ts');
const fileContent = fs.readFileSync(filePath, 'utf-8');

const matches = [];
// Match: id, slug, title, unit
const lessonRegex = /id:\s*(\d+),\s*slug:\s*["']([^"']+)["'],\s*title:\s*["']([^"']+)["'],\s*unit:\s*["']([^"']+)["']/g;
let m;
while ((m = lessonRegex.exec(fileContent)) !== null) {
  matches.push({
    id: parseInt(m[1], 10),
    slug: m[2],
    title: m[3],
    unit: m[4],
    url: `/html/${m[2]}`
  });
}

console.log(`Total HTML Lessons: ${matches.length}`);
console.log(JSON.stringify(matches, null, 2));
