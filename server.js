'use strict';

var app = require('./index');
var http = require('http');

var morgan = require('morgan');

var server;

app.use(morgan('dev'));
/*
 * Create and start HTTP server.
 */

server = http.createServer(app);
server.listen(process.env.PORT || 8000);
server.on('listening', function () {
    console.log('Server listening on http://localhost:%d', this.address().port);
});
