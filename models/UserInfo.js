const mongoose = require('mongoose');

 var UserInfoSchema = new mongoose.Schema({
     info: {
            _id: Number,
            FirstName: {
                type: String,
                required: true
            },
            LastName: {
                type: String,
                required: true
            },
            Email: {
                type: String,
                required: true
            },
            Username: {
                type: String, 
                required: true
            },
            Password: {
                type: String,
                required: true
            },
     },
         createdAt: {
             type: Date,
             default: Date.now()
         }
 });
 
//  const jwt = require('jsonwebtoken');
// UserInfoSchema.methods.generateToken = function(cb){
//     var user = this;
//     var token = jwt.sign(user.id.toHexString(),process.env.SECRET)
//     user.token = token;
//     user.save(function(err,user){
//         if(err) return cb(err);
//         cb(null,user);
//     })
// };

module.exports = mongoose.model('users', UserInfoSchema);