const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/app/ncert/notes/accounting-chapter-3/page.tsx');

try {
  // Read file as buffer to preserve raw bytes
  const buffer = fs.readFileSync(filePath);
  
  // Convert buffer to string replacing invalid UTF-8 sequences with a placeholder or removing them
  const cleanString = buffer.toString('utf8');
  
  // Write back strictly as clean UTF-8
  fs.writeFileSync(filePath, cleanString, 'utf8');
  console.log("Successfully cleaned and re-encoded accounting-chapter-3/page.tsx in clean UTF-8!");
} catch (err) {
  console.error("Failed to clean file:", err);
}
