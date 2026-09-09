const fs = require('fs');
const content = fs.readFileSync('src/data/htmlLessonsData.ts', 'utf8');
const lines = content.split('\n');
const units = {};
let currentId = null;
for (const line of lines) {
  const idMatch = line.match(/^\s*id:\s*(\d+)/);
  if (idMatch) currentId = idMatch[1];
  const unitMatch = line.match(/^\s*unit:\s*"([^"]+)"/);
  if (unitMatch && currentId !== null) {
    const u = unitMatch[1];
    units[u] = (units[u] || []).concat(currentId);
  }
}
console.log(JSON.stringify(units, null, 2));
