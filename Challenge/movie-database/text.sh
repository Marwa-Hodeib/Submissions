app.listen(5050, () => {
  console.log("hey");
});



app.get("/movie/get/:ORDER", (req, res) => {     var order = req.params.ORDER;     if (order == 'by-date')         res.json({             status: 200,             data: movies.sort((a, b) => a.year - b.year)         });     else if (order == 'by-rating')         res.json({             status: 200,             data: movies.sort((a, b) => a.rating - b.rating)         });     else if (order == 'by-title')         res.json({             status: 200,             data: movies.sort((a, b) => a.title.localeCompare(b.title))         }); });