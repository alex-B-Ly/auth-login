var Sequelize = require('sequelize');

var connection = new Sequelize('class_db', 'root');

module.exports = connection;