var mongoose = require('mongoose');
var {model,Schema} = require('mongoose');



const userSchema = new Schema({
    username : String,
    password : String,
    email : String,
    createdAt : String
})
//const User = new mongoose.model('User',userSchema);

module.exports = model('User', userSchema);