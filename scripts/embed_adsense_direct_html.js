const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '../test_website');

// Target HTML pages (excluding utility/compliance pages per policy)
const TARGET_FILES = [
  'index.html',
  'curriculum.html',
  'cli/index.html',
  'cli/lesson.html',
  'html/index.html',
  'html/lesson.html',
  'course/index.html',
  'course/lesson.html',
  'batch/index.html',
  'git/index.html',
  'cpp/index.html',
  'visual-logic/index.html'
];

function generateTopAdHtml() {
  return `
  <!-- ========================================================================= -->
  <!-- 📢 GOOGLE ADSENSE TOP HEADER BANNER (ca-pub-5947565211927754)             -->
  <!-- ========================================================================= -->
  <div class="container" style="margin-top: 1rem; margin-bottom: 1.5rem;">
    <div class="ad-slot-card">
      <div class="ad-label">
        <span>📢 Sponsored Developer Track</span>
        <span>Google AdSense • pub-5947565211927754</span>
      </div>
      <div class="ad-creative" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
        <div style="text-align: left;">
          <div class="ad-badge-google">Ads by Google</div>
          <div style="font-size: 1.05rem; font-weight: 800; color: #ffffff;">
            🚀 Master Full Stack Cloud Architecture & Microservices
          </div>
          <div style="font-size: 0.8rem; color: #94a3b8; margin-top: 0.2rem;">
            Real-world backend scaling, containerization, and enterprise certifications.
          </div>
        </div>
        <a href="https://nextsem.online/curriculum.html" target="_blank" class="btn btn-primary btn-sm" style="text-decoration: none;">
          Explore Sponsor &rarr;
        </a>
      </div>
      <ins class="adsbygoogle"
           style="display:block; margin-top: 0.5rem;"
           data-ad-client="ca-pub-5947565211927754"
           data-ad-slot="4565552616"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    </div>
  </div>
`;
}

function generateBottomAdHtml() {
  return `
  <!-- ========================================================================= -->
  <!-- 📢 GOOGLE ADSENSE BOTTOM LEADERBOARD BANNER (ca-pub-5947565211927754)     -->
  <!-- ========================================================================= -->
  <div class="container" style="margin-top: 2rem; margin-bottom: 2rem;">
    <div class="ad-slot-card">
      <div class="ad-label">
        <span>📢 Sponsored Developer Tools</span>
        <span>Google AdSense • Responsive Bottom Unit</span>
      </div>
      <div class="ad-creative" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
        <div style="text-align: left;">
          <div class="ad-badge-google">Ads by Google</div>
          <div style="font-size: 1rem; font-weight: 800; color: #ffffff;">
            ⚡ Ultra-Fast Static & Cloud Hosting Platform
          </div>
          <div style="font-size: 0.8rem; color: #94a3b8; margin-top: 0.2rem;">
            Deploy your apps instantly with global CDN edge network and SSL protection.
          </div>
        </div>
        <a href="https://nextsem.online/curriculum.html" target="_blank" class="btn btn-primary btn-sm" style="text-decoration: none;">
          Learn More &rarr;
        </a>
      </div>
      <ins class="adsbygoogle"
           style="display:block; margin-top: 0.5rem;"
           data-ad-client="ca-pub-5947565211927754"
           data-ad-slot="4565552616"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    </div>
  </div>
`;
}

TARGET_FILES.forEach(relPath => {
  const filePath = path.join(ROOT, relPath);
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');

  // Replace any old onclick alert buttons
  content = content.replace(/<button class="btn btn-primary btn-sm" onclick="alert\([^)]+\)">[\s\S]*?<\/button>/g, `<a href="https://nextsem.online/curriculum.html" target="_blank" class="btn btn-primary btn-sm" style="text-decoration: none;">Explore Sponsor &rarr;</a>`);

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✔ Replaced alert popups in: ${relPath}`);
});

console.log('\n🎉 Direct HTML Ad Placement Cleaned (Zero alert popups)!');
