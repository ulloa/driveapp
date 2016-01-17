'use strict';

var passport = require('passport');

module.exports = function (router) {

    router.get('/', function (req, res) {
        
        
        res.render('signup', {message: req.flash('error')});
        
    });

    router.post('/', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));
};
