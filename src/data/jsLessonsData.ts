export interface JsLesson {
  id: number;
  slug: string;
  title: string;
  unit: string;
  content: string;
}

export const jsLessons: JsLesson[] = [
  {
    id: 1,
    slug: "javascript-introduction-v8-engine-console",
    title: "JavaScript ES6+ Introduction, Browser V8 Engine & DevTools Console",
    unit: "Unit 1: JavaScript Language Foundations",
    content: `Welcome to the JavaScript ES6+ & Full Stack Web Development Curriculum!

## 1. What is JavaScript?
* **JavaScript** is the high-level, just-in-time compiled programming language of the Web.
* While HTML provides the skeleton and CSS provides the styling, JavaScript powers **behavior, interactivity, data fetching, and computational logic**.
* JavaScript runs natively inside all modern web browsers (powered by Google V8, Apple JavaScriptCore, Mozilla SpiderMonkey) and on the backend via Node.js.

---

## 2. Running JavaScript in the Browser
You can execute JavaScript in the Chrome DevTools Console (press \`F12\` or \`Ctrl + Shift + I\`) or link it inside HTML:

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>JavaScript Intro</title>
</head>
<body>
  <h1 id="headline">Hello World</h1>
  <button id="cta-btn">Click Me</button>

  <!-- External Script file -->
  <script src="app.js"></script>
</body>
</html>
\`\`\`

\`\`\`javascript
// app.js
console.log("🚀 JavaScript successfully loaded and executing!");

const btn = document.getElementById("cta-btn");
btn.addEventListener("click", () => {
  document.getElementById("headline").textContent = "You Clicked the Button! 🎉";
});
\`\`\`

---

## 3. Core Developer Takeaways
* \`console.log()\` outputs debug information directly to the developer terminal.
* Always place \`<script>\` tags at the bottom of the \`<body>\` or use \`defer\` so the HTML DOM loads before your script executes.
`
  },
  {
    id: 2,
    slug: "javascript-variables-let-const-data-types",
    title: "Variables (let, const), Primitive Data Types & Dynamic Typing",
    unit: "Unit 1: JavaScript Language Foundations",
    content: `Modern JavaScript provides \`const\` and \`let\` for robust, block-scoped variable declarations.

## 1. \`const\` vs \`let\` vs \`var\`
* **\`const\` (Default Choice):** Block-scoped identifier that **cannot be reassigned**. Use this for 95% of variables.
* **\`let\`:** Block-scoped variable that **can be reassigned** (e.g. loop counters, mutable states).
* **\`var\` (Deprecated legacy):** Function-scoped with hoisting quirks. Avoid in modern ES6+ codebases!

\`\`\`javascript
const siteName = "Nextsem Academy";
// siteName = "Other"; // ❌ TypeError: Assignment to constant variable.

let currentScore = 100;
currentScore += 50; // ✅ Allowed: 150
\`\`\`

---

## 2. JavaScript Primitive Data Types
1. **String:** Text data enclosed in quotes (\`"Full Stack"\`, \`'Nextsem'\`, \`\` \`\`).
2. **Number:** Integers and floating-point numbers (\`42\`, \`3.14159\`).
3. **Boolean:** Logical truth values (\`true\` or \`false\`).
4. **Undefined:** Variable declared but not yet assigned a value.
5. **Null:** Intentional absence of any object value.
6. **BigInt:** Large integers beyond \`2^53 - 1\`.
7. **Symbol:** Unique, immutable identifier token.

\`\`\`javascript
const developerName = "Er. Manoj Kumar";
const lessonsCompleted = 98;
const isCertified = true;
const pendingTask = null;
let feedback; // undefined

console.log(typeof developerName); // "string"
console.log(typeof lessonsCompleted); // "number"
console.log(typeof isCertified); // "boolean"
\`\`\`
`
  },
  {
    id: 3,
    slug: "javascript-operators-expressions-template-literals",
    title: "Operators, Expressions, Template Literals & String Interpolation",
    unit: "Unit 1: JavaScript Language Foundations",
    content: `Expressions and template literals let you perform computations and format dynamic strings cleanly.

## 1. Arithmetic & Logical Operators
* **Arithmetic:** \`+\`, \`-\`, \`*\`, \`/\`, \`%\` (remainder), \`**\` (exponentiation).
* **Comparison:** Strict equality \`===\` (checks value AND type) vs loose \`==\` (avoids type coercion bugs). Always use \`===\`!
* **Logical:** \`&&\` (AND), \`||\` (OR), \`!\` (NOT), \`??\` (Nullish Coalescing).

\`\`\`javascript
const userAge = 20;
const hasLicense = true;

// Strict comparison
console.log(5 === "5"); // false (number !== string)
console.log(5 == "5");  // true (type coercion - avoid!)

// Logical condition
if (userAge >= 18 && hasLicense) {
  console.log("Eligible to drive!");
}
\`\`\`

---

## 2. ES6 Template Literals (\`\` \`\`)
Template literals use backticks to support multi-line strings and direct expression interpolation using \`\${expression}\`.

\`\`\`javascript
const student = "Alex";
const score = 95;
const course = "Full Stack Web Dev";

// Clean string interpolation
const greeting = \`Hello \${student}! Your final score in \${course} is \${score}%.\`;
console.log(greeting);
\`\`\`
`
  },
  {
    id: 4,
    slug: "javascript-conditionals-if-else-ternary-switch",
    title: "Control Flow: if-else, Ternary Operator & Switch-Case",
    unit: "Unit 1: JavaScript Language Foundations",
    content: `Control flow statements dictate the execution path of your program based on conditions.

## 1. if...else if...else
\`\`\`javascript
const score = 88;

if (score >= 90) {
  console.log("Grade: A+");
} else if (score >= 75) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}
\`\`\`

---

## 2. Ternary Operator (\`condition ? exprIfTrue : exprIfFalse\`)
The ternary operator is a compact, one-line expression perfect for React JSX and state assignments.

\`\`\`javascript
const isDarkMode = true;
const themeColor = isDarkMode ? "#060c18" : "#ffffff";
\`\`\`

---

## 3. Switch-Case Statement
\`\`\`javascript
const userRole = "admin";

switch (userRole) {
  case "admin":
    console.log("Full system access granted.");
    break;
  case "student":
    console.log("Course lessons access granted.");
    break;
  default:
    console.log("Guest read-only view.");
}
\`\`\`
`
  },
  {
    id: 5,
    slug: "javascript-functions-arrow-functions-closures-scope",
    title: "Functions, ES6 Arrow Functions, Default Params & Closures",
    unit: "Unit 2: Functions, Scope & Objects",
    content: `Functions are reusable blocks of logic that form the building blocks of JavaScript applications.

## 1. Function Declaration vs Arrow Function
\`\`\`javascript
// 1. Traditional Function Declaration
function calculateTotal(price, taxRate = 0.18) {
  return price + (price * taxRate);
}

// 2. ES6 Arrow Function (Concise syntax)
const calculateDiscount = (price, discountPercent) => price - (price * (discountPercent / 100));

// Implicit return for single expressions
const double = (n) => n * 2;
\`\`\`

---

## 2. Scope & Closures
* **Block Scope:** Variables declared with \`let\` and \`const\` inside \`{ ... }\` exist only within that block.
* **Closure:** A function that retains access to variables from its outer lexical scope even after the outer function has finished executing!

\`\`\`javascript
function createCounter() {
  let count = 0; // Private encapsulated variable
  return function() {
    count++;
    return count;
  };
}

const counterA = createCounter();
console.log(counterA()); // 1
console.log(counterA()); // 2
\`\`\`
`
  },
  {
    id: 6,
    slug: "javascript-arrays-map-filter-reduce-methods",
    title: "Arrays, Modern Iterators: map(), filter(), reduce() & find()",
    unit: "Unit 2: Functions, Scope & Objects",
    content: `Arrays are ordered collections of data. Functional array methods are critical for React and modern JavaScript.

## 1. The Core Functional Methods
* **\`map()\`:** Transforms each item and returns a **new array** of the same length.
* **\`filter()\`:** Returns a **new array** containing only items that satisfy a boolean condition.
* **\`find()\`:** Returns the **first element** matching the condition, or \`undefined\`.
* **\`reduce()\`:** Accumulates array values into a **single result** (e.g. sum, grouped object).

\`\`\`javascript
const products = [
  { id: 1, name: "Mechanical Keyboard", price: 80, inStock: true },
  { id: 2, name: "Wireless Mouse", price: 40, inStock: false },
  { id: 3, name: "4K Monitor", price: 300, inStock: true }
];

// 1. filter in-stock products
const available = products.filter(p => p.inStock);

// 2. map product names
const productNames = products.map(p => p.name);

// 3. reduce total inventory price
const totalPrice = products.reduce((total, p) => total + p.price, 0);

console.log(totalPrice); // 420
\`\`\`
`
  },
  {
    id: 7,
    slug: "javascript-objects-destructuring-spread-rest",
    title: "Objects, Destructuring, Spread Operator & Rest Parameters",
    unit: "Unit 2: Functions, Scope & Objects",
    content: `Objects store structured key-value data. ES6 destructuring and spread operators streamline data access.

## 1. Object & Array Destructuring
\`\`\`javascript
const developer = {
  name: "Er. Manoj Kumar",
  role: "Full Stack Engineer",
  skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
  location: { city: "New Delhi", country: "India" }
};

// Destructuring with nested properties & default values
const { name, role, location: { city } } = developer;
console.log(\`\${name} is a \${role} based in \${city}.\`);
\`\`\`

---

## 2. Spread Operator (\`...\`)
\`\`\`javascript
// Cloning & Merging Objects
const userBase = { id: 101, username: "dev_user" };
const userProfile = { ...userBase, role: "Full Stack Developer", verified: true };

// Cloning & Combining Arrays
const frontendSkills = ["HTML", "CSS", "JS"];
const backendSkills = ["Node.js", "Express", "MongoDB"];
const fullStackSkills = [...frontendSkills, ...backendSkills, "Git"];
\`\`\`
`
  },
  {
    id: 8,
    slug: "javascript-dom-selectors-manipulation-innerhtml",
    title: "DOM Selection, QuerySelectors & Dynamic HTML Manipulation",
    unit: "Unit 3: DOM, Events & Web APIs",
    content: `The DOM (Document Object Model) is the browser's in-memory tree representation of the webpage.

## 1. Selecting DOM Elements
* **\`document.querySelector('.class')\`:** Selects the first matching element.
* **\`document.querySelectorAll('.class')\`:** Selects all matching elements (NodeList).
* **\`document.getElementById('id')\`:** Fast single-element lookup by ID.

\`\`\`javascript
const headline = document.querySelector("#headline");
const cards = document.querySelectorAll(".card");
\`\`\`

---

## 2. Modifying Content & Classes
\`\`\`javascript
// 1. Text & HTML content
headline.textContent = "Updated via JavaScript!";

// 2. Manipulating CSS classes
headline.classList.add("text-emerald-400");
headline.classList.remove("text-slate-500");
headline.classList.toggle("active");

// 3. Modifying attributes
const link = document.querySelector("a");
link.setAttribute("href", "https://nextsem.online");
link.setAttribute("target", "_blank");
\`\`\`
`
  },
  {
    id: 9,
    slug: "javascript-dom-event-listeners-click-submit",
    title: "DOM Event Listeners, Click Events, Form Submits & Bubbling",
    unit: "Unit 3: DOM, Events & Web APIs",
    content: `Events let your JavaScript react to user clicks, keyboard strokes, input changes, and form submissions.

## 1. \`addEventListener\`
\`\`\`javascript
const form = document.querySelector("#signup-form");
const emailInput = document.querySelector("#email");

form.addEventListener("submit", (event) => {
  // Prevent default browser page reload
  event.preventDefault();

  const userEmail = emailInput.value.trim();
  if (!userEmail) {
    alert("Please enter a valid email address!");
    return;
  }

  console.log(\`Submitting email: \${userEmail}\`);
});
\`\`\`
`
  },
  {
    id: 10,
    slug: "javascript-localstorage-sessionstorage-json-stringify",
    title: "Browser Storage: LocalStorage, SessionStorage & JSON.stringify",
    unit: "Unit 3: DOM, Events & Web APIs",
    content: `Web Storage APIs allow web applications to store key-value data directly on the user's client device.

## 1. LocalStorage vs SessionStorage
* **\`localStorage\`:** Data persists permanently across browser restarts until cleared.
* **\`sessionStorage\`:** Data persists only for the duration of the browser tab session.

\`\`\`javascript
// 1. Storing complex objects (Serialize to JSON string)
const userSession = { name: "Manoj", theme: "dark", progress: 95 };
localStorage.setItem("nextsem_user", JSON.stringify(userSession));

// 2. Reading and parsing stored data
const saved = localStorage.getItem("nextsem_user");
if (saved) {
  const user = JSON.parse(saved);
  console.log("Welcome back:", user.name);
}

// 3. Removing data
localStorage.removeItem("nextsem_user");
\`\`\`
`
  },
  {
    id: 11,
    slug: "javascript-async-await-promises-fetch-api",
    title: "Asynchronous JavaScript, Promises & Async/Await",
    unit: "Unit 4: Asynchronous JavaScript & REST APIs",
    content: `Asynchronous JavaScript allows network requests and background timers to execute without freezing the browser UI thread.

## 1. Promises & \`async/await\`
\`async/await\` provides clean, synchronous-looking syntax for handling asynchronous operations.

\`\`\`javascript
// Fetching data asynchronously
async function fetchDeveloperData() {
  try {
    const response = await fetch("https://api.github.com/users/manojkmr2403");
    if (!response.ok) {
      throw new Error(\`HTTP Error: \${response.status}\`);
    }
    const data = await response.json();
    console.log("GitHub User:", data.name, data.public_repos);
    return data;
  } catch (err) {
    console.error("Fetch failed:", err);
  }
}

fetchDeveloperData();
\`\`\`
`
  },
  {
    id: 12,
    slug: "javascript-fetch-api-rest-endpoints-json-handling",
    title: "Fetch API, POST Requests, Headers & REST JSON Handling",
    unit: "Unit 4: Asynchronous JavaScript & REST APIs",
    content: `Learn to send POST requests, attach JSON headers, and handle REST API responses.

## 1. Sending a POST Request with Fetch
\`\`\`javascript
async function submitProject(projectData) {
  try {
    const response = await fetch("/api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(projectData)
    });

    const result = await response.json();
    console.log("Server response:", result);
  } catch (error) {
    console.error("Submission failed:", error);
  }
}
\`\`\`
`
  }
];
