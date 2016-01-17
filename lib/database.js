var mongoose = require('mongoose');

var db = function () {
    return {
        config: function (conf) {
	    //below connects to mongodb port 27017 localhost, see spec.js
            mongoose.connect('mongodb://heroku_712gd21p:c6bclt8rjlkaaqlc3ml5hfi63t@ds047095.mongolab.com:47095/heroku_712gd21p' + '/' + conf.database);
//            mongoose.connect('mongodb://' + conf.host + '/' + conf.database);
            var db = mongoose.connection;
            db.on('error', console.error.bind(console, 'connection error:'));
            db.once('open', function callback() {
                console.log('db connection open');
            });
        }
    };
};

module.exports = db();
