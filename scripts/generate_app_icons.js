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

const iconHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body {
      width: 512px;
      height: 512px;
      background: #080d1a;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .icon-card {
      width: 440px;
      height: 440px;
      border-radius: 96px;
      background: #080d1a;
      border: 24px solid #04AA6D;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 50px rgba(4, 170, 109, 0.45), inset 0 0 30px rgba(4, 170, 109, 0.15);
      position: relative;
    }
    .ns-monogram {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      font-size: 210px;
      font-weight: 900;
      color: #04AA6D;
      line-height: 1;
      letter-spacing: -6px;
      transform: translateY(4px);
      text-align: center;
      text-shadow: 0 0 20px rgba(4, 170, 109, 0.4);
    }
  </style>
</head>
<body>
  <div class="icon-card">
    <div class="ns-monogram">NS</div>
  </div>
</body>
</html>
`;

const foregroundHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body {
      width: 512px;
      height: 512px;
      background: transparent;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .icon-card {
      width: 320px;
      height: 320px;
      border-radius: 72px;
      background: #080d1a;
      border: 18px solid #04AA6D;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 40px rgba(4, 170, 109, 0.45);
      position: relative;
    }
    .ns-monogram {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      font-size: 155px;
      font-weight: 900;
      color: #04AA6D;
      line-height: 1;
      letter-spacing: -4px;
      transform: translateY(3px);
      text-align: center;
      text-shadow: 0 0 15px rgba(4, 170, 109, 0.4);
    }
  </style>
</head>
<body>
  <div class="icon-card">
    <div class="ns-monogram">NS</div>
  </div>
</body>
</html>
`;

const targets = [
  // Google Play Store 512x512 Official Icon
  { path: path.join(__dirname, "../playstore-icon.png"), size: 512, html: iconHtml },
  { path: path.join(__dirname, "../android/app/playstore-icon.png"), size: 512, html: iconHtml },

  // Web & PWA icons
  { path: path.join(__dirname, "../public/icon-512x512.png"), size: 512, html: iconHtml },
  { path: path.join(__dirname, "../public/icon-192x192.png"), size: 192, html: iconHtml },
  { path: path.join(__dirname, "../public/apple-touch-icon.png"), size: 180, html: iconHtml },
  { path: path.join(__dirname, "../public/favicon.png"), size: 512, html: iconHtml },
  { path: path.join(__dirname, "../public/favicon-32x32.png"), size: 32, html: iconHtml },
  { path: path.join(__dirname, "../public/favicon-16x16.png"), size: 16, html: iconHtml },

  // Android mipmap icons (Phones)
  { path: path.join(__dirname, "../android/app/src/main/res/mipmap-mdpi/ic_launcher.png"), size: 48, html: iconHtml },
  { path: path.join(__dirname, "../android/app/src/main/res/mipmap-mdpi/ic_launcher_round.png"), size: 48, html: iconHtml },
  { path: path.join(__dirname, "../android/app/src/main/res/mipmap-mdpi/ic_launcher_foreground.png"), size: 108, html: foregroundHtml },

  { path: path.join(__dirname, "../android/app/src/main/res/mipmap-hdpi/ic_launcher.png"), size: 72, html: iconHtml },
  { path: path.join(__dirname, "../android/app/src/main/res/mipmap-hdpi/ic_launcher_round.png"), size: 72, html: iconHtml },
  { path: path.join(__dirname, "../android/app/src/main/res/mipmap-hdpi/ic_launcher_foreground.png"), size: 162, html: foregroundHtml },

  { path: path.join(__dirname, "../android/app/src/main/res/mipmap-xhdpi/ic_launcher.png"), size: 96, html: iconHtml },
  { path: path.join(__dirname, "../android/app/src/main/res/mipmap-xhdpi/ic_launcher_round.png"), size: 96, html: iconHtml },
  { path: path.join(__dirname, "../android/app/src/main/res/mipmap-xhdpi/ic_launcher_foreground.png"), size: 216, html: foregroundHtml },

  { path: path.join(__dirname, "../android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png"), size: 144, html: iconHtml },
  { path: path.join(__dirname, "../android/app/src/main/res/mipmap-xxhdpi/ic_launcher_round.png"), size: 144, html: iconHtml },
  { path: path.join(__dirname, "../android/app/src/main/res/mipmap-xxhdpi/ic_launcher_foreground.png"), size: 324, html: foregroundHtml },

  { path: path.join(__dirname, "../android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png"), size: 192, html: iconHtml },
  { path: path.join(__dirname, "../android/app/src/main/res/mipmap-xxxhdpi/ic_launcher_round.png"), size: 192, html: iconHtml },
  { path: path.join(__dirname, "../android/app/src/main/res/mipmap-xxxhdpi/ic_launcher_foreground.png"), size: 432, html: foregroundHtml },
];

async function generateAllAppIcons() {
  console.log("Launching browser for high-res app icon generation...");
  const browser = await puppeteer.launch({
    executablePath,
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--font-render-hinting=none"]
  });

  const page = await browser.newPage();

  for (const t of targets) {
    const dir = path.dirname(t.path);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    await page.setContent(t.html, { waitUntil: "domcontentloaded" });
    await page.setViewport({ width: 512, height: 512, deviceScaleFactor: t.size / 512 });
    await page.screenshot({ path: t.path, type: "png", omitBackground: t.html === foregroundHtml });
    console.log(`Generated: ${t.path} (${t.size}x${t.size})`);
  }

  await browser.close();
  console.log("✅ All Play Store, Android mipmaps, and Web app icons generated successfully matching nextsem.online!");
}

generateAllAppIcons().catch(console.error);
