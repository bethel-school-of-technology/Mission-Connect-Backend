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

module.exports = authService;