const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const today = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  const day = today.toLocaleDateString("en-in", options);
  res.render("list", { dayName: day });
});

app.listen(port, () => {
  console.log(`todolist server is running on port ${port}`);
});
