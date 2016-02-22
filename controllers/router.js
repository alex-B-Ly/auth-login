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
  var password = req.body.password;
  var passConfirm = req.body.passwordconfirm;

  if(password !== passConfirm){
    res.redirect('/create_account/?msg=Your password entries don\'t match.');
  }else{
    // TODO create entry in db
    // TODO Figure out logic to enable registration as student or teacher
    res.redirect('/register_success');
  }
});

// TODO login, register, student and teacher routes

module.exports = router;