var express = require('express');
var router = express.Router();
var UserInfo = require('../models/UserInfo');
var authService = require('../services/auth');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', async (req, res, next) => {
  try {
    request.body.password = Bcrypt.hashSync(request.body.password, 10);
    const UserInfo = new UserInfoModel(request.body);
    const result = await UserInfo.save();
      res.status(201).json({
        data: { users: newUserInfo }
      });
  } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err
      });
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const user = await UserInfoModel.findOne({ 
      username: req.body.username,
      password: req.body.password 
    }).exec();
    if(!user) {
      return res.status(400).send({ message: 'This username does not exist!'});
    }
    user.comparePassword(req.body.password, (error, match) => {
      if(!match) {
        return res.status(400).send({ message: 'This password is invalid!' });
      }
    }); 
    res.send({ message: 'Username and password is correct!' });
  } catch (err) {
      res.status(500).send(err);
  }
});


module.exports = router;
