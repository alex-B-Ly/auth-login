var express = require('express');
var handles = require('express-handlebars');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var PORT = process.env.NODE_ENV || 8080;

// CONNECTION
var Sequelize = require('sequelize');
var connection = require('./config/connection.js');

// Models import
var classStructure = require('./models/class_structure.js');

var app = express();

app.engine('handlebars', handles({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({
  extended: false
}));

// TABLE CREATE
connection.define('students', classStructure.students);

connection.sync().then(function() {
  app.listen(PORT, function() {
    console.log("Listening on port: "+ PORT);
  });
});