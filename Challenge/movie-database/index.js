var express = require("express");
var app = express();

app.get("/", function(req, res) {
  res.send("hello world");
});

app.listen(5050);

app.get("/test", (req, res) => {
  res.json({ status: 200, message: "ok" });
});

app.get("/time", (req, res) => {
  res.json({
    status: 200,
    message:
      new Date().getHours() +
      ":" +
      new Date().getMinutes() +
      ":" +
      new Date().getSeconds()
  });
});
