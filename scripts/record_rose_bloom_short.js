const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const PORT = 9893;
const OUTPUT_DIR = path.join(__dirname, '..', 'public');
const OUTPUT_FILE_WEBM = path.join(OUTPUT_DIR, 'candle_flame_developer_short.webm');
const OUTPUT_FILE_MP4 = path.join(OUTPUT_DIR, 'candle_flame_developer_short.mp4');

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Realistic Blooming Rose Step-by-Step Short</title>
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      background: #000000;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      overflow: hidden;
      font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
    }
    canvas {
      width: 450px;
      height: 800px;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.9);
      border-radius: 16px;
    }
  </style>
</head>
<body>
  <canvas id="c" width="1080" height="1920"></canvas>
  <audio id="bgAudio" src="/audio" loop preload="auto"></audio>
  <img id="logoImg" src="/logo.png" style="display:none;" />
  <video id="splashVideo" src="/logo/nextsem-splash-animation.mp4" preload="auto" muted playsinline style="display:none;"></video>

  <script>
    window.onerror = function(msg, url, line) {
      fetch('/log?err=' + encodeURIComponent(msg + ' at line ' + line));
    };
    window.addEventListener('unhandledrejection', function(e) {
      fetch('/log?err=' + encodeURIComponent('Unhandled: ' + (e.reason ? (e.reason.message || e.reason) : 'unknown')));
    });

    const canvas = document.getElementById('c');
    const ctx = canvas.getContext('2d');
    const bgAudio = document.getElementById('bgAudio');
    const logoImg = document.getElementById('logoImg');
    const splashVideo = document.getElementById('splashVideo');
    const W = 1080;
    const H = 1920;

    let currentScene = 'editor'; // 'editor' | 'splash'
    let sceneStartTime = Date.now();
    let totalElapsedSeconds = 0;
    let typedCode = '';
    let currentStepTitle = '1. HTML5 Emmet: div.rose>...';
    let emmetTooltip = null;

    // Progressive Render States:
    // 0 = Blank Screen
    // 1 = Wireframe Skeleton (HTML only)
    // 2 = Green Stem & Thorn Added
    // 3 = Green Leaves & Sepals Added
    // 4 = Crimson Bud Formed (Closed Petals)
    // 5 = Full Blooming Blossom (JS & Run)
    let renderStage = 0;
    let bloomProgress = 0.0; // 0.0 (closed) -> 1.0 (full bloom)
    let showCtaCard = false;

    // ── 1. WEB AUDIO API SYNTHESIZER & AUDIO MIXER ──
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const audioDest = audioCtx.createMediaStreamDestination();
    const masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(0.92, audioCtx.currentTime);
    masterGain.connect(audioDest);

    // Connect HTML5 Loop Audio Element to MediaStream Destination
    try {
      const audioSource = audioCtx.createMediaElementSource(bgAudio);
      const bgGain = audioCtx.createGain();
      bgGain.gain.setValueAtTime(0.88, audioCtx.currentTime);
      audioSource.connect(bgGain);
      bgGain.connect(masterGain);
    } catch (e) {
      console.error('Audio element connect error:', e);
    }

    // Keystroke SFX
    function playKeyClick() {
      try {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        const t = audioCtx.currentTime;
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(900 + Math.random() * 600, t);
        gain.gain.setValueAtTime(0.1, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.035);
        osc.connect(gain);
        gain.connect(masterGain);
        osc.start(t);
        osc.stop(t + 0.04);
      } catch (e) {}
    }

    // Emmet Expand Tab SFX (Chime)
    function playEmmetExpand() {
      try {
        const notes = [587.33, 880.00, 1174.66];
        notes.forEach((freq, idx) => {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          const t = audioCtx.currentTime + (idx * 0.04);
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, t);
          gain.gain.setValueAtTime(0.18, t);
          gain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
          osc.connect(gain);
          gain.connect(masterGain);
          osc.start(t);
          osc.stop(t + 0.28);
        });
      } catch (e) {}
    }

    // Run Code Click SFX
    function playRunClick() {
      try {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        const t = audioCtx.currentTime;
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, t);
        osc.frequency.exponentialRampToValueAtTime(1200, t + 0.08);
        gain.gain.setValueAtTime(0.28, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
        osc.connect(gain);
        gain.connect(masterGain);
        osc.start(t);
        osc.stop(t + 0.2);
      } catch (e) {}
    }

    // Triumph Chords
    function playTriumphChords() {
      try {
        const chordNotes = [392.00, 493.88, 587.33, 783.99, 987.77];
        chordNotes.forEach((freq, idx) => {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          const t = audioCtx.currentTime + (idx * 0.08);
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, t);
          gain.gain.setValueAtTime(0.2, t);
          gain.gain.exponentialRampToValueAtTime(0.001, t + 1.2);
          osc.connect(gain);
          gain.connect(masterGain);
          osc.start(t);
          osc.stop(t + 1.3);
        });
      } catch (e) {}
    }

    // ── 2. MEDIA RECORDER SETUP ──
    const canvasStream = canvas.captureStream(60);
    const audioTracks = audioDest.stream.getAudioTracks();
    const combinedStream = new MediaStream([
      ...canvasStream.getVideoTracks(),
      ...audioTracks
    ]);

    const recordedChunks = [];
    let mimeType = 'video/mp4;codecs=avc1,mp4a.40.2';
    if (!MediaRecorder.isTypeSupported(mimeType)) {
      mimeType = 'video/mp4';
      if (!MediaRecorder.isTypeSupported(mimeType)) {
        mimeType = 'video/webm;codecs=vp9,opus';
        if (!MediaRecorder.isTypeSupported(mimeType)) {
          mimeType = 'video/webm';
        }
      }
    }

    const recorder = new MediaRecorder(combinedStream, {
      mimeType,
      videoBitsPerSecond: 9000000
    });

    recorder.ondataavailable = (e) => {
      if (e.data && e.data.size > 0) recordedChunks.push(e.data);
    };

    recorder.onstop = async () => {
      fetch('/log?msg=' + encodeURIComponent('Recorder stopped. Uploading ' + recordedChunks.length + ' chunks'));
      const blob = new Blob(recordedChunks, { type: mimeType });
      const arrayBuffer = await blob.arrayBuffer();
      await fetch('/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/octet-stream' },
        body: arrayBuffer
      });
      document.body.innerHTML = '<h1 style="color:white;font-family:sans-serif;">🌹 Step-by-Step Blooming Rose 37s Video Saved!</h1>';
    };

    recorder.start();

    // ── 3. PROGRESSIVE STEP-BY-STEP ROSE PAINTER ──
    const roseParticles = [];
    class SparkleParticle {
      constructor(x, y) {
        this.x = x + (Math.random() - 0.5) * 160;
        this.y = y + (Math.random() - 0.5) * 140;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = -(0.6 + Math.random() * 1.6);
        this.alpha = 1;
        this.size = 1.5 + Math.random() * 3.5;
        this.color = Math.random() > 0.35 ? '#ff3366' : '#ffd700';
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 0.012;
        this.size *= 0.985;
      }
      draw(ctx) {
        if (this.alpha <= 0) return;
        ctx.save();
        ctx.globalAlpha = Math.max(0, this.alpha);
        ctx.fillStyle = this.color;
        ctx.shadowColor = '#ff1e56';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    function drawPetal(ctx, angle, distance, sizeW, sizeH, progress, colorShift = 0) {
      ctx.save();
      ctx.rotate(angle);
      ctx.translate(0, -distance * progress);

      const petalGrad = ctx.createRadialGradient(0, -sizeH * 0.4, 2, 0, 0, sizeH);
      if (colorShift === 0) {
        petalGrad.addColorStop(0, '#ff2a5f');
        petalGrad.addColorStop(0.35, '#d61244');
        petalGrad.addColorStop(0.7, '#8f072c');
        petalGrad.addColorStop(1, '#420313');
      } else if (colorShift === 1) {
        petalGrad.addColorStop(0, '#ff477e');
        petalGrad.addColorStop(0.4, '#e01e5a');
        petalGrad.addColorStop(0.8, '#a30b3b');
        petalGrad.addColorStop(1, '#4f041b');
      } else {
        petalGrad.addColorStop(0, '#ff6b95');
        petalGrad.addColorStop(0.5, '#c9184a');
        petalGrad.addColorStop(1, '#590d22');
      }

      ctx.fillStyle = petalGrad;
      ctx.shadowColor = 'rgba(0, 0, 0, 0.65)';
      ctx.shadowBlur = 14;
      ctx.shadowOffsetY = 6;

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(-sizeW * 0.6, -sizeH * 0.35, -sizeW * 0.8, -sizeH * 0.85, 0, -sizeH);
      ctx.bezierCurveTo(sizeW * 0.8, -sizeH * 0.85, sizeW * 0.6, -sizeH * 0.35, 0, 0);
      ctx.closePath();
      ctx.fill();

      ctx.strokeStyle = 'rgba(255, 120, 160, 0.35)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.restore();
    }

    function renderProgressivePreview(ctx, cx, cy, stage, progress) {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.scale(1.22, 1.22);

      // ── STAGE 0: BLANK SCREEN ──
      if (stage === 0) {
        ctx.fillStyle = '#64748b';
        ctx.font = 'italic 24px Segoe UI, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('// ⚡ Start typing HTML & CSS to preview live...', 0, -20);
        ctx.textAlign = 'left';
        ctx.restore();
        return;
      }

      // ── STAGE 1: WIREFRAME HTML SKELETON (div.rose-container) ──
      if (stage === 1) {
        ctx.strokeStyle = '#04AA6D';
        ctx.lineWidth = 2;
        ctx.setLineDash([8, 8]);
        ctx.strokeRect(-130, -190, 260, 420);
        ctx.setLineDash([]);

        ctx.fillStyle = '#04AA6D';
        ctx.font = 'bold 16px "Consolas", monospace';
        ctx.fillText('<div class="rose-container">', -120, -165);

        ctx.beginPath();
        ctx.arc(0, -50, 52, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.stroke();
        ctx.fillStyle = '#ffffff';
        ctx.fillText('<div class="rose-bud">', -74, -45);

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, 210);
        ctx.strokeStyle = 'rgba(4, 170, 109, 0.5)';
        ctx.stroke();
        ctx.fillText('<div class="stem">', 12, 110);

        ctx.restore();
        return;
      }

      // ── STAGE 2+: NATURAL ORGANIC GREEN STEM & THORN ──
      if (stage >= 2) {
        const stemGrad = ctx.createLinearGradient(-6, 0, 6, 0);
        stemGrad.addColorStop(0, '#1b4332');
        stemGrad.addColorStop(0.4, '#2d6a4f');
        stemGrad.addColorStop(0.8, '#40916c');
        stemGrad.addColorStop(1, '#081c15');

        ctx.fillStyle = stemGrad;
        ctx.beginPath();
        ctx.moveTo(-6, 0);
        ctx.quadraticCurveTo(-14, 100, -7, 220);
        ctx.lineTo(7, 220);
        ctx.quadraticCurveTo(0, 100, 6, 0);
        ctx.closePath();
        ctx.fill();

        // Sharp Natural Thorn
        ctx.fillStyle = '#2d6a4f';
        ctx.beginPath();
        ctx.moveTo(-10, 95);
        ctx.quadraticCurveTo(-30, 102, -36, 118);
        ctx.quadraticCurveTo(-22, 115, -8, 110);
        ctx.closePath();
        ctx.fill();
      }

      // ── STAGE 3+: GREEN LEAVES & CALYX / SEPALS ──
      if (stage >= 3) {
        const leafGrad = ctx.createLinearGradient(0, 0, 100, 40);
        leafGrad.addColorStop(0, '#1b4332');
        leafGrad.addColorStop(0.5, '#40916c');
        leafGrad.addColorStop(1, '#52b788');

        // Left Leaf
        ctx.save();
        ctx.translate(-8, 140);
        ctx.rotate(-0.45);
        ctx.fillStyle = leafGrad;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-55, -28, -100, 10, -120, 38);
        ctx.bezierCurveTo(-85, 55, -38, 38, 0, 0);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = '#74c69d'; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(-105, 32); ctx.stroke();
        ctx.restore();

        // Right Leaf
        ctx.save();
        ctx.translate(6, 80);
        ctx.rotate(0.5);
        ctx.fillStyle = leafGrad;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(55, -22, 100, 12, 120, 40);
        ctx.bezierCurveTo(85, 55, 38, 38, 0, 0);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = '#74c69d'; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(105, 34); ctx.stroke();
        ctx.restore();

        // Calyx / Sepals under bud
        const calyxGrad = ctx.createLinearGradient(0, -10, 0, 20);
        calyxGrad.addColorStop(0, '#2d6a4f');
        calyxGrad.addColorStop(1, '#1b4332');
        ctx.fillStyle = calyxGrad;
        ctx.beginPath();
        ctx.moveTo(-18, 0);
        ctx.quadraticCurveTo(-34, -24, -40, -40);
        ctx.quadraticCurveTo(-20, -14, -6, 4);
        ctx.quadraticCurveTo(0, 7, 6, 4);
        ctx.quadraticCurveTo(20, -14, 40, -40);
        ctx.quadraticCurveTo(34, -24, 18, 0);
        ctx.closePath();
        ctx.fill();
      }

      // ── STAGE 4: CLOSED VELVETY CRIMSON BUD ──
      if (stage === 4) {
        ctx.save();
        ctx.translate(0, -22);

        // Closed Bud Core
        const budGrad = ctx.createRadialGradient(0, -20, 5, 0, -20, 55);
        budGrad.addColorStop(0, '#ff2a5f');
        budGrad.addColorStop(0.5, '#a30b3b');
        budGrad.addColorStop(1, '#420313');
        ctx.fillStyle = budGrad;
        ctx.beginPath();
        ctx.ellipse(0, -25, 38, 62, 0, 0, Math.PI * 2);
        ctx.fill();

        // 3 Closed Overlapping Petals
        drawPetal(ctx, -0.35, 8, 50, 74, 0.15, 0);
        drawPetal(ctx, 0.35, 8, 50, 74, 0.15, 1);
        drawPetal(ctx, 0, 4, 42, 64, 0.1, 2);

        ctx.restore();
      }

      // ── STAGE 5: FULL DYNAMIC BLOOMING ROSE ──
      if (stage === 5) {
        // Ambient Warm Glow
        const roseGlow = ctx.createRadialGradient(0, -80, 20, 0, -80, 420);
        roseGlow.addColorStop(0, 'rgba(255, 30, 86, 0.45)');
        roseGlow.addColorStop(0.4, 'rgba(214, 18, 68, 0.18)');
        roseGlow.addColorStop(0.8, 'rgba(100, 10, 30, 0.05)');
        roseGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = roseGlow;
        ctx.fillRect(-500, -500, 1000, 1000);

        ctx.save();
        ctx.translate(0, -22);

        // Layer 1: Outermost Broad Velvet Petals (8 petals)
        const outerCount = 8;
        for (let i = 0; i < outerCount; i++) {
          const angle = (i * (Math.PI * 2 / outerCount)) + 0.2;
          const spread = 72 + Math.sin(i * 1.5) * 8;
          const w = 82 + (progress * 30);
          const h = 114 + (progress * 44);
          drawPetal(ctx, angle, spread, w, h, progress, 0);
        }

        // Layer 2: Middle Velvet Petals (7 petals)
        const midCount = 7;
        for (let i = 0; i < midCount; i++) {
          const angle = (i * (Math.PI * 2 / midCount)) + 0.65;
          const spread = 48 + Math.sin(i * 2.1) * 6;
          const w = 66 + (progress * 24);
          const h = 92 + (progress * 34);
          drawPetal(ctx, angle, spread, w, h, progress, 1);
        }

        // Layer 3: Inner Blooming Spiral (6 petals)
        const innerCount = 6;
        for (let i = 0; i < innerCount; i++) {
          const angle = (i * (Math.PI * 2 / innerCount)) + 1.1;
          const spread = 26 + Math.sin(i * 3.1) * 4;
          const w = 50 + (progress * 18);
          const h = 72 + (progress * 24);
          drawPetal(ctx, angle, spread, w, h, progress, 2);
        }

        // Center Core Bud
        const coreGrad = ctx.createRadialGradient(0, 0, 2, 0, 0, 18);
        coreGrad.addColorStop(0, '#ff477e');
        coreGrad.addColorStop(0.6, '#a30b3b');
        coreGrad.addColorStop(1, '#420313');
        ctx.fillStyle = coreGrad;
        ctx.beginPath();
        ctx.arc(0, 0, 16 + (progress * 4), 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();

        // Shimmering Ambient Dew Particles
        if (progress >= 0.25 && Math.random() > 0.35) {
          roseParticles.push(new SparkleParticle(0, -60));
        }

        for (let i = roseParticles.length - 1; i >= 0; i--) {
          const p = roseParticles[i];
          p.update();
          p.draw(ctx);
          if (p.alpha <= 0) roseParticles.splice(i, 1);
        }
      }

      ctx.restore();
    }

    // Helper: Draw Round Rectangles
    function drawCard(ctx, x, y, w, h, radius, bg, border = null) {
      ctx.beginPath();
      ctx.roundRect(x, y, w, h, radius);
      ctx.fillStyle = bg;
      ctx.fill();
      if (border) {
        ctx.strokeStyle = border;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
    }

    // ── 4. RENDER LOOP (60 FPS MASTER DIRECTOR) ──
    function render() {
      totalElapsedSeconds = (Date.now() - sceneStartTime) / 1000;

      // Clear Canvas Frame
      ctx.fillStyle = '#0a0c10';
      ctx.fillRect(0, 0, W, H);

      if (currentScene === 'splash') {
        renderSplashScreen(ctx, totalElapsedSeconds);
      } else if (currentScene === 'like_request') {
        renderFullScreenLikeRequest(ctx, totalElapsedSeconds);
      } else {
        renderMainShowcase(ctx, totalElapsedSeconds);
      }

      requestAnimationFrame(render);
    }

    // Helper: Draw Official Emerald-Glowing NS Logo Badge
    function drawNextsemLogoBadge(ctx, x, y, size = 46) {
      const radius = size * 0.28;
      ctx.save();
      // Glow effect around the green border
      ctx.shadowColor = 'rgba(0, 230, 118, 0.55)';
      ctx.shadowBlur = 12;

      // Dark card surface with glowing green border
      ctx.beginPath();
      ctx.roundRect(x, y, size, size, radius);
      ctx.fillStyle = '#060c18';
      ctx.fill();
      ctx.strokeStyle = '#00e676';
      ctx.lineWidth = Math.max(2.5, size * 0.065);
      ctx.stroke();

      // Sharp crisp NS bold text in vibrant emerald green
      ctx.shadowColor = 'rgba(0, 230, 118, 0.7)';
      ctx.shadowBlur = 8;
      ctx.fillStyle = '#00e676';
      ctx.font = '900 ' + Math.round(size * 0.48) + 'px Segoe UI, system-ui, -apple-system, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('NS', x + (size / 2), y + (size / 2) + 1);
      ctx.restore();
    }

    // ── SCENE A: FAST-TYPING DEVELOPER IDE & STEP-BY-STEP LIVE PREVIEW ──
    function renderMainShowcase(ctx, elapsed) {
      // Background Grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      for (let x = 0; x < W; x += 60) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }
      for (let y = 0; y < H; y += 60) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }

      // Top Emerald Header Ambient Lighting
      const topLight = ctx.createRadialGradient(W / 2, 0, 10, W / 2, 0, 700);
      topLight.addColorStop(0, 'rgba(4, 170, 109, 0.15)');
      topLight.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = topLight;
      ctx.fillRect(0, 0, W, 800);

      // ── TOP NAVIGATION: OFFICIAL NEXTSEM LOGO BADGE & BRANDING ──
      const logoX = 40;
      const logoY = 34;
      const logoSize = 48;

      // Draw official glowing emerald NS badge
      drawNextsemLogoBadge(ctx, logoX, logoY, logoSize);

      // Brand Text: NEXTSEM.online
      ctx.font = '900 34px Segoe UI, system-ui, sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.fillText('NEXTSEM', logoX + 62, logoY + 34);

      const nextsemWidth = ctx.measureText('NEXTSEM').width;
      ctx.fillStyle = '#00e676';
      ctx.font = 'bold 34px Segoe UI, system-ui, sans-serif';
      ctx.fillText('.online', logoX + 62 + nextsemWidth, logoY + 34);

      // Subtitle & Project Tag
      ctx.fillStyle = '#94a3b8';
      ctx.font = '500 22px Segoe UI, system-ui, sans-serif';
      ctx.fillText('Project: Realistic Blooming Rose • HTML5 + CSS3 + JS', 40, 114);

      // Step Pill Badge
      drawCard(ctx, 40, 126, 460, 36, 18, 'rgba(4, 170, 109, 0.15)', 'rgba(4, 170, 109, 0.4)');
      ctx.fillStyle = '#04AA6D';
      ctx.font = 'bold 18px Segoe UI, sans-serif';
      ctx.fillText('🎯 ' + currentStepTitle, 58, 150);

      // ── MAIN VS CODE WORKSPACE WINDOW ──
      const winX = 40;
      const winY = 172;
      const winW = W - 80;
      const winH = 810;

      // Window Outer Card
      drawCard(ctx, winX, winY, winW, winH, 20, '#1e1e1e', '#2d3748');

      // 1. VS Code Title Bar
      drawCard(ctx, winX, winY, winW, 52, [20, 20, 0, 0], '#181818', '#2d2d2d');
      // Window Dots
      ctx.fillStyle = '#ff5f56'; ctx.beginPath(); ctx.arc(winX + 26, winY + 26, 7, 0, Math.PI*2); ctx.fill();
      ctx.fillStyle = '#ffbd2e'; ctx.beginPath(); ctx.arc(winX + 48, winY + 26, 7, 0, Math.PI*2); ctx.fill();
      ctx.fillStyle = '#27c93f'; ctx.beginPath(); ctx.arc(winX + 70, winY + 26, 7, 0, Math.PI*2); ctx.fill();

      ctx.fillStyle = '#cccccc';
      ctx.font = 'bold 18px Segoe UI, sans-serif';
      ctx.fillText('rose.html — Nextsem IDE', winX + 96, winY + 33);

      // 2. Editor Tabs Bar
      drawCard(ctx, winX, winY + 52, winW, 44, 0, '#252526', '#1e1e1e');
      drawCard(ctx, winX, winY + 52, 170, 44, 0, '#1e1e1e');
      ctx.fillStyle = '#007acc';
      ctx.fillRect(winX, winY + 52, 170, 3);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 16px "Consolas", monospace';
      ctx.fillText('🌹 index.html', winX + 22, winY + 80);

      // Run Button
      const isRunPhase = renderStage === 5 || elapsed >= 24;
      drawCard(ctx, winX + winW - 130, winY + 58, 110, 32, 8, isRunPhase ? '#04AA6D' : '#04AA6D', '#20c997');
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 15px Segoe UI, sans-serif';
      ctx.fillText('▶ RUN', winX + winW - 95, winY + 80);

      // 3. Code Editor Lines & Gutter
      const gutterW = 56;
      ctx.fillStyle = '#1e1e1e';
      ctx.fillRect(winX + 1, winY + 96, winW - 2, winH - 138);

      // Line Number Gutter
      ctx.fillStyle = '#181818';
      ctx.fillRect(winX + 1, winY + 96, gutterW, winH - 138);
      ctx.strokeStyle = '#2d2d2d';
      ctx.beginPath();
      ctx.moveTo(winX + gutterW, winY + 96);
      ctx.lineTo(winX + gutterW, winY + winH - 42);
      ctx.stroke();

      // Render Code Lines with Smart Auto-Scroll
      const codeLines = typedCode.split('\\n');
      const maxVisible = 25;
      const startLineIdx = Math.max(0, codeLines.length - maxVisible);
      const visibleLines = codeLines.slice(startLineIdx, startLineIdx + maxVisible);

      ctx.font = '20px "Consolas", "Courier New", monospace';
      for (let i = 0; i < visibleLines.length; i++) {
        const lineY = winY + 126 + (i * 26);
        const actualLineNum = startLineIdx + i + 1;
        ctx.fillStyle = '#858585';
        ctx.textAlign = 'right';
        ctx.fillText(actualLineNum.toString(), winX + gutterW - 12, lineY);
        ctx.textAlign = 'left';

        renderSyntaxLine(ctx, visibleLines[i], winX + gutterW + 16, lineY);
      }

      // Cursor Blinking on last active visible line
      if (elapsed < 24 && Math.floor(Date.now() / 350) % 2 === 0) {
        const lastVisibleIdx = visibleLines.length - 1;
        const curY = winY + 126 + (lastVisibleIdx * 26);
        const lastLineWidth = ctx.measureText(visibleLines[lastVisibleIdx] || '').width;
        ctx.fillStyle = '#04AA6D';
        ctx.fillRect(winX + gutterW + 16 + lastLineWidth + 4, curY - 18, 9, 22);
      }

      // Emmet Tooltip Popup
      if (emmetTooltip) {
        drawCard(ctx, emmetTooltip.x, emmetTooltip.y, 340, 50, 10, '#252526', '#007acc');
        ctx.fillStyle = '#007acc';
        ctx.font = 'bold 15px Segoe UI, sans-serif';
        ctx.fillText('⚡ Emmet Abbreviation', emmetTooltip.x + 16, emmetTooltip.y + 22);

        drawCard(ctx, emmetTooltip.x + 240, emmetTooltip.y + 8, 85, 28, 6, '#1e1e1e', '#3c3c3c');
        ctx.fillStyle = '#04AA6D';
        ctx.font = 'bold 13px "Consolas", monospace';
        ctx.fillText('Tab ⇥', emmetTooltip.x + 258, emmetTooltip.y + 27);

        ctx.fillStyle = '#cccccc';
        ctx.font = '13px "Consolas", monospace';
        ctx.fillText(emmetTooltip.text, emmetTooltip.x + 16, emmetTooltip.y + 42);
      }

      // 4. Editor Bottom Status Bar
      drawCard(ctx, winX, winY + winH - 42, winW, 42, [0, 0, 20, 20], '#007acc');
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 16px Segoe UI, sans-serif';
      ctx.fillText('⊞ main*  |  Port: 5500 (Live Server)  |  HTML5 & CSS3', winX + 20, winY + winH - 15);
      ctx.fillText('UTF-8  |  Prettier ✓', winX + winW - 170, winY + winH - 15);

      // ── BOTTOM LIVE PREVIEW WORKSPACE (SHOWS REAL-TIME STEP-BY-STEP RENDER) ──
      const prevX = 40;
      const prevY = 1000;
      const prevW = W - 80;
      const prevH = 880;

      drawCard(ctx, prevX, prevY, prevW, prevH, 24, '#090b10', '#04AA6D');

      // Live Preview Top Bar
      drawCard(ctx, prevX, prevY, prevW, 50, [24, 24, 0, 0], '#161922', '#222736');
      ctx.fillStyle = '#22c55e';
      ctx.beginPath(); ctx.arc(prevX + 26, prevY + 25, 6, 0, Math.PI * 2); ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 19px Segoe UI, sans-serif';
      ctx.fillText('🌐 Live Execution: http://127.0.0.1:5500/blooming-rose', prevX + 44, prevY + 32);

      // Live Status Feature Badge in Top-Right of Preview Bar
      let statusText = '⚡ Waiting for code...';
      if (renderStage === 1) statusText = '📄 HTML5 Wireframe Skeleton';
      else if (renderStage === 2) statusText = '🌿 CSS3 Organic Stem & Thorn';
      else if (renderStage === 3) statusText = '🍃 CSS3 Leaves & Calyx';
      else if (renderStage === 4) statusText = '🌹 CSS3 Velvety Bud Formed';
      else if (renderStage === 5) statusText = '🌹 100% Pure CSS3 Blooming Rose!';

      drawCard(ctx, prevX + prevW - 400, prevY + 9, 385, 32, 8, '#0d111a', '#04AA6D');
      ctx.fillStyle = '#04AA6D';
      ctx.font = 'bold 15px Segoe UI, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(statusText, prevX + prevW - 207, prevY + 31);
      ctx.textAlign = 'left';

      // Render Step-by-Step Progressive Blooming Rose (Clean & Centered)
      const roseCenterX = prevX + (prevW / 2);
      const roseCenterY = prevY + 410;
      renderProgressivePreview(ctx, roseCenterX, roseCenterY, renderStage, bloomProgress);

      // ── CUTE LIKE & SHARE REQUEST ANIMATED CARD ──
      if (showCtaCard && elapsed >= 25 && elapsed < 31) {
        renderCuteLikeShareCta(ctx, prevX + (prevW / 2), prevY + prevH - 120, elapsed);
      }
    }

    // Helper: Cute Animated Like & Share Request Card
    function renderCuteLikeShareCta(ctx, cx, cy, elapsed) {
      const cardW = 760;
      const cardH = 110;
      const cardX = cx - (cardW / 2);
      const floatY = cy + Math.sin(elapsed * 5) * 4;

      ctx.save();
      
      // Outer Glowing Aura
      const glowGrad = ctx.createRadialGradient(cx, floatY + 55, 10, cx, floatY + 55, 380);
      glowGrad.addColorStop(0, 'rgba(255, 42, 95, 0.35)');
      glowGrad.addColorStop(0.5, 'rgba(4, 170, 109, 0.2)');
      glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glowGrad;
      ctx.fillRect(cardX - 40, floatY - 20, cardW + 80, cardH + 40);

      // Main Glass Card
      drawCard(ctx, cardX, floatY, cardW, cardH, 24, '#0c1328', '#c1a648');

      // Heart Icon with Pulsing Heartbeat Animation
      const heartPulse = 1 + Math.sin(elapsed * 8) * 0.12;
      ctx.save();
      ctx.translate(cardX + 50, floatY + 55);
      ctx.scale(heartPulse, heartPulse);
      ctx.font = '36px Segoe UI Emoji, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('💖', 0, 0);
      ctx.restore();

      // Heading Text
      ctx.fillStyle = '#ffffff';
      ctx.font = '900 24px Segoe UI, system-ui, sans-serif';
      ctx.fillText('Loved the Rose? Double Tap to Like & Share! 🚀', cardX + 90, floatY + 44);

      // Subtitle Text
      ctx.fillStyle = '#c1a648';
      ctx.font = 'bold 18px Segoe UI, system-ui, sans-serif';
      ctx.fillText('✨ Follow @nextsemacademy on Instagram & nextsem.online! 🌹🐻', cardX + 90, floatY + 80);

      // Cute Pill Badges on the Right
      const pillW = 86;
      const pillH = 34;
      const pillY = floatY + 38;

      // Like Pill
      drawCard(ctx, cardX + cardW - 195, pillY, pillW, pillH, 17, '#ff2a5f', '#ffffff');
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 15px Segoe UI, sans-serif';
      ctx.fillText('👍 LIKE', cardX + cardW - 182, pillY + 23);

      // Share Pill
      drawCard(ctx, cardX + cardW - 98, pillY, pillW, pillH, 17, '#04AA6D', '#ffffff');
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 15px Segoe UI, sans-serif';
      ctx.fillText('↗️ SHARE', cardX + cardW - 90, pillY + 23);

      ctx.restore();
    }

    // Helper: Code Syntax Highlighting
    function renderSyntaxLine(ctx, text, x, y) {
      if (!text) return;
      if (text.startsWith('<!--') || text.startsWith('/*') || text.startsWith('//')) {
        ctx.fillStyle = '#6a9955';
        ctx.fillText(text, x, y);
      } else if (text.includes('class=') || text.includes('id=')) {
        ctx.fillStyle = '#9cdcfe';
        ctx.fillText(text, x, y);
      } else if (text.includes('{') || text.includes('}')) {
        ctx.fillStyle = '#ffd700';
        ctx.fillText(text, x, y);
      } else if (text.includes(':') && text.includes(';')) {
        ctx.fillStyle = '#9cdcfe';
        ctx.fillText(text, x, y);
      } else if (text.startsWith('<') || text.startsWith('</')) {
        ctx.fillStyle = '#4ec9b0';
        ctx.fillText(text, x, y);
      } else {
        ctx.fillStyle = '#d4d4d4';
        ctx.fillText(text, x, y);
      }
    }

    // ── SCENE B: OFFICIAL NEXTSEM SPLASH ANIMATION VIDEO OUTRO (LAST 6 SECONDS) ──
    let splashVideoStarted = false;
    function renderSplashScreen(ctx, elapsed) {
      if (!splashVideoStarted) {
        splashVideo.currentTime = 0;
        splashVideo.play().catch(() => {});
        splashVideoStarted = true;
      }

      // 1. Rich dark gradient background (#060c18)
      ctx.fillStyle = '#060c18';
      ctx.fillRect(0, 0, W, H);

      // Subtle background grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
      ctx.lineWidth = 1;
      for (let x = 0; x < W; x += 60) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }
      for (let y = 0; y < H; y += 60) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }

      // Ambient radial glow behind the splash video
      const bgGrad = ctx.createRadialGradient(W / 2, H / 2, 40, W / 2, H / 2, 700);
      bgGrad.addColorStop(0, 'rgba(4, 170, 109, 0.22)');
      bgGrad.addColorStop(0.4, 'rgba(193, 166, 72, 0.12)');
      bgGrad.addColorStop(1, 'rgba(6, 12, 24, 0)');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, W, H);

      const isReady = splashVideo.readyState >= 2;
      const vw = (splashVideo.videoWidth > 0) ? splashVideo.videoWidth : 1920;
      const vh = (splashVideo.videoHeight > 0) ? splashVideo.videoHeight : 1080;
      const videoAspect = vw / vh; // 16:9

      // Preserve authentic video aspect ratio (100% natural, never squeezed!)
      // Fit video width across 1080px with cinematic frame
      const targetW = W;
      const targetH = Math.round(W / videoAspect); // ~607.5px
      const targetX = 0;
      const targetY = Math.round((H - targetH) / 2); // Centered at ~656px

      if (isReady) {
        // Blurred background underlay for immersive cinematic feel
        ctx.save();
        ctx.globalAlpha = 0.28;
        ctx.filter = 'blur(25px)';
        const coverScale = Math.max(W / vw, H / vh);
        const coverW = vw * coverScale;
        const coverH = vh * coverScale;
        ctx.drawImage(splashVideo, (W - coverW) / 2, (H - coverH) / 2, coverW, coverH);
        ctx.restore();

        // Main un-squeezed splash video in sharp aspect ratio
        ctx.save();
        ctx.shadowColor = 'rgba(4, 170, 109, 0.5)';
        ctx.shadowBlur = 35;
        ctx.drawImage(splashVideo, targetX, targetY, targetW, targetH);
        ctx.restore();

        // Elegant border lines framing the top & bottom of the video
        ctx.strokeStyle = '#c1a648';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, targetY);
        ctx.lineTo(W, targetY);
        ctx.moveTo(0, targetY + targetH);
        ctx.lineTo(W, targetY + targetH);
        ctx.stroke();
      }

      // Top Header Card in outro
      const topCardY = targetY - 180;
      drawCard(ctx, 80, topCardY, W - 160, 110, 24, '#0c1328', '#c1a648');
      
      // Draw official glowing emerald NS badge
      const topLogoSize = 56;
      drawNextsemLogoBadge(ctx, 105, topCardY + 27, topLogoSize);

      ctx.fillStyle = '#ffffff';
      ctx.font = '900 36px Segoe UI, system-ui, sans-serif';
      ctx.fillText('NEXTSEM', 178, topCardY + 52);
      const nsW = ctx.measureText('NEXTSEM').width;
      ctx.fillStyle = '#00e676';
      ctx.font = 'bold 36px Segoe UI, system-ui, sans-serif';
      ctx.fillText('.online', 178 + nsW, topCardY + 52);

      ctx.fillStyle = '#c1a648';
      ctx.font = 'bold 20px Segoe UI, sans-serif';
      ctx.fillText('✨ FREE DEVELOPER CURRICULUM & PROJECTS', 178, topCardY + 86);

      // Bottom CTA Box in outro
      const botCardY = targetY + targetH + 60;
      drawCard(ctx, 60, botCardY, W - 120, 180, 28, '#0c1328', '#04AA6D');

      ctx.fillStyle = '#ffffff';
      ctx.font = '900 28px Segoe UI, system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('🚀 Learn Web Development Step-by-Step', W / 2, botCardY + 48);

      // Instagram Pill
      drawCard(ctx, W / 2 - 380, botCardY + 68, 760, 42, 21, '#161b26', '#e1306c');
      ctx.fillStyle = '#e1306c';
      ctx.font = 'bold 20px Segoe UI, sans-serif';
      ctx.fillText('📸 Instagram: @nextsemacademy (instagram.com/nextsemacademy)', W / 2, botCardY + 96);

      // Website URL Pill Button
      drawCard(ctx, W / 2 - 240, botCardY + 120, 480, 42, 21, '#161b26', '#00e676');
      ctx.fillStyle = '#00e676';
      ctx.font = 'bold 22px "Consolas", monospace';
      ctx.fillText('👉 https://nextsem.online', W / 2, botCardY + 149);
      ctx.textAlign = 'left';
    }

    // ── SCENE C: FULL-SCREEN CUTE LIKE & SHARE REQUEST SCENE (END OF SHORT) ──
    const floatingHearts = [];
    class FloatingHeart {
      constructor() {
        this.x = Math.random() * W;
        this.y = H + 20 + Math.random() * 100;
        this.vy = -(1.8 + Math.random() * 3.2);
        this.vx = (Math.random() - 0.5) * 1.5;
        this.size = 26 + Math.random() * 28;
        this.alpha = 0.95;
        this.emoji = ['💖', '❤️', '✨', '🌹', '🚀', '🐻'][Math.floor(Math.random() * 6)];
      }
      update() {
        this.y += this.vy;
        this.x += this.vx;
        this.alpha -= 0.006;
      }
      draw(ctx) {
        if (this.alpha <= 0) return;
        ctx.save();
        ctx.globalAlpha = Math.max(0, this.alpha);
        ctx.font = Math.round(this.size) + 'px Segoe UI Emoji, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(this.emoji, this.x, this.y);
        ctx.restore();
      }
    }

    function renderFullScreenLikeRequest(ctx, elapsed) {
      // 1. Dark Obsidian Canvas (#060c18)
      ctx.fillStyle = '#060c18';
      ctx.fillRect(0, 0, W, H);

      // Background grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      for (let x = 0; x < W; x += 60) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }
      for (let y = 0; y < H; y += 60) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }

      // Radiant Multi-Color Ambient Glow
      const centerGlow = ctx.createRadialGradient(W / 2, H / 2, 20, W / 2, H / 2, 750);
      centerGlow.addColorStop(0, 'rgba(255, 42, 95, 0.28)');
      centerGlow.addColorStop(0.4, 'rgba(4, 170, 109, 0.2)');
      centerGlow.addColorStop(0.8, 'rgba(193, 166, 72, 0.1)');
      centerGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = centerGlow;
      ctx.fillRect(0, 0, W, H);

      // Floating Hearts & Emojis Spawner
      if (Math.random() > 0.3) {
        floatingHearts.push(new FloatingHeart());
      }
      for (let i = floatingHearts.length - 1; i >= 0; i--) {
        const h = floatingHearts[i];
        h.update();
        h.draw(ctx);
        if (h.alpha <= 0 || h.y < -50) floatingHearts.splice(i, 1);
      }

      // ── TOP SECTION: OFFICIAL BRANDING ──
      const topBadgeSize = 76;
      drawNextsemLogoBadge(ctx, (W / 2) - (topBadgeSize / 2), 160, topBadgeSize);

      ctx.fillStyle = '#ffffff';
      ctx.font = '900 48px Segoe UI, system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('NEXTSEM.online', W / 2, 285);

      drawCard(ctx, W / 2 - 240, 315, 480, 42, 21, 'rgba(4, 170, 109, 0.15)', '#04AA6D');
      ctx.fillStyle = '#04AA6D';
      ctx.font = 'bold 20px Segoe UI, sans-serif';
      ctx.fillText('✨ FREE WEB DEVELOPER ACADEMY ✨', W / 2, 343);

      // ── CENTER HERO: ADORABLE GIANT PULSING HEART & REQUEST ──
      const heartPulse = 1.15 + Math.sin(elapsed * 7) * 0.15;
      ctx.save();
      ctx.translate(W / 2, 490);
      ctx.scale(heartPulse, heartPulse);
      ctx.font = '96px Segoe UI Emoji, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('💖', 0, 0);
      ctx.restore();

      ctx.fillStyle = '#ffffff';
      ctx.font = '900 44px Segoe UI, system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Loved The Rose? 🌹', W / 2, 600);

      ctx.fillStyle = '#c1a648';
      ctx.font = 'bold 28px Segoe UI, system-ui, sans-serif';
      ctx.fillText('Show Some Love & Support! ✨', W / 2, 650);

      // ── FULL-SCREEN VIBRANT CTA ACTION CARDS ──
      const cardW = 860;
      const cardX = (W - cardW) / 2;

      // Card 1: DOUBLE TAP TO LIKE (Crimson Rose Gradient)
      const cta1Y = 740;
      const likeGrad = ctx.createLinearGradient(cardX, cta1Y, cardX + cardW, cta1Y);
      likeGrad.addColorStop(0, '#ff2a5f');
      likeGrad.addColorStop(1, '#d61244');
      drawCard(ctx, cardX, cta1Y, cardW, 115, 28, likeGrad, '#ffffff');

      ctx.fillStyle = '#ffffff';
      ctx.font = '900 34px Segoe UI, system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('👍 DOUBLE TAP TO LIKE ❤️', W / 2, cta1Y + 70);

      // Card 2: SHARE WITH DEV FRIENDS (Emerald Gradient)
      const cta2Y = 885;
      const shareGrad = ctx.createLinearGradient(cardX, cta2Y, cardX + cardW, cta2Y);
      shareGrad.addColorStop(0, '#04AA6D');
      shareGrad.addColorStop(1, '#028454');
      drawCard(ctx, cardX, cta2Y, cardW, 115, 28, shareGrad, '#ffffff');

      ctx.fillStyle = '#ffffff';
      ctx.font = '900 34px Segoe UI, system-ui, sans-serif';
      ctx.fillText('↗️ SHARE WITH DEV FRIENDS 🚀', W / 2, cta2Y + 70);

      // Card 3: FOLLOW ON INSTAGRAM (Instagram Vibrant Gradient)
      const cta3Y = 1030;
      const instaGrad = ctx.createLinearGradient(cardX, cta3Y, cardX + cardW, cta3Y);
      instaGrad.addColorStop(0, '#833ab4');
      instaGrad.addColorStop(0.5, '#fd1d1d');
      instaGrad.addColorStop(1, '#fcb045');
      drawCard(ctx, cardX, cta3Y, cardW, 115, 28, instaGrad, '#ffffff');

      ctx.fillStyle = '#ffffff';
      ctx.font = '900 32px Segoe UI, system-ui, sans-serif';
      ctx.fillText('📸 FOLLOW @nextsemacademy ON INSTAGRAM ✨', W / 2, cta3Y + 70);

      // ── BOTTOM SECTION: DIRECT WEBSITE & INSTAGRAM LINK CARD ──
      const botY = 1240;
      drawCard(ctx, 60, botY, W - 120, 230, 32, '#0c1328', '#04AA6D');

      ctx.fillStyle = '#ffffff';
      ctx.font = '900 32px Segoe UI, system-ui, sans-serif';
      ctx.fillText('🚀 Learn Web Development 100% Free', W / 2, botY + 54);

      ctx.fillStyle = '#94a3b8';
      ctx.font = 'bold 22px Segoe UI, sans-serif';
      ctx.fillText('HTML • CSS • JavaScript • React • Node.js • Git', W / 2, botY + 90);

      // Instagram URL Pill
      drawCard(ctx, W / 2 - 380, botY + 110, 760, 44, 22, '#161b26', '#e1306c');
      ctx.fillStyle = '#e1306c';
      ctx.font = 'bold 22px Segoe UI, sans-serif';
      ctx.fillText('📸 https://www.instagram.com/nextsemacademy/', W / 2, botY + 140);

      // Glowing Website URL Badge
      drawCard(ctx, W / 2 - 260, botY + 165, 520, 46, 23, '#161b26', '#00e676');
      ctx.fillStyle = '#00e676';
      ctx.font = 'bold 24px "Consolas", monospace';
      ctx.fillText('👉 https://nextsem.online', W / 2, botY + 196);
      ctx.textAlign = 'left';
    }

    // ── 5. SEQUENTIAL TIMELINE & FAST-TYPING SCRIPT ──
    const sleep = ms => new Promise(r => setTimeout(r, ms));

    const HTML_EXPANDED = [
      '<!-- Step 1: HTML5 Rose Skeleton (via Emmet) -->',
      '<div class="rose-container">',
      '  <div class="stem"></div>',
      '  <div class="leaves"></div>',
      '  <div class="rose-bud">',
      '    <div class="petal p1"></div>',
      '    <div class="petal p2"></div>',
      '    <div class="petal p3"></div>',
      '    <div class="petal p4"></div>',
      '    <div class="petal p5"></div>',
      '    <div class="petal p6"></div>',
      '  </div>',
      '</div>'
    ];

    const CSS_STEM = [
      '/* Step 2A: Natural Green Stem & Thorn */',
      '.stem {',
      '  width: 10px; height: 260px;',
      '  background: linear-gradient(#2d6a4f, #1b4332);',
      '}'
    ];

    const CSS_LEAVES = [
      '/* Step 2B: Leaves & Calyx */',
      '.leaves { background: #40916c; border-radius: 0 80% 0 80%; }'
    ];

    const CSS_PETALS = [
      '/* Step 2C: 3D Velvety Red Petals */',
      '.petal {',
      '  background: radial-gradient(circle, #ff2a5f, #8f072c, #420313);',
      '  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;',
      '  box-shadow: 0 4px 15px rgba(0,0,0,0.65);',
      '  animation: bloom 3s cubic-bezier(0.4, 0, 0.2, 1) forwards;',
      '}'
    ];

    const JS_SNIPPETS = [
      '// Step 3: Natural Spiral Blossom Math',
      'document.querySelectorAll(".petal").forEach((p, i) => {',
      '  p.style.setProperty("--rot", (i * 30) + "deg");',
      '});',
      'console.log("🌹 Blooming Rose Rendered!");'
    ];

    async function runScript() {
      // Start Background Music with Guaranteed Continuous Playback
      try {
        bgAudio.currentTime = 0;
        await bgAudio.play();
      } catch (err) {
        console.error('bgAudio play failed:', err);
      }

      await sleep(300);

      // ── STAGE 0 -> STAGE 1: Emmet HTML Fast-Track (0s - 7s) ──
      renderStage = 0; // Starts 100% blank screen!
      currentStepTitle = '1. VS Code Emmet: div.rose>div.petal*6';
      
      const emmetShort = 'div.rose-container>div.stem+div.leaves+div.rose-bud>div.petal*6';
      for (let i = 0; i < emmetShort.length; i++) {
        typedCode += emmetShort[i];
        if (Math.random() > 0.4) playKeyClick();
        await sleep(22);
      }

      // Show Emmet popup
      emmetTooltip = { text: 'div.rose-container > ...', x: 260, y: 310 };
      await sleep(500);

      // Press TAB ⇥ -> Instant expansion into HTML Wireframe!
      playEmmetExpand();
      emmetTooltip = null;
      typedCode = HTML_EXPANDED.join('\\n') + '\\n\\n';
      renderStage = 1; // Wireframe skeleton appears!
      await sleep(1000);

      // ── STAGE 2: CSS Step A - Green Stem & Thorn (7s - 12s) ──
      currentStepTitle = '2A. CSS3 Organic Stem & Thorn';
      for (const line of CSS_STEM) {
        for (let i = 0; i < line.length; i++) {
          typedCode += line[i];
          if (Math.random() > 0.5) playKeyClick();
          await sleep(15);
        }
        typedCode += '\\n';
        await sleep(20);
      }
      renderStage = 2; // Stem & thorn appear!
      await sleep(800);

      // ── STAGE 3: CSS Step B - Leaves & Calyx (12s - 16s) ──
      currentStepTitle = '2B. CSS3 Natural Leaves & Calyx';
      for (const line of CSS_LEAVES) {
        for (let i = 0; i < line.length; i++) {
          typedCode += line[i];
          if (Math.random() > 0.5) playKeyClick();
          await sleep(15);
        }
        typedCode += '\\n';
        await sleep(20);
      }
      renderStage = 3; // Leaves & calyx appear!
      await sleep(800);

      // ── STAGE 4: CSS Step C - Velvety Red Bud (16s - 21s) ──
      currentStepTitle = '2C. CSS3 3D Velvety Red Petals';
      for (const line of CSS_PETALS) {
        for (let i = 0; i < line.length; i++) {
          typedCode += line[i];
          if (Math.random() > 0.5) playKeyClick();
          await sleep(14);
        }
        typedCode += '\\n';
        await sleep(20);
      }
      renderStage = 4; // Crimson bud forms!
      await sleep(800);

      // ── STAGE 5: JS Spiral Math & Run Full Bloom (21s - 29.5s) ──
      currentStepTitle = '3. JS Golden Ratio Blossom Math';
      typedCode += '\\n';
      for (const line of JS_SNIPPETS) {
        for (let i = 0; i < line.length; i++) {
          typedCode += line[i];
          if (Math.random() > 0.5) playKeyClick();
          await sleep(14);
        }
        typedCode += '\\n';
        await sleep(15);
      }
      await sleep(500);

      // Click RUN & Trigger Full Organic Blossom
      currentStepTitle = '4. Live Execution: Full Blooming Rose';
      playRunClick();
      await sleep(200);
      playTriumphChords();
      renderStage = 5; // Triggers full blossom!
      showCtaCard = true; // Shows cute like & share CTA during bloom!

      // Smooth unrolling of all 3 layers of concentric petals
      const bloomStart = Date.now();
      const bloomDur = 4500;
      while (Date.now() - bloomStart < bloomDur) {
        const t = (Date.now() - bloomStart) / bloomDur;
        bloomProgress = Math.min(1.0, t);
        await sleep(16);
      }
      bloomProgress = 1.0;
      await sleep(1000);

      // ── STAGE 6: Official Nextsem Academy Splash Video Outro (29.5s - 33.5s) ──
      currentScene = 'splash';
      if (splashVideo) {
        splashVideo.currentTime = 0;
        splashVideo.play().catch(() => {});
      }
      await sleep(4000);

      // ── STAGE 7: Full-Screen Cute Like, Share & Subscribe End Scene (33.5s - 37s) ──
      currentScene = 'like_request';
      await sleep(3500);

      recorder.stop();
    }

    render();
    runScript();
  </script>
