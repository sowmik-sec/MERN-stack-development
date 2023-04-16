const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  console.log(req.body.cityName);
  const query = req.body.cityName;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=dfbbc2973193a7a6990ff0319372be9a#`;
  https.get(url, (response) => {
    console.log(response.statusCode);
    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = ` https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
      res.write(
        `<h1>The temperature in ${query} is ${temp} degrees Celsius.</h1>`
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
