const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { has } = require('mongoose/lib/helpers/specialProperties');
const UserInfoModel = require('../models/UserInfo');
const db = require('../models/UserInfo');


var authService = {
    signUser: function(user) {
        const token = jwt.sign(
            {
                Username: user.Username,
                UserId: user._id,
                expiresIn: 10000
            },
            'secretkey',
            {
                expiresIn: '1h'
            })
            return token
    },
    verifyUser: function (token) {  //<--- receive JWT token as parameter
        try {
          let decoded = jwt.verify(token, 'secretkey'); 
          return UserInfoModel.findById(decoded.UserId); 
        } catch (err) {
          console.log(err);
          return null;
        }
      }
      
};



  

module.exports = authService;