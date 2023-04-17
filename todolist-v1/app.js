const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;
const date = require(__dirname + "/date.js");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.get("/", (req, res) => {
  const day = date.getDate();
  res.render("list", { listTitle: day, newListItems: items });
});

app.get("/work", (req, res) => {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.post("/", (req, res) => {
  const item = req.body.newItem;
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.post("/work", (req, res) => {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.listen(port, () => {
  console.log(`todolist server is running on port ${port}`);
});
