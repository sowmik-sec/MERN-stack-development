const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World of javascript!");
});

app.listen(3000, function () {
  console.log("testing app.");
});
