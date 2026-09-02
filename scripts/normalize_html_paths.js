const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '../test_website');

// Subdirectories list
const SUBDIRS = ['cli', 'html', 'course', 'batch', 'git', 'cpp', 'visual-logic'];

function fixFile(filePath) {
  const isSubdir = SUBDIRS.some(dir => filePath.includes(path.sep + dir + path.sep));
  const assetPrefix = isSubdir ? '../assets/' : 'assets/';
  const rootPrefix = isSubdir ? '../' : '';

  let content = fs.readFileSync(filePath, 'utf8');

  // Fix CSS path
  content = content.replace(/href="(?:\.\.\/|\/)?assets\/css\/style\.css"/g, `href="${assetPrefix}css/style.css"`);
  
  // Fix JS paths
  content = content.replace(/src="(?:\.\.\/|\/)?assets\/js\/header\.js"/g, `src="${assetPrefix}js/header.js"`);
  content = content.replace(/src="(?:\.\.\/|\/)?assets\/js\/footer\.js"/g, `src="${assetPrefix}js/footer.js"`);
  content = content.replace(/src="(?:\.\.\/|\/)?assets\/js\/app\.js"/g, `src="${assetPrefix}js/app.js"`);
  content = content.replace(/src="(?:\.\.\/|\/)?assets\/js\/terminal-engine\.js"/g, `src="${assetPrefix}js/terminal-engine.js"`);
  content = content.replace(/src="(?:\.\.\/|\/)?assets\/js\/cli-data\.js"/g, `src="${assetPrefix}js/cli-data.js"`);
  content = content.replace(/src="(?:\.\.\/|\/)?assets\/js\/html-data\.js"/g, `src="${assetPrefix}js/html-data.js"`);
  content = content.replace(/src="(?:\.\.\/|\/)?assets\/js\/course-data\.js"/g, `src="${assetPrefix}js/course-data.js"`);

  // Fix favicon/mascot
  content = content.replace(/href="(?:\.\.\/|\/)?(?:mascot\/)?logo\.svg"/g, `href="${assetPrefix}../logo.svg"`);

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✔ Normalized paths in: ${path.relative(ROOT, filePath)}`);
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
console.log('\n🎉 All HTML files paths normalized successfully!');
