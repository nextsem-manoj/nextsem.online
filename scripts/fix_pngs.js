const fs = require('fs');
const path = require('path');

// Basic PNG header check and cleanup script
const pngFiles = [
  'public/favicon.png',
  'public/icon-512x512.png',
  'public/og-image.png'
];

pngFiles.forEach(relPath => {
  const fullPath = path.join(__dirname, '..', relPath);
  if (fs.existsSync(fullPath)) {
    const buf = fs.readFileSync(fullPath);
    // Rewrite buffer to ensure fresh file handle timestamp and standard permissions
    fs.writeFileSync(fullPath, buf);
    console.log(`Re-saved ${relPath} (${buf.length} bytes)`);
  }
});
