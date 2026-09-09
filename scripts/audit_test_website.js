const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '../test_website');

// Find all HTML files
function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    if (file === 'node_modules' || file === '.next') return;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getHtmlFiles(fullPath));
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  });
  return results;
}

const htmlFiles = getHtmlFiles(ROOT);
console.log(`Found ${htmlFiles.length} HTML files to inspect:\n`);

let totalBroken = 0;

htmlFiles.forEach(filePath => {
  const relPath = path.relative(ROOT, filePath);
  const content = fs.readFileSync(filePath, 'utf8');

  // Check CSS links
  const cssMatches = content.match(/href="([^"]+\.css)"/g) || [];
  // Check JS scripts
  const jsMatches = content.match(/src="([^"]+\.js)"/g) || [];
  // Check Links
  const linkMatches = content.match(/href="([^"#]+)"/g) || [];

  console.log(`--- Checking: ${relPath} ---`);

  // Check CSS
  cssMatches.forEach(m => {
    let target = m.replace('href="', '').replace('"', '');
    let resolved = target.startsWith('/') ? path.join(ROOT, target) : path.join(path.dirname(filePath), target);
    if (!fs.existsSync(resolved)) {
      console.log(`  ❌ Broken CSS: ${target} (resolved: ${resolved})`);
      totalBroken++;
    } else {
      console.log(`  ✔ CSS OK: ${target}`);
    }
  });

  // Check JS
  jsMatches.forEach(m => {
    let target = m.replace('src="', '').replace('"', '');
    let resolved = target.startsWith('/') ? path.join(ROOT, target) : path.join(path.dirname(filePath), target);
    if (!fs.existsSync(resolved)) {
      console.log(`  ❌ Broken JS: ${target} (resolved: ${resolved})`);
      totalBroken++;
    } else {
      console.log(`  ✔ JS OK: ${target}`);
    }
  });

  // Check internal <a> links
  linkMatches.forEach(m => {
    let target = m.replace('href="', '').replace('"', '');
    if (target.startsWith('http') || target.startsWith('javascript') || target.startsWith('mailto')) return;
    if (target.endsWith('.css')) return;

    let targetClean = target.split('?')[0];
    let resolved = targetClean.startsWith('/') ? path.join(ROOT, targetClean) : path.join(path.dirname(filePath), targetClean);
    
    // Check if file or directory with index.html
    if (fs.existsSync(resolved) && fs.statSync(resolved).isDirectory()) {
      resolved = path.join(resolved, 'index.html');
    }

    if (!fs.existsSync(resolved)) {
      console.log(`  ❌ Broken Link: ${target} (resolved: ${resolved})`);
      totalBroken++;
    }
  });
});

console.log(`\n========================================`);
console.log(`Audit Complete. Total broken references found: ${totalBroken}`);
console.log(`========================================`);
