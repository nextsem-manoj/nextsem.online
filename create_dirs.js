const fs = require('fs');
const path = require('path');

const bookDir = path.join(__dirname, 'src', 'app', 'book');
if (!fs.existsSync(bookDir)) fs.mkdirSync(bookDir, { recursive: true });

const chapterDir = path.join(bookDir, '[chapter]');
if (!fs.existsSync(chapterDir)) fs.mkdirSync(chapterDir, { recursive: true });

const contentDir = path.join(__dirname, 'src', 'content');
if (!fs.existsSync(contentDir)) fs.mkdirSync(contentDir, { recursive: true });

console.log('Created book directories');
