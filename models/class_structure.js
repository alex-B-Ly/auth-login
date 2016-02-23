var Sequelize = require('sequelize');
var connection = require('../config/connection.js');
var bcrypt = require("bcryptjs");

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
    unique: true,
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
        args: [8,255],
        msg: 'Please enter a password between 8 and 255 characters long',
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
  instructor:{
    type:Sequelize.BOOLEAN
  },
  TA:{
    type:Sequelize.BOOLEAN
  },
  email:{
    type:Sequelize.STRING,
    allowNull: false,
    unique: true,
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
        args: [8,255],
        msg: 'Please enter a password between 8 and 255 characters long',
      }
    }
  }
}

// PASSWORD HOOKS
var passHooks = {
  hooks: {
    beforeCreate: function(input){
      input.password = bcrypt.hashSync(input.password, 10);
    }
  }
}

// TABLE CREATE
var Students = connection.define('students', students, passHooks);
var Teachers = connection.define('teachers', teachers, passHooks);

exports.Students = Students;
exports.Teachers = Teachers;