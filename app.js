var express = require('express');
var app     = express();
var server  = app.listen(3030);

app.get('/', function(req, res){
  res.status(200).send('Hello');
});
