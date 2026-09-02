const fs = require('fs');
const content = fs.readFileSync('src/data/htmlLessonsData.ts', 'utf8');

// Parse lessons from JSON or regex
const regex = /{\s*"id":\s*(\d+),\s*"slug":\s*"([^"]+)",\s*"title":\s*"([^"]+)",\s*"unit":\s*"([^"]+)"[\s\S]*?"kid":\s*"([\s\S]*?)"\s*,\s*"pro":/g;

let match;
const placeholderLessons = [];
const richLessons = [];

// Also split by lesson objects
const lessonBlocks = content.split(/\{\s*id:\s*|\{\s*"id":\s*/);

for (let i = 1; i < lessonBlocks.length; i++) {
  const block = lessonBlocks[i];
  const idMatch = block.match(/^(\d+)/);
  const titleMatch = block.match(/title:\s*"([^"]+)"|"title":\s*"([^"]+)"/);
  const unitMatch = block.match(/unit:\s*"([^"]+)"|"unit":\s*"([^"]+)"/);
  const slugMatch = block.match(/slug:\s*"([^"]+)"|"slug":\s*"([^"]+)"/);

  const id = idMatch ? parseInt(idMatch[1], 10) : i;
  const title = titleMatch ? (titleMatch[1] || titleMatch[2]) : "Unknown";
  const unit = unitMatch ? (unitMatch[1] || unitMatch[2]) : "Unknown";
  const slug = slugMatch ? (slugMatch[1] || slugMatch[2]) : "unknown";

  const isPlaceholder = block.includes("<!-- Example use of") || block.includes("<!-- Example use");

  if (isPlaceholder) {
    placeholderLessons.push({ id, title, unit, slug });
  } else {
    richLessons.push({ id, title, unit, slug });
  }
}

console.log("=== TOTAL LESSONS ANALYZED ===", lessonBlocks.length - 1);
console.log("=== RICH LESSONS WITH FULL CODE ===", richLessons.length);
console.log("=== LESSONS WITH PLACEHOLDER/EMPTY EXAMPLE ===", placeholderLessons.length);
console.log("\n=== LIST OF PLACEHOLDER LESSONS ===");
console.log(JSON.stringify(placeholderLessons, null, 2));
