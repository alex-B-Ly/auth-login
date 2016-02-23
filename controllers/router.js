var express = require('express');
var router = express.Router();
var LocalStrategy = require('passport-local').Strategy;
var passport = require('passport');
var bcrypt = require('bcryptjs');

// Students and Teachers tables import
var classStructure = require('../models/class_structure.js');

passport.use('local-login', new LocalStrategy({
  // by default, local strategy uses username and password, we will override with email
  usernameField : 'email',
  passwordField : 'password',
  passReqToCallback : true // allows us to pass back the entire request to the callback
},
function(req, email, password, done) { // callback with email and password from our form

  // find a user whose email is the same as the forms email
  // we are checking to see if the user trying to login already exists
  classStructure.Students.findOne({
    where:{
      email:email
    }
  }).then(function(user){
    if(user){
      bcrypt.compare(password, user.dataValues.password, function(err, user) {
        if(user){
          done(null, { id: email, username: email });
        }else{
          done(null, null);
        }
      });
    }else{
      done(null, null);
    }
  });
}));

passport.use('teacher-local-login', new LocalStrategy({
  // by default, local strategy uses username and password, we will override with email
  usernameField : 'email',
  passwordField : 'password',
  passReqToCallback : true // allows us to pass back the entire request to the callback
},
function(req, email, password, done) { // callback with email and password from our form

  // find a user whose email is the same as the forms email
  // we are checking to see if the user trying to login already exists
  classStructure.Teachers.findOne({
    where:{
      email:email
    }
  }).then(function(user){
    if(user){
      bcrypt.compare(password, user.dataValues.password, function(err, user) {
        if(user){
          done(null, { id: email, username: email });
        }else{
          done(null, null);
        }
      });
    }else{
      done(null, null);
    }
  });
}));

// GET ROUTES
router.get('/', function(req, res){
  res.render('index');
});

router.get('/login', function(req, res){
  res.render('login');
});

router.get('/create_account', function(req, res){
  res.render('register', {msg:req.query.msg});
});

router.get('/register_success', function(req, res){
  res.render('register_success');
});

router.get('/student', function(req, res){
  res.render('student');
});

router.get('/teacher', function(req, res){
  res.render('teacher');
});

// POST ROUTES

router.post('/student_register', function(req, res){
  var password = req.body.password;
  var passConfirm = req.body.passwordconfirm;

  if(password !== passConfirm){
    res.redirect('/create_account/?msg=Your password entries don\'t match.');
  }else{
    classStructure.Students.create(req.body).then(function(result){
      res.redirect('/register_success');
    }).catch(function(err) {
      console.log(err);
      res.redirect('/create_account/?msg=' + err.errors[0].message);
    });
  }
});

router.post('/teacher_register', function(req, res){
  var password = req.body.password;
  var passConfirm = req.body.passwordconfirm;

  if(password !== passConfirm){
    res.redirect('/create_account/?msg=Your password entries don\'t match.');
  }else if(!req.body.instructor && !req.body.TA){
    res.redirect('/create_account/?msg=You must choose a role.');
  }else{
    classStructure.Teachers.create(req.body).then(function(result){
      res.redirect('/register_success');
    }).catch(function(err) {
      console.log(err);
      res.redirect('/create_account/?msg=' + err.errors[0].message);
    });
  }
});

// LOGIN ROUTES
router.post('/logincheck', passport.authenticate('local-login',{
    successRedirect: '/student',
    failureRedirect: '/login'
}));

router.post('/teacherlogincheck', passport.authenticate('teacher-local-login',{
    successRedirect: '/teacher',
    failureRedirect: '/login'
}));

module.exports = router;