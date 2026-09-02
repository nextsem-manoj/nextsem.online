const fs = require('fs');
const content = fs.readFileSync('src/data/htmlLessonsData.ts', 'utf8');
const idMatches = content.match(/id:\s*(\d+)/g) || [];
console.log("Total id matches:", idMatches.length);
const unitMatches = content.match(/unit:\s*"([^"]+)"/g) || [];
console.log("Total unit matches:", unitMatches.length);
const uniqueUnits = Array.from(new Set(unitMatches));
console.log("Unique units:", uniqueUnits);
