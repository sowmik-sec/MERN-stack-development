const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const request = require("request");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  console.log(firstName, lastName, email);
});

app.listen(port, () => {
  console.log(`Newsletter is listening on port ${port}`);
});
