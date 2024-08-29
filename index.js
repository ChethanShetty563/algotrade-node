// Step 3: Create a new file server.js
// Step 4: Set up an Express server in server.js
const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

// Step 5: Create two endpoints
// GET /: Returns a welcome message
app.get("/", (req, res) => {
  res.send("Welcome to the Express server!");
});

// GET /status: Returns a status message
app.post("/auth", (req, res) => {
  console.log(JSON.stringify(req.body) + " " + JSON.stringify(req.query) + " " + JSON.stringify(req.params));
  res.send({ status: "Server is running smoothly" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
