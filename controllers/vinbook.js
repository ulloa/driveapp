'use strict';

var VinbookModel = require('../models/vinbook');
var ensureLoggedIn = require('../lib/ensureLoggedIn');

module.exports = function (router) {

    router.get('/', ensureLoggedIn('/login'), function (req, res) {

	VinbookModel.find(function (err, vins) {
	    if (err) {
		console.log(err);
	    }
//            crses.forEach(function(crs) {
//                crs.prettyPrice = crs.prettyPrice();
//            });
	    var model = {
		allvins: vins,
		title: 'Vin Catalog'
	    };
	    res.render('vinbook', model);
	});        
    });

    router.get('/:id', function (req, res) {
	VinbookModel.findById(req.params.id, function (err, oldVin) {        
	    if (err) {
		console.log(err);
	    }
	    var model = {
		thisvin: oldVin,
		title: 'Vin Catalog'
	    };
	    res.render('vinupload', model);
	});        
    }); 
};
