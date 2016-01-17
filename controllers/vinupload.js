'use strict';

var VinbookModel = require('../models/vinbook');
var ensureLoggedIn = require('../lib/ensureLoggedIn');

module.exports = function (router) {


    router.get('/', ensureLoggedIn('/login'), function (req, res) {
        
        
        res.render('vinupload');
        
        
    });

    router.post('/', function (req, res) {
	var numberstring = req.body.numberstring;
	var imageurl = req.body.imageurl;
	var model = req.body.model;
	var make = req.body.make;

	if (imageurl === '' || !(/.(gif|png|jpg|jpeg)/.test(imageurl))) {
            res.redirect('/vinupload#BadInput');
            return;
        }
	
	var newVin = new VinbookModel({numberstring: numberstring, 
				       imageurl: imageurl, model: model,
				       make: make});
	
	newVin.save(function(err) {
	    if(err) {
		console.log('save error', err);
	    }
	    res.redirect('/vinbook');
	});
    });

    router.post('/:id', function (req, res) {
	VinbookModel.findById(req.params.id, function (err, oldVin) {
            // The above method is from MONGOOSE! and used for updating        
	    var numberstring = req.body.numberstring;
	    var imageurl = req.body.imageurl;
	    var model = req.body.model;
	    var make = req.body.make;

            if (imageurl === '' || !(/.(gif|png|jpg|jpeg)/.test(imageurl))) {
		res.redirect('/admin/classes#BadInput');
		return;
            }
            /* There is a major bug with img src non image end imageurls. */


            oldVin.numberstring = numberstring;
            oldVin.imageurl = imageurl;
            oldVin.model = model;
            oldVin.make = make;

            oldVin.save(function(err) {
		if(err) {
                    console.log('save error', err);
		}

		res.redirect('/vinbook');
            });
	});
    });

    router.delete('/:id', function (req, res) {
	VinbookModel.findByIdAndRemove(req.params.id, function (err, oldVin) {
            console.log('save error', err);
            res.redirect('/vinbook');
	});
    });

};
