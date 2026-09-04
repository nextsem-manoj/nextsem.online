const http = require('http');
const fs = require('fs');
const path = require('path');

// 1. Core Hub & Legal
const coreHubRoutes = [
  '/',
  '/cli',
  '/html',
  '/css',
  '/course',
  '/curriculum',
  '/git',
  '/batch',
  '/cpp',
  '/visual-logic',
  '/playground',
  '/profile',
  '/about',
  '/contact',
  '/privacy',
  '/terms',
  '/full-stack-web-development-roadmap',
];

// 2. Standalone Animation Pages
const animationRoutes = [
  '/3d-cube-animation',
  '/animated-waves-animation',
  '/audio-spectrum-animation',
  '/black-hole-animation',
  '/candle-flame-animation',
  '/dna-helix-animation',
  '/glassmorphism-card-animation',
  '/glitch-text-animation',
  '/holographic-card-animation',
  '/liquid-wave-animation',
  '/logo-animation',
  '/logo-studio',
  '/matrix-code-animation',
  '/neon-button-animation',
  '/rain-effect-animation',
  '/solar-system-animation',
  '/warp-speed-animation',
];

// 3. Real Dynamic Subject Lessons (CLI, HTML, CSS)
const dynamicLessonRoutes = [
  // CLI
  '/cli/learn-windows-command-prompt-cmd-basics',
  '/cli/master-cd-command-windows-cli',
  '/cli/mkdir-md-create-directories-windows',
  '/cli/final-windows-cli-mastery-certification-exam',
  // HTML
  '/html/download-install-vscode-windows-11-setup-guide',
  '/html/html-document-structure-boilerplate-explanation',
  // CSS
  '/css/css-introduction-syntax-selectors',
  '/css/css-colors-rgb-hex-hsl-mastery'
];

const allRoutes = [
  ...coreHubRoutes.map(r => ({ route: r, category: 'Core Hub & Legal' })),
  ...animationRoutes.map(r => ({ route: r, category: 'Interactive Animation & Tool' })),
  ...dynamicLessonRoutes.map(r => ({ route: r, category: 'Subject Lesson Page' }))
];

function fetchSingleRoute(route) {
  return new Promise((resolve) => {
    const url = `http://localhost:3000${route.endsWith('/') ? route : route + '/'}`;
    const req = http.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(fetchSingleRoute(res.headers.location));
      }

      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const isError = res.statusCode >= 400;
        const isBlank = data.trim().length < 500;
        const hasNextError = data.includes('Application error') || data.includes('Internal Server Error');
        resolve({
          route,
          status: res.statusCode,
          sizeKb: (data.length / 1024).toFixed(1),
          isHealthy: res.statusCode === 200 && !isBlank && !hasNextError,
          statusNote: res.statusCode === 200 && !isBlank && !hasNextError ? 'Healthy (200 OK)' : `Failed (${res.statusCode})`
        });
      });
    });

    req.on('error', (err) => {
      resolve({
        route,
        status: 0,
        sizeKb: '0',
        isHealthy: false,
        statusNote: `Network Err: ${err.message}`
      });
    });

    req.setTimeout(15000, () => {
      req.destroy();
      resolve({
        route,
        status: 0,
        sizeKb: '0',
        isHealthy: false,
        statusNote: 'Timeout (15s)'
      });
    });
  });
}

async function runSequentialAudit() {
  console.log(`\n🔍 Scanning ${allRoutes.length} real platform routes across Next.js application...\n`);
  
  const results = [];
  for (let i = 0; i < allRoutes.length; i++) {
    const item = allRoutes[i];
    const res = await fetchSingleRoute(item.route);
    const combined = { ...item, ...res };
    results.push(combined);
    
    const icon = combined.isHealthy ? '✅' : '❌';
    console.log(`${icon} [${combined.category}] ${combined.route} -> ${combined.statusNote} (${combined.sizeKb} KB)`);
  }

  const healthy = results.filter(r => r.isHealthy);
  const broken = results.filter(r => !r.isHealthy);

  console.log(`\n======================================================`);
  console.log(`📊 NEXTSEM PLATFORM STATUS SUMMARY:`);
  console.log(`Total Pages Scanned: ${results.length}`);
  console.log(`✅ Fully Working Pages: ${healthy.length}`);
  console.log(`❌ Blank or Error Pages: ${broken.length}`);
  console.log(`======================================================\n`);

  fs.writeFileSync(path.join(__dirname, '../audit_report_full.json'), JSON.stringify({
    total: results.length,
    healthyCount: healthy.length,
    brokenCount: broken.length,
    brokenList: broken,
    healthyList: healthy
  }, null, 2));
}

runSequentialAudit();
