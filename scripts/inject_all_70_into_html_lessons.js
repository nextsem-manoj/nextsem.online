const fs = require('fs');

const full70 = require('./all_rich_lessons_31_100.json');

const content = fs.readFileSync('src/data/htmlLessonsData.ts', 'utf8');

// Find where lesson 31 starts
// In htmlLessonsData.ts, find `{\n    id: 31,` or `{\n  "id": 31,` or similar
const matchIndex = content.search(/\{\s*(?:"id"|id):\s*31,/);
if (matchIndex === -1) {
  console.error("Could not find start of Lesson 31 in htmlLessonsData.ts");
  process.exit(1);
}

const headerAndLessons0to30 = content.slice(0, matchIndex).trimEnd();

// Build formatted TypeScript representations of the 70 lessons
const formatted70 = full70.map(l => {
  const enBody = `${l.points.en.join('\n')}\n\n### Example\n\`\`\`html\n${l.code}\n\`\`\``;
  const hiBody = `${l.points.hi.join('\n')}\n\n### Example\n\`\`\`html\n${l.code}\n\`\`\``;

  return `  {
    id: ${l.id},
    slug: ${JSON.stringify(l.slug)},
    title: ${JSON.stringify(l.title)},
    unit: ${JSON.stringify(l.unit)},
    bookRef: ${JSON.stringify(l.bookRef)},
    exercise: {
      english: {
        question: ${JSON.stringify(l.exercise.question)},
        options: ${JSON.stringify(l.exercise.options)},
        correctAnswer: ${JSON.stringify(l.exercise.correctAnswer)},
        hint: ${JSON.stringify(l.exercise.hint)}
      },
      hinglish: {
        question: ${JSON.stringify(l.exercise.question)},
        options: ${JSON.stringify(l.exercise.options)},
        correctAnswer: ${JSON.stringify(l.exercise.correctAnswer)},
        hint: ${JSON.stringify(l.exercise.hint)}
      },
      hindi: {
        question: ${JSON.stringify(l.exercise.question)},
        options: ${JSON.stringify(l.exercise.options)},
        correctAnswer: ${JSON.stringify(l.exercise.correctAnswer)},
        hint: ${JSON.stringify(l.exercise.hint)}
      }
    },
    english: {
      kid: ${JSON.stringify(enBody)},
      pro: ${JSON.stringify(enBody)}
    },
    hinglish: {
      kid: ${JSON.stringify(hiBody)},
      pro: ${JSON.stringify(hiBody)}
    },
    hindi: {
      kid: ${JSON.stringify(hiBody)},
      pro: ${JSON.stringify(hiBody)}
    }
  }`;
}).join(',\n');

const newFileContent = `${headerAndLessons0to30}
${formatted70}
];
`;

fs.writeFileSync('src/data/htmlLessonsData.ts', newFileContent, 'utf8');
console.log("Successfully updated src/data/htmlLessonsData.ts with all 101 complete, rich lessons!");
