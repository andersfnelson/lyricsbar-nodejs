module.exports = function (app, passport) {
    // show sign up form
    app.get('/signUp', (req, res) => {
        res.render('signUp.ejs', {
            message: req.flash('signupMessage'),
            user: req.user
        });
    });
    // process sign up form
    app.post('/signUp', passport.authenticate('local-signup', {
        successRedirect: '/profile',
        failureRedirect: '/signUp',
        failureFlash: true
    }));
}