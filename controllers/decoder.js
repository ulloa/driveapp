'use strict';

var DecodeModel = require('../models/decoder');

var Quagga = require('quagga');


module.exports = function (router) {

    router.get('/', function (req, res) {

	Quagga.decodeSingle({
	    src: "./public/images/barcode.png",
	    numOfWorkers: 0,
	    inputStream: {
		size: 800  
	    },
	    decoder: {
		readers: ["ean_reader", "code128reader", "code39reader", "code39vin_reader", "upc_reader", "upcereader"] 
	    },
	}, function(result) {
	    if(result.codeResult) {
		console.log("result", result.codeResult.code);

		var model = {
		    thisvin: result.codeResult.code,
		    title: 'translated vin'
		};

		res.render('decoder', model);
	    } else {
		console.log("not detected");
		var model = {
		    thisvin: 'error',
		    title: 'translated vin'
		};
		console.log(result.codeResult.code);
		res.render('decoder', model);
	    }
	});
    });
};
