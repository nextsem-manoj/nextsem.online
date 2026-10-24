const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');

const admobRoadmapPath = fs.existsSync(path.join(root, 'docs', 'monetization', 'adsense_admob_approval_roadmap.md'))
  ? path.join(root, 'docs', 'monetization', 'adsense_admob_approval_roadmap.md')
  : path.join(root, 'docs', 'adsense_admob_approval_roadmap.md');
const taskRoadmapPath = path.join(root, 'docs', 'roadmap', 'task.md');

console.log('\n================================================================');
console.log('🚀 NEXTSEM ACADEMY — REDESIGNED MASTER DEVELOPER ROADMAP & STATUS');
console.log('================================================================\n');

if (fs.existsSync(taskRoadmapPath)) {
  const taskContent = fs.readFileSync(taskRoadmapPath, 'utf-8');
  const lines = taskContent.split('\n');
  lines.forEach((line) => {
    if (line.startsWith('## 📌')) {
      console.log('\n' + line.replace(/## /g, ''));
      console.log('----------------------------------------------------------------');
    } else if (line.startsWith('- `[x]`') || line.startsWith('- `[ ]`')) {
      console.log('  ' + line.replace(/`/g, ''));
    }
  });
  console.log('');
}

if (fs.existsSync(admobRoadmapPath)) {
  console.log('📌 GOOGLE ADSENSE & ADMOB APPROVAL STATUS:');
  console.log('----------------------------------------------------------------');
  const admobContent = fs.readFileSync(admobRoadmapPath, 'utf-8');
  const lines = admobContent.split('\n');
  lines.forEach((line) => {
    if (line.startsWith('- `[x]`') || line.startsWith('- `[ ]`')) {
      console.log('  ' + line.replace(/`/g, ''));
    }
  });
  console.log('');
}

console.log('💰 REVENUE & TEAM GOAL:');
console.log('----------------------------------------------------------------');
console.log('  🎯 Monthly Target: Rs. 65,000 / month (Team of 4 + Lead)');
console.log('  📍 Live Website: https://nextsem.online');
console.log('  📍 Verification File: https://nextsem.online/app-ads.txt');
console.log('  📸 Instagram: https://www.instagram.com/nextsemacademy/');
console.log('  🎥 YouTube Shorts: https://youtube.com/shorts/jfnopGGIogE');
console.log('');

console.log('================================================================');
console.log('👉 CURRENT ACTIVE TASK: Milestone 3.3 — Student Sandbox & Static Portfolio Publishing Backend');
console.log('================================================================\n');
