'use strict';
var mongoose = require('mongoose');

var BeaconModel = function () {

    var beaconSchema = mongoose.Schema({
        polypaths: [Number, Number]
    });

    return mongoose.model('Beacon', beaconSchema);

};

module.exports = new BeaconModel();
