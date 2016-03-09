var express = require('express');
var app     = express();
var server  = app.listen(3030);
var homeController = require("./controllers/home")

app.get('/', homeController.index);
