const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

// Parse CLI arguments
const args = process.argv.slice(2);
const trackArg = args.find(a => a.startsWith('--track=')) || '--track=html';
const lessonIdArg = args.find(a => a.startsWith('--id=')) || '--id=1';

const track = trackArg.split('=')[1].toLowerCase();
const lessonId = parseInt(lessonIdArg.split('=')[1], 10);

console.log(`🎬 Initializing Nextsem Reel Generator: [Track: ${track.toUpperCase()}, Lesson ID: ${lessonId}]`);

// 1. Load Lesson Data (Streamlined & Reduced for Viral Reels)
let lessonData = null;

if (track === 'html') {
  // Read and parse htmlLessonsData.ts
  const htmlFile = fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'htmlLessonsData.ts'), 'utf8');
  
  // Custom regex extraction for robust parsing
  const regex = new RegExp(`id:\\s*${lessonId},\\s*\\n\\s*slug:\\s*"([^"]+)",\\s*\\n\\s*title:\\s*"([^"]+)"`);
  const match = htmlFile.match(regex);
  
  if (match) {
    lessonData = {
      id: lessonId,
      slug: match[1],
      title: 'What <!DOCTYPE html> REALLY Does! 🔥',
      track: 'HTML5 Web Development',
      badge: `DAY ${lessonId} OF 100 • HTML MASTERCLASS`,
      hook: `Master HTML5 in 20 seconds! ⚡`,
      points: [
        'Tells browser: "Use modern HTML5 standards"',
        'Without it, browsers use Buggy Quirks Mode',
        'Must always be Line 1 of every single file'
      ],
      code: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>Nextsem Academy</title>\n</head>\n<body>\n  <h1>Hello Developer! 🚀</h1>\n</body>\n</html>`,
      terminalTitle: 'index.html — Visual Studio Code',
      tip: 'Practice free on nextsem.online'
    };
  }
} else if (track === 'cli') {
  // Viral Windows 11 Terminal Lesson
  lessonData = {
    id: lessonId,
    slug: 'learn-windows-command-prompt-cmd-basics',
    title: 'Windows CMD Secrets 👀🔥',
    track: 'Windows 11 CLI & Terminal',
    badge: `DAY ${lessonId} OF 100 • ⊞ WINDOWS 11 TERMINAL`,
    hook: `Stop using boring commands! Try these:`,
    points: [
      'netsh wlan — Reveals saved Wi-Fi passwords',
      'curl wttr.in — Live ASCII weather in terminal',
      'systeminfo — Instant CPU & RAM hardware specs'
    ],
    code: `C:\\Users\\Developer> netsh wlan show profile name="5G" key=clear\n    Key Content : SuperSecretPass2026!\nC:\\Users\\Developer> curl wttr.in\nWeather report: London, UK ⛅ +18°C\nC:\\Users\\Developer> code .`,
    terminalTitle: 'Command Prompt — cmd.exe (Administrator)',
    tip: 'Practice free on nextsem.online/cli'
  };
}

if (!lessonData) {
  // Fallback demo data
  lessonData = {
    id: lessonId,
    slug: 'learn-html-doctype-declaration-basics',
    title: 'What <!DOCTYPE html> REALLY Does! 🔥',
    track: 'HTML5 Web Development',
    badge: `DAY ${lessonId} OF 100 • HTML MASTERCLASS`,
    hook: `Master HTML5 in 20 seconds! ⚡`,
    points: [
      'Tells browser: "Use modern HTML5 standards"',
      'Without it, browsers use Buggy Quirks Mode',
      'Must always be Line 1 of every single file'
    ],
    code: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>Nextsem Masterclass</title>\n</head>\n<body>\n  <h1>Hello Developer! 🚀</h1>\n</body>\n</html>`,
    terminalTitle: 'index.html — Visual Studio Code',
    tip: 'Practice free on nextsem.online'
  };
}

// Prepare output directory
const REELS_DIR = path.join(__dirname, '..', 'public', 'reels');
if (!fs.existsSync(REELS_DIR)) {
  fs.mkdirSync(REELS_DIR, { recursive: true });
}

