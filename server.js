var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('Ruta privada');
		next();
	},
	logger: function (req, res, next) {
		console.log('Request: ' + new Date().toString() + ' | ' + req.method + ' ' + req.originalUrl );
		next();
	}
};

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About us!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
	console.log('Servidor Express ha comensado en el puerto: ' + PORT);
});