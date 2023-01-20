const express = require("express");

const app = express();

app.get("/", function (request, response) {
  response.send("<h1>Hello World</h1>");
});

app.get("/contact", function (req, res) {
  res.send("sowmik.sec@gmail.com");
});

app.get("/about", function (req, res) {
  res.send("Ahsan Habib<br>Bhurungamari, Kurigram");
});

app.listen(3000, function () {
  console.log("server has started on port 3000");
});
