var express = require('express');
var app = express();
var path = require('path');

var compression = require('compression');
var serveStatic = require('serve-static');

app.use(compression());

app.use(serveStatic(__dirname + '/public'));

app.listen(3000, function(){
	console.log('Listening on port 3000...');
});