var http = require("http");
var path = require("path");
var express = require("express");

var app = express();
var port = process.env.PORT || 3080;

app.use(express.static(__dirname + '/public'));
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", function(request, response) {
    response.render("index");
});

app.get("/api/countries", function(request, response){
    response.sendfile("views/ten_most_populated_countries.json")
});

app.get("/api/capitals", function(request, response){
    response.render("capitals");
});


app.listen(port, function() {
    console.log('Node app is running on port', + port);
  });
