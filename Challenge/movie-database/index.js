var express = require("express");
var app = express();
const movies = [
  { title: "Jaws", year: 1975, rating: 8 },
  { title: "Avatar", year: 2009, rating: 7.8 },
  { title: "Brazil", year: 1985, rating: 8 },
  { title: "الإرهاب والكباب‎", year: 1992, rating: 6.2 }
];

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
    message: "hello " + req.params.ID
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

app.get("/movie/get", (req, res) => {
  res.json({ status: 200, data: movies });
});

app.get("/movie/add", (req, res) => {
  res.json({ status: 200, data: movies });
});

app.get("/movie/edit", (req, res) => {
  res.json({ status: 200, data: movies });
});

app.get("/movie/delete", (req, res) => {
  res.json({ status: 200, data: movies });
});

app.get("/movie/get/:ORDER", (req, res) => {
  var order = req.params.ORDER;
  if (order == "by-date")
    res.json({ status: 200, data: movies.sort((a, b) => a.year - b.year) });
  else if (order == "by-rating")
    res.json({ status: 200, data: movies.sort((a, b) => a.rating - b.rating) });
  else if (order == "by-title")
    res.json({
      status: 200,
      data: movies.sort((a, b) => a.title.localeCompare(b.title))
    });
});
