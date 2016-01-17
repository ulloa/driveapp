'use strict';

var passport = require('passport');

module.exports = function (router) {

    router.get('/', function (req, res) {
        
        
        res.render('login', {message: req.flash('error')});
        //'error' for whatever reason renders the no error, using passport.js
        
    });

    router.post('/', passport.authenticate('local-login', {
	successReturnToOrRedirect: '/',
//        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));
};
