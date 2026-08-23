const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');

const admobRoadmapPath = fs.existsSync(path.join(root, 'docs', 'monetization', 'adsense_admob_approval_roadmap.md'))
  ? path.join(root, 'docs', 'monetization', 'adsense_admob_approval_roadmap.md')
  : path.join(root, 'docs', 'adsense_admob_approval_roadmap.md');
const taskRoadmapPath = path.join(root, 'docs', 'roadmap', 'task.md');
const teamPlanningPath = path.join(root, 'docs', 'roadmap', 'roadmap_nextsem.online', 'roadmap.md');

console.log('\n================================================================');
console.log('🚀 NEXTSEM ACADEMY — PROJECT STATUS & TASK ROADMAP DASHBOARD');
console.log('================================================================\n');

if (fs.existsSync(admobRoadmapPath)) {
  console.log('📌 ADSENSE & ADMOB APPROVAL STATUS:');
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

if (fs.existsSync(taskRoadmapPath)) {
  console.log('📅 10-DAY GAMIFIED DEVELOPER ROADMAP:');
  console.log('----------------------------------------------------------------');
  const taskContent = fs.readFileSync(taskRoadmapPath, 'utf-8');
  const lines = taskContent.split('\n');
  lines.forEach((line) => {
    if (line.startsWith('- `[x]`') || line.startsWith('- `[ ]`')) {
      console.log('  ' + line.replace(/`/g, ''));
    }
  });
  console.log('');
}

if (fs.existsSync(teamPlanningPath)) {
  console.log('💰 REVENUE & TEAM GOAL:');
  console.log('----------------------------------------------------------------');
  console.log('  🎯 Monthly Target: Rs. 65,000 / month (Team of 4 + Lead)');
  console.log('  📍 Live Website: https://nextsem.online');
  console.log('  📍 Verification File: https://nextsem.online/app-ads.txt');
  console.log('');
}

console.log('================================================================');
console.log('👉 NEXT CURRENT TASK: Day 9 — AI Compiler Sage CLI Hint Generator');
console.log('================================================================\n');
