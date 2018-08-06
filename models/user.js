const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    userID: {
        type: Number,
        index: true
    },
    address: {
        type: String
    },
    password: {
        type: String
    }
});

let User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = (newUser, callback) => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

module.exports.findUser = (userid, callback) => {
    User.findOne({userID: userid}, callback);
}

module.exports.comparePassword = (password, hash, callback) => {
    bcrypt.compare(password, hash, callback);
}

