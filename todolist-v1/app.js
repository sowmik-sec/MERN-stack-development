const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  //   let day = "";
  //   if (today.getDate() === 5 || today.getDate() === 6) {
  //     day = "Weekend";
  //   } else {
  //     day = "Weekday";
  //   }
  res.render("list", { dayName: daysOfWeek[parseInt(today.getDay())] });
});

app.listen(port, () => {
  console.log(`todolist server is running on port ${port}`);
});
