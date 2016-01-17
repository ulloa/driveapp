'use strict';
var mongoose = require('mongoose');

var VinbookModel = function () {


    var vinSchema = mongoose.Schema({
        numberstring: String,
        model: String,
        make: String,
	year: Number,
	imageurl: String
    });


    return mongoose.model('Vin', vinSchema);

};

module.exports = new VinbookModel();
