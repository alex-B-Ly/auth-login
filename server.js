var express = require('express');
var handles = require('express-handlebars');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var session = require('express-session');
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

// Session
app.use(session({
    secret: 'ripping guitar riffs',
    resave: true,
    saveUninitialized: true,
    cookie : { secure : false, maxAge : (6 * 60 * 60 * 1000) }
}));

// MIDDLEWARE - public
app.use('/static', express.static('public'));

// Routing
var routes = require('./controllers/router.js');
app.use('/', routes);

connection.sync().then(function() {
  app.listen(PORT, function() {
    console.log("Listening on port: "+ PORT);
  });
});