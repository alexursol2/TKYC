const authJwt = require("./User/authJwt");
const verifySignUp = require("./User/verifySignUp");

//This index export file contains all the middlewares that are export making the package modular and simple to use as well as organized
module.exports = {
  authJwt,
  verifySignUp,
  
};
