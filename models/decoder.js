'use strict';

var mongoose = require('mongoose');

var DecodeModel = function () {

    var decodeSchema = mongoose.Schema({
        numberstring: String,
	imageurl: String
    });

    return mongoose.model('Decode', decodeSchema);

};

module.exports = new DecodeModel();
