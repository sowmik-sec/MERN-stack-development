const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  console.log(req.body.num1);
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
  res.send("The answer of the calculation is " + (num1 + num2));
});

app.listen(3000, function () {
  console.log("server is running on port 3000");
});
