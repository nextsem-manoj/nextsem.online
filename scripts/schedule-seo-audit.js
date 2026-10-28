/**
 * Nextsem Academy — 5-Minute Automated SEO & Monetization Scheduled Auditor
 * Author: Er. Manoj Kumar
 * Run via: node scripts/schedule-seo-audit.js
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const sitemapPath = path.join(rootDir, 'out', 'sitemap.xml');
const robotsPath = path.join(rootDir, 'out', 'robots.txt');
const searchIndexPath = path.join(rootDir, 'src', 'data', 'searchIndex.json');
const taskMdPath = path.join(rootDir, 'docs', 'roadmap', 'task.md');

console.log('\n================================================================');
console.log('⏱️  NEXTSEM ACADEMY — 5-MINUTE SCHEDULED SEO & PLATFORM AUDIT');
console.log(`🕒 Timestamp: ${new Date().toISOString()}`);
console.log('================================================================\n');

let passCount = 0;
let failCount = 0;

function check(label, condition, details = '') {
  if (condition) {
    console.log(`  ✅ [PASS] ${label} ${details ? '(' + details + ')' : ''}`);
    passCount++;
  } else {
    console.log(`  ❌ [FAIL] ${label} ${details ? '(' + details + ')' : ''}`);
    failCount++;
  }
}

// 1. Audit sitemap.xml
if (fs.existsSync(sitemapPath)) {
  const content = fs.readFileSync(sitemapPath, 'utf8').trim();
  check('sitemap.xml exists and is well-formed XML', content.startsWith('<?xml') && content.endsWith('</urlset>'));
  check('sitemap includes /school route', content.includes('https://nextsem.online/school'));
  check('sitemap includes /bca route', content.includes('https://nextsem.online/bca'));
  check('sitemap includes /bca/practical route', content.includes('https://nextsem.online/bca/practical'));
  check('sitemap includes /playground route', content.includes('https://nextsem.online/playground'));
  check('sitemap includes BCA Day 50 Capstone', content.includes('day-50-sprint-capstone-developer-studio-multi-tool-workspace-spa'));
} else {
  check('sitemap.xml exists', false, 'Run npm run build first');
}

// 2. Audit robots.txt
if (fs.existsSync(robotsPath)) {
  const robots = fs.readFileSync(robotsPath, 'utf8');
  check('robots.txt exists', true);
  check('robots.txt allows /playground for crawlers', !robots.includes('Disallow: /playground\n') && !robots.includes('Disallow: /playground\r\n'));
  check('robots.txt references sitemap.xml', robots.includes('https://nextsem.online/sitemap.xml'));
} else {
  check('robots.txt exists', false);
}

// 3. Audit Search Index
if (fs.existsSync(searchIndexPath)) {
  try {
    const searchItems = JSON.parse(fs.readFileSync(searchIndexPath, 'utf8'));
    check('searchIndex.json has lessons indexed', Array.isArray(searchItems) && searchItems.length >= 200, `${searchItems.length} items`);
  } catch (e) {
    check('searchIndex.json valid JSON', false, e.message);
  }
} else {
  check('searchIndex.json exists', false);
}

// 4. Audit Strategic Roadmap Task Tracking
if (fs.existsSync(taskMdPath)) {
  const taskMd = fs.readFileSync(taskMdPath, 'utf8');
  check('Milestone 3.3 (1-Click Project Export) marked completed', taskMd.includes('Milestone 3.3') && taskMd.includes('✅'));
  check('Monetization target matches ₹10 Lakh/month', taskMd.includes('₹10 LAKH'));
}

// 5. Audit Hero Page Quality, Introduction & Courses Directory
const heroPath = path.join(rootDir, 'src', 'components', 'SimpleHeroClient.tsx');
const pagePath = path.join(rootDir, 'src', 'app', 'page.tsx');

if (fs.existsSync(heroPath)) {
  const heroContent = fs.readFileSync(heroPath, 'utf8');
  check('Hero Component exists (SimpleHeroClient.tsx)', true);
  check('Hero contains Introduction to Nextsem Academy by Er. Manoj Kumar', heroContent.includes('Er. Manoj Kumar') && heroContent.includes('Nextsem Academy'));
  check('Hero includes Schooling Hub link (/school)', heroContent.includes('href="/school"'));
  check('Hero includes College Hub link (/bca)', heroContent.includes('href="/bca"'));
  check('Hero includes 50-Day Coding Lab link (/bca/practical)', heroContent.includes('href="/bca/practical"'));
  check('Hero includes Online Sandbox link (/playground)', heroContent.includes('href="/playground"'));
  check('Hero includes Web Dev Tracks link (/tracks or /html)', heroContent.includes('href="/html"') && heroContent.includes('href="/css"'));
  check('Hero includes Windows 11 CLI link (/cli)', heroContent.includes('href="/cli"'));
  check('Hero includes interactive Code & Preview Sandbox widget', heroContent.includes('activeCodeTab') && heroContent.includes('Run in Playground'));
  check('Hero complies with Emerald & White theme (#04AA6D)', heroContent.includes('#04AA6D'));
} else {
  check('Hero Component exists', false);
}

if (fs.existsSync(pagePath)) {
  const pageContent = fs.readFileSync(pagePath, 'utf8');
  check('Root page metadata contains Comprehensive Educational Continuum', pageContent.includes('Free Education from KG to 12th, BCA, B.Tech & Coding Labs'));
  check('Root page schema.org EducationalOrganization includes OfferCatalog courses', pageContent.includes('EducationalOrganization') && pageContent.includes('Course'));
}

console.log('\n----------------------------------------------------------------');
console.log(`📊 Audit Summary: ${passCount} Passed, ${failCount} Failed`);
console.log('🌐 Staging Target: https://nextsem-staging.web.app/playground/');
console.log('🎯 Ad Revenue Target: Rs. 10,00,000 / month (Google AdSense & AdMob)');
console.log('----------------------------------------------------------------\n');

process.exit(failCount === 0 ? 0 : 1);

