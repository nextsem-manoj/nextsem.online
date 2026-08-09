const fs = require('fs');
const path = require('path');

// Pure Node.js PNG transparent background keying (No external dependencies)
function processPng() {
  try {
    const puppeteer = require('puppeteer-core');
    const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
    
    (async () => {
      const browser = await puppeteer.launch({ executablePath: chromePath, headless: true });
      const page = await browser.newPage();
      const imgPath = path.join(__dirname, '..', 'src', 'image-24.png');
      const imgBase64 = fs.readFileSync(imgPath).toString('base64');
      
      await page.setContent(`
        <!DOCTYPE html>
        <html>
        <body style="background:transparent;margin:0;">
          <canvas id="c"></canvas>
          <script>
            const img = new Image();
            img.onload = () => {
              const canvas = document.getElementById('c');
              canvas.width = img.width;
              canvas.height = img.height;
              const ctx = canvas.getContext('2d');
              ctx.drawImage(img, 0, 0);
              const imgData = ctx.getImageData(0, 0, img.width, img.height);
              const d = imgData.data;
              // Key out background pixels (r<30, g<35, b<45)
              for (let i = 0; i < d.length; i += 4) {
                const r = d[i], g = d[i+1], b = d[i+2];
                if (r < 30 && g < 35 && b < 45) {
                  d[i+3] = 0; // Make transparent
                }
              }
              ctx.putImageData(imgData, 0, 0);
              window.resultPng = canvas.toDataURL('image/png').split(',')[1];
            };
            img.src = "data:image/png;base64,${imgBase64}";
          </script>
        </body>
        </html>
      `);

      await page.waitForFunction(() => window.resultPng !== undefined, { timeout: 10000 });
      const resBase64 = await page.evaluate(() => window.resultPng);
      
      const outPng = Buffer.from(resBase64, 'base64');
      fs.writeFileSync(path.join(__dirname, '..', 'public', 'logo.png'), outPng);
      fs.writeFileSync(path.join(__dirname, '..', 'public', 'logo-transparent.png'), outPng);
      console.log('Successfully saved 100% transparent logo to public/logo.png!');
      await browser.close();
    })();
  } catch (e) {
    console.error('Error:', e.message);
  }
}

processPng();
