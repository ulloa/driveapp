'use strict';

var BeaconModel = require('../models/beacon');


module.exports = function (router) {

    var model = new BeaconModel();

    router.get('/', function (req, res) {
        
        res.render('beacon', model);
    });

};
