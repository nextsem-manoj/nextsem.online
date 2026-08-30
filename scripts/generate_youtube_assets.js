const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const PORT = 9890;
const BANNER_FILE = path.join(__dirname, '..', 'public', 'youtube_banner.png');
const AVATAR_FILE = path.join(__dirname, '..', 'public', 'youtube_profile_avatar.png');

const htmlContent = `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><title>Asset Generator</title></head>
<body style="background:#000;margin:0;">
  <canvas id="banner" width="2048" height="1152"></canvas>
  <canvas id="avatar" width="800" height="800"></canvas>

  <script>
    function roundRect(ctx, x, y, w, h, r) {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.closePath();
    }

    function drawWindowsLogo(ctx, x, y, size, color = '#ffffff') {
      const gap = size * 0.12;
      const s = (size - gap) / 2;
      ctx.fillStyle = color;
      ctx.fillRect(x, y, s, s);
      ctx.fillRect(x + s + gap, y, s, s);
      ctx.fillRect(x, y + s + gap, s, s);
      ctx.fillRect(x + s + gap, y + s + gap, s, s);
    }

    // ── 1. GENERATE YOUTUBE BANNER (2048 x 1152) ──
    const bCanvas = document.getElementById('banner');
    const bCtx = bCanvas.getContext('2d');

    // Background Gradient (Deep sleek black/navy)
    const bGrad = bCtx.createLinearGradient(0, 0, 2048, 1152);
    bGrad.addColorStop(0, '#04070d');
    bGrad.addColorStop(0.5, '#0b111d');
    bGrad.addColorStop(1, '#04060c');
    bCtx.fillStyle = bGrad;
    bCtx.fillRect(0, 0, 2048, 1152);

    // Subtle background grid across full banner
    bCtx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
    bCtx.lineWidth = 1;
    for (let x = 0; x < 2048; x += 48) {
      bCtx.beginPath(); bCtx.moveTo(x, 0); bCtx.lineTo(x, 1152); bCtx.stroke();
    }
    for (let y = 0; y < 1152; y += 48) {
      bCtx.beginPath(); bCtx.moveTo(0, y); bCtx.lineTo(2048, y); bCtx.stroke();
    }

    // Central Emerald Ambient Glow in YouTube Safe Area (Safe zone: Y: 407 to 745, Center Y: 576)
    const bGlow = bCtx.createRadialGradient(1024, 576, 50, 1024, 576, 600);
    bGlow.addColorStop(0, 'rgba(4, 170, 109, 0.2)');
    bGlow.addColorStop(1, 'transparent');
    bCtx.fillStyle = bGlow;
    bCtx.fillRect(0, 0, 2048, 1152);

    // ── SAFE ZONE CONTENT (X: 450 to 1600, Y: 430 to 720) ──
    // Monochromatic NS Logo Emblem Box (Left side of safe area)
    const emblemSize = 130;
    const emblemX = 520;
    const emblemY = 511;

    bCtx.fillStyle = '#080d1a';
    roundRect(bCtx, emblemX, emblemY, emblemSize, emblemSize, 28);
    bCtx.fill();

    bCtx.strokeStyle = '#04AA6D';
    bCtx.lineWidth = 4;
    roundRect(bCtx, emblemX, emblemY, emblemSize, emblemSize, 28);
    bCtx.stroke();

    // NS Monogram
    bCtx.fillStyle = '#04AA6D';
    bCtx.font = '900 68px Segoe UI, system-ui, sans-serif';
    bCtx.textAlign = 'center';
    bCtx.fillText('NS', emblemX + (emblemSize / 2), emblemY + 92);
    bCtx.textAlign = 'left';

    // Main Brand Typography
    bCtx.fillStyle = '#ffffff';
    bCtx.font = '900 64px Segoe UI, system-ui, sans-serif';
    bCtx.fillText('Nextsem', emblemX + emblemSize + 28, emblemY + 58);

    const nw = bCtx.measureText('Nextsem').width;
    bCtx.fillStyle = '#04AA6D';
    bCtx.fillText('.online', emblemX + emblemSize + 28 + nw, emblemY + 58);

    // Tagline / Subheading
    bCtx.fillStyle = '#ffffff';
    bCtx.font = 'bold 24px Segoe UI, system-ui, sans-serif';
    bCtx.fillText('Full Stack Web Developer Curriculum • 100% Free', emblemX + emblemSize + 30, emblemY + 98);

    // Feature Badges
    const badgeY = emblemY + 130;
    bCtx.font = 'bold 16px "Cascadia Code", Consolas, monospace';

    // Badge 1: Windows 11 CLI
    bCtx.fillStyle = '#141a29';
    roundRect(bCtx, emblemX + emblemSize + 30, badgeY, 190, 34, 17);
    bCtx.fill();
    bCtx.strokeStyle = '#04AA6D';
    bCtx.lineWidth = 1.5;
    roundRect(bCtx, emblemX + emblemSize + 30, badgeY, 190, 34, 17);
    bCtx.stroke();
    drawWindowsLogo(bCtx, emblemX + emblemSize + 44, badgeY + 10, 14, '#ffffff');
    bCtx.fillStyle = '#ffffff';
    bCtx.fillText('Windows 11 CLI', emblemX + emblemSize + 66, badgeY + 23);

    // Badge 2: Pure HTML5
    bCtx.fillStyle = '#141a29';
    roundRect(bCtx, emblemX + emblemSize + 232, badgeY, 150, 34, 17);
    bCtx.fill();
    bCtx.strokeStyle = '#04AA6D';
    bCtx.lineWidth = 1.5;
    roundRect(bCtx, emblemX + emblemSize + 232, badgeY, 150, 34, 17);
    bCtx.stroke();
    bCtx.fillStyle = '#04AA6D';
    bCtx.fillText('HTML5 & CSS3', emblemX + emblemSize + 248, badgeY + 23);

    // Badge 3: Free Interactive Lab
    bCtx.fillStyle = '#141a29';
    roundRect(bCtx, emblemX + emblemSize + 394, badgeY, 170, 34, 17);
    bCtx.fill();
    bCtx.strokeStyle = '#04AA6D';
    bCtx.lineWidth = 1.5;
    roundRect(bCtx, emblemX + emblemSize + 394, badgeY, 170, 34, 17);
    bCtx.stroke();
    bCtx.fillStyle = '#ffffff';
    bCtx.fillText('Interactive Lab', emblemX + emblemSize + 410, badgeY + 23);

    // ── 2. GENERATE YOUTUBE PROFILE PICTURE (800 x 800) ──
    const aCanvas = document.getElementById('avatar');
    const aCtx = aCanvas.getContext('2d');

    // Circular background or dark canvas
    aCtx.fillStyle = '#060a14';
    aCtx.fillRect(0, 0, 800, 800);

    // Ambient radial glow
    const aGlow = aCtx.createRadialGradient(400, 400, 50, 400, 400, 350);
    aGlow.addColorStop(0, 'rgba(4, 170, 109, 0.25)');
    aGlow.addColorStop(1, 'transparent');
    aCtx.fillStyle = aGlow;
    aCtx.fillRect(0, 0, 800, 800);

    // Centered Circular/Rounded Emblem
    const aBoxSize = 460;
    const aBoxX = (800 - aBoxSize) / 2;
    const aBoxY = (800 - aBoxSize) / 2;

    aCtx.fillStyle = '#090f1d';
    roundRect(aCtx, aBoxX, aBoxY, aBoxSize, aBoxSize, 110);
    aCtx.fill();

    aCtx.strokeStyle = '#04AA6D';
    aCtx.lineWidth = 14;
    roundRect(aCtx, aBoxX, aBoxY, aBoxSize, aBoxSize, 110);
    aCtx.stroke();

    // Bold "NS" Monogram
    aCtx.fillStyle = '#04AA6D';
    aCtx.font = '900 240px Segoe UI, system-ui, sans-serif';
    aCtx.textAlign = 'center';
    aCtx.fillText('NS', 400, 485);

    // Send rendered images to server
    async function uploadAll() {
      const bannerData = bCanvas.toDataURL('image/png');
      const avatarData = aCanvas.toDataURL('image/png');

      await fetch('/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bannerData, avatarData })
      });
      document.body.innerHTML = '<h1 style="color:white">Assets Generated!</h1>';
    }

    uploadAll();
  </script>
</body>
</html>`;

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(htmlContent);
  } else if (req.method === 'POST' && req.url === '/save') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      const data = JSON.parse(body);
      const bannerBuf = Buffer.from(data.bannerData.replace(/^data:image\/png;base64,/, ''), 'base64');
      const avatarBuf = Buffer.from(data.avatarData.replace(/^data:image\/png;base64,/, ''), 'base64');

      fs.writeFileSync(BANNER_FILE, bannerBuf);
      fs.writeFileSync(AVATAR_FILE, avatarBuf);
      console.log('SUCCESS: Banner saved to ' + BANNER_FILE + ' (' + bannerBuf.length + ' bytes)');
      console.log('SUCCESS: Avatar saved to ' + AVATAR_FILE + ' (' + avatarBuf.length + ' bytes)');

      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('OK');

      setTimeout(() => {
        server.close();
        process.exit(0);
      }, 500);
    });
  }
});

server.listen(PORT, () => {
  console.log('Asset generator server listening on port ' + PORT);

  const chromePath = fs.existsSync('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe')
    ? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
    : 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

  const args = [
    '--headless=new',
    '--disable-gpu',
    '--window-size=2100,1200',
    '--no-sandbox',
    'http://localhost:' + PORT + '/'
  ];

  spawn(chromePath, args, { stdio: 'ignore' });
});
