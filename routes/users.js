var express = require('express');
var router = express.Router();
var UserInfo = require('../models/UserInfo');
var authService = require('../services/auth');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});




module.exports = router;
