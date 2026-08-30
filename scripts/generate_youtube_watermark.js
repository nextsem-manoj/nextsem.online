const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const PORT = 9892;
const WATERMARK_FILE = path.join(__dirname, '..', 'public', 'youtube_watermark.png');

const htmlContent = `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="background:transparent;margin:0;">
  <canvas id="c" width="150" height="150"></canvas>
  <script>
    function roundRect(ctx, x, y, w, h, r) {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y + x, y, r);
      ctx.closePath();
    }

    const canvas = document.getElementById('c');
    const ctx = canvas.getContext('2d');

    // Transparent / sleek dark square
    ctx.clearRect(0, 0, 150, 150);

    // Box
    ctx.fillStyle = '#080d1a';
    ctx.beginPath();
    ctx.roundRect(8, 8, 134, 134, 28);
    ctx.fill();

    ctx.strokeStyle = '#04AA6D';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.roundRect(8, 8, 134, 134, 28);
    ctx.stroke();

    // NS Monogram
    ctx.fillStyle = '#04AA6D';
    ctx.font = '900 60px Segoe UI, system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('NS', 75, 78);

    // Subtitle "NEXTSEM"
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 16px Segoe UI, system-ui, sans-serif';
    ctx.fillText('NEXTSEM', 75, 106);

    ctx.fillStyle = '#04AA6D';
    ctx.font = 'bold 11px Segoe UI, system-ui, sans-serif';
    ctx.fillText('.ONLINE', 75, 124);

    const data = canvas.toDataURL('image/png');
    fetch('/save', {
      method: 'POST',
      body: data
    });
  </script>
</body>
</html>`;

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(htmlContent);
  } else if (req.method === 'POST') {
    let body = '';
    req.on('data', c => body += c);
    req.on('end', () => {
      const buf = Buffer.from(body.replace(/^data:image\/png;base64,/, ''), 'base64');
      fs.writeFileSync(WATERMARK_FILE, buf);
      console.log('SUCCESS: Watermark saved to ' + WATERMARK_FILE);
      res.end('OK');
      setTimeout(() => {
        server.close();
        process.exit(0);
      }, 500);
    });
  }
});

server.listen(PORT, () => {
  const chromePath = fs.existsSync('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe')
    ? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
    : 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

  spawn(chromePath, ['--headless=new', 'http://localhost:' + PORT + '/'], { stdio: 'ignore' });
});