</body>
</html>`;

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(htmlContent);
  } else if (req.method === 'GET' && req.url === '/audio') {
    const audioPath = path.join(__dirname, '..', 'public', 'youtube_bg_audio_pxm.webm');
    if (fs.existsSync(audioPath)) {
      const audioData = fs.readFileSync(audioPath);
      res.writeHead(200, { 'Content-Type': 'audio/webm', 'Content-Length': audioData.length });
      res.end(audioData);
    } else {
      res.writeHead(404);
      res.end('Not found');
    }
  } else if (req.method === 'GET' && req.url === '/logo.png') {
    const logoFile = path.join(__dirname, '..', 'public', 'logo.png');
    if (fs.existsSync(logoFile)) {
      const data = fs.readFileSync(logoFile);
      res.writeHead(200, { 'Content-Type': 'image/png', 'Content-Length': data.length });
      res.end(data);
    } else {
      res.writeHead(404);
      res.end('Not found');
    }
  } else if (req.method === 'GET' && req.url.startsWith('/logo/')) {
    const videoFile = path.join(__dirname, '..', 'public', 'logo', 'nextsem-splash-animation.mp4');
    if (fs.existsSync(videoFile)) {
      const vidData = fs.readFileSync(videoFile);
      res.writeHead(200, { 'Content-Type': 'video/mp4', 'Content-Length': vidData.length });
      res.end(vidData);
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
      fs.writeFileSync(OUTPUT_FILE_WEBM, buffer);
      fs.writeFileSync(OUTPUT_FILE_MP4, buffer);
      console.log('SUCCESS: Step-by-step Blooming Rose 37s Video with Cute CTA saved to WebM and MP4! (' + buffer.length + ' bytes)');
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('OK');
      setTimeout(() => {
        server.close();
        process.exit(0);
      }, 800);
    });
  }
});

server.listen(PORT, () => {
  console.log('Blooming Rose Short generator server listening on port ' + PORT);

  const chromePath = fs.existsSync('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe')
    ? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
    : 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

  console.log('Launching browser to record Step-by-Step Blooming Rose Short:', chromePath);

  const args = [
    '--headless=new',
    '--disable-gpu',
    '--window-size=1080,1920',
    '--use-fake-ui-for-media-stream',
    '--autoplay-policy=no-user-gesture-required',
    '--no-sandbox',
    'http://localhost:' + PORT + '/'
  ];

  const child = spawn(chromePath, args, { stdio: 'ignore' });
  child.on('error', err => {
    console.error('Failed to launch browser:', err);
    server.close();
    process.exit(1);
  });
});
