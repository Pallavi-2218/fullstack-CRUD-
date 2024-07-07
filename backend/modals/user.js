var mongo = require('mongoose');
var schema = mongo.Schema;
var userSchema = new schema({
    name:String,
    email:String,
    age:Number,
})
var user = mongo.model('user',userSchema);
module.exports = user;