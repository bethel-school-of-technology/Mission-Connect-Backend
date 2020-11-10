var express = require('express');
var router = express.Router();
var models = require('../models/Missionary');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mission Connect' });
});

module.exports = router;
