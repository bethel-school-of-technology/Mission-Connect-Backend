var express = require('express');
var router = express.Router();
var models = require('../models');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/signup', function(req, res, next) {
    res.render('Msignup');
});

router.post('/signup', function(req, res, next) {
    models.missionaries.findOrCreate({
        where: {
            Username: req.body.username
        },
        defaults: {
            FirstName: req.body.firstName,
            LastName: req.body.lastName,
            Email: req.body.email,
            Password: req.body.password
        }
    })
    .spread(function(result, created) {
        if ( created ) {
            res.send( "User successfully created" );
        } else {
            res.send('This user already exists');
        }
    });
});

module.exports = router;
