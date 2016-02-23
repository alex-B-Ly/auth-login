var express = require('express');
var router = express.Router();

// Students and Teachers tables import
var classStructure = require('../models/class_structure.js');

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

// TODO login, register, student and teacher routes

module.exports = router;