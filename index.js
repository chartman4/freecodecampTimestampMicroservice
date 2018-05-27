var express = require("express"),
  bodyParser = require("body-parser"),
  app = express(),
  port = process.env.PORT || 3000;

var convertDate = require("./convertDate");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/favicon.ico", (req, res) => res.status(204));

app.get("/:timeVar", function(req, res) {
  var date = convertDate(req.params.timeVar);
  res.json(date);
});

app.listen(port, function() {
  console.log("APP IS RUNNING ON PORT " + port);
});
