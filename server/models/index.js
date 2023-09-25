const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
 
const db = {};
db.mongoose = mongoose;
db.ROLES = ["user" , "admin" , "incubator"];
db.user = require("./User/user.model")


module.exports = db;
