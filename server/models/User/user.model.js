var mongoose = require('mongoose');

const baseOptions = {
    discriminatorKey: 'userType', // our discriminator key, could be anything
 //   collection: 'users', // the name of our collection
  };


var UserSchema = new mongoose.Schema({
    username: String,
    wallet:String,
    status:Array
    

},baseOptions
)

module.exports = mongoose.model('User' , UserSchema , 'Users') ;
