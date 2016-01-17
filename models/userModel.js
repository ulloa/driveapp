'use strict';
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt');

//var userModel = function () {
//
    //Define a super simple schema for our users.
//    var userSchema = mongoose.Schema({
//        userName: String,
//	password: String,
//	role: String
//    });
//
//    return mongoose.model('User', userSchema);
//
//};
//
//module.exports = new userModel();

var userModel = function () {
    // define the schema for our user model
    var userSchema = mongoose.Schema({

	local            : {
            email        : String,
            password     : String,
	},
	facebook         : {
            id           : String,
            token        : String,
            email        : String,
            name         : String
	},
	twitter          : {
            id           : String,
            token        : String,
            displayName  : String,
            username     : String
	},
	google           : {
            id           : String,
            token        : String,
            email        : String,
            name         : String
	}

    });
    userSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    };
    // checking if password is valid
    userSchema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.local.password);
    };

    return mongoose.model('User', userSchema);
};


// create the model for users and expose it to our app
module.exports = new userModel();
