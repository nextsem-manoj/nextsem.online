const fs = require('fs');
const path = require('path');

const src = "C:\\Users\\manoj2403\\.gemini\\antigravity-ide\\brain\\394c62c6-5506-47cc-ab2e-8f6739f9b8e9\\.user_uploaded\\media_1787744942401.jpg";
const dest = path.join(__dirname, "../public/manoj-kumar.jpg");

fs.copyFileSync(src, dest);
console.log("Successfully copied author profile picture to:", dest);
