var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

// TODO Import Students and Teachers tables from models

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

router.post('/register', function(req, res){
  var fName = req.body.f_name;
  var lName = req.body.l_name;
  var email = req.body.email;
  var password = req.body.password;
  var passConfirm = req.body.passwordconfirm;

  if(password !== passConfirm){
    res.redirect('/create_account/?msg=Your password entries don\'t match.');
  }else{
    res.redirect('/register_success');
  }
});

// TODO login, register, student and teacher routes

module.exports = router;