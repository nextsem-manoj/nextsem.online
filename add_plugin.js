const fs = require('fs');
const path = require('path');
const cssPath = path.join(__dirname, 'src', 'app', 'globals.css');
let css = fs.readFileSync(cssPath, 'utf8');
css = `@import "tailwindcss";\n@plugin "@tailwindcss/typography";\n` + css.replace(`@import "tailwindcss";\n`, '');
fs.writeFileSync(cssPath, css);
console.log('Added typography plugin');
