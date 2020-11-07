 const mongoose = require('mongoose');
 const AutoIncrement = require('mongoose-sequence')(mongoose);


 
 var MissionarySchema = new mongoose.Schema({
    //  _id: Number,
     profilePic: String,
     name: String,
     continent: String,
     country: String,
     bio: String
 }, { _id: false});

 MissionarySchema.plugin(AutoIncrement)


 

module.exports = mongoose.model('Missionaries', MissionarySchema);

