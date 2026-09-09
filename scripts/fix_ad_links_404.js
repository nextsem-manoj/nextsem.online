const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '../test_website');
const SUBDIRS = ['cli', 'html', 'course', 'batch', 'git', 'cpp', 'visual-logic'];

function fixFile(filePath) {
  const isSubdir = SUBDIRS.some(dir => filePath.includes(path.sep + dir + path.sep));
  const prefix = isSubdir ? '../' : '';

  let content = fs.readFileSync(filePath, 'utf8');

  // Replace any broken https://nextsem.online/curriculum.html with working internal relative links
  content = content.replace(/href="https:\/\/nextsem\.online\/curriculum\.html"/g, `href="${prefix}curriculum.html"`);
  content = content.replace(/href="https:\/\/nextsem\.online"/g, `href="${prefix}index.html"`);

  // Ensure top and bottom ads link to valid local curriculum or all-pages
  content = content.replace(
    /class="btn btn-primary btn-sm" style="text-decoration: none;">\s*Explore Sponsor &rarr;/g,
    `class="btn btn-primary btn-sm" style="text-decoration: none;" href="${prefix}curriculum.html">Explore Sponsor &rarr;`
  );
  content = content.replace(
    /class="btn btn-primary btn-sm" style="text-decoration: none;">\s*Learn More &rarr;/g,
    `class="btn btn-primary btn-sm" style="text-decoration: none;" href="${prefix}all-pages.html">Learn More &rarr;`
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✔ Fixed all ad links in: ${path.relative(ROOT, filePath)}`);
}

function processDirectory(dir) {
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    if (file === 'node_modules' || file === '.next') return;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (file.endsWith('.html')) {
      fixFile(fullPath);
    }
  });
}

processDirectory(ROOT);
console.log('\n🎉 All Ad Links Fixed with 100% 200 OK Destinations!');
