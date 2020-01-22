var express = require("express");
var app = express();

app.get("/", function(req, res) {
  res.send("hello world");
});

app.listen(5050, () => {
  console.log("hey");
});

app.get("/test", (req, res) => {
  res.json({ status: 200, message: "ok" });
});
