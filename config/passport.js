//const passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
//const User = require('../models/user');
var bcrypt = require('bcrypt-nodejs');

module.exports = function (passport) {
    /* ---------------------------------------------------------------------------- */
    // passport session set up
    // required for presistent login session

    // used to serialize the user for the session
    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    // used to deserialize user
    passport.deserializeUser(function (user, done) {
        done(null, user);
    });

    /* ---------------------------------------------------------------------------- */
    // local signup
    passport.use('local-signup', new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    },
        function (req, username, password, done) {
            db.query("select * from user_table where username = ?", [username], function (err, rows) {
                if (err) {
                    console.log('error in passport local signup');
                    return done(err);
                }
                if (rows.length) {
                    return done(null, false, req.flash('signUpMessage', 'username taken'));
                } else {
                    // if not user with that username, create it
                    let newUser = {
                        username: username,
                        password: bcrypt.hashSync(password, null, null)
                    };
                    let insertquery = "insert into user_table (username, password) values (?,?)";
                    db.query(insertquery, [newUser.username, newUser.password], function (err, rows) {
                        newUser.id = rows.InsertId;
                        return done(null, newUser);
                    });
                }
            });
        }
    ));
    /* ---------------------------------------------------------------------------- */
    // local login
    passport.use('local-login', new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    },
        function (req, username, password, done) {
            db.query("select * from user_table where username = ?", [username], function (err, rows) {
                if (err) {
                    console.log('error in passport local login');
                    return done(err);
                }
                if (!rows.length) {
                    return done(null, false, req.flash('loginMessage', 'no user found'));
                }
                // if user found but password wrong
                if (!bcrypt.compareSync(password, rows[0].password)) {
                    return done(null, false, req.flash('loginMessage', 'wrong password'));
                }
                // all good, return the user
                return done(null, rows[0]);
            });
        })
    );
};