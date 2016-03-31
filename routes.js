var app = require('./services/server').app;

/*
 * Controllers
 * */
var homeController = require("./controllers/home")
var userController = require("./controllers/user")

/*
 * Routes definition
 * */

// Home
app.get('/',        homeController.index);
app.get('/landing', homeController.landing);

// Users
app.get('/users',  userController.show);

// Example
app.post('/foo', userController.foo);
