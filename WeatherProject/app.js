const express = require("express");
const app = express();
const https = require("https");
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=kurigram&units=metric&appid=dfbbc2973193a7a6990ff0319372be9a#";
  https.get(url, (response) => {
    console.log(response.statusCode);
    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = ` https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
      res.write(
        "<h1>The temperature in Kurigram is " + temp + " degrees Celsius.</h1>"
      );
      res.write("<h3>The weather is currently " + weatherDescription + "</h3>");
      res.write(`<img src=${icon}>`);
      res.send();
    });
  });
});

app.listen(port, () => {
  console.log("Server is running on port ", port);
});
