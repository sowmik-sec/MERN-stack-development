const express = require("express");
const app = express();
const https = require("https");
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=kurigram&units=metric&appid=dfbbc2973193a7a6990ff0319372be9a#";
  https.get(url, (response) => {
    console.log(response);
  });
  res.send("Weather project is running");
});

app.listen(port, () => {
  console.log("Server is running on port ", port);
});
