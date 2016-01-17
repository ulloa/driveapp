'use strict';

var express = require('express');
var kraken = require('kraken-js');
var options = require('./lib/spec')();
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('connect-flash');
var passport = require('passport');
require('./config/passport')(passport);

var app;

/*
 * Create and configure application. Also exports application instance for use by tests.
 * See https://github.com/krakenjs/kraken-js#options for additional configuration options.
 */



app = module.exports = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(methodOverride(function(req, res){
      if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it                             
            var method = req.body._method;
            delete req.body._method;
	    return method;
  }
}));



app.use(session({ secret: 'peoplespace' })); // session secret                

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions                     
 
app.use(flash()); // use connect-flash for flash messages stored in session



app.use(kraken(options));
app.on('start', function () {
    console.log('Application ready to serve requests.');
    console.log('Environment: %s', app.kraken.get('env:env'));
});
