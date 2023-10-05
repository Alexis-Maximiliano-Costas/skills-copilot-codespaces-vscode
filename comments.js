// Create web server
// Run: node comments.js
// Test: curl http://localhost:3000/comments
// Test: curl -X POST -d "comment=Hello" http://localhost:3000/comments
// Test: curl -X POST -d "comment=Hello" http://localhost:3000/comments -H "Content-Type:application/json"

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// Use bodyParser to parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Use bodyParser to parse application/json
app.use(bodyParser.json());

// Use an array to store comments
const comments = [];

// Set static file folder
app.use(express.static(__dirname + "/public"));

// GET /comments
app.get("/comments", (req, res) => {
  res.json(comments);
});

// POST /comments
app.post("/comments", (req, res) => {
  comments.push(req.body);
  res.json(comments);
});

// Start server
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});