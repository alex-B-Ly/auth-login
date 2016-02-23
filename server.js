var express = require('express');
var handles = require('express-handlebars');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var session = require('express-session');
var passport = require('passport');
var passportLocal = require('passport-local');
var PORT = process.env.NODE_ENV || 8080;

// CONNECTION
var connection = require('./config/connection.js');

// Models import
var classStructure = require('./models/class_structure.js');

var app = express();

// MIDDLEWARE - Handlebars and body-parser
app.engine('handlebars', handles({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({
  extended: false
}));

// MIDDLEWARE - public
app.use('/static', express.static('public'));

// MIDDLEWARE - Session and Passport
app.use(session({
    secret: 'ripping guitar riffs',
    resave: true,
    saveUninitialized: true,
    cookie : { secure : false, maxAge : (6 * 60 * 60 * 1000) }
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
    done(null, user.id);
});
passport.deserializeUser(function(id, done) {
    done(null, { id: id, username: id })
});

// Routing
var routes = require('./controllers/router.js');
app.use('/', routes);

connection.sync().then(function() {
  app.listen(PORT, function() {
    console.log("Listening on port: "+ PORT);
  });
});