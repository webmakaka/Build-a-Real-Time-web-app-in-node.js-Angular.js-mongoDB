var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new Schema({
    name: String,
    username: { type: String, required: true, index: { unique: true }},
    password: { type: String, required: true, select: false}
});

UserSchema.pre('save', function(next){
    var user = this;
    if(!user.isModified('password')) return next();

    bcrypt.hash(user.password, null, null, function(err, hash){
        if(err) return next(err);

        user.password = hash;
        next();
    });
});

module.exports = mogoose.model('User', UserSchema);
