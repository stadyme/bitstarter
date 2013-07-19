var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var text_i = fs.readFileSync('index.html'); 
var text_s = text_i.toString();

app.get('/', function(request, response) {
  response.send(text_s);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
