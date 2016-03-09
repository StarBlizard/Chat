var Server        = require('http').Server;
var express       = require('express');
var configuration = require('../config/configuration');

module.exports = {

  start : function(){
    console.log('Start Server');
    var PORT = process.env.NODE_PORT || configuration.PORT;

    this.server  = new Server();
    this.app     = express(this.server);

    // Use custom middleware
    this.app.use(function(req, res, next){
      console.log('Incomming request: ', req.url, req.connection.remoteAddress);
      return next();
    });

    this.app.listen(PORT, function(){
      console.log('Server started on PORT', PORT);
    });
  }

};
