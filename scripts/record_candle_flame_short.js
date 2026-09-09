const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const PORT = 9889;
const OUTPUT_DIR = path.join(__dirname, '..', 'public');
const OUTPUT_FILE_WEBM = path.join(OUTPUT_DIR, 'candle_flame_developer_short.webm');
const OUTPUT_FILE_MP4 = path.join(OUTPUT_DIR, 'candle_flame_developer_short.mp4');

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Realistic Candle Flame 1-Min Short Generator</title>
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

  <script>
    window.onerror = function(msg, url, line) {
      fetch('/log?err=' + encodeURIComponent(msg + ' at line ' + line));
    };
    window.addEventListener('unhandledrejection', function(e) {
      fetch('/log?err=' + encodeURIComponent('Unhandled: ' + (e.reason ? (e.reason.message || e.reason) : 'unknown')));
    });

    const canvas = document.getElementById('c');
    const ctx = canvas.getContext('2d');
    const W = 1080;
    const H = 1920;

    let currentScene = 'editor'; // 'editor' | 'live_demo' | 'splash'
    let sceneStartTime = Date.now();
    let totalElapsedSeconds = 0;
    let typedCode = '';
    let currentPhase = 'html'; // 'html' | 'css' | 'js' | 'running'
    let currentStepTitle = '1. HTML5 Semantic Skeleton';

    // ── 1. WEB AUDIO API SYNTHESIZER (LO-FI CHILL BEAT + KEYSTROKES + SPLASH SOUND) ──
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const audioDest = audioCtx.createMediaStreamDestination();
    const masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(0.85, audioCtx.currentTime);
    masterGain.connect(audioDest);

    // Keystroke SFX
    function playKeyClick() {
      try {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        const t = audioCtx.currentTime;
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(800 + Math.random() * 600, t);
        gain.gain.setValueAtTime(0.12, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.035);
        osc.connect(gain);
        gain.connect(masterGain);
        osc.start(t);
        osc.stop(t + 0.04);
      } catch (e) {}
    }

    // Run code click SFX
    function playRunClick() {
      try {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        const t = audioCtx.currentTime;
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, t);
        osc.frequency.exponentialRampToValueAtTime(1200, t + 0.08);
        gain.gain.setValueAtTime(0.3, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
        osc.connect(gain);
        gain.connect(masterGain);
        osc.start(t);
        osc.stop(t + 0.2);
      } catch (e) {}
    }

    // Flame Ignite Whoosh Sound
    function playFlameIgnite() {
      try {
        const bufferSize = audioCtx.sampleRate * 0.6;
        const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.25));
        }
        const noise = audioCtx.createBufferSource();
        noise.buffer = buffer;
        const filter = audioCtx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(300, audioCtx.currentTime);
        filter.frequency.exponentialRampToValueAtTime(850, audioCtx.currentTime + 0.3);
        const gain = audioCtx.createGain();
        gain.gain.setValueAtTime(0.45, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.55);
        noise.connect(filter);
        filter.connect(gain);
        gain.connect(masterGain);
        noise.start(audioCtx.currentTime);
      } catch (e) {}
    }

    // Triumph Chords
    function playTriumphChords() {
      try {
        const chordNotes = [392.00, 493.88, 587.33, 783.99, 987.77]; // G maj9
        chordNotes.forEach((freq, idx) => {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          const t = audioCtx.currentTime + (idx * 0.08);
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, t);
          gain.gain.setValueAtTime(0.22, t);
          gain.gain.exponentialRampToValueAtTime(0.001, t + 1.2);
          osc.connect(gain);
          gain.connect(masterGain);
          osc.start(t);
          osc.stop(t + 1.3);
        });
      } catch (e) {}
    }

    // Nextsem Splash Outro Arpeggio
    function playSplashSound() {
      try {
        const splashNotes = [329.63, 392.00, 493.88, 659.25, 783.99, 987.77]; // E minor arpeggio
        splashNotes.forEach((freq, i) => {
          const t = audioCtx.currentTime + (i * 0.22);
          const osc = audioCtx.createOscillator();
          const env = audioCtx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, t);
          env.gain.setValueAtTime(0, t);
          env.gain.linearRampToValueAtTime(0.28, t + 0.05);
          env.gain.exponentialRampToValueAtTime(0.001, t + 0.85);
          osc.connect(env);
          env.connect(masterGain);
          osc.start(t);
          osc.stop(t + 0.9);
        });
      } catch (e) {}
    }

    // Continuous 1-Min Lo-Fi Coding Groove (Warm Rhodes & Mellow Beats)
    function startLofiCodingGroove() {
      const bpm = 84;
      const beatInterval = 60 / bpm;
      let nextBeat = audioCtx.currentTime + 0.1;
      let step = 0;

      // Chord progression: [Em9, Cmaj7, Am9, D7sus4]
      const chords = [
        [329.63, 392.00, 493.88, 587.33, 698.46], // Em9
        [261.63, 329.63, 392.00, 493.88, 587.33], // Cmaj7
        [220.00, 261.63, 329.63, 392.00, 493.88], // Am9
        [293.66, 392.00, 440.00, 587.33, 659.25]  // D7sus4
      ];

      function scheduleLoFi() {
        while (nextBeat < audioCtx.currentTime + 1.2) {
          const bar = Math.floor(step / 4) % chords.length;
          const beatInBar = step % 4;

          // 1. Soft Warm Rhodes Chord on Downbeat
          if (beatInBar === 0) {
            const chord = chords[bar];
            chord.forEach((freq) => {
              const osc = audioCtx.createOscillator();
              const gain = audioCtx.createGain();
              osc.type = 'triangle';
              osc.frequency.setValueAtTime(freq, nextBeat);
              gain.gain.setValueAtTime(0.065, nextBeat);
              gain.gain.exponentialRampToValueAtTime(0.0008, nextBeat + (beatInterval * 3.8));
              osc.connect(gain);
              gain.connect(masterGain);
              osc.start(nextBeat);
              osc.stop(nextBeat + (beatInterval * 3.9));
            });

            // Deep Warm Bass note
            const bassOsc = audioCtx.createOscillator();
            const bassGain = audioCtx.createGain();
            bassOsc.type = 'sine';
            bassOsc.frequency.setValueAtTime(chord[0] / 2, nextBeat);
            bassGain.gain.setValueAtTime(0.18, nextBeat);
            bassGain.gain.exponentialRampToValueAtTime(0.001, nextBeat + (beatInterval * 3.5));
            bassOsc.connect(bassGain);
            bassGain.connect(masterGain);
            bassOsc.start(nextBeat);
            bassOsc.stop(nextBeat + (beatInterval * 3.6));
          }

          // 2. Soft Lo-Fi Kick on beat 0 & 2.5
          if (beatInBar === 0 || beatInBar === 2) {
            const kickOsc = audioCtx.createOscillator();
            const kickGain = audioCtx.createGain();
            kickOsc.frequency.setValueAtTime(85, nextBeat);
            kickOsc.frequency.exponentialRampToValueAtTime(32, nextBeat + 0.12);
            kickGain.gain.setValueAtTime(0.28, nextBeat);
            kickGain.gain.exponentialRampToValueAtTime(0.001, nextBeat + 0.13);
            kickOsc.connect(kickGain);
            kickGain.connect(masterGain);
            kickOsc.start(nextBeat);
            kickOsc.stop(nextBeat + 0.14);
          }

          // 3. Relaxed Lo-Fi Snare/Rim on beat 1 & 3
          if (beatInBar === 1 || beatInBar === 3) {
            const snareOsc = audioCtx.createOscillator();
            const snareGain = audioCtx.createGain();
            snareOsc.type = 'triangle';
            snareOsc.frequency.setValueAtTime(220, nextBeat);
            snareGain.gain.setValueAtTime(0.09, nextBeat);
            snareGain.gain.exponentialRampToValueAtTime(0.001, nextBeat + 0.08);
            snareOsc.connect(snareGain);
            snareGain.connect(masterGain);
            snareOsc.start(nextBeat);
            snareOsc.stop(nextBeat + 0.09);
          }

          // 4. Subtle Hi-Hat Ticks
          const hatOsc = audioCtx.createOscillator();
          const hatGain = audioCtx.createGain();
          hatOsc.type = 'square';
          hatOsc.frequency.setValueAtTime(2800 + Math.random() * 400, nextBeat);
          hatGain.gain.setValueAtTime(0.025, nextBeat);
          hatGain.gain.exponentialRampToValueAtTime(0.0005, nextBeat + 0.03);
          hatOsc.connect(hatGain);
          hatGain.connect(masterGain);
          hatOsc.start(nextBeat);
          hatOsc.stop(nextBeat + 0.035);

          nextBeat += beatInterval;
          step++;
        }

        if (currentScene !== 'splash') {
          setTimeout(scheduleLoFi, 400);
        }
      }
      scheduleLoFi();
    }

    let bgMusicGain = null;
    let bgSource = null;

    async function startExtractedBgMusic() {
      try {
        const res = await fetch('/audio');
        const arrayBuffer = await res.arrayBuffer();
        const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);

        bgSource = audioCtx.createBufferSource();
        bgSource.buffer = audioBuffer;
        bgSource.loop = true;

        bgMusicGain = audioCtx.createGain();
        bgMusicGain.gain.setValueAtTime(0.85, audioCtx.currentTime);

        bgSource.connect(bgMusicGain);
        bgMusicGain.connect(masterGain);
        bgSource.start(audioCtx.currentTime);

        console.log('YouTube Short extracted audio playing seamlessly');
      } catch (err) {
        console.error('Audio load error, fallback to synth groove:', err);
        startLofiCodingGroove();
      }
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
      document.body.innerHTML = '<h1 style="color:white;font-family:sans-serif;">🔥 1-Min Candle Flame Short Video Saved!</h1>';
    };

    recorder.start();

    // ── 3. REALISTIC CANDLE FLAME PARTICLES & PHYSICS SIMULATOR ──
    const flameParticles = [];
    class SparkParticle {
      constructor(x, y) {
        this.x = x + (Math.random() - 0.5) * 16;
        this.y = y - Math.random() * 20;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = -(1.8 + Math.random() * 3.2);
        this.alpha = 1;
        this.size = 2.5 + Math.random() * 3.5;
        this.color = Math.random() > 0.4 ? '#ffdd00' : '#ff5500';
      }
      update() {
        this.x += this.vx + Math.sin(Date.now() * 0.008) * 0.8;
        this.y += this.vy;
        this.alpha -= 0.018;
        this.size *= 0.98;
      }
      draw(ctx) {
        if (this.alpha <= 0) return;
        ctx.save();
        ctx.globalAlpha = Math.max(0, this.alpha);
        ctx.fillStyle = this.color;
        ctx.shadowColor = '#ff6600';
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    function renderRealisticCandleFlame(ctx, cx, cy, scale = 1.0, flickerAmp = 1.0) {
      const now = Date.now() * 0.006;
      const sway = Math.sin(now * 1.8) * 4 * flickerAmp + Math.sin(now * 3.7) * 2 * flickerAmp;
      const pulse = 1 + Math.sin(now * 4.2) * 0.06 * flickerAmp;

      ctx.save();
      ctx.translate(cx, cy);
      ctx.scale(scale, scale);

      // A. Ambient Warm Room Illumination
      const roomGlow = ctx.createRadialGradient(0, -90, 10, 0, -90, 420);
      roomGlow.addColorStop(0, 'rgba(255, 140, 0, 0.45)');
      roomGlow.addColorStop(0.35, 'rgba(255, 80, 0, 0.18)');
      roomGlow.addColorStop(0.7, 'rgba(200, 50, 0, 0.06)');
      roomGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = roomGlow;
      ctx.fillRect(-500, -500, 1000, 1000);

      // B. Candle Base / Pedestal Shadow
      ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
      ctx.beginPath();
      ctx.ellipse(0, 240, 140, 32, 0, 0, Math.PI * 2);
      ctx.fill();

      // C. Realistic 3D Wax Candle Pillar
      const candleW = 120;
      const candleH = 260;
      const candleX = -candleW / 2;
      const candleY = -20;

      // Candle body gradient (lit from above by the warm flame)
      const waxGrad = ctx.createLinearGradient(candleX, 0, candleX + candleW, 0);
      waxGrad.addColorStop(0, '#7d6951');
      waxGrad.addColorStop(0.2, '#d6c4a5');
      waxGrad.addColorStop(0.5, '#fcedd4');
      waxGrad.addColorStop(0.8, '#c9b38e');
      waxGrad.addColorStop(1, '#5a4632');

      ctx.fillStyle = waxGrad;
      ctx.beginPath();
      ctx.roundRect(candleX, candleY, candleW, candleH, [0, 0, 16, 16]);
      ctx.fill();

      // Wax Melt Pool & Top Rim Ellipse
      const topWaxGrad = ctx.createRadialGradient(0, candleY, 5, 0, candleY, candleW / 2);
      topWaxGrad.addColorStop(0, '#fff4e0');
      topWaxGrad.addColorStop(0.6, '#e8d4b3');
      topWaxGrad.addColorStop(1, '#9e8463');

      ctx.fillStyle = topWaxGrad;
      ctx.beginPath();
      ctx.ellipse(0, candleY, candleW / 2, 18, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = 'rgba(255, 230, 180, 0.4)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Delicate 3D Wax Drips
      ctx.fillStyle = '#fcedd4';
      ctx.beginPath();
      // Left drip
      ctx.roundRect(candleX + 12, candleY + 12, 14, 55, 7);
      // Right long drip
      ctx.roundRect(candleX + candleW - 28, candleY + 8, 16, 95, 8);
      ctx.fill();

      // D. Burning Wick with Ember Tip
      ctx.beginPath();
      ctx.moveTo(-1, candleY + 4);
      ctx.quadraticCurveTo(-3, candleY - 22, -2 + (sway * 0.2), candleY - 38);
      ctx.strokeStyle = '#2b1b10';
      ctx.lineWidth = 5;
      ctx.lineCap = 'round';
      ctx.stroke();

      // Red-hot wick ember tip
      ctx.fillStyle = '#ff2200';
      ctx.shadowColor = '#ff4400';
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.arc(-2 + (sway * 0.2), candleY - 38, 3.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // E. HYPER-REALISTIC TEARDROP FLAME ENGINE
      const flameBaseX = -2 + (sway * 0.3);
      const flameBaseY = candleY - 34;
      const flameTipX = sway * 1.6;
      const flameTipY = flameBaseY - (145 * pulse);

      // 1. Massive Atmospheric Flame Halo / Bloom
      const haloGrad = ctx.createRadialGradient(0, flameBaseY - 60, 10, 0, flameBaseY - 60, 160);
      haloGrad.addColorStop(0, 'rgba(255, 170, 0, 0.65)');
      haloGrad.addColorStop(0.35, 'rgba(255, 90, 0, 0.35)');
      haloGrad.addColorStop(0.7, 'rgba(255, 30, 0, 0.12)');
      haloGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = haloGrad;
      ctx.beginPath();
      ctx.arc(0, flameBaseY - 60, 160, 0, Math.PI * 2);
      ctx.fill();

      // 2. Outer Fire Mantle (Radiant Orange/Crimson Teardrop)
      const outerGrad = ctx.createLinearGradient(0, flameBaseY, flameTipX, flameTipY);
      outerGrad.addColorStop(0, 'rgba(255, 40, 0, 0.95)');
      outerGrad.addColorStop(0.4, 'rgba(255, 120, 0, 0.9)');
      outerGrad.addColorStop(0.85, 'rgba(255, 200, 0, 0.85)');
      outerGrad.addColorStop(1, 'rgba(255, 100, 0, 0)');

      ctx.fillStyle = outerGrad;
      ctx.beginPath();
      ctx.moveTo(flameBaseX - 28, flameBaseY);
      ctx.bezierCurveTo(flameBaseX - 52, flameBaseY - 60, flameTipX - 25, flameTipY + 45, flameTipX, flameTipY);
      ctx.bezierCurveTo(flameTipX + 25, flameTipY + 45, flameBaseX + 52, flameBaseY - 60, flameBaseX + 28, flameBaseY);
      ctx.closePath();
      ctx.fill();

      // 3. Middle Bright Golden Body
      const midGrad = ctx.createLinearGradient(0, flameBaseY, flameTipX, flameTipY + 20);
      midGrad.addColorStop(0, 'rgba(255, 180, 0, 0.95)');
      midGrad.addColorStop(0.5, 'rgba(255, 235, 50, 0.95)');
      midGrad.addColorStop(0.9, 'rgba(255, 255, 200, 0.9)');
      midGrad.addColorStop(1, 'rgba(255, 220, 50, 0)');

      ctx.fillStyle = midGrad;
      ctx.beginPath();
      ctx.moveTo(flameBaseX - 18, flameBaseY - 2);
      ctx.bezierCurveTo(flameBaseX - 35, flameBaseY - 50, flameTipX - 15, flameTipY + 55, flameTipX, flameTipY + 15);
      ctx.bezierCurveTo(flameTipX + 15, flameTipY + 55, flameBaseX + 35, flameBaseY - 50, flameBaseX + 18, flameBaseY - 2);
      ctx.closePath();
      ctx.fill();

      // 4. Inner White-Hot Center Core
      const coreGrad = ctx.createLinearGradient(0, flameBaseY, flameTipX, flameTipY + 50);
      coreGrad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      coreGrad.addColorStop(0.6, 'rgba(255, 255, 220, 0.95)');
      coreGrad.addColorStop(1, 'rgba(255, 240, 150, 0)');

      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.moveTo(flameBaseX - 9, flameBaseY - 5);
      ctx.bezierCurveTo(flameBaseX - 18, flameBaseY - 35, flameTipX - 8, flameTipY + 70, flameTipX, flameTipY + 38);
      ctx.bezierCurveTo(flameTipX + 8, flameTipY + 70, flameBaseX + 18, flameBaseY - 35, flameBaseX + 9, flameBaseY - 5);
      ctx.closePath();
      ctx.fill();

      // 5. Authentic Cyan/Blue Base Combustion Layer (Right above wick)
      const blueGrad = ctx.createRadialGradient(0, flameBaseY + 2, 2, 0, flameBaseY - 8, 24);
      blueGrad.addColorStop(0, 'rgba(0, 220, 255, 0.9)');
      blueGrad.addColorStop(0.5, 'rgba(0, 100, 255, 0.75)');
      blueGrad.addColorStop(1, 'rgba(0, 30, 200, 0)');

      ctx.fillStyle = blueGrad;
      ctx.beginPath();
      ctx.ellipse(0, flameBaseY - 3, 22, 14, 0, 0, Math.PI * 2);
      ctx.fill();

      // F. Emit & Draw Dynamic Heat Particles
      if (Math.random() > 0.35) {
        flameParticles.push(new SparkParticle(flameTipX, flameTipY + 25));
      }

      for (let i = flameParticles.length - 1; i >= 0; i--) {
        const p = flameParticles[i];
        p.update();
        p.draw(ctx);
        if (p.alpha <= 0) flameParticles.splice(i, 1);
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

    // Helper: Draw Windows 11 Logo Badge
    function drawWindowsLogo(ctx, x, y, size, color = '#ffffff') {
      const gap = size * 0.12;
      const s = (size - gap) / 2;
      ctx.fillStyle = color;
      ctx.fillRect(x, y, s, s);
      ctx.fillRect(x + s + gap, y, s, s);
      ctx.fillRect(x, y + s + gap, s, s);
      ctx.fillRect(x + s + gap, y + s + gap, s, s);
    }

    // ── 4. RENDER LOOP (60 FPS MASTER DIRECTOR) ──
    function render() {
      totalElapsedSeconds = (Date.now() - sceneStartTime) / 1000;

      // Clear Canvas Frame
      ctx.fillStyle = '#0a0c10';
      ctx.fillRect(0, 0, W, H);

      if (currentScene === 'splash') {
        renderSplashScreen(ctx, totalElapsedSeconds);
      } else {
        renderMainShowcase(ctx, totalElapsedSeconds);
      }

      requestAnimationFrame(render);
    }

    // ── SCENE A: FAST-TYPING DEVELOPER IDE & SPLIT PREVIEW ──
    function renderMainShowcase(ctx, elapsed) {
      // 1. Background Grid & Subtle Ambient Glow
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

      // ── TOP NAVIGATION & STUDIO BRANDING ──
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 36px Segoe UI, system-ui, sans-serif';
      ctx.fillText('⚡ NEXTSEM CODE STUDIO', 60, 80);

      // Time Badge
      const timerSecs = Math.min(37, Math.floor(elapsed));
      const timeStr = '0:' + (timerSecs < 10 ? '0' : '') + timerSecs + ' / 0:37';
      drawCard(ctx, W - 260, 48, 200, 44, 22, '#161b26', '#04AA6D');
      ctx.fillStyle = '#04AA6D';
      ctx.font = 'bold 22px "Consolas", monospace';
      ctx.fillText('⏱ ' + timeStr, W - 240, 78);

      // Subtitle & Project Tag
      ctx.fillStyle = '#94a3b8';
      ctx.font = '500 24px Segoe UI, system-ui, sans-serif';
      ctx.fillText('Project: Realistic Candle Flame Engine • HTML + CSS + JS', 60, 120);

      // Step Pill Badge
      drawCard(ctx, 60, 145, 420, 40, 20, 'rgba(4, 170, 109, 0.15)', 'rgba(4, 170, 109, 0.4)');
      ctx.fillStyle = '#04AA6D';
      ctx.font = 'bold 20px Segoe UI, sans-serif';
      ctx.fillText('🎯 ' + currentStepTitle, 80, 172);

      // ── MAIN VS CODE / NEXTSEM WORKSPACE WINDOW ──
      const winX = 50;
      const winY = 210;
      const winW = W - 100;
      const winH = 920;

      // Window Outer Card
      drawCard(ctx, winX, winY, winW, winH, 20, '#1e1e1e', '#2d3748');

      // 1. VS Code Title Bar
      drawCard(ctx, winX, winY, winW, 56, [20, 20, 0, 0], '#181818', '#2d2d2d');
      // Window Dots
      ctx.fillStyle = '#ff5f56'; ctx.beginPath(); ctx.arc(winX + 28, winY + 28, 8, 0, Math.PI*2); ctx.fill();
      ctx.fillStyle = '#ffbd2e'; ctx.beginPath(); ctx.arc(winX + 52, winY + 28, 8, 0, Math.PI*2); ctx.fill();
      ctx.fillStyle = '#27c93f'; ctx.beginPath(); ctx.arc(winX + 76, winY + 28, 8, 0, Math.PI*2); ctx.fill();

      ctx.fillStyle = '#cccccc';
      ctx.font = 'bold 20px Segoe UI, sans-serif';
      ctx.fillText('index.html — Nextsem IDE', winX + 110, winY + 35);

      // 2. Editor Tabs Bar
      drawCard(ctx, winX, winY + 56, winW, 46, 0, '#252526', '#1e1e1e');
      drawCard(ctx, winX, winY + 56, 180, 46, 0, '#1e1e1e');
      ctx.fillStyle = '#007acc';
      ctx.fillRect(winX, winY + 56, 180, 3);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 18px "Consolas", monospace';
      ctx.fillText('📄 index.html', winX + 24, winY + 86);

      // Run Simulation Button in Tab Bar
      const isRunPhase = currentPhase === 'running' || elapsed >= 44;
      drawCard(ctx, winX + winW - 140, winY + 62, 120, 34, 8, isRunPhase ? '#04AA6D' : '#04AA6D', '#20c997');
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 16px Segoe UI, sans-serif';
      ctx.fillText('▶ RUN', winX + winW - 105, winY + 85);

      // 3. Code Editor Lines & Gutter
      const gutterW = 60;
      ctx.fillStyle = '#1e1e1e';
      ctx.fillRect(winX + 1, winY + 102, winW - 2, winH - 148);

      // Line Number Gutter
      ctx.fillStyle = '#181818';
      ctx.fillRect(winX + 1, winY + 102, gutterW, winH - 148);
      ctx.strokeStyle = '#2d2d2d';
      ctx.beginPath();
      ctx.moveTo(winX + gutterW, winY + 102);
      ctx.lineTo(winX + gutterW, winY + winH - 46);
      ctx.stroke();

      // Render Code Lines
      const codeLines = typedCode.split('\\n');
      ctx.font = '22px "Consolas", "Courier New", monospace';
      for (let i = 0; i < Math.min(26, codeLines.length); i++) {
        const lineY = winY + 138 + (i * 31);
        // Line number
        ctx.fillStyle = '#858585';
        ctx.textAlign = 'right';
        ctx.fillText((i + 1).toString(), winX + gutterW - 14, lineY);
        ctx.textAlign = 'left';

        // Syntax Highlighting Text
        renderSyntaxLine(ctx, codeLines[i], winX + gutterW + 20, lineY);
      }

      // Cursor Blinking at current line
      if (elapsed < 44 && Math.floor(Date.now() / 400) % 2 === 0) {
        const lastLineIdx = Math.min(25, codeLines.length - 1);
        const curY = winY + 138 + (lastLineIdx * 31);
        const lastLineWidth = ctx.measureText(codeLines[lastLineIdx] || '').width;
        ctx.fillStyle = '#04AA6D';
        ctx.fillRect(winX + gutterW + 20 + lastLineWidth + 4, curY - 22, 10, 26);
      }

      // 4. Editor Bottom Status Bar
      drawCard(ctx, winX, winY + winH - 46, winW, 46, [0, 0, 20, 20], '#007acc');
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 18px Segoe UI, sans-serif';
      ctx.fillText('⊞ main*  |  Port: 5500 (Live Server)  |  HTML5 & CSS3', winX + 24, winY + winH - 17);
      ctx.fillText('UTF-8  |  Prettier ✓', winX + winW - 180, winY + winH - 17);

      // ── BOTTOM LIVE PREVIEW WORKSPACE (EXPANDS WITH REALISTIC CANDLE FLAME) ──
      const prevX = 50;
      const prevY = 1170;
      const prevW = W - 100;
      const prevH = 680;

      drawCard(ctx, prevX, prevY, prevW, prevH, 24, '#090b10', '#04AA6D');

      // Live Preview Top Bar
      drawCard(ctx, prevX, prevY, prevW, 52, [24, 24, 0, 0], '#161922', '#222736');
      ctx.fillStyle = '#22c55e';
      ctx.beginPath(); ctx.arc(prevX + 28, prevY + 26, 6, 0, Math.PI * 2); ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 20px Segoe UI, sans-serif';
      ctx.fillText('🌐 Live Execution: http://127.0.0.1:5500/candle-flame', prevX + 46, prevY + 33);

      // Render Candle Flame Inside Live Preview Canvas
      const flameCenterX = prevX + (prevW / 2);
      const flameCenterY = prevY + 390;

      if (elapsed >= 18) {
        // Candle Flame is Active & Flickering!
        const flameScale = 1.35;
        const flickerIntensity = elapsed >= 44 ? 1.2 : 0.8;
        renderRealisticCandleFlame(ctx, flameCenterX, flameCenterY, flameScale, flickerIntensity);

        // Feature Highlights Overlay
        drawCard(ctx, prevX + 30, prevY + prevH - 80, prevW - 60, 52, 14, 'rgba(0, 0, 0, 0.75)', 'rgba(4, 170, 109, 0.5)');
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 20px Segoe UI, sans-serif';
        ctx.fillText('🔥 100% Pure CSS3 & HTML5 Realistic Flame • Zero Image Assets', prevX + 50, prevY + prevH - 48);
      } else {
        // Initial Waiting State
        ctx.fillStyle = '#64748b';
        ctx.font = 'italic 24px Segoe UI, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Writing HTML structure... Candle flame will ignite in live preview', prevX + (prevW / 2), prevY + 340);
        ctx.textAlign = 'left';
      }
    }

    // Helper: Code Syntax Highlighting
    function renderSyntaxLine(ctx, text, x, y) {
      if (!text) return;
      if (text.startsWith('<!--') || text.startsWith('/*') || text.startsWith('//')) {
        ctx.fillStyle = '#6a9955'; // Comment Green
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

    // ── SCENE B: NEXTSEM ACADEMY OFFICIAL LUXURY SPLASH ANIMATION (LAST 6 SECONDS) ──
    function renderSplashScreen(ctx, elapsed) {
      const splashAge = (Date.now() - splashStartTime) / 1000;

      // Dark Deep Luxury Gradient
      const bgGrad = ctx.createRadialGradient(W / 2, H / 2, 50, W / 2, H / 2, 900);
      bgGrad.addColorStop(0, '#101726');
      bgGrad.addColorStop(0.5, '#0a0d14');
      bgGrad.addColorStop(1, '#05070a');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, W, H);

      // Glowing Ambient Rings
      const ringPulse = 1 + Math.sin(splashAge * 3.5) * 0.08;
      ctx.save();
      ctx.translate(W / 2, H / 2 - 120);

      // Ring 1 (Gold)
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.4)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(0, 0, 180 * ringPulse, 0, Math.PI * 2);
      ctx.stroke();

      // Ring 2 (Emerald)
      ctx.strokeStyle = 'rgba(4, 170, 109, 0.6)';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(0, 0, 140 * (2 - ringPulse), 0, Math.PI * 2);
      ctx.stroke();

      // Golden NS Logo Hexagon / Shield
      drawCard(ctx, -90, -90, 180, 180, 40, '#0c1328', '#c1a648');
      ctx.fillStyle = '#c1a648';
      ctx.font = '900 84px Segoe UI, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('NS', 0, 32);

      ctx.restore();

      // Brand Title Typography
      ctx.textAlign = 'center';
      ctx.fillStyle = '#ffffff';
      ctx.font = '900 68px Segoe UI, system-ui, sans-serif';
      ctx.fillText('nextsem.online', W / 2, H / 2 + 150);

      // Golden/Emerald Accent Line
      const lineGrad = ctx.createLinearGradient(W/2 - 250, 0, W/2 + 250, 0);
      lineGrad.addColorStop(0, 'rgba(4, 170, 109, 0)');
      lineGrad.addColorStop(0.5, '#04AA6D');
      lineGrad.addColorStop(1, 'rgba(193, 166, 72, 0)');
      ctx.fillStyle = lineGrad;
      ctx.fillRect(W / 2 - 250, H / 2 + 180, 500, 4);

      // Tagline
      ctx.fillStyle = '#94a3b8';
      ctx.font = '600 32px Segoe UI, sans-serif';
      ctx.fillText('Learn Full-Stack Web Development 100% Free', W / 2, H / 2 + 240);

      // 3 Action Feature Badges
      const bY = H / 2 + 320;
      drawCard(ctx, W/2 - 380, bY, 230, 64, 16, '#111827', '#04AA6D');
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 22px Segoe UI, sans-serif';
      ctx.fillText('💻 Online IDE', W/2 - 265, bY + 40);

      drawCard(ctx, W/2 - 115, bY, 230, 64, 16, '#111827', '#04AA6D');
      ctx.fillStyle = '#ffffff';
      ctx.fillText('🔥 Real Projects', W/2, bY + 40);

      drawCard(ctx, W/2 + 150, bY, 230, 64, 16, '#111827', '#04AA6D');
      ctx.fillStyle = '#ffffff';
      ctx.fillText('🚀 Zero Setup', W/2 + 265, bY + 40);

      // Bottom URL
      ctx.fillStyle = '#04AA6D';
      ctx.font = 'bold 36px Segoe UI, sans-serif';
      ctx.fillText('👉 Visit nextsem.online Today', W / 2, H - 120);

      ctx.textAlign = 'left';
    }

    // ── 5. SEQUENTIAL TIMELINE & FAST-TYPING SCRIPT ──
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    let splashStartTime = 0;

    const HTML_SNIPPETS = [
      '<!-- Step 1: Candle Flame Skeleton -->',
      '<div class="candle-container">',
      '  <div class="wax-pillar">',
      '    <div class="wick"></div>',
      '    <div class="flame">',
      '      <div class="flame-core"></div>',
      '      <div class="flame-inner"></div>',
      '    </div>',
      '  </div>',
      '</div>'
    ];

    const CSS_SNIPPETS = [
      '/* Step 2: Realistic Flame CSS3 */',
      '.wax-pillar {',
      '  width: 100px; height: 220px;',
      '  background: linear-gradient(#fcedd4, #c9b38e);',
      '  border-radius: 8px 8px 16px 16px;',
      '}',
      '.flame {',
      '  width: 45px; height: 110px;',
      '  background: radial-gradient(#fff, #ffd700, #ff4500);',
      '  border-radius: 50% 50% 35% 35% / 80% 80% 20% 20%;',
      '  filter: drop-shadow(0 0 35px #ff5500);',
      '  animation: flicker 0.1s infinite alternate;',
      '}',
      '.flame-core {',
      '  background: radial-gradient(#00e5ff, #0033cc);',
      '}'
    ];

    const JS_SNIPPETS = [
      '// Step 3: Dynamic Wind & Heat Physics',
      'const flame = document.querySelector(".flame");',
      'window.addEventListener("mousemove", (e) => {',
      '  const wind = (e.clientX - window.innerWidth/2) * 0.05;',
      '  flame.style.transform = "skewX(" + wind + "deg)";',
      '});',
      'console.log("🔥 Candle Flame Engine Running!");'
    ];

    async function typeCodeSnippet(lines, speedMs = 35) {
      for (const line of lines) {
        for (let i = 0; i < line.length; i++) {
          typedCode += line[i];
          if (Math.random() > 0.4) playKeyClick();
          await sleep(speedMs + (Math.random() * 20));
        }
        typedCode += '\\n';
        await sleep(speedMs * 2);
      }
    }

    async function runScript() {
      // Start Extracted YouTube Short Background Music
      await startExtractedBgMusic();
      await sleep(500);

      // Phase 1: HTML Skeleton (0s - 8s)
      currentPhase = 'html';
      currentStepTitle = '1. HTML5 Structure (div.candle)';
      await typeCodeSnippet(HTML_SNIPPETS, 20);
      playFlameIgnite();
      await sleep(800);

      // Phase 2: CSS Realism (8s - 19s)
      currentPhase = 'css';
      currentStepTitle = '2. CSS3 Gradients & Organic Glow';
      typedCode += '\\n';
      await typeCodeSnippet(CSS_SNIPPETS, 16);
      playFlameIgnite();
      await sleep(800);

      // Phase 3: JavaScript Physics (19s - 25s)
      currentPhase = 'js';
      currentStepTitle = '3. JS Dynamic Wind & Spark Turbulence';
      typedCode += '\\n';
      await typeCodeSnippet(JS_SNIPPETS, 15);
      await sleep(600);

      // Phase 4: Click Run & Live Celebration (25s - 31s)
      currentPhase = 'running';
      currentStepTitle = '4. Live Execution: Realistic Candle Flame';
      playRunClick();
      await sleep(350);
      playTriumphChords();
      await sleep(5500);

      // Phase 5: Official Nextsem Academy Splash Outro (31s - 37s)
      splashStartTime = Date.now();
      currentScene = 'splash';
      playSplashSound();

      await sleep(5800);
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
      console.log('SUCCESS: 37s YouTube Short Video with Audio saved to WebM and MP4! (' + buffer.length + ' bytes)');
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
  console.log('Candle Flame Short generator server listening on port ' + PORT);

  const chromePath = fs.existsSync('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe')
    ? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
    : 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

  console.log('Launching browser to record 1-Min Realistic Candle Flame Short:', chromePath);

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
