var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('index');
});

// TODO login, register, student and teacher routes

module.exports = router;