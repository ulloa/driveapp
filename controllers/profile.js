'use strict';
var ensureLoggedIn = require('../lib/ensureLoggedIn');

module.exports = function (router) {

    router.get('/', ensureLoggedIn('/login'), function(req, res) {
        res.render('profile', {
            user : req.user // get the user out of session and pass to template
        });
    });

};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/login');
};
