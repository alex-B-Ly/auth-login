var express = require('express');
var handles = require('express-handlebars');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var PORT = process.env.NODE_ENV || 8080;

// CONNECTION
var connection = require('./config/connection.js');

// Models import
var classStructure = require('./models/class_structure.js');

var app = express();

// Middleware
app.engine('handlebars', handles({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({
  extended: false
}));

// MIDDLEWARE - public
app.use('/css', express.static('public/css'));
app.use('/js', express.static('public/js'));
app.use('/img', express.static('public/img'));

// Routing
var routes = require('./controllers/router.js');
app.use('/', routes);

connection.sync().then(function() {
  app.listen(PORT, function() {
    console.log("Listening on port: "+ PORT);
  });
});