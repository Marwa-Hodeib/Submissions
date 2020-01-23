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

app.get("/hello/:ID", (req, res) => {
  res.json({
    status: 200,
    message: "hello" + req.params.ID
  });
});

app.get("/search", (req, res) => {
  if (req.query.b) res.json({ status: 200, data: req.query.b });
  else {
    res.json({
      status: 500,
      error: true,
      message: "you have to provide a search"
    });
  }
});
