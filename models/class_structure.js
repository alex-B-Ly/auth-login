var Sequelize = require('sequelize');

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
  teacher_id:{
    type:Sequelize.INTEGER,
    allowNull: false
  },
  TA1:{
    type:Sequelize.INTEGER,
    allowNull: true
  },
  TA2:{
    type:Sequelize.INTEGER,
    allowNull: true
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
  }
}

exports.students = students;
exports.teachers = teachers;



