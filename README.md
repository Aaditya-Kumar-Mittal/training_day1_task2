# Server-Side Rendering with Node.js v5 using Express and EJS

![Node](https://img.shields.io/badge/Node.js-v5.x.x-blue) ![Express](https://img.shields.io/badge/Express-4.18.2-green) ![EJS](https://img.shields.io/badge/EJS-3.1.8-yellow) ![License](https://img.shields.io/badge/License-MIT-brightgreen) ![Status](https://img.shields.io/badge/Status-Working%20✅-success)

## Table of Contents

- [Server-Side Rendering with Node.js v5 using Express and EJS](#server-side-rendering-with-nodejs-v5-using-express-and-ejs)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Problem Description](#problem-description)
    - [Examples](#examples)
    - [Constraints](#constraints)
  - [Approach](#approach)
  - [Detailed Explanation of Code](#detailed-explanation-of-code)
    - [Folder Structure](#folder-structure)
    - [package.json](#packagejson)
    - [server.js](#serverjs)
    - [EJS Views](#ejs-views)
      - [`views/index.ejs`](#viewsindexejs)
      - [`views/about.ejs`](#viewsaboutejs)
  - [Complexity Analysis](#complexity-analysis)
  - [How to Run the Code](#how-to-run-the-code)
    - [For Node.js v5](#for-nodejs-v5)

---

## Introduction

This project demonstrates how to perform **Server-Side Rendering (SSR)** using **Node.js v5**—an older version of Node released in 2015. Given the limitations of v5 (lack of native `async/await`, ES modules, etc.), this project uses **ES5 syntax**, **Express v4**, and **EJS** templating to render dynamic HTML from the server.

---

## Problem Description

Server-side rendering is the process of rendering content to HTML on the server and sending the fully rendered page to the client. This improves SEO, initial load performance, and accessibility.

In older Node.js versions like v5, modern frameworks are unavailable or unstable. Therefore, we’ll use legacy-compatible tools to achieve SSR.

### Examples

- Visiting `/` renders the **Home Page**:
  `Welcome to Server-Side Rendering!`

- Visiting `/about` renders the **About Page**:
  `This is an SSR example using Node v5.`

### Constraints

- Node.js v5.x.x (limited ES6+ support)
- No `import/export`, `const/let`, or `async/await`
- Must use `require()` and `var`

---

## Approach

We used:

- **Express** to handle routing and server creation
- **EJS (Embedded JavaScript)** to render dynamic HTML templates
- **Static folder** (`public/`) to serve CSS and other assets

This ensures compatibility with the syntax and limitations of Node v5.

---

## Detailed Explanation of Code

### Folder Structure

```md
ssr-node-v5/
│
├── views/
│ ├── index.ejs
│ └── about.ejs
│
├── public/
│ └── style.css
│
├── server.js
└── package.json
```

### package.json

```json
{
  "name": "ssr-node-v5",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "ejs": "3.1.8",
    "express": "4.18.2"
  }
}
```

> Install dependencies:

```bash
npm install express@4 ejs@3
```

### server.js

```javascript
var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

// Set EJS as the templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", function (req, res) {
  res.render("index", {
    title: "Home Page",
    message: "Welcome to Server-Side Rendering!",
  });
});

app.get("/about", function (req, res) {
  res.render("about", {
    title: "About Page",
    message: "This is an SSR example using Node v5.",
  });
});

// Start the server
app.listen(PORT, function () {
  console.log("Server is running at http://localhost:" + PORT);
});
```

### EJS Views

#### `views/index.ejs`

```html
<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <h1><%= message %></h1>
    <a href="/about">Go to About Page</a>
  </body>
</html>
```

#### `views/about.ejs`

```html
<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <h1><%= message %></h1>
    <a href="/">Back to Home</a>
  </body>
</html>
```

---

## Complexity Analysis

- **Time Complexity**:

  - Route rendering: `O(1)` (constant per route call)
  - Template rendering: `O(n)` where `n` is template size

- **Space Complexity**:

  - Minimal, only stores route info and template cache

---

## How to Run the Code

### For Node.js v5

1. **Ensure Node v5 is installed**

   ```bash
   node -v  # Should return v5.x.x
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the server**

   ```bash
   node server.js
   ```

4. **Open browser**

   - Home: [http://localhost:3000](http://localhost:3000)
   - About: [http://localhost:3000/about](http://localhost:3000/about)

---
