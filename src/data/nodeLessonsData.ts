export interface NodeLesson {
  id: number;
  slug: string;
  title: string;
  unit: string;
  content: string;
}

export const nodeLessons: NodeLesson[] = [
  {
    id: 1,
    slug: "nodejs-introduction-event-loop-npm-modules",
    title: "Node.js Architecture, Non-Blocking I/O & Event Loop",
    unit: "Unit 1: Node.js Runtime Foundations",
    content: `Welcome to the Node.js & Express.js Backend Architecture Course!

## 1. What is Node.js?
* **Node.js** is an open-source, cross-platform JavaScript runtime environment built on Google Chrome's V8 JavaScript engine.
* Node.js uses an **event-driven, non-blocking I/O model** that makes it lightweight and efficient for building scalable data-intensive backend servers and REST APIs.

---

## 2. The Node.js Event Loop
* Traditional multi-threaded servers (e.g. Apache) allocate a new thread per request, consuming high RAM.
* Node.js runs on a **single main thread** powered by **libuv**, delegating heavy disk and network I/O operations to OS worker pools and firing asynchronous event callbacks when complete.

---

## 3. Package Management with NPM / NPX
\`\`\`bash
# Initialize a new Node.js backend project
npm init -y

# Install production dependencies
npm install express dotenv cors mongoose

# Run a developer script
npm run dev
\`\`\`
`
  },
  {
    id: 2,
    slug: "nodejs-core-modules-fs-path-os-http",
    title: "Node.js Core Modules: fs, path, os, and http",
    unit: "Unit 1: Node.js Runtime Foundations",
    content: `Node.js comes bundled with powerful built-in core modules requiring zero installation.

## 1. File System (\`fs/promises\`) & Path (\`path\`)
\`\`\`javascript
const fs = require('fs/promises');
const path = require('path');

async function manageFiles() {
  const filePath = path.join(__dirname, 'data', 'lessons.json');

  // Writing asynchronous file data
  const data = { course: "Node.js Full Stack", totalLessons: 12 };
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');

  // Reading file data
  const content = await fs.readFile(filePath, 'utf-8');
  console.log("File content:", JSON.parse(content));
}

manageFiles();
\`\`\`
`
  },
  {
    id: 3,
    slug: "nodejs-http-server-request-response-headers",
    title: "Building Raw HTTP Servers in Node.js & Request/Response Lifecycle",
    unit: "Unit 1: Node.js Runtime Foundations",
    content: `Understanding raw HTTP server handling in Node.js reveals how Express and modern frameworks operate under the hood.

\`\`\`javascript
const http = require('http');

const server = http.createServer((req, res) => {
  const { url, method } = req;

  // Setting response headers
  res.setHeader('Content-Type', 'application/json');

  if (url === '/api/health' && method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify({ status: 'ok', uptime: process.uptime() }));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Endpoint Not Found' }));
  }
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(\`Server listening on http://localhost:\${PORT}\`);
});
\`\`\`
`
  },
  {
    id: 4,
    slug: "expressjs-introduction-routing-endpoints-app-listen",
    title: "Express.js Foundations, Application Routing & Endpoints",
    unit: "Unit 2: Express.js & REST API Architecture",
    content: `Express.js is the minimalist, flexible, de-facto standard web framework for Node.js.

\`\`\`javascript
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Root Endpoint
app.get('/', (req, res) => {
  res.json({ message: "Welcome to Nextsem Node.js API!" });
});

// Course List Endpoint
app.get('/api/courses', (req, res) => {
  res.json([
    { id: 'html', name: 'HTML5 Web Architecture', lessons: 98 },
    { id: 'css', name: 'CSS3 Styling & UI', lessons: 12 },
    { id: 'js', name: 'JavaScript ES6+', lessons: 12 },
    { id: 'node', name: 'Node.js & Express Backend', lessons: 12 }
  ]);
});

app.listen(PORT, () => {
  console.log(\`🚀 Express server running on port \${PORT}\`);
});
\`\`\`
`
  },
  {
    id: 5,
    slug: "expressjs-middleware-cors-json-body-parser",
    title: "Express Middleware: CORS, express.json() & Custom Loggers",
    unit: "Unit 2: Express.js & REST API Architecture",
    content: `Middleware functions have access to the request object (\`req\`), the response object (\`res\`), and the \`next()\` middleware in the application's request-response cycle.

\`\`\`javascript
const express = require('express');
const cors = require('cors');
const app = express();

// 1. Enable Cross-Origin Resource Sharing
app.use(cors());

// 2. Parse incoming JSON request bodies
app.use(express.json());

// 3. Custom Request Logger Middleware
app.use((req, res, next) => {
  console.log(\`[\${new Date().toISOString()}] \${req.method} \${req.url}\`);
  next(); // Pass control to next handler
});
\`\`\`
`
  },
  {
    id: 6,
    slug: "expressjs-restful-api-crud-endpoints",
    title: "Building Complete RESTful CRUD APIs (GET, POST, PUT, DELETE)",
    unit: "Unit 2: Express.js & REST API Architecture",
    content: `CRUD stands for Create (POST), Read (GET), Update (PUT/PATCH), and Delete (DELETE).

\`\`\`javascript
let lessons = [
  { id: 1, title: "Node.js Basics" },
  { id: 2, title: "Express Routing" }
];

// GET all
app.get('/api/lessons', (req, res) => res.json(lessons));

// POST create new
app.post('/api/lessons', (req, res) => {
  const newLesson = { id: lessons.length + 1, title: req.body.title };
  lessons.push(newLesson);
  res.status(201).json(newLesson);
});

// DELETE
app.delete('/api/lessons/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  lessons = lessons.filter(l => l.id !== id);
  res.status(200).json({ message: "Lesson deleted successfully" });
});
\`\`\`
`
  },
  {
    id: 7,
    slug: "expressjs-route-params-query-strings-http-status-codes",
    title: "Route Parameters, URL Query Strings & HTTP Status Codes",
    unit: "Unit 2: Express.js & REST API Architecture",
    content: `Learn standard HTTP status codes:
* **200 OK:** Standard success response.
* **201 Created:** New resource created (POST).
* **400 Bad Request:** Missing or invalid request parameters.
* **401 Unauthorized:** Missing authentication token.
* **404 Not Found:** Requested resource does not exist.
* **500 Internal Server Error:** Unhandled server exception.

\`\`\`javascript
app.get('/api/search', (req, res) => {
  const { query, limit = 10 } = req.query; // Query string ?query=html&limit=5
  if (!query) {
    return res.status(400).json({ error: "Query parameter is required" });
  }
  res.status(200).json({ query, results: [] });
});
\`\`\`
`
  },
  {
    id: 8,
    slug: "mongodb-mongoose-connection-schema-models",
    title: "MongoDB & Mongoose: Database Connections, Schemas & Models",
    unit: "Unit 3: Database & Data Persistence",
    content: `Mongoose provides elegant schema-based modeling for MongoDB document databases.

\`\`\`javascript
const mongoose = require('mongoose');

// Define Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, lowercase: true },
  role: { type: String, enum: ['student', 'admin'], default: 'student' },
  createdAt: { type: Date, default: Date.now }
});

// Compile Model
const User = mongoose.model('User', userSchema);
module.exports = User;
\`\`\`
`
  },
  {
    id: 9,
    slug: "mongodb-mongoose-crud-async-await-controllers",
    title: "Async Database CRUD Operations with Mongoose & Controllers",
    unit: "Unit 3: Database & Data Persistence",
    content: `Structure your application using clean Controller functions and async/await database operations.

\`\`\`javascript
const User = require('./models/User');

exports.createUser = async (req, res) => {
  try {
    const { username, email } = req.body;
    const user = await User.create({ username, email });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().select('-__v');
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
\`\`\`
`
  },
  {
    id: 10,
    slug: "nodejs-jwt-authentication-bcrypt-password-hashing",
    title: "JWT Authentication, Bcrypt Password Hashing & Auth Middleware",
    unit: "Unit 4: Security, Authentication & Deployment",
    content: `Secure your Node.js API using salted bcrypt password hashing and stateless JSON Web Tokens (JWT).

\`\`\`javascript
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// 1. Password Hashing
async function hashPassword(plainText) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(plainText, salt);
}

// 2. Generating JWT
function generateToken(userId) {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '7d' });
}

// 3. Auth Guard Middleware
function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(403).json({ error: 'Forbidden: Invalid token' });
  }
}
\`\`\`
`
  },
  {
    id: 11,
    slug: "nodejs-dotenv-environment-variables-security",
    title: "Environment Variables (dotenv), Config Management & API Security",
    unit: "Unit 4: Security, Authentication & Deployment",
    content: `Never commit sensitive API keys or database connection strings to public Git repositories!

\`\`\`javascript
// Load environment variables immediately
require('dotenv').config();

const dbURI = process.env.MONGODB_URI;
const jwtSecret = process.env.JWT_SECRET;
const port = process.env.PORT || 5000;
\`\`\`
`
  },
  {
    id: 12,
    slug: "nodejs-express-cloud-deployment-production",
    title: "Deploying Node.js APIs to Cloud Edge, Vercel & Firebase",
    unit: "Unit 4: Security, Authentication & Deployment",
    content: `Prepare and deploy production-grade Node.js servers with proper error handling and logging.

\`\`\`json
{
  "name": "nextsem-backend-api",
  "version": "1.0.0",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "engines": {
    "node": ">=18.0.0"
  }
}
\`\`\`
`
  }
];
