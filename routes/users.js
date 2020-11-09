var express = require('express');
var router = express.Router();
var UserInfoModel = require('../models/UserInfo');
var authService = require('../services/auth');
const bcrypt = require('bcryptjs');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', async (req, res, next) => {
  try {
    req.body.Password = bcrypt.hashSync(req.body.Password, 10);
    console.log(req.body)
    const UserInfo = new UserInfoModel(req.body);
    const newUserInfo = await UserInfo.save();
    res.status(201).json({
      data: { users: newUserInfo }
    });
  } catch (err) {
    console.log(err)
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const user = await UserInfoModel.findOne({
      Username: req.body.Username,
    });
    console.log(user)
    if (!user) {
      return res.status(400).send({ message: 'This username does not exist!' });
    }
    let match = await bcrypt.compareSync(req.body.Password, user.Password)
    if (!match) {
      return res.status(400).send({ message: 'This password is invalid!' });
    }
    let token = authService.signUser(user); 
    console.log(token)
    res.cookie('jwt', token); 
    res.send('Login was successful!');
  } catch (err) {
    res.status(500).send(err);
  }
});


module.exports = router;
