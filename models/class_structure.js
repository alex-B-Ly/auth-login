var Sequelize = require('sequelize');
var connection = require('../config/connection.js');

// STUDENTS TABLE KEYS
var students = {
  f_name:{
    type:Sequelize.STRING,
    allowNull: false,
    validate:{
      notEmpty: true,
      len: {
        args: [1,40],
        msg: 'Please enter a first name between 1 and 40 characters long',
      }
    }
  },
  l_name:{
    type:Sequelize.STRING,
    allowNull: false,
    validate:{
      notEmpty: true,
      len: {
        args: [1,40],
        msg: 'Please enter a last name between 1 and 40 characters long',
      }
    }
  },
  email:{
    type:Sequelize.STRING,
    allowNull: false,
    validate:{
      notEmpty: true,
      len: {
        args: [1,255],
        msg: 'Please enter a valid email',
      }
    }
  },
  password:{
    type:Sequelize.STRING,
    allowNull: false,
    validate:{
      notEmpty: true,
      len: {
        args: [1,255],
        msg: 'Please enter a password',
      }
    }
  }
}

// TEACHERS TABLE KEYS
var teachers = {
  f_name:{
    type:Sequelize.STRING,
    allowNull: false,
    validate:{
      notEmpty: true,
      len: {
        args: [1,40],
        msg: 'Please enter a first name between 1 and 40 characters long',
      }
    }
  },
  l_name:{
    type:Sequelize.STRING,
    allowNull: false,
    validate:{
      notEmpty: true,
      len: {
        args: [1,40],
        msg: 'Please enter a last name between 1 and 40 characters long',
      }
    }
  },
  email:{
    type:Sequelize.STRING,
    allowNull: false,
    validate:{
      notEmpty: true,
      len: {
        args: [1,255],
        msg: 'Please enter a valid email',
      }
    }
  },
  password:{
    type:Sequelize.STRING,
    allowNull: false,
    validate:{
      notEmpty: true,
      len: {
        args: [1,255],
        msg: 'Please enter a password',
      }
    }
  }
}

// TABLE CREATE
var Students = connection.define('students', students);
var Teachers = connection.define('teachers', teachers);

