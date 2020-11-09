const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { has } = require('mongoose/lib/helpers/specialProperties');
const UserInfo = require('../models/UserInfo');
const db = require('../models/UserInfo');


var authService = {
    signUser: function(user) {
        const token = jwt.sign(
            {
                Username: user.Username,
                UserId: user.UserId,
                expiresIn: 10000
            },
            'secretkey',
            {
                expiresIn: '1h'
            },
            (err, token) => {
                if (err) throw err;
                res.status(200).json({
                    token
                });
            }
        );
    }
};


// db.users('users').findOne (
//     { 
//             username: req.body.username,
//             password: req.body.password 
//     },
//     function(err, user) {
//         if(err) {
//             console.log('Error response')
//             res.json(err)
//     }
//     if (user && user.password === req.body.password) {
//         console.log('User and password is correct')
//         res.json(user);
//     } else {
//         console.log('Credentials are invalid');
//         res.json({ data: 'Invalid login!'});
//     }
// })
  

module.exports = authService;