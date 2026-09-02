const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const PORT = 9876;
const OUTPUT_FILE = path.join(__dirname, '..', 'public', 'terminal_fast_track_demo.webm');

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Terminal Video Generator</title>
  <style>
    body { margin: 0; background: #000; display: flex; align-items: center; justify-content: center; height: 100vh; overflow: hidden; }
    canvas { width: 1920px; height: 1080px; }
  </style>
</head>
<body>
  <canvas id="c" width="1920" height="1080"></canvas>
  <script>
    const canvas = document.getElementById('c');
    const ctx = canvas.getContext('2d');

    // 60 FPS video capture stream
    const stream = canvas.captureStream(60);
    const recordedChunks = [];
    
    let mimeType = 'video/webm;codecs=vp9';
    if (!MediaRecorder.isTypeSupported(mimeType)) {
      mimeType = 'video/webm';
    }
    
    const recorder = new MediaRecorder(stream, { mimeType, videoBitsPerSecond: 7000000 });
    recorder.ondataavailable = (e) => {
      if (e.data && e.data.size > 0) recordedChunks.push(e.data);
    };
    recorder.onstop = async () => {
      const blob = new Blob(recordedChunks, { type: mimeType });
      const arrayBuffer = await blob.arrayBuffer();
      await fetch('/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/octet-stream' },
        body: arrayBuffer
      });
      document.body.innerHTML = '<h1>Video Saved Successfully!</h1>';
    };

    recorder.start();

    // Visual Script Data
    const lines = [
      { type: 'system', text: 'Microsoft Windows [Version 10.0.22631.3007]' },
      { type: 'system', text: '(c) Microsoft Corporation. All rights reserved.' },
      { type: 'empty' }
    ];

    let currentPrompt = 'C:\\\\Users\\\\Developer>';
    let currentTyping = '';
    let currentStepLabel = 'STEP 1: MAKE DIRECTORY (mkdir)';

    function draw() {
      // 1. Background studio canvas
      const bgGrad = ctx.createLinearGradient(0, 0, 1920, 1080);
      bgGrad.addColorStop(0, '#0a0d14');
      bgGrad.addColorStop(1, '#131722');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, 1920, 1080);

      // Subtle background grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 1;
      for (let x = 0; x < 1920; x += 40) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, 1080); ctx.stroke();
      }
      for (let y = 0; y < 1080; y += 40) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(1920, y); ctx.stroke();
      }

      // ── 2. MONOCHROMATIC NEXTSEM.ONLINE BRAND LOGO ──
      const logoX = 120;
      const logoY = 44;
      const logoSize = 64;

      // Monochromatic Logo Icon Box
      ctx.fillStyle = '#080d1a';
      roundRect(ctx, logoX, logoY, logoSize, logoSize, 16);
      ctx.fill();

      ctx.strokeStyle = '#04AA6D';
      ctx.lineWidth = 3;
      roundRect(ctx, logoX, logoY, logoSize, logoSize, 16);
      ctx.stroke();

      // Bold NS Monogram
      ctx.fillStyle = '#04AA6D';
      ctx.font = '900 32px Segoe UI, system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('NS', logoX + (logoSize / 2), logoY + 44);
      ctx.textAlign = 'left';

      // Nextsem.online Brand Typography
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 36px Segoe UI, system-ui, sans-serif';
      ctx.fillText('Nextsem', logoX + logoSize + 18, logoY + 36);

      const nextsemW = ctx.measureText('Nextsem').width;
      ctx.fillStyle = '#04AA6D';
      ctx.fillText('.online', logoX + logoSize + 18 + nextsemW, logoY + 36);

      // Subtitle / Lesson Focus
      ctx.fillStyle = '#94a3b8';
      ctx.font = '600 16px Segoe UI, system-ui, sans-serif';
      ctx.fillText('STAGE 0: 30-MINUTE WINDOWS 11 TERMINAL LAB', logoX + logoSize + 18, logoY + 60);

      // Top Right Category Badge
      const pillText = '⊞ Windows 11 Full Stack Fast-Track';
      ctx.font = 'bold 15px Segoe UI, system-ui, sans-serif';
      const pillW = ctx.measureText(pillText).width + 36;
      ctx.fillStyle = '#141824';
      roundRect(ctx, 1800 - pillW, 56, pillW, 40, 20);
      ctx.fill();
      ctx.strokeStyle = '#04AA6D';
      ctx.lineWidth = 1.5;
      roundRect(ctx, 1800 - pillW, 56, pillW, 40, 20);
      ctx.stroke();
      ctx.fillStyle = '#ffffff';
      ctx.fillText(pillText, 1800 - pillW + 18, 81);

      // ── 3. WINDOWS 11 TERMINAL BOX ──
      const termX = 120;
      const termY = 140;
      const termW = 1680;
      const termH = 840;

      // Drop Shadow
      ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
      ctx.shadowBlur = 35;
      ctx.shadowOffsetY = 20;
      ctx.fillStyle = '#0c0c0c';
      roundRect(ctx, termX, termY, termW, termH, 16);
      ctx.fill();
      ctx.shadowColor = 'transparent';

      // Outer Border
      ctx.strokeStyle = '#2d3345';
      ctx.lineWidth = 2;
      roundRect(ctx, termX, termY, termW, termH, 16);
      ctx.stroke();

      // Windows 11 Title Bar
      ctx.fillStyle = '#1e222d';
      roundRectTop(ctx, termX, termY, termW, 52, 16);
      ctx.fill();
      ctx.strokeStyle = '#2d3345';
      ctx.stroke();

      // Windows 11 Title text
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 18px "Cascadia Code", Consolas, monospace';
      ctx.fillText('⊞ Administrator: Windows 11 Command Prompt (cmd.exe)', termX + 24, termY + 33);

      // Active Step Pill on Title Bar
      ctx.fillStyle = '#04AA6D';
      ctx.font = 'bold 14px "Cascadia Code", Consolas, monospace';
      ctx.fillText('[ ' + currentStepLabel + ' ]', termX + 620, termY + 33);

      // Window controls (Minimize, Maximize, Close)
      ctx.fillStyle = '#ffffff';
      ctx.font = '16px Consolas, monospace';
      ctx.fillText('─   □   ✕', termX + termW - 120, termY + 33);

      // Terminal Screen Content
      ctx.font = '22px "Cascadia Code", Consolas, monospace';
      let textY = termY + 100;
      const textX = termX + 36;
      const lineHeight = 34;

      for (let i = 0; i < lines.length; i++) {
        const item = lines[i];
        if (item.type === 'system') {
          ctx.fillStyle = '#94a3b8';
          ctx.fillText(item.text, textX, textY);
        } else if (item.type === 'cmd') {
          ctx.fillStyle = '#cbd5e1';
          ctx.fillText(item.prompt, textX, textY);
          const promptWidth = ctx.measureText(item.prompt).width;
          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 22px "Cascadia Code", Consolas, monospace';
          ctx.fillText(item.text, textX + promptWidth + 8, textY);
          ctx.font = '22px "Cascadia Code", Consolas, monospace';
        } else if (item.type === 'output') {
          ctx.fillStyle = '#10b981';
          ctx.fillText(item.text, textX, textY);
        } else if (item.type === 'info') {
          ctx.fillStyle = '#38bdf8';
          ctx.fillText(item.text, textX, textY);
        } else if (item.type === 'success') {
          ctx.fillStyle = '#04AA6D';
          ctx.font = 'bold 24px "Cascadia Code", Consolas, monospace';
          ctx.fillText(item.text, textX, textY);
          ctx.font = '22px "Cascadia Code", Consolas, monospace';
        }
        textY += lineHeight;
      }

      // Live typing prompt
      if (currentPrompt) {
        ctx.fillStyle = '#cbd5e1';
        ctx.fillText(currentPrompt, textX, textY);
        const promptWidth = ctx.measureText(currentPrompt).width;
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 22px "Cascadia Code", Consolas, monospace';
        ctx.fillText(currentTyping, textX + promptWidth + 8, textY);

        // Blinking green cursor
        const typingWidth = ctx.measureText(currentTyping).width;
        if (Math.floor(Date.now() / 400) % 2 === 0) {
          ctx.fillStyle = '#04AA6D';
          ctx.fillRect(textX + promptWidth + typingWidth + 10, textY - 20, 12, 24);
        }
      }

      // ── 4. BOTTOM MONOCHROMATIC WATERMARK ──
      ctx.fillStyle = '#64748b';
      ctx.font = '500 15px Segoe UI, system-ui, sans-serif';
      ctx.fillText('nextsem.online • Complete Free Developer Curriculum (Stage 0 to Stage 7)', 120, 1020);

      ctx.fillStyle = '#04AA6D';
      ctx.font = 'bold 15px Segoe UI, system-ui, sans-serif';
      ctx.textAlign = 'right';
      ctx.fillText('Learn Free » https://nextsem.online', 1800, 1020);
      ctx.textAlign = 'left';
    }

    function roundRect(ctx, x, y, w, h, r) {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.closePath();
    }

    function roundRectTop(ctx, x, y, w, h, r) {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.lineTo(x + w, y + h);
      ctx.lineTo(x, y + h);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.closePath();
    }

    // Animation Loop
    function renderLoop() {
      draw();
      requestAnimationFrame(renderLoop);
    }
    renderLoop();

    const sleep = (ms) => new Promise(r => setTimeout(r, ms));

    async function typeCommand(cmd) {
      for (let i = 1; i <= cmd.length; i++) {
        currentTyping = cmd.slice(0, i);
        await sleep(75);
      }
      await sleep(400);
      lines.push({ type: 'cmd', prompt: currentPrompt, text: cmd });
      currentTyping = '';
    }

    async function runScript() {
      await sleep(1000);

      // STEP 1: mkdir
      currentStepLabel = 'STEP 1 of 5: CREATE WORKSPACE (mkdir)';
      await typeCommand('mkdir my-portfolio');
      await sleep(250);
      lines.push({ type: 'info', text: 'Directory created: C:\\\\Users\\\\Developer\\\\my-portfolio' });
      lines.push({ type: 'empty' });
      await sleep(1200);

      // STEP 2: cd
      currentStepLabel = 'STEP 2 of 5: NAVIGATE INTO FOLDER (cd)';
      await typeCommand('cd my-portfolio');
      currentPrompt = 'C:\\\\Users\\\\Developer\\\\my-portfolio>';
      await sleep(250);
      lines.push({ type: 'empty' });
      await sleep(1200);

      // STEP 3: dir
      currentStepLabel = 'STEP 3 of 5: INSPECT CONTENTS (dir)';
      await typeCommand('dir');
      await sleep(300);
      lines.push({ type: 'output', text: ' Directory of C:\\\\Users\\\\Developer\\\\my-portfolio' });
      lines.push({ type: 'output', text: '28-08-2026  10:00 AM    <DIR>          .' });
      lines.push({ type: 'output', text: '28-08-2026  10:00 AM    <DIR>          ..' });
      lines.push({ type: 'output', text: '               0 File(s)              0 bytes' });
      lines.push({ type: 'output', text: '               2 Dir(s)  128,450,224,000 bytes free' });
      lines.push({ type: 'empty' });
      await sleep(1500);

      // STEP 4: cls
      currentStepLabel = 'STEP 4 of 5: WIPE TERMINAL SCREEN (cls)';
      await typeCommand('cls');
      await sleep(400);
      lines.length = 0;
      lines.push({ type: 'system', text: 'Microsoft Windows [Version 10.0.22631.3007]' });
      lines.push({ type: 'system', text: 'Screen Cleared Successfully.' });
      lines.push({ type: 'empty' });
      await sleep(1200);

      // STEP 5: code .
      currentStepLabel = 'STEP 5 of 5: LAUNCH VS CODE (code .)';
      await typeCommand('code .');
      await sleep(400);
      lines.push({ type: 'info', text: '[VS Code] Launching Visual Studio Code in current directory...' });
      lines.push({ type: 'info', text: 'Workspace loaded: my-portfolio' });
      lines.push({ type: 'empty' });
      await sleep(800);

      // CELEBRATION
      currentStepLabel = '🏆 CONQUERED: 5 SACRED COMMANDS MASTERED!';
      lines.push({ type: 'success', text: '========================================================' });
      lines.push({ type: 'success', text: '✓ 5 Sacred Commands Mastered (mkdir, cd, dir, cls, code)' });
      lines.push({ type: 'success', text: '✓ Ready to write HTML, CSS, and JavaScript in VS Code!' });
      lines.push({ type: 'success', text: '========================================================' });
      currentPrompt = '';

      await sleep(3000);
      recorder.stop();
    }

    runScript();
  </script>
</body>
</html>`;

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(htmlContent);
  } else if (req.method === 'POST' && req.url === '/upload') {
    const chunks = [];
    req.on('data', chunk => chunks.push(chunk));
    req.on('end', () => {
      const buffer = Buffer.concat(chunks);
      fs.writeFileSync(OUTPUT_FILE, buffer);
      console.log('SUCCESS: Video saved to ' + OUTPUT_FILE + ' (' + buffer.length + ' bytes)');
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
  console.log('Video generator server listening on port ' + PORT);

  const chromePath = fs.existsSync('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe')
    ? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
    : 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

  console.log('Launching headless browser:', chromePath);

  const args = [
    '--headless=new',
    '--disable-gpu',
    '--window-size=1920,1080',
    '--use-fake-ui-for-media-stream',
    '--autoplay-policy=no-user-gesture-required',
    '--no-sandbox',
    `http://localhost:${PORT}/`
  ];

  const child = spawn(chromePath, args, { stdio: 'ignore' });
  child.on('error', err => {
    console.error('Failed to launch browser:', err);
    server.close();
    process.exit(1);
  });
});
