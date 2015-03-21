var User = require('../models/user.js');
var config = require('../../config.js');

var secretKey = config.secretKey;

module.exports = function(app, express){
    var api = express.Router();
    api.post('/signup', function(req, res){
        var user = new User({
            name: req.body.name,
            username: req.body.username,
            password: req.body.password
        });

        user.save(function(err){
            if(err){
                res.send(err);
                return;
            }
            res.json({ message: 'User has been created'});
        });
    });


    return api;
};
