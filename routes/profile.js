module.exports = function (app, passport) {
    // this page protected
    app.get('/profile', isLoggedIn, (req, res) => {
        user_id = req.user.user_id;
        let userSongsQ = `select * from song_table where user_id = '${user_id}'`;
        db.query(userSongsQ, (err, result) => {
            if (err) { return res.status(500).send(err); }


            console.log(result);
            res.render('profile.ejs', {
                user: req.user, // user from session
                songs: result
            });
            console.log(req.user);

        });
    });
}

// route middleware to make sure
function isLoggedIn(req, res, next) {
    // if user is auth in session
    if (req.isAuthenticated()) {
        return next();
    }
    // if not go home
    res.redirect('/');
}