const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const PORT = 9877;
const OUTPUT_FILE = path.join(__dirname, '..', 'public', 'terminal_fast_track_short.webm');
const OUTPUT_FILE_MP4 = path.join(__dirname, '..', 'public', 'terminal_fast_track_short.mp4');
const OUTPUT_FILE_DEMO = path.join(__dirname, '..', 'public', 'terminal_fast_track_demo.webm');

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>YouTube Short Terminal Generator (9:16) with Audio & Splash Outro</title>
  <style>
    body { margin: 0; background: #000000; display: flex; align-items: center; justify-content: center; height: 100vh; overflow: hidden; }
    canvas { width: 450px; height: 800px; }
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

    let currentScene = 'terminal'; // 'terminal' | 'splash'
    let splashStartTime = 0;

    // ── 1. AUDIO SYNTHESIZER SETUP (Web Audio API) ──
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const audioDest = audioCtx.createMediaStreamDestination();
    const masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(0.75, audioCtx.currentTime);
    masterGain.connect(audioDest);

    // Keystroke typing click SFX
    function playKeyClick() {
      try {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        const t = audioCtx.currentTime;
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(900 + Math.random() * 500, t);
        gain.gain.setValueAtTime(0.2, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.04);
        osc.connect(gain);
        gain.connect(masterGain);
        osc.start(t);
        osc.stop(t + 0.045);
      } catch (e) {}
    }

    // Enter key press thud SFX
    function playEnterKey() {
      try {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        const t = audioCtx.currentTime;
        osc.type = 'sine';
        osc.frequency.setValueAtTime(140, t);
        osc.frequency.exponentialRampToValueAtTime(40, t + 0.12);
        gain.gain.setValueAtTime(0.4, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
        osc.connect(gain);
        gain.connect(masterGain);
        osc.start(t);
        osc.stop(t + 0.13);
      } catch (e) {}
    }

    // Command execution confirmation beep
    function playSuccessBeep() {
      try {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        const t = audioCtx.currentTime;
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, t); // D5
        osc.frequency.setValueAtTime(880.00, t + 0.06); // A5
        gain.gain.setValueAtTime(0.2, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.2);
        osc.connect(gain);
        gain.connect(masterGain);
        osc.start(t);
        osc.stop(t + 0.22);
      } catch (e) {}
    }

    // Milestone Triumph Chord (C Major / G Major triumphant arpeggio)
    function playTriumphChord() {
      try {
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
        notes.forEach((freq, i) => {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          const t = audioCtx.currentTime + (i * 0.09);
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, t);
          gain.gain.setValueAtTime(0.25, t);
          gain.gain.exponentialRampToValueAtTime(0.001, t + 0.9);
          osc.connect(gain);
          gain.connect(masterGain);
          osc.start(t);
          osc.stop(t + 0.95);
        });
      } catch (e) {}
    }

    // Official Nextsem Splash Screen Arpeggio (Matches SplashScreen.tsx)
    function playSplashArpeggio() {
      try {
        const notes = [329.63, 392.0, 493.88, 659.25, 783.99]; // E minor arpeggio
        notes.forEach((freq, i) => {
          const t = audioCtx.currentTime + (i * 0.28);
          const osc = audioCtx.createOscillator();
          const env = audioCtx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, t);
          env.gain.setValueAtTime(0, t);
          env.gain.linearRampToValueAtTime(0.3, t + 0.05);
          env.gain.exponentialRampToValueAtTime(0.001, t + 0.75);
          osc.connect(env);
          env.connect(masterGain);
          osc.start(t);
          osc.stop(t + 0.8);
        });
      } catch (e) {}
    }

    // Subtle Lo-Fi Cyber Ambient Tech Beat
    function startAmbientGroove() {
      const bpm = 112;
      const beatInterval = 60 / bpm;
      let nextBeat = audioCtx.currentTime + 0.2;
      let beatCount = 0;

      function scheduleBeats() {
        while (nextBeat < audioCtx.currentTime + 0.8) {
          // Soft kick on beats 0 and 2
          if (beatCount % 2 === 0) {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.frequency.setValueAtTime(95, nextBeat);
            osc.frequency.exponentialRampToValueAtTime(38, nextBeat + 0.1);
            gain.gain.setValueAtTime(0.22, nextBeat);
            gain.gain.exponentialRampToValueAtTime(0.001, nextBeat + 0.1);
            osc.connect(gain);
            gain.connect(masterGain);
            osc.start(nextBeat);
            osc.stop(nextBeat + 0.11);
          }
          // Soft subtle hi-hat pulse on every beat
          const hatOsc = audioCtx.createOscillator();
          const hatGain = audioCtx.createGain();
          hatOsc.type = 'triangle';
          hatOsc.frequency.setValueAtTime(3200 + Math.random() * 400, nextBeat);
          hatGain.gain.setValueAtTime(0.035, nextBeat);
          hatGain.gain.exponentialRampToValueAtTime(0.0005, nextBeat + 0.03);
          hatOsc.connect(hatGain);
          hatGain.connect(masterGain);
          hatOsc.start(nextBeat);
          hatOsc.stop(nextBeat + 0.035);

          nextBeat += beatInterval;
          beatCount++;
        }
        if (currentScene === 'terminal') {
          setTimeout(scheduleBeats, 350);
        }
      }
      scheduleBeats();
    }

    // ── 2. COMBINED VIDEO + AUDIO MEDIA RECORDER ──
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
    
    const recorder = new MediaRecorder(combinedStream, { mimeType, videoBitsPerSecond: 8000000 });
    recorder.ondataavailable = (e) => {
      if (e.data && e.data.size > 0) recordedChunks.push(e.data);
    };
    recorder.onstop = async () => {
      fetch('/log?msg=' + encodeURIComponent('Recorder stopped. Uploading blob size: ' + recordedChunks.length));
      const blob = new Blob(recordedChunks, { type: mimeType });
      const arrayBuffer = await blob.arrayBuffer();
      await fetch('/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/octet-stream' },
        body: arrayBuffer
      });
      document.body.innerHTML = '<h1 style="color:white">Short with Audio & Splash Saved!</h1>';
    };

    recorder.start();

    // Helper: Draw authentic Black & White Windows 11 Logo (4-square grid)
    function drawWindowsLogo(ctx, x, y, size, color = '#ffffff') {
      const gap = size * 0.12;
      const s = (size - gap) / 2;
      ctx.fillStyle = color;
      ctx.fillRect(x, y, s, s);
      ctx.fillRect(x + s + gap, y, s, s);
      ctx.fillRect(x, y + s + gap, s, s);
      ctx.fillRect(x + s + gap, y + s + gap, s, s);
    }

    // Helper: Draw Black & White Verified Checkmark Badge
    function drawCheckmarkBadge(ctx, x, y, radius) {
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = '#000000';
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2.5;
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold ' + Math.round(radius * 1.2) + 'px Segoe UI, system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('✓', x, y + (radius * 0.4));
      ctx.textAlign = 'left';
    }

    function roundRect(ctx, x, y, w, h, r) {
      if (ctx.roundRect) {
        ctx.beginPath();
        ctx.roundRect(x, y, w, h, r);
        return;
      }
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

    // Visual Script Data
    const lines = [
      { type: 'system', text: 'Microsoft Windows [Version 10.0.22631.3007]' },
      { type: 'system', text: '(c) Microsoft Corporation. All rights reserved.' },
      { type: 'empty' }
    ];

    let currentPrompt = 'C:\\\\Users\\\\Developer>';
    let currentTyping = '';
    let currentStepLabel = 'STEP 1: CREATE PROJECT FOLDER';

    function drawTerminalScene() {
      const bgGrad = ctx.createLinearGradient(0, 0, 1080, 1920);
      bgGrad.addColorStop(0, '#06080f');
      bgGrad.addColorStop(0.5, '#0b0f19');
      bgGrad.addColorStop(1, '#000000');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, 1080, 1920);

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
      ctx.lineWidth = 1;
      for (let x = 0; x < 1080; x += 45) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, 1920); ctx.stroke();
      }
      for (let y = 0; y < 1920; y += 45) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(1080, y); ctx.stroke();
      }

      // Top Branding & Hook
      const logoW = 88;
      const logoH = 88;
      const logoX = (1080 - logoW) / 2;
      const logoY = 70;

      ctx.fillStyle = '#05070d';
      roundRect(ctx, logoX, logoY, logoW, logoH, 22);
      ctx.fill();

      ctx.strokeStyle = '#04AA6D';
      ctx.lineWidth = 3;
      roundRect(ctx, logoX, logoY, logoW, logoH, 22);
      ctx.stroke();

      ctx.fillStyle = '#04AA6D';
      ctx.font = '900 46px Segoe UI, system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('NS', 540, logoY + 60);

      ctx.font = 'bold 44px Segoe UI, system-ui, sans-serif';
      const textNextsem = 'Nextsem';
      const textOnline = '.online';
      const wNextsem = ctx.measureText(textNextsem).width;
      const wOnline = ctx.measureText(textOnline).width;
      const startX = (1080 - (wNextsem + wOnline)) / 2;

      ctx.textAlign = 'left';
      ctx.fillStyle = '#ffffff';
      ctx.fillText(textNextsem, startX, 215);
      ctx.fillStyle = '#04AA6D';
      ctx.fillText(textOnline, startX + wNextsem, 215);

      drawWindowsLogo(ctx, 360, 268, 28, '#ffffff');

      ctx.fillStyle = '#ffffff';
      ctx.font = '900 40px Segoe UI, system-ui, sans-serif';
      ctx.fillText('WINDOWS 11 TERMINAL', 405, 294);

      ctx.textAlign = 'center';
      ctx.fillStyle = '#04AA6D';
      ctx.font = '900 32px Segoe UI, system-ui, sans-serif';
      ctx.fillText('5 ESSENTIAL COMMANDS FOR WEB DEVELOPERS', 540, 345);

      const pillText = currentStepLabel;
      ctx.font = 'bold 21px "Cascadia Code", Consolas, monospace';
      const pillWidth = ctx.measureText(pillText).width + 56;
      const pillX = (1080 - pillWidth) / 2;

      ctx.fillStyle = '#090d16';
      roundRect(ctx, pillX, 385, pillWidth, 54, 27);
      ctx.fill();
      ctx.strokeStyle = '#04AA6D';
      ctx.lineWidth = 2;
      roundRect(ctx, pillX, 385, pillWidth, 54, 27);
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.fillText(pillText, 540, 420);
      ctx.textAlign = 'left';

      // Vertical Terminal Window
      const termX = 60;
      const termY = 470;
      const termW = 960;
      const termH = 1010;

      ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
      ctx.shadowBlur = 40;
      ctx.shadowOffsetY = 25;
      ctx.fillStyle = '#0c0c0c';
      roundRect(ctx, termX, termY, termW, termH, 20);
      ctx.fill();
      ctx.shadowColor = 'transparent';

      ctx.strokeStyle = '#2d3345';
      ctx.lineWidth = 2.5;
      roundRect(ctx, termX, termY, termW, termH, 20);
      ctx.stroke();

      ctx.fillStyle = '#1e222d';
      roundRectTop(ctx, termX, termY, termW, 60, 20);
      ctx.fill();
      ctx.strokeStyle = '#2d3345';
      ctx.stroke();

      drawWindowsLogo(ctx, termX + 24, termY + 20, 20, '#ffffff');

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 21px "Cascadia Code", Consolas, monospace';
      ctx.fillText('cmd.exe - Windows 11 Command Prompt', termX + 54, termY + 38);

      ctx.fillStyle = '#ffffff';
      ctx.font = '20px Consolas, monospace';
      ctx.fillText('─   □   ✕', termX + termW - 110, termY + 38);

      ctx.font = '23px "Cascadia Code", Consolas, monospace';
      let textY = termY + 115;
      const textX = termX + 32;
      const lineHeight = 38;

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
          ctx.font = 'bold 23px "Cascadia Code", Consolas, monospace';
          ctx.fillText(item.text, textX + promptWidth + 8, textY);
          ctx.font = '23px "Cascadia Code", Consolas, monospace';
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

      if (currentPrompt) {
        ctx.fillStyle = '#cbd5e1';
        ctx.fillText(currentPrompt, textX, textY);
        const promptWidth = ctx.measureText(currentPrompt).width;
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 23px "Cascadia Code", Consolas, monospace';
        ctx.fillText(currentTyping, textX + promptWidth + 8, textY);

        const typingWidth = ctx.measureText(currentTyping).width;
        if (Math.floor(Date.now() / 400) % 2 === 0) {
          ctx.fillStyle = '#04AA6D';
          ctx.fillRect(textX + promptWidth + typingWidth + 10, textY - 22, 14, 26);
        }
      }

      // Bottom Action Callout Card
      const bottomCardY = 1515;
      const bottomCardH = 325;
      ctx.fillStyle = '#080d1a';
      roundRect(ctx, termX, bottomCardY, termW, bottomCardH, 24);
      ctx.fill();
      ctx.strokeStyle = '#04AA6D';
      ctx.lineWidth = 2.5;
      roundRect(ctx, termX, bottomCardY, termW, bottomCardH, 24);
      ctx.stroke();

      drawCheckmarkBadge(ctx, 230, bottomCardY + 54, 18);

      ctx.fillStyle = '#ffffff';
      ctx.font = '900 24px Segoe UI, system-ui, sans-serif';
      ctx.fillText('STAGE 0: TERMINAL FEAR CONQUERED', 265, bottomCardY + 62);

      ctx.textAlign = 'center';
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 36px Segoe UI, system-ui, sans-serif';
      ctx.fillText('Ready to Build Real Web Apps?', 540, bottomCardY + 124);

      ctx.fillStyle = '#94a3b8';
      ctx.font = '500 24px Segoe UI, system-ui, sans-serif';
      ctx.fillText('Practice Live on Interactive Simulator:', 540, bottomCardY + 178);

      ctx.fillStyle = '#04AA6D';
      roundRect(ctx, 150, bottomCardY + 215, 780, 72, 20);
      ctx.fill();

      ctx.fillStyle = '#000000';
      ctx.font = '900 32px Segoe UI, system-ui, sans-serif';
      ctx.fillText('» https://nextsem.online/terminal-fast-track', 540, bottomCardY + 263);

      ctx.textAlign = 'left';
    }

    function drawSplashScene() {
      const elapsed = Date.now() - splashStartTime;
      const G = '#04AA6D';

      ctx.fillStyle = '#05070a';
      ctx.fillRect(0, 0, 1080, 1920);

      const glowGrad = ctx.createRadialGradient(540, 960, 20, 540, 960, 500);
      glowGrad.addColorStop(0, 'rgba(4, 170, 109, 0.22)');
      glowGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = glowGrad;
      ctx.fillRect(0, 0, 1080, 1920);

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 1;
      for (let x = 0; x < 1080; x += 60) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, 1920); ctx.stroke();
      }
      for (let y = 0; y < 1920; y += 60) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(1080, y); ctx.stroke();
      }

      if (elapsed < 1300) {
        const expandProgress = Math.min(1, Math.max(0, (elapsed - 300) / 700));

        ctx.textAlign = 'center';
        ctx.font = '900 110px Segoe UI, system-ui, sans-serif';
        ctx.fillStyle = G;
        ctx.shadowColor = G;
        ctx.shadowBlur = 35;

        const textToDraw = expandProgress > 0.3 ? 'NextSem' : 'NS';
        ctx.fillText(textToDraw, 540, 960);
        ctx.shadowColor = 'transparent';

        ctx.font = 'bold 32px Segoe UI, system-ui, sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.fillText('NEXTSEM ACADEMY', 540, 1060);

        ctx.font = '600 20px Segoe UI, system-ui, sans-serif';
        ctx.fillStyle = G;
        ctx.fillText('LEARN • BUILD • GET HIRED', 540, 1110);
      } else {
        const boxSize = 160;
        const boxX = (1080 - boxSize) / 2;
        const boxY = 820;

        ctx.shadowColor = 'rgba(4, 170, 109, 0.5)';
        ctx.shadowBlur = 50;
        ctx.fillStyle = '#080d1a';
        roundRect(ctx, boxX, boxY, boxSize, boxSize, 36);
        ctx.fill();

        ctx.strokeStyle = G;
        ctx.lineWidth = 4;
        roundRect(ctx, boxX, boxY, boxSize, boxSize, 36);
        ctx.stroke();
        ctx.shadowColor = 'transparent';

        ctx.textAlign = 'center';
        ctx.font = '900 80px Segoe UI, system-ui, sans-serif';
        ctx.fillStyle = G;
        ctx.fillText('NS', 540, boxY + 112);

        ctx.font = '900 52px Segoe UI, system-ui, sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.fillText('Nextsem Academy', 540, 1060);

        ctx.font = 'bold 22px Segoe UI, system-ui, sans-serif';
        ctx.fillStyle = G;
        ctx.fillText('LEARN · BUILD · GET HIRED', 540, 1115);

        const ctaW = 680;
        const ctaH = 74;
        const ctaX = (1080 - ctaW) / 2;
        const ctaY = 1170;

        ctx.fillStyle = '#0f172a';
        roundRect(ctx, ctaX, ctaY, ctaW, ctaH, 24);
        ctx.fill();

        ctx.strokeStyle = G;
        ctx.lineWidth = 2.5;
        roundRect(ctx, ctaX, ctaY, ctaW, ctaH, 24);
        ctx.stroke();

        ctx.font = '900 30px Segoe UI, system-ui, sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.fillText('https://nextsem.online', 540, ctaY + 48);

        const dotY = 1310;
        for (let i = 0; i < 3; i++) {
          const bounce = Math.sin((elapsed / 250) + (i * 0.8)) * 8;
          ctx.beginPath();
          ctx.arc(540 + (i - 1) * 32, dotY + bounce, 7, 0, Math.PI * 2);
          ctx.fillStyle = G;
          ctx.fill();
        }
      }

      ctx.textAlign = 'left';
    }

    function renderLoop() {
      if (currentScene === 'terminal') {
        drawTerminalScene();
      } else {
        drawSplashScene();
      }
      requestAnimationFrame(renderLoop);
    }
    renderLoop();

    const sleep = (ms) => new Promise(r => setTimeout(r, ms));

    async function typeCommand(cmd) {
      for (let i = 1; i <= cmd.length; i++) {
        currentTyping = cmd.slice(0, i);
        playKeyClick();
        await sleep(70);
      }
      await sleep(350);
      playEnterKey();
      lines.push({ type: 'cmd', prompt: currentPrompt, text: cmd });
      currentTyping = '';
    }

    async function runScript() {
      fetch('/log?msg=' + encodeURIComponent('Script started. Resuming audio...'));
      try {
        if (audioCtx.state === 'suspended') {
          await audioCtx.resume();
        }
      } catch (e) {}
      startAmbientGroove();
      await sleep(1000);

      // STEP 1: mkdir
      currentStepLabel = '1. CREATE FOLDER: mkdir my-portfolio';
      await typeCommand('mkdir my-portfolio');
      playSuccessBeep();
      await sleep(200);
      lines.push({ type: 'info', text: 'Directory created: C:\\\\Users\\\\Developer\\\\my-portfolio' });
      lines.push({ type: 'empty' });
      await sleep(1100);

      // STEP 2: cd
      currentStepLabel = '2. NAVIGATE IN: cd my-portfolio';
      await typeCommand('cd my-portfolio');
      playSuccessBeep();
      currentPrompt = 'C:\\\\Users\\\\Developer\\\\my-portfolio>';
      await sleep(200);
      lines.push({ type: 'empty' });
      await sleep(1100);

      // STEP 3: dir
      currentStepLabel = '3. INSPECT CONTENTS: dir';
      await typeCommand('dir');
      playSuccessBeep();
      await sleep(250);
      lines.push({ type: 'output', text: ' Directory of C:\\\\Users\\\\Developer\\\\my-portfolio' });
      lines.push({ type: 'output', text: '28-08-2026  10:00 AM    <DIR>          .' });
      lines.push({ type: 'output', text: '28-08-2026  10:00 AM    <DIR>          ..' });
      lines.push({ type: 'output', text: '               0 File(s)              0 bytes' });
      lines.push({ type: 'output', text: '               2 Dir(s)  128,450,224,000 bytes free' });
      lines.push({ type: 'empty' });
      await sleep(1200);

      // STEP 4: cls
      currentStepLabel = '4. CLEAR SCREEN: cls';
      await typeCommand('cls');
      playSuccessBeep();
      await sleep(350);
      lines.length = 0;
      lines.push({ type: 'system', text: 'Microsoft Windows [Version 10.0.22631.3007]' });
      lines.push({ type: 'system', text: 'Screen Cleared Successfully.' });
      lines.push({ type: 'empty' });
      await sleep(1100);

      // STEP 5: code .
      currentStepLabel = '5. LAUNCH VS CODE: code .';
      await typeCommand('code .');
      playSuccessBeep();
      await sleep(350);
      lines.push({ type: 'info', text: '[VS Code] Launching Visual Studio Code in current directory...' });
      lines.push({ type: 'info', text: 'Workspace loaded: my-portfolio' });
      lines.push({ type: 'empty' });
      await sleep(700);

      // CELEBRATION
      currentStepLabel = 'CERTIFIED: ALL 5 COMMANDS MASTERED';
      lines.push({ type: 'success', text: '==================================================' });
      lines.push({ type: 'success', text: '✓ 5 Sacred Commands Mastered (mkdir, cd, dir, cls, code)' });
      lines.push({ type: 'success', text: '✓ Ready to write HTML, CSS, and JavaScript in VS Code!' });
      lines.push({ type: 'success', text: '==================================================' });
      currentPrompt = '';
      playTriumphChord();

      await sleep(2200);

      // ── TRANSITION TO NEXTSEM ACADEMY SPLASH OUTRO ──
      splashStartTime = Date.now();
      currentScene = 'splash';
      playSplashArpeggio();

      await sleep(4000);
      recorder.stop();
    }

    runScript();
  </script>
</body>
</html>`;

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(htmlContent);
  } else if (req.url.startsWith('/log')) {
    console.log('BROWSER LOG:', decodeURIComponent(req.url));
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('OK');
  } else if (req.method === 'POST' && req.url === '/upload') {
    const chunks = [];
    req.on('data', chunk => chunks.push(chunk));
    req.on('end', () => {
      const buffer = Buffer.concat(chunks);
      fs.writeFileSync(OUTPUT_FILE, buffer);
      fs.writeFileSync(OUTPUT_FILE_MP4, buffer);
      fs.writeFileSync(OUTPUT_FILE_DEMO, buffer);
      console.log('SUCCESS: Video with Audio saved to WebM & MP4 (' + buffer.length + ' bytes)');
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
  console.log('YouTube Short generator server listening on port ' + PORT);

  const chromePath = fs.existsSync('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe')
    ? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
    : 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

  console.log('Launching headless browser for 9:16 Short with Audio:', chromePath);

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
