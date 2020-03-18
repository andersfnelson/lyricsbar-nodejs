module.exports = function (app, passport) {
    // show the login form 
    app.get('/login', (req, res) => {
        res.render('login.ejs', {
            message: req.flash('loginMessage'),
            user: req.user
        });
    });

    app.post('/login',
        passport.authenticate('local-login', {
            successRedirect: '/profile',
            failureRedirect: '/login',
            failureFlash: true
        }),
        function (req, res) {
            console.log("hello");
            if (req.body.remember) {
                req.session.cookie.maxAge = 1000 * 60 * 3;
            } else {
                req.session.cookie.expires = false;
            }
        });
}