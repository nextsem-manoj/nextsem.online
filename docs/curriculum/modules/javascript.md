# JavaScript Complete Reference Guide 📘

> A comprehensive template covering core JavaScript concepts, syntax, and best practices.

---

## 📑 Table of Contents

1. [Variables & Data Types](#variables--data-types)
2. [Operators](#operators)
3. [Control Flow](#control-flow)
4. [Functions](#functions)
5. [Arrays](#arrays)
6. [Objects](#objects)
7. [ES6+ Features](#es6-features)
8. [Async JavaScript](#async-javascript)
9. [DOM Manipulation](#dom-manipulation)
10. [Error Handling](#error-handling)
11. [Classes & OOP](#classes--oop)
12. [Modules](#modules)
13. [Useful Built-in Methods](#useful-built-in-methods)

---

## Variables & Data Types

### Declaring Variables

```js
var name = "John";       // function-scoped (avoid using)
let age = 25;            // block-scoped (reassignable)
const PI = 3.14159;      // block-scoped (constant)
```

### Data Types

```js
// Primitive Types
let str    = "Hello";            // String
let num    = 42;                 // Number
let float  = 3.14;              // Float (also Number)
let bool   = true;              // Boolean
let n      = null;              // Null
let u      = undefined;         // Undefined
let sym    = Symbol("id");      // Symbol
let big    = 9007199254740991n; // BigInt

// Reference Types
let arr  = [1, 2, 3];           // Array
let obj  = { key: "value" };    // Object
let fn   = function() {};       // Function
```

### Type Checking

```js
typeof "hello"       // "string"
typeof 42            // "number"
typeof true          // "boolean"
typeof undefined     // "undefined"
typeof null          // "object" (known JS quirk)
typeof {}            // "object"
typeof []            // "object"
typeof function(){}  // "function"

Array.isArray([1, 2, 3])  // true
```

---

## Operators

### Arithmetic

```js
let a = 10, b = 3;

a + b   // 13   → Addition
a - b   // 7    → Subtraction
a * b   // 30   → Multiplication
a / b   // 3.33 → Division
a % b   // 1    → Modulus (remainder)
a ** b  // 1000 → Exponentiation
```

### Comparison

```js
5 == "5"    // true  → loose equality (type coercion)
5 === "5"   // false → strict equality (no coercion)
5 != "5"    // false
5 !== "5"   // true
5 > 3       // true
5 < 3       // false
5 >= 5      // true
5 <= 4      // false
```

### Logical

```js
true && false   // false → AND
true || false   // true  → OR
!true           // false → NOT
```

### Nullish Coalescing & Optional Chaining

```js
let user = null;
let name = user ?? "Guest";       // "Guest" (if null/undefined)
let city = user?.address?.city;   // undefined (no error)
```

---

## Control Flow

### if / else if / else

```js
let score = 75;

if (score >= 90) {
  console.log("A Grade");
} else if (score >= 75) {
  console.log("B Grade");
} else {
  console.log("C Grade");
}
```

### Switch

```js
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("End of the week");
    break;
  default:
    console.log("Midweek");
}
```

### Loops

```js
// for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// while loop
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// do...while
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 3);

// for...of (arrays)
let fruits = ["apple", "banana", "mango"];
for (let fruit of fruits) {
  console.log(fruit);
}

// for...in (objects)
let person = { name: "Raj", age: 20 };
for (let key in person) {
  console.log(key, person[key]);
}
```

---

## Functions

### Function Declaration

```js
function greet(name) {
  return `Hello, ${name}!`;
}
greet("Manoj"); // "Hello, Manoj!"
```

### Function Expression

```js
const greet = function(name) {
  return `Hello, ${name}!`;
};
```

### Arrow Functions

```js
const greet = (name) => `Hello, ${name}!`;

const add = (a, b) => a + b;

const square = n => n * n;
```

### Default Parameters

```js
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}
greet();        // "Hello, Guest!"
greet("Manoj"); // "Hello, Manoj!"
```

### Rest & Spread

```js
// Rest — collects arguments into array
function sum(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}
sum(1, 2, 3, 4); // 10

// Spread — expands array into arguments
const nums = [1, 2, 3];
console.log(Math.max(...nums)); // 3
```

---

## Arrays

```js
let arr = [10, 20, 30, 40, 50];

// Access
arr[0]          // 10
arr.length      // 5

// Add / Remove
arr.push(60)       // Add to end
arr.pop()          // Remove from end
arr.unshift(0)     // Add to start
arr.shift()        // Remove from start

// Common Methods
arr.indexOf(30)               // 2
arr.includes(20)              // true
arr.slice(1, 3)               // [20, 30]
arr.splice(1, 2)              // removes 2 items from index 1
arr.reverse()                 // reverses in place
arr.sort((a, b) => a - b)    // ascending sort

// Iteration Methods
arr.forEach(n => console.log(n));
arr.map(n => n * 2);          // [20, 40, 60, 80, 100]
arr.filter(n => n > 25);      // [30, 40, 50]
arr.find(n => n > 25);        // 30
arr.reduce((acc, n) => acc + n, 0); // 150
arr.every(n => n > 5);        // true
arr.some(n => n > 45);        // true
```

---

## Objects

```js
// Object Literal
const student = {
  name: "Manoj",
  age: 20,
  course: "BCA",
  greet() {
    return `Hi, I'm ${this.name}`;
  }
};

// Access
student.name         // "Manoj"
student["course"]    // "BCA"
student.greet()      // "Hi, I'm Manoj"

// Add / Update / Delete
student.email = "manoj@email.com";
student.age = 21;
delete student.course;

// Destructuring
const { name, age } = student;

// Spread
const updated = { ...student, age: 22 };

// Object Methods
Object.keys(student)    // ["name", "age", ...]
Object.values(student)  // ["Manoj", 20, ...]
Object.entries(student) // [["name","Manoj"], ...]
```

---

## ES6+ Features

### Template Literals

```js
let name = "Manoj";
let msg = `Hello, ${name}! Today is ${new Date().toDateString()}.`;
```

### Destructuring

```js
// Array
const [a, b, c] = [1, 2, 3];

// Object
const { name, age } = { name: "Manoj", age: 20 };

// With rename
const { name: studentName } = student;
```

### Shorthand Properties

```js
const name = "Manoj";
const age = 20;
const student = { name, age }; // { name: "Manoj", age: 20 }
```

### Optional Chaining

```js
const user = { profile: { address: null } };
const city = user?.profile?.address?.city; // undefined (no error)
```

### Nullish Coalescing

```js
const name = null ?? "Guest";  // "Guest"
const num = 0 ?? 42;           // 0 (0 is not null/undefined)
```

---

## Async JavaScript

### Callbacks

```js
function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}

fetchData((data) => console.log(data));
```

### Promises

```js
const promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) resolve("✅ Success!");
  else reject("❌ Failed!");
});

promise
  .then(result => console.log(result))
  .catch(err => console.error(err))
  .finally(() => console.log("Done"));
```

### Async / Await

```js
async function getData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

getData();
```

### Promise.all

```js
const [users, posts] = await Promise.all([
  fetch("/api/users").then(r => r.json()),
  fetch("/api/posts").then(r => r.json()),
]);
```

---

## DOM Manipulation

```js
// Select Elements
document.getElementById("myId")
document.querySelector(".myClass")
document.querySelectorAll("p")

// Modify Content
element.textContent = "New Text";
element.innerHTML = "<b>Bold</b>";

// Modify Styles
element.style.color = "red";
element.classList.add("active");
element.classList.remove("hidden");
element.classList.toggle("dark");

// Attributes
element.setAttribute("href", "https://example.com");
element.getAttribute("href");

// Events
element.addEventListener("click", (e) => {
  console.log("Clicked!", e.target);
});

// Create & Append
const div = document.createElement("div");
div.textContent = "Hello";
document.body.appendChild(div);
```

---

## Error Handling

```js
try {
  let result = riskyOperation();
  console.log(result);
} catch (error) {
  console.error("Error caught:", error.message);
} finally {
  console.log("Always runs");
}

// Custom Error
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

throw new ValidationError("Invalid input!");
```

---

## Classes & OOP

```js
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  speak() {
    return `${this.name} says ${this.sound}`;
  }

  static create(name, sound) {
    return new Animal(name, sound);
  }
}

// Inheritance
class Dog extends Animal {
  constructor(name) {
    super(name, "Woof");
  }

  fetch() {
    return `${this.name} fetches the ball!`;
  }
}

const dog = new Dog("Rex");
dog.speak();   // "Rex says Woof"
dog.fetch();   // "Rex fetches the ball!"
```

---

## Modules

### Export

```js
// Named exports
export const PI = 3.14159;
export function add(a, b) { return a + b; }

// Default export
export default function greet(name) {
  return `Hello, ${name}!`;
}
```

### Import

```js
// Named imports
import { PI, add } from "./math.js";

// Default import
import greet from "./greet.js";

// Import all
import * as utils from "./utils.js";
```

---

## Useful Built-in Methods

### String Methods

```js
let str = "  Hello, World!  ";

str.trim()                  // "Hello, World!"
str.toUpperCase()           // "  HELLO, WORLD!  "
str.toLowerCase()           // "  hello, world!  "
str.includes("World")       // true
str.startsWith("  Hello")   // true
str.replace("World", "JS")  // "  Hello, JS!  "
str.split(", ")             // ["  Hello", "World!  "]
str.slice(2, 7)             // "Hello"
str.padStart(20, "*")       // "***  Hello, World!  "
```

### Number Methods

```js
let n = 3.14159;

n.toFixed(2)          // "3.14"
parseInt("42px")      // 42
parseFloat("3.14abc") // 3.14
Number.isInteger(4)   // true
Number.isNaN(NaN)     // true
Math.round(4.6)       // 5
Math.floor(4.9)       // 4
Math.ceil(4.1)        // 5
Math.max(1, 5, 3)     // 5
Math.min(1, 5, 3)     // 1
Math.random()         // random 0–1
```

### Date

```js
const now = new Date();
now.getFullYear()         // 2026
now.getMonth()            // 0-11 (0 = January)
now.getDate()             // Day of month
now.getDay()              // 0-6 (0 = Sunday)
now.toLocaleDateString()  // "8/5/2026"
now.toISOString()         // "2026-08-05T..."
```

---

## 💡 Best Practices

- ✅ Always use `const` by default, `let` when reassignment needed, never `var`
- ✅ Use `===` instead of `==` for comparisons
- ✅ Use `async/await` over raw callbacks for cleaner async code
- ✅ Handle errors with `try/catch` in async functions
- ✅ Use arrow functions for callbacks
- ✅ Prefer array methods (`map`, `filter`, `reduce`) over manual loops
- ✅ Use template literals instead of string concatenation
- ✅ Destructure objects and arrays for cleaner code
- ✅ Keep functions small and single-purpose
- ✅ Comment complex logic, not obvious code

# UI/UX Improvements

## Navigation Issues

### Sidebar Navigation
- [x] Sidebar lesson items are currently not clickable.
- [x] Clicking a lesson should open the corresponding lesson page.
- [x] The active lesson should be highlighted automatically.
- [x] Completed lessons should display a check icon.

### Previous & Next Navigation
- [x] Previous button is not functional.
- [x] Next button is not functional.
- [x] Buttons should navigate between lessons.
- [x] Disable the Previous button on the first lesson.
- [x] Disable the Next button on the last lesson.

---

# UI Improvements

## Sidebar
- [x] Make the sidebar sticky while scrolling.
- [x] Improve hover effects for lesson items.
- [x] Use a blue highlight for the active lesson.
- [x] Display lesson completion status with icons.

## Lesson Progress
- [x] Add a progress bar.
- [x] Show lesson completion percentage.
- [x] Update progress automatically when lessons are completed.

## Interactive Playground
- [x] Improve code editor height.
- [x] Display loading state while running code.
- [x] Show clear success and error messages.
- [x] Preserve code after execution.

## Quiz Section
- [x] Disable answer selection after submission.
- [x] Show explanations for correct and incorrect answers.
- [x] Track quiz score.

## Buttons
- [x] Improve Previous and Next button styling.
- [x] Add hover and click animations.
- [x] Ensure buttons work correctly on all lesson pages.

---

# Responsive Design

- [x] Add mobile-friendly sidebar (hamburger menu).
- [x] Improve tablet responsiveness.
- [x] Ensure code editor works well on smaller screens.

---

# Accessibility

- [x] Add keyboard navigation support.
- [x] Improve focus styles.
- [x] Add ARIA labels where needed.

---

# Future Enhancements

- [x] Course completion certificate.
- [x] Bookmark lessons.
- [x] Search lessons.
- [x] Dark/Light theme toggle.
- [x] Save learning progress using Local Storage.



# Knowledge Check Requirements

Every chapter ends with an interactive **Knowledge Check** section.

## Requirements

- [x] Add a Knowledge Check at the end of **every chapter**.
- [x] Each chapter contains **10 multiple-choice questions (MCQs)**.
- [x] Each MCQ has:
  - 1 question
  - 4 options (A, B, C, D)
  - Only 1 correct answer
  - A short explanation shown after the user answers.
- [x] Randomize the position of options and correct answer on retry.
- [x] Questions test concepts covered only in that chapter.
- [x] Difficulty gradually increases from easy to medium.
- [x] Unique, non-repeating questions across chapters.

## UI

- [x] Use the existing **Knowledge Check** card design.
- [x] Display one question at a time.
- [x] Highlight:
  - Green for the correct answer.
  - Red for the incorrect answer (with correct answer highlighted in green).
- [x] Show a **Next Question** button after answering.
- [x] At the end of the quiz, display:
  - Total Score
  - Correct Answers
  - Incorrect Answers
  - Percentage
  - Pass/Fail status (Passing threshold: 70%)

## Progress

- [x] Save the user's quiz progress in `localStorage`.
- [x] Mark the chapter as completed only after the quiz is passed (>= 70%).
- [x] Allow users to retry the quiz unlimited times.
- [x] Shuffle questions on every retry.

## Content

- [x] Chapter-specific MCQs generated for every chapter.
- [x] Knowledge Check enabled across all 9 chapters.

---


# Knowledge Check Requirements

Every chapter must end with a **Knowledge Check** section.

## Requirements

- [x] Add a Knowledge Check at the end of **every chapter**.
- [x] Each chapter contains **10–15 multiple-choice questions (MCQs)**.
- [x] Questions are displayed **one at a time**.
- [x] Show current question number and total questions (e.g., **Question 1 of 10**).
- [x] Users cannot skip to the next question without selecting an answer.
- [x] After answering:
  - Show whether the answer is correct or incorrect.
  - Display a short explanation (1–2 lines).
- [x] After the last question, automatically show the quiz result.

## MCQ Format

Each question has:
- [x] 1 question
- [x] 4 options (A, B, C, D)
- [x] Only 1 correct answer
- [x] Short explanation

## UI

- [x] Use existing **Knowledge Check** card design.
- [x] Display one question per screen.
- [x] Show progress indicator (e.g., **Question 4 of 10**).
- [x] Highlight:
  - ✅ Green for the correct answer.
  - ❌ Red for the incorrect answer.
- [x] Disable changing the answer after it has been submitted.

## Results

At the end of the quiz, display:
- [x] Total Questions
- [x] Correct Answers
- [x] Incorrect Answers
- [x] Score Percentage
- [x] Pass/Fail Status (Passing Score: 70%)

## Progress

- [x] Save quiz progress in `localStorage`.
- [x] Mark the chapter as completed only after passing the quiz.
- [x] Allow unlimited retries.
- [x] Shuffle questions on every retry.

## Future Chapters

- [x] Automatically generate chapter-specific MCQs for every new chapter added in the future.

## Question Flow

- [x] Display only one question at a time.
- [x] Show current question number (e.g., **Question 3 of 10**).
- [x] The user must select one answer to continue.
- [x] As soon as the user selects an answer:
  - Immediately highlight the selected answer.
  - ✅ Green if the answer is correct.
  - ❌ Red if the answer is incorrect.
  - Display a short explanation (1–2 lines).
- [x] After **3 seconds**, automatically move to the **next question**.
- [x] Hide manual **Next Question** button (navigation is automatic).
- [x] On the last question, after 3-second delay, automatically navigate to **Quiz Result** screen.
- [x] Show countdown timer loading indicator (**"Moving to next question in 3 seconds..."**) during the delay. 

## Hands-on Developer Tasks

- [x] Dedicated **🎯 Hands-on Developer Task** callout box in every chapter.
- [x] Clear task objective & step-by-step instructions.
- [x] Pre-populated starter code in the **Live Code Playground**.
- [x] Console log verification for expected task outputs.

---

## 📜 Development Changelog & Edit History (`javascript-lesson.html`)

| Date & Time (IST) | Change / Feature Implemented | Target Components & Details | Status |
| :--- | :--- | :--- | :---: |
| **Aug 6, 2026 - 14:25** | **Multi-Lesson UI & Layout Setup** | Built responsive sidebar, module listing, light/dark theme toggle, search filter, and localStorage bookmarking in `javascript-lesson.html`. | ✅ Complete |
| **Aug 6, 2026 - 14:35** | **Interactive Code Playground** | Added live JS execution sandbox with custom console interceptor (`log`, `warn`, `error`) and per-lesson code autosave in `localStorage`. | ✅ Complete |
| **Aug 6, 2026 - 14:45** | **Knowledge Check Quiz & Certificate** | Created chapter quiz engine (10 MCQs per lesson), 70% passing threshold, score tracking, and printable Certificate generator modal. | ✅ Complete |
| **Aug 6, 2026 - 21:28** | **Auto-Advance 3s Question Flow** | Upgraded quiz engine to auto-transition to next question after 3s on answer selection. Added dynamic countdown indicator banner (`3s -> 2s -> 1s`) & timer cleanup (`clearQuizTimers`). | ✅ Complete |
| **Aug 6, 2026 - 21:32** | **Dynamic Renumbering & Shuffling Fix** | Stripped hardcoded question number prefixes (`replace(/^\d+\.\s*/, '')`) and option letter prefixes (`replace(/^[A-D]\)\s*/, '')`) so shuffled questions/options always display `1..10` and `A)..D)` sequentially. | ✅ Complete |
| **Aug 6, 2026 - 21:37** | **HTML Tag Escaping Bugfix (`escapeHtml`)** | Added `escapeHtml()` helper to escape `<script>`, `<javascript>`, and code tags in options & explanations, resolving DOM parsing breaks on Question 6. | ✅ Complete |
| **Aug 6, 2026 - 22:00** | **Curriculum Content Expansion** | Fully expanded `contentHtml` across all 9 lessons with step-by-step developer guides, callout boxes (Info, Tip, Warning, Bug), 🪟 Windows 11 branding, and high-contrast typography. | ✅ Complete |
| **Aug 6, 2026 - 22:10** | **Modules 4, 5 & 6 Added (15 Lessons Total)** | Expanded course from 9 to 15 lessons across 6 modules. Added OOP Classes, ES6 Modules, Web Storage, try...catch Error Handling, Fetch API/REST, and Node.js/npm tooling with code playgrounds & 60 new MCQs. | ✅ Complete |
| **Aug 6, 2026 - 22:45** | **Hands-on Developer Tasks Added (All 15 Lessons)** | Added dedicated "🎯 Hands-on Developer Task" callout box & actionable starter code to every single lesson from Chapter 1 to 15 in `javascript-lesson.html`. | ✅ Complete |

---

*Last Updated: August 2026 | JavaScript ES2024+*