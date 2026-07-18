const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/ncertCoursesData.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Perform replacements
content = content.replace(/localPdfPath: "kacc(\d+)\.pdf"/g, 'localPdfPath: "Class 11/Accountancy/kacc$1.pdf"');
content = content.replace(/localPdfPath: "keec(\d+)\.pdf"/g, 'localPdfPath: "Class 11/Economics/keec$1.pdf"');
content = content.replace(/localPdfPath: "leph(\d+)\.pdf"/g, 'localPdfPath: "Class 12/Physics/leph$1.pdf"');
content = content.replace(/localPdfPath: "lhis(\d+)\.pdf"/g, 'localPdfPath: "Class 12/History/lhis$1.pdf"');

fs.writeFileSync(filePath, content, 'utf8');
console.log("Successfully updated NCERT local PDF paths to class-wise and subject-wise folders!");
