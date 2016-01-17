'use strict';
var mongoose = require('mongoose');

var VinbookModel = function () {

    //Define a super simple schema for our courses.
    var vinSchema = mongoose.Schema({
        numberstring: String,
        model: String,
        make: String,
	year: Number,
	imageurl: String,
    });

    //Format the price of the product to show a dollar sign, and two decimal places
    return mongoose.model('Vin', vinSchema);

};

module.exports = new VinbookModel();
