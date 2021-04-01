const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');

const Users = require('../models/user-model');

module.exports = function () {
    passport.use(new LocalStrategy({
        username: 'user[username]',
        password: 'user[password]',
    }, (username, password, done) => {
        Users.findOne({
                username
            })
            .then((user) => {
                if (!user || user.password != password) {
                    return done(null, false, {
                        isSuccessfull: false,
                        errors: 'Username or password is invalid'
                    });
                }

                return done(null, user);
            }).catch(done);
    }));
}