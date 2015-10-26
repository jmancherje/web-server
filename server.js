var express = require('express');

var app = express();

// all caps variable is to say the variable should never change
var PORT = 3000;

var middleware = {
  requireAuthentication: function (req, res, next) {
    console.log('private route hit!');
    next();
  },
  logger: function (req, res, next) {
    // new Date().toString();
    console.log('request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
    next();
  }
};

app.use(middleware.logger);
// application level middleware
// app.use(middleware.requireAuthentication);

// forward slash is root url
// could be /about or anything you want to open
// req is request (cookies etc), res is response (that is sent back)
// get is https request method (like viewing a page in browser)
// app.get('/', function (req, res) {
//   res.send('Hello Express');
// });


// route level middleware here
app.get('/about', middleware.requireAuthentication, function (req, res) {
  res.send('About Us!');
});

app.use(express.static(__dirname + '/public'));


// listening on port 3000

app.listen(PORT, function () {
  console.log('Express serer started on port: ' + PORT + '!');
});