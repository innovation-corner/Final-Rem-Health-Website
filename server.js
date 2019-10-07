const express = require("express");

const path = require("path");
const app = express();
const PORT = 4000;

app.use(express.static(path.join(__dirname, "Rem Health")));
app.use(express.static(__dirname));

app.get("/about", function(req, res) {
  res.sendFile(path.join(__dirname, "Rem Health", "about.html"));
});

app.get("/contact", function(req, res) {
  res.sendFile(path.join(__dirname, "Rem Health", "contact.html"));
});

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "Rem Health", "index.html"));
});

app.listen(PORT, () => {
  console.log("Server is running at:", PORT);
});
