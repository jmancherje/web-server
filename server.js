var express = require('express');

var app = express();

// all caps variable is to say the variable should never change
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware.js')

app.use(middleware.logger);

// route level middleware here
app.get('/about', middleware.requireAuthentication, function (req, res) {
  res.send('About Us!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
  console.log('Express server started on port: ' + PORT + '!');
});