const OUTPUT_MP4 = path.join(REELS_DIR, `${track}_day_${String(lessonId).padStart(3, '0')}.mp4`);
const OUTPUT_WEBM = path.join(REELS_DIR, `${track}_day_${String(lessonId).padStart(3, '0')}.webm`);
const METADATA_JSON = path.join(REELS_DIR, `${track}_day_${String(lessonId).padStart(3, '0')}_metadata.json`);

// 2. Generate YouTube & Instagram Metadata (Exact Viral Engagement Copy)
const metadata = {
  title: track === 'cli'
    ? `Day ${lessonId}/100: Everyone Thinks Windows CMD is Dead... Until This! 👀🔥 #Shorts #Windows11`
    : `Day ${lessonId}/100: What <!DOCTYPE html> REALLY Does! 🚀 #Shorts #WebDev`,
  description: track === 'cli'
    ? `Everyone thinks Windows Command Prompt is dead until they see what real developers actually use it for 👀🔥\n\n` +
      `Key Commands:\n${lessonData.points.map(p => `• ${p}`).join('\n')}\n\n` +
      `👉 Practice 100+ interactive Windows terminal commands free at: https://nextsem.online/cli\n\n` +
      `#webdevelopment #fullstack #windows11 #coding #programming #developer #cmd #terminal #nextsemacademy #100DaysOfCode`
    : `Master Full Stack Web Development step-by-step with Nextsem Academy!\n\n` +
      `Today's Drill: ${lessonData.title}\n\n` +
      `3 Key Takeaways:\n${lessonData.points.map(p => `• ${p}`).join('\n')}\n\n` +
      `👉 Practice full hands-on coding free at: https://nextsem.online\n` +
      `👉 Follow @nextsemacademy for daily 60-second coding drills!\n\n` +
      `#Shorts #HTML #HTML5 #Coding #WebDevelopment #Programming #LearnToCode #Developer #TechReels #NextsemAcademy`,
  tags: track === 'cli'
    ? ['Shorts', 'Windows 11', 'Command Prompt', 'Coding', 'Programming', 'Nextsem Academy', 'Tech Tips', 'Web Development', 'Terminal Tricks']
    : ['Shorts', 'HTML5', 'Web Development', 'Coding', 'Programming', 'Nextsem Academy', '100 Days of Code', 'Learn Web Development']
};

fs.writeFileSync(METADATA_JSON, JSON.stringify(metadata, null, 2));

const PORT = 9896;

