const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const YOUTUBE_URL = 'https://www.youtube.com/shorts/PxM9xoBoxng';
const OUTPUT_AUDIO = path.join(__dirname, '..', 'public', 'youtube_bg_audio_pxm.webm');
const OUTPUT_AUDIO_MP4 = path.join(__dirname, '..', 'public', 'youtube_bg_audio_pxm.mp4');

async function extractAudio() {
  console.log('Extracting audio from:', YOUTUBE_URL);

  const chromePath = fs.existsSync('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe')
    ? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
    : 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

  console.log('Launching Chrome:', chromePath);

  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: false,
    args: [
      '--autoplay-policy=no-user-gesture-required',
      '--disable-blink-features=AutomationControlled',
      '--no-sandbox',
      '--window-size=600,900'
    ]
  });

  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

  try {
    await page.goto(YOUTUBE_URL, { waitUntil: 'domcontentloaded', timeout: 30000 });
    console.log('Page loaded. Waiting for video element...');

    await page.waitForSelector('video', { timeout: 15000 });
    await page.evaluate(() => {
      const v = document.querySelector('video');
      if (v) {
        v.muted = false;
        v.volume = 1.0;
        v.currentTime = 0;
        v.play().catch(() => {});
      }
    });

    // In-page MediaRecorder capture as guaranteed fallback
    await page.exposeFunction('saveAudioFromPage', (base64Data, mime, duration) => {
      console.log('Received recorded audio from page, length:', base64Data.length, 'duration:', duration);
      const buffer = Buffer.from(base64Data, 'base64');
      fs.writeFileSync(OUTPUT_AUDIO, buffer);
      fs.writeFileSync(OUTPUT_AUDIO_MP4, buffer);
      fs.writeFileSync(path.join(__dirname, 'audio_info.json'), JSON.stringify({ duration, size: buffer.length }));
      console.log('SUCCESS: Saved audio to youtube_bg_audio_pxm.webm & mp4 (' + buffer.length + ' bytes)');
    });

    const videoDuration = await page.evaluate(async () => {
      try {
        const video = document.querySelector('video');
        if (!video) return 35;

        const dur = (video.duration && !isNaN(video.duration) && video.duration > 3) ? video.duration : 35;
        console.log('Detected Short duration:', dur);

        const stream = video.captureStream ? video.captureStream() : video.mozCaptureStream();
        const audioTracks = stream.getAudioTracks();
        if (audioTracks.length === 0) {
          console.log('No audio tracks in captureStream directly');
          return dur;
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
            window.saveAudioFromPage(base64, mimeType, dur);
          };
          reader.readAsDataURL(blob);
        };

        recorder.start();

        setTimeout(() => {
          recorder.stop();
        }, dur * 1000 + 1000);

        return dur;
      } catch (err) {
        console.error('In-page recorder error:', err);
        return 35;
      }
    });

    console.log(`Recording audio for ${videoDuration} seconds...`);
    await new Promise(r => setTimeout(r, (videoDuration + 3) * 1000));

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
