const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
// const { has } = require('mongoose/lib/helpers/specialProperties');

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
                expresIn: '1h'
            },
            (err, token) => {
                if (err) throw err;
                res.status(200).json({
                    token
                });
            }
        );
    }
}

// verifyUser: function (token) {  //<--- receive JWT token as parameter
//     try {
//       let decoded = jwt.verify(token, 'secretkey'); //<--- Decrypt token using same key used to encrypt
//       return models.users.findByPk(decoded.UserId); //<--- Return result of database query as promise
//     } catch (err) {
//       console.log(err);
//       return null;
//     }
//   }

module.exports = authService;