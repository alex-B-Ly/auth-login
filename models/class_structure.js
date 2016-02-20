var Sequelize = require('sequelize');

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
  }
  // ,
  // teacher_id:{

  // },
  // TA1_id:{

  // },
  // TA2_id:{

  // }
}

exports.students = students;