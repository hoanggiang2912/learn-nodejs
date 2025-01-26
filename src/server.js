const express = require("express"); // commonjs
const path = require("path");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// config template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Routes declaration
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/abc", (req, res) => {
  res.send("Hello World on abc page!");
});

app.get("/hoanggiang", (req, res) => {
  res.render("sample.ejs");
});

// Run server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
