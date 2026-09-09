const fs = require('fs');
const content = fs.readFileSync('src/data/htmlLessonsData.ts', 'utf8');

const matches = content.match(/\{\s*(?:"id"|id):\s*(\d+)[\s\S]*?(?=\n\s*\{\s*(?:"id"|id):|\n\s*\];)/g) || [];
const list = [];
matches.forEach(m => {
  const idMatch = m.match(/(?:"id"|id):\s*(\d+)/);
  const titleMatch = m.match(/(?:"title"|title):\s*"([^"]+)"/);
  const slugMatch = m.match(/(?:"slug"|slug):\s*"([^"]+)"/);
  const unitMatch = m.match(/(?:"unit"|unit):\s*"([^"]+)"/);
  const bookRefMatch = m.match(/(?:"bookRef"|bookRef):\s*"([^"]+)"/);

  if (idMatch && titleMatch && parseInt(idMatch[1], 10) >= 31) {
    list.push({
      id: parseInt(idMatch[1], 10),
      slug: slugMatch ? slugMatch[1] : '',
      title: titleMatch[1],
      unit: unitMatch ? unitMatch[1] : '',
      bookRef: bookRefMatch ? bookRefMatch[1] : ''
    });
  }
});

console.log("Total extracted:", list.length);
fs.writeFileSync('scripts/lessons_31_100.json', JSON.stringify(list, null, 2));
console.log("Saved to scripts/lessons_31_100.json");
