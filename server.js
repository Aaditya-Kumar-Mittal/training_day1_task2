var express = require("express");

var path = require("path");

var app = express();

var PORT = 3000;

// Set EJS as the templating engine

// Our view engine is set to EJS as the templating engine
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views")); // This sets the directory where your view (template) files are stored.

// Serve Static Files

app.use(express.static(path.join(__dirname, "public"))); // This tells Express to serve static files (like CSS, JS, images) from the /public folder.

// Routes

app.get("/", function (req, res) {
  res.render("index", {
    title: "Home Page",
    message: "Welcome to Server Side Rendering!",
  });
});

app.get("/about", function (req, res) {
  res.render("about", {
    title: "About Page",
    message: "This is an SSR example using Node v5.",
  });
});

app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});
