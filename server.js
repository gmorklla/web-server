var express = require('express');
var app = express();
var PUERTO = process.env.PORT || 8080;

var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About us!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PUERTO, function () {
	console.log('Servidor Express ha comensado en el puerto: ' + PUERTO);
});