// 3. Build HTML5 Canvas 60 FPS Render Page with Strict Safe Zones
const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Nextsem Reel Generator (1080x1920)</title>
  <style>
    body { margin: 0; background: #000000; display: flex; align-items: center; justify-content: center; height: 100vh; overflow: hidden; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
    canvas { width: 450px; height: 800px; box-shadow: 0 0 50px rgba(4, 170, 109, 0.3); }
  </style>
</head>
<body>
  <canvas id="c" width="1080" height="1920"></canvas>
  <audio id="bgAudio" src="/audio" loop preload="auto" playsinline></audio>
  <script id="lessonData" type="application/json">${JSON.stringify(lessonData).replace(/<\/script/gi, '<\\/script')}</script>
  <script>
    window.onerror = function(msg, url, line) {
      fetch('/log?err=' + encodeURIComponent(msg + ' at line ' + line));
    };
    window.addEventListener('unhandledrejection', function(e) {
      fetch('/log?err=' + encodeURIComponent('Unhandled: ' + (e.reason ? (e.reason.message || e.reason) : 'unknown')));
    });

    fetch('/log?msg=PAGE_LOADED');

    const canvas = document.getElementById('c');
    const ctx = canvas.getContext('2d');
    const bgAudio = document.getElementById('bgAudio');

    // Web Audio Synthesizer for SFX & Music Mixer
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const audioDest = audioCtx.createMediaStreamDestination();
    const masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(0.85, audioCtx.currentTime);
    masterGain.connect(audioDest);

    // Connect Background Beat
    let bgGain = audioCtx.createGain();
    bgGain.gain.setValueAtTime(0.40, audioCtx.currentTime); // Balanced music volume
    bgGain.connect(audioDest);

    try {
      const audioSource = audioCtx.createMediaElementSource(bgAudio);
      audioSource.connect(bgGain);
      bgAudio.play().catch(e => console.log('Audio autoplay error:', e));
    } catch (e) {
      console.log('MediaElementSource error:', e);
    }

    function playKeyClick() {
      try {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        const t = audioCtx.currentTime;
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(800 + Math.random() * 400, t);
        gain.gain.setValueAtTime(0.18, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.035);
        osc.connect(gain);
        gain.connect(masterGain);
        osc.start(t);
        osc.stop(t + 0.04);
      } catch (e) {}
    }

    function playPopSound() {
      try {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        const t = audioCtx.currentTime;
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, t);
        osc.frequency.exponentialRampToValueAtTime(880, t + 0.08);
        gain.gain.setValueAtTime(0.25, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.1);
        osc.connect(gain);
        gain.connect(masterGain);
        osc.start(t);
        osc.stop(t + 0.11);
      } catch (e) {}
    }

    function playSuccessChime() {
      try {
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, i) => {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          const t = audioCtx.currentTime + i * 0.07;
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, t);
          gain.gain.setValueAtTime(0.2, t);
          gain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
          osc.connect(gain);
          gain.connect(masterGain);
          osc.start(t);
          osc.stop(t + 0.28);
        });
      } catch (e) {}
    }

    // MediaRecorder Stream Setup (Combines 60 FPS Video + Web Audio)
    const videoStream = canvas.captureStream(60);
    const combinedTracks = [
      ...videoStream.getVideoTracks(),
      ...audioDest.stream.getAudioTracks()
    ];
    const combinedStream = new MediaStream(combinedTracks);

    let mimeType = 'video/webm;codecs=vp9,opus';
    if (!MediaRecorder.isTypeSupported(mimeType)) {
      mimeType = 'video/webm';
    }

    const recordedChunks = [];
    const recorder = new MediaRecorder(combinedStream, { mimeType, videoBitsPerSecond: 8000000 });

    recorder.ondataavailable = e => {
      if (e.data && e.data.size > 0) recordedChunks.push(e.data);
    };

    recorder.onstop = async () => {
      fetch('/log?msg=RECORDER_STOPPED_UPLOADING');
      const blob = new Blob(recordedChunks, { type: mimeType });
      const buffer = await blob.arrayBuffer();
      await fetch('/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/octet-stream' },
        body: buffer
      });
      document.body.innerHTML = '<h1 style="color:#04AA6D;">Reel Rendered & Saved Successfully!</h1>';
    };

    const data = JSON.parse(document.getElementById('lessonData').textContent);
    recorder.start();

    // Total Duration: 16 seconds (960 frames)
    const TOTAL_FRAMES = 60 * 16;
    let frame = 0;

    let pointsVisible = 0;
    let codeCharsRevealed = 0;

    // Helper: Wrap text cleanly within max width
    function drawWrappedText(text, x, y, maxWidth, lineHeight, font, color, align = 'center') {
      ctx.font = font;
      ctx.fillStyle = color;
      ctx.textAlign = align;
      const words = text.split(' ');
      let line = '';
      const lines = [];
      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && n > 0) {
          lines.push(line.trim());
          line = words[n] + ' ';
        } else {
          line = testLine;
        }
      }
      lines.push(line.trim());
      const startY = y - ((lines.length - 1) * lineHeight / 2);
      lines.forEach((l, idx) => {
        ctx.fillText(l, x, startY + (idx * lineHeight));
      });
      return lines.length;
    }

    function render() {
      frame++;
      const progress = frame / TOTAL_FRAMES;

      // ── 1. BACKGROUND ──
      ctx.fillStyle = '#17181c';
      ctx.fillRect(0, 0, 1080, 1920);

      // Glowing subtle emerald background radial centered in middle safe area
      const bgGrad = ctx.createRadialGradient(540, 700, 50, 540, 700, 750);
      bgGrad.addColorStop(0, 'rgba(4, 170, 109, 0.14)');
      bgGrad.addColorStop(1, 'rgba(23, 24, 28, 0)');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, 1080, 1920);

      // ── 2. TOP PROGRESS BAR (Crucial for Retention) ──
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.fillRect(0, 0, 1080, 14);
      ctx.fillStyle = '#04AA6D';
      ctx.fillRect(0, 0, 1080 * progress, 14);

      // ═══════════════════════════════════════════════════════════════
      // SAFE ZONE BOUNDARIES:
      // Width: 800px (Centered: x = 140 to 940, leaving 140px margins)
      // Height: y = 200 to y = 1420 (Leaves 500px at bottom for UI)
      // ═══════════════════════════════════════════════════════════════
      const SAFE_X = 140;
      const SAFE_W = 800;

      // ── 3. HEADER & BRANDING (Inside Safe Zone: y = 210 to 280) ──
      // Monochromatic Logo Emblem
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(SAFE_X + 40, 240, 34, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#17181c';
      ctx.font = '900 28px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('NS', SAFE_X + 40, 250);

      // Brand Title
      ctx.textAlign = 'left';
      ctx.fillStyle = '#ffffff';
      ctx.font = '900 36px sans-serif';
      ctx.fillText('NEXTSEM ACADEMY', SAFE_X + 90, 238);

      ctx.fillStyle = '#04AA6D';
      ctx.font = '700 20px monospace';
      ctx.fillText('nextsem.online • Free Web Engineering', SAFE_X + 90, 266);

      // Series Pill Badge (y = 300 to 354)
      ctx.fillStyle = 'rgba(4, 170, 109, 0.18)';
      ctx.strokeStyle = '#04AA6D';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.roundRect(SAFE_X, 300, SAFE_W, 54, 27);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#04AA6D';
      ctx.font = '900 24px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(data.badge, 540, 335);

      // ── 4. HOOK TITLE (y = 380 to 455) ──
      drawWrappedText(data.title, 540, 400, 760, 52, '900 46px sans-serif', '#ffffff', 'center');

      ctx.fillStyle = '#94a3b8';
      ctx.font = '600 26px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(data.hook, 540, 455);

      // ── 5. THREE CONCISE POINTS ONLY (Reduced Content, Clean & Readable) ──
      // Pop in sequentially at 0.75s, 1.75s, 2.75s
      const startPointFrame = 45;
      const pointInterval = 55;
      const pointsToDisplay = data.points.slice(0, 3); // Strictly 3 points

      for (let i = 0; i < pointsToDisplay.length; i++) {
        const appearFrame = startPointFrame + (i * pointInterval);
        if (frame >= appearFrame) {
          if (pointsVisible <= i) {
            pointsVisible = i + 1;
            playPopSound();
          }

          const yPos = 495 + (i * 105);
          
          // Card Box (Centered in Safe Zone: 800px wide)
          ctx.fillStyle = 'rgba(30, 32, 40, 0.95)';
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.roundRect(SAFE_X, yPos, SAFE_W, 88, 18);
          ctx.fill();
          ctx.stroke();

          // Green Number Pill
          ctx.fillStyle = '#04AA6D';
          ctx.beginPath();
          ctx.arc(SAFE_X + 50, yPos + 44, 24, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = '#ffffff';
          ctx.font = '900 24px sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(String(i + 1), SAFE_X + 50, yPos + 53);

          // Point Text (Large, Clean, 100% Unclipped)
          ctx.textAlign = 'left';
          ctx.fillStyle = '#ffffff';
          ctx.font = '700 26px sans-serif';
          ctx.fillText(pointsToDisplay[i], SAFE_X + 95, yPos + 53);
        }
      }

      // ── 6. COMPACT LIVE CODE EDITOR (Typing Animation starts at 4.2s) ──
      const codeStartFrame = startPointFrame + (pointsToDisplay.length * pointInterval) + 20;
      if (frame >= codeStartFrame) {
        const codeY = 825;
        const codeH = 345;

        // Terminal Card Box
        ctx.fillStyle = '#0b0c10';
        ctx.strokeStyle = '#04AA6D';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.roundRect(SAFE_X, codeY, SAFE_W, codeH, 20);
        ctx.fill();
        ctx.stroke();

        // Terminal Top Bar
        ctx.fillStyle = '#1c1f26';
        ctx.beginPath();
        ctx.roundRect(SAFE_X, codeY, SAFE_W, 48, [20, 20, 0, 0]);
        ctx.fill();

        // Window Controls (Red, Yellow, Green dots)
        const dotColors = ['#ff5f56', '#ffbd2e', '#27c93f'];
        dotColors.forEach((color, idx) => {
          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.arc(SAFE_X + 35 + (idx * 24), codeY + 24, 8, 0, Math.PI * 2);
          ctx.fill();
        });

        // Tab Title
        ctx.fillStyle = '#94a3b8';
        ctx.font = '600 20px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(data.terminalTitle || 'index.html — Visual Studio Code', 540, codeY + 31);

        // Typing Code Logic (Smooth 2.2 chars/frame)
        const targetChars = Math.min(data.code.length, Math.floor((frame - codeStartFrame) * 2.2));
        if (targetChars > codeCharsRevealed) {
          codeCharsRevealed = targetChars;
          if (frame % 3 === 0) playKeyClick();
          if (codeCharsRevealed === data.code.length && frame === codeStartFrame + Math.floor(data.code.length / 2.2) + 1) {
            playSuccessChime();
          }
        }

        const visibleCode = data.code.substring(0, codeCharsRevealed);
        const codeLines = visibleCode.split('\\n');

        ctx.textAlign = 'left';
        ctx.font = '600 23px monospace';

        codeLines.forEach((line, lineIdx) => {
          const lineY = codeY + 86 + (lineIdx * 38);

          // Line Numbers
          if (!data.terminalTitle || !data.terminalTitle.includes('Command Prompt')) {
            ctx.fillStyle = '#475569';
            ctx.fillText(String(lineIdx + 1).padStart(2, ' '), SAFE_X + 25, lineY);
          }

          // Code Text (Syntax Highlighting)
          if (line.includes('<!DOCTYPE')) {
            ctx.fillStyle = '#04AA6D';
          } else if (line.startsWith('C:\\') || line.startsWith('PS ')) {
            ctx.fillStyle = '#04AA6D';
          } else if (line.includes('Key Content') || line.includes('SuperSecret')) {
            ctx.fillStyle = '#f59e0b';
          } else if (line.includes('<') && line.includes('>')) {
            ctx.fillStyle = '#60a5fa';
          } else {
            ctx.fillStyle = '#f8fafc';
          }
          const textX = (data.terminalTitle && data.terminalTitle.includes('Command Prompt')) ? SAFE_X + 30 : SAFE_X + 75;
          ctx.fillText(line, textX, lineY);
        });

        // Blinking Cursor
        if (Math.floor(frame / 18) % 2 === 0 && codeCharsRevealed < data.code.length) {
          ctx.fillStyle = '#04AA6D';
          const lastLine = codeLines[codeLines.length - 1] || '';
          const textX = (data.terminalTitle && data.terminalTitle.includes('Command Prompt')) ? SAFE_X + 30 : SAFE_X + 75;
          const cursorX = textX + (lastLine.length * 13.8);
          const cursorY = codeY + 66 + ((codeLines.length - 1) * 38);
          ctx.fillRect(cursorX, cursorY, 12, 24);
        }
      }

      // ── 6.5 DYNAMIC AUDIO EQUALIZER (Positioned Cleanly Below Code: y = 1205) ──
      const eqY = 1210;
      const numBars = 32;
      const barW = 12;
      const barGap = 8;
      const totalEqW = (numBars * barW) + ((numBars - 1) * barGap);
      const startEqX = (1080 - totalEqW) / 2;

      for (let b = 0; b < numBars; b++) {
        const freqAmp = Math.sin((frame * 0.2) + (b * 0.35)) * 0.5 + 0.5;
        const bassPulse = (b < 8) ? (Math.sin(frame * 0.3) > 0.3 ? 1.3 : 0.8) : 1;
        const barH = Math.max(6, freqAmp * bassPulse * 30);

        ctx.fillStyle = b < 8 ? '#04AA6D' : (b < 20 ? '#10b981' : '#34d399');
        ctx.beginPath();
        ctx.roundRect(startEqX + (b * (barW + barGap)), eqY - barH, barW, barH, 4);
        ctx.fill();
      }

      // ── 7. COMPACT BOTTOM CTA (Safe Zone: y = 1240 to 1380) ──
      const bottomY = 1240;
      ctx.fillStyle = 'rgba(4, 170, 109, 0.15)';
      ctx.strokeStyle = '#04AA6D';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(SAFE_X, bottomY, SAFE_W, 140, 20);
      ctx.fill();
      ctx.stroke();

      ctx.textAlign = 'center';
      ctx.fillStyle = '#ffffff';
      ctx.font = '900 30px sans-serif';
      ctx.fillText('Practice This Code Free on Nextsem', 540, bottomY + 54);

      ctx.fillStyle = '#04AA6D';
      ctx.font = '900 36px monospace';
      ctx.fillText('👉 https://nextsem.online', 540, bottomY + 105);

      // Note: y = 1380 to 1920 is a 540px completely clear safe zone for Instagram / Shorts UI!

      // Check if finished
      if (frame >= TOTAL_FRAMES) {
        recorder.stop();
      } else {
        requestAnimationFrame(render);
      }
    }

    render();
  </script>
</body>
</html>`;

// 4. Start HTTP Server & Launch Chrome
let childProcess = null;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(htmlContent);
  } else if (req.url === '/data') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(lessonData));
  } else if (req.url === '/audio') {
    const audioPath = fs.existsSync(path.join(__dirname, '..', 'public', 'youtube_bg_audio_pxm.webm'))
      ? path.join(__dirname, '..', 'public', 'youtube_bg_audio_pxm.webm')
      : path.join(__dirname, '..', 'public', 'youtube_bg_audio.webm');
    if (fs.existsSync(audioPath)) {
      const audioData = fs.readFileSync(audioPath);
      res.writeHead(200, { 'Content-Type': 'audio/webm', 'Content-Length': audioData.length });
      res.end(audioData);
    } else {
      res.writeHead(404);
      res.end('Not found');
    }
  } else if (req.url.startsWith('/log')) {
    console.log('BROWSER LOG:', decodeURIComponent(req.url));
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('OK');
  } else if (req.method === 'POST' && req.url === '/upload') {
    const chunks = [];
    req.on('data', chunk => chunks.push(chunk));
    req.on('end', () => {
      const buffer = Buffer.concat(chunks);
      fs.writeFileSync(OUTPUT_WEBM, buffer);
      fs.writeFileSync(OUTPUT_MP4, buffer);
      console.log(`\n🎉 SUCCESS! Generated Reel:`);
      console.log(`   📁 MP4 Video:  ${OUTPUT_MP4} (${(buffer.length / 1024 / 1024).toFixed(2)} MB)`);
      console.log(`   📁 Metadata:   ${METADATA_JSON}`);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('OK');
      setTimeout(() => {
        if (childProcess) {
          try { childProcess.kill(); } catch (e) {}
        }
        server.close();
        process.exit(0);
      }, 500);
    });
  }
});

server.listen(PORT, () => {
  console.log(`🚀 Reel Generator server listening on port ${PORT}...`);

  const chromePath = fs.existsSync('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe')
    ? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
    : 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

  const tempProfile = path.join(require('os').tmpdir(), 'chrome_reel_temp');
  if (!fs.existsSync(tempProfile)) {
    fs.mkdirSync(tempProfile, { recursive: true });
  }

  const chromeArgs = [
    '--headless=new',
    '--disable-gpu',
    `--user-data-dir=${tempProfile}`,
    '--no-first-run',
    '--no-default-browser-check',
    '--window-size=1080,1920',
    '--use-fake-ui-for-media-stream',
    '--autoplay-policy=no-user-gesture-required',
    '--no-sandbox',
    `http://127.0.0.1:${PORT}/`
  ];

  const child = spawn(chromePath, chromeArgs, { stdio: 'ignore' });
  child.on('error', err => {
    console.error('Failed to launch browser:', err);
    server.close();
    process.exit(1);
  });
});


