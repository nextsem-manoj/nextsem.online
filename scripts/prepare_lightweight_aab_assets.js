const fs = require("fs");
const path = require("path");

const assetsDir = path.join(__dirname, "..", "android", "app", "src", "main", "assets");
const publicDir = path.join(assetsDir, "public");

function getDirectorySize(dirPath) {
  let size = 0;
  if (!fs.existsSync(dirPath)) return 0;
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      size += getDirectorySize(fullPath);
    } else {
      size += fs.statSync(fullPath).size;
    }
  }
  return size;
}

function cleanHeavyAssets() {
  console.log("Preparing lightweight assets for Google Play AAB (Target: Under 10 MB)...");
  
  if (!fs.existsSync(publicDir)) {
    console.error("public dir does not exist:", publicDir);
    return;
  }

  const initialSize = getDirectorySize(assetsDir);
  console.log(`Initial assets size: ${(initialSize / (1024 * 1024)).toFixed(2)} MB`);

  // 1. Remove all subdirectories in publicDir
  const entries = fs.readdirSync(publicDir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(publicDir, entry.name);
    if (entry.isDirectory()) {
      fs.rmSync(fullPath, { recursive: true, force: true });
      console.log(`  Removed heavy subdirectory: ${entry.name}`);
    }
  }

  // 2. Remove heavy files in publicDir root (videos, large photos, offline PDFs/zips)
  const heavyFileExtensions = [".mp4", ".webm", ".mkv", ".zip", ".pdf", ".apk"];
  const heavyFileNames = ["youtube_banner.png", "og-image.png", "manoj-kumar.jpg", "candle_flame_developer_short.webm"];

  const files = fs.readdirSync(publicDir);
  for (const file of files) {
    const fullPath = path.join(publicDir, file);
    const ext = path.extname(file).toLowerCase();
    const stat = fs.statSync(fullPath);

    if (heavyFileExtensions.includes(ext) || heavyFileNames.includes(file) || stat.size > 200 * 1024) {
      fs.unlinkSync(fullPath);
      console.log(`  Removed heavy asset: ${file} (${(stat.size / 1024).toFixed(1)} KB)`);
    }
  }

  const finalSize = getDirectorySize(assetsDir);
  console.log(`\n✅ Final assets size: ${(finalSize / 1024).toFixed(2)} KB (${(finalSize / (1024 * 1024)).toFixed(3)} MB)`);
  console.log("Assets are now hyper-optimized for < 10 MB production AAB build!");
}

cleanHeavyAssets();
