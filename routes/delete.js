module.exports = function (app) {
    app.get('/delete/:id', isLoggedIn, (req, res) => {
        // id from get params
        let songID = req.params.id;
        let query = `delete from song_table where song_id = ${songID}`;
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/');
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