const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'src', 'app', 'layout.tsx');

let content = fs.readFileSync(file, 'utf8');
content = content + `    </html>\n  );\n}\n`;
fs.writeFileSync(file, content);
