const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer-core");

// Find Chrome or Edge executable on Windows
const browserPaths = [
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe"
];

let executablePath = browserPaths.find(p => fs.existsSync(p));
if (!executablePath) {
  console.error("No browser executable found.");
  process.exit(1);
}

const svgIconHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body { width: 512px; height: 512px; background: transparent; overflow: hidden; display: flex; align-items: center; justify-content: center; }
    .icon-box {
      width: 512px; height: 512px; border-radius: 110px; background: #080d1a;
      border: 28px solid #04AA6D; display: flex; align-items: center; justify-content: center;
      box-shadow: 0 0 40px rgba(4,170,109,0.5); position: relative;
    }
    .ns-text {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      font-size: 210px; font-weight: 900; color: #04AA6D; line-height: 1; letter-spacing: -6px;
      transform: translateY(4px); text-align: center;
    }
  </style>
</head>
<body>
  <div class="icon-box">
    <div class="ns-text">NS</div>
  </div>
</body>
</html>
`;

const targets = [
  // Web & PWA icons
  { path: path.join(__dirname, "../public/icon-512x512.png"), size: 512 },
  { path: path.join(__dirname, "../public/icon-192x192.png"), size: 192 },
  { path: path.join(__dirname, "../public/apple-touch-icon.png"), size: 180 },
  { path: path.join(__dirname, "../public/favicon.png"), size: 512 },
  { path: path.join(__dirname, "../public/favicon-32x32.png"), size: 32 },
  { path: path.join(__dirname, "../public/favicon-16x16.png"), size: 16 },

  // Android mipmap icons (Phones)
  { path: path.join(__dirname, "../android/app/src/main/res/mipmap-mdpi/ic_launcher.png"), size: 48 },
  { path: path.join(__dirname, "../android/app/src/main/res/mipmap-mdpi/ic_launcher_round.png"), size: 48 },
  { path: path.join(__dirname, "../android/app/src/main/res/mipmap-mdpi/ic_launcher_foreground.png"), size: 48 },

  { path: path.join(__dirname, "../android/app/src/main/res/mipmap-hdpi/ic_launcher.png"), size: 72 },
  { path: path.join(__dirname, "../android/app/src/main/res/mipmap-hdpi/ic_launcher_round.png"), size: 72 },
  { path: path.join(__dirname, "../android/app/src/main/res/mipmap-hdpi/ic_launcher_foreground.png"), size: 72 },

  { path: path.join(__dirname, "../android/app/src/main/res/mipmap-xhdpi/ic_launcher.png"), size: 96 },
  { path: path.join(__dirname, "../android/app/src/main/res/mipmap-xhdpi/ic_launcher_round.png"), size: 96 },
  { path: path.join(__dirname, "../android/app/src/main/res/mipmap-xhdpi/ic_launcher_foreground.png"), size: 96 },

  { path: path.join(__dirname, "../android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png"), size: 144 },
  { path: path.join(__dirname, "../android/app/src/main/res/mipmap-xxhdpi/ic_launcher_round.png"), size: 144 },
  { path: path.join(__dirname, "../android/app/src/main/res/mipmap-xxhdpi/ic_launcher_foreground.png"), size: 144 },

  { path: path.join(__dirname, "../android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png"), size: 192 },
  { path: path.join(__dirname, "../android/app/src/main/res/mipmap-xxxhdpi/ic_launcher_round.png"), size: 192 },
  { path: path.join(__dirname, "../android/app/src/main/res/mipmap-xxxhdpi/ic_launcher_foreground.png"), size: 192 },
];

async function generateAllAppIcons() {
  console.log("Launching browser for high-res app icon generation...");
  const browser = await puppeteer.launch({
    executablePath,
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--font-render-hinting=none"]
  });

  const page = await browser.newPage();
  await page.setContent(svgIconHtml, { waitUntil: "domcontentloaded" });

  for (const t of targets) {
    const dir = path.dirname(t.path);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    await page.setViewport({ width: 512, height: 512, deviceScaleFactor: t.size / 512 });
    await page.screenshot({ path: t.path, type: "png", omitBackground: false });
    console.log(`Generated: ${t.path} (${t.size}x${t.size})`);
  }

  await browser.close();
  console.log("All Phone & Web app icons generated successfully with official green NS monogram!");
}

generateAllAppIcons().catch(console.error);
