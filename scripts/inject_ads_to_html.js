const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '../test_website');
const SUBDIRS = ['cli', 'html', 'course', 'batch', 'git', 'cpp', 'visual-logic'];

function fixFile(filePath) {
  const isSubdir = SUBDIRS.some(dir => filePath.includes(path.sep + dir + path.sep));
  const assetPrefix = isSubdir ? '../assets/' : 'assets/';

  let content = fs.readFileSync(filePath, 'utf8');

  // Ensure Google AdSense meta tag in <head>
  if (!content.includes('google-adsense-account')) {
    content = content.replace(
      '</head>',
      `  <meta name="google-adsense-account" content="ca-pub-5947565211927754" />\n</head>`
    );
  }

  // Ensure ads.js script is included
  if (!content.includes('ads.js')) {
    content = content.replace(
      '</body>',
      `  <script src="${assetPrefix}js/ads.js"></script>\n</body>`
    );
  }

  // Ensure CSS and standard scripts
  content = content.replace(/href="(?:\.\.\/|\/)?assets\/css\/style\.css"/g, `href="${assetPrefix}css/style.css"`);
  content = content.replace(/src="(?:\.\.\/|\/)?assets\/js\/header\.js"/g, `src="${assetPrefix}js/header.js"`);
  content = content.replace(/src="(?:\.\.\/|\/)?assets\/js\/footer\.js"/g, `src="${assetPrefix}js/footer.js"`);
  content = content.replace(/src="(?:\.\.\/|\/)?assets\/js\/app\.js"/g, `src="${assetPrefix}js/app.js"`);
  content = content.replace(/src="(?:\.\.\/|\/)?assets\/js\/ads\.js"/g, `src="${assetPrefix}js/ads.js"`);

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✔ AdSense & AdMob injected into: ${path.relative(ROOT, filePath)}`);
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
console.log('\n🎉 AdSense & AdMob integration complete on all pages!');
