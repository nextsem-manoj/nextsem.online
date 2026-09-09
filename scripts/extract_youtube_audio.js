const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const YOUTUBE_URL = 'https://www.youtube.com/shorts/kxuFb0xaQGI';
const OUTPUT_AUDIO = path.join(__dirname, '..', 'public', 'youtube_bg_audio.webm');
const OUTPUT_AUDIO_MP4 = path.join(__dirname, '..', 'public', 'youtube_bg_audio.mp4');

async function extractAudio() {
  console.log('Extracting audio from:', YOUTUBE_URL);

  const chromePath = fs.existsSync('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe')
    ? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
    : 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

  console.log('Launching Chrome:', chromePath);

  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: false, // headful so audio plays and isn't throttled
    args: [
      '--autoplay-policy=no-user-gesture-required',
      '--disable-blink-features=AutomationControlled',
      '--no-sandbox',
      '--window-size=600,900'
    ]
  });

  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

  let audioBuffer = null;
  let audioMime = '';

  // Intercept network responses for direct googlevideo audio stream
  page.on('response', async (res) => {
    const url = res.url();
    if (url.includes('googlevideo.com') && (url.includes('mime=audio') || res.headers()['content-type']?.includes('audio'))) {
      try {
        console.log('Found audio stream from googlevideo! Downloading buffer...');
        const buf = await res.buffer();
        if (buf && buf.length > 50000) {
          console.log(`Captured audio stream chunk (${buf.length} bytes)`);
          if (!audioBuffer || buf.length > audioBuffer.length) {
            audioBuffer = buf;
            audioMime = res.headers()['content-type'] || 'audio/webm';
          }
        }
      } catch (e) {
        // stream might be closed or partial
      }
    }
  });

  try {
    await page.goto(YOUTUBE_URL, { waitUntil: 'domcontentloaded', timeout: 30000 });
    console.log('Page loaded. Waiting for video element...');

    // Wait for video to start playing and unmute
    await page.waitForSelector('video', { timeout: 15000 });
    await page.evaluate(() => {
      const v = document.querySelector('video');
      if (v) {
        v.muted = false;
        v.volume = 1.0;
        v.play().catch(() => {});
      }
    });

    // In-page MediaRecorder capture as guaranteed fallback
    await page.exposeFunction('saveAudioFromPage', (base64Data, mime) => {
      console.log('Received recorded audio from page, length:', base64Data.length, 'mime:', mime);
      const buffer = Buffer.from(base64Data, 'base64');
      fs.writeFileSync(OUTPUT_AUDIO, buffer);
      fs.writeFileSync(OUTPUT_AUDIO_MP4, buffer);
      console.log('SUCCESS: Saved audio to youtube_bg_audio.webm & mp4 (' + buffer.length + ' bytes)');
    });

    await page.evaluate(async () => {
      try {
        const video = document.querySelector('video');
        if (!video) return;

        // Capture stream from video element
        const stream = video.captureStream ? video.captureStream() : video.mozCaptureStream();
        const audioTracks = stream.getAudioTracks();
        if (audioTracks.length === 0) {
          console.log('No audio tracks in captureStream directly');
          return;
        }

        const audioStream = new MediaStream(audioTracks);
        let mimeType = 'audio/webm;codecs=opus';
        if (!MediaRecorder.isTypeSupported(mimeType)) mimeType = 'audio/webm';
        if (!MediaRecorder.isTypeSupported(mimeType)) mimeType = 'audio/mp4';

        const recorder = new MediaRecorder(audioStream, { mimeType });
        const chunks = [];
        recorder.ondataavailable = e => {
          if (e.data && e.data.size > 0) chunks.push(e.data);
        };
        recorder.onstop = async () => {
          const blob = new Blob(chunks, { type: mimeType });
          const reader = new FileReader();
          reader.onloadend = () => {
            const base64 = reader.result.split(',')[1];
            window.saveAudioFromPage(base64, mimeType);
          };
          reader.readAsDataURL(blob);
        };

        recorder.start();

        // Let it record for the full duration of the Short (~30-60s)
        const dur = (video.duration && !isNaN(video.duration) && video.duration > 5) ? Math.min(60, video.duration) : 35;
        setTimeout(() => {
          recorder.stop();
        }, dur * 1000 + 1000);
      } catch (err) {
        console.error('In-page recorder error:', err);
      }
    });

    console.log('Recording audio in background (waiting 35s)...');
    await new Promise(r => setTimeout(r, 38000));

    if (audioBuffer && (!fs.existsSync(OUTPUT_AUDIO) || fs.statSync(OUTPUT_AUDIO).size < 10000)) {
      console.log('Writing intercepted network audio buffer...');
      fs.writeFileSync(OUTPUT_AUDIO, audioBuffer);
      fs.writeFileSync(OUTPUT_AUDIO_MP4, audioBuffer);
      console.log('SUCCESS: Intercepted audio written:', audioBuffer.length, 'bytes');
    }

  } catch (err) {
    console.error('Error during extraction:', err);
  } finally {
    await browser.close();
  }
}

extractAudio().then(() => {
  console.log('Audio extraction finished.');
  process.exit(0);
}).catch(err => {
  console.error(err);
  process.exit(1);
});
