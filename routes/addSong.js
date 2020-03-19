module.exports = function (app) {
    app.get('/addSong', isLoggedIn, (req, res) => {
        res.render('addSong.ejs', {
            user: req.user
        });
    }),
        app.post('/addSong', isLoggedIn, (req, res) => {
            // get form data
            let title = req.body.title
            let artist = req.body.artist
            let album = req.body.album
            let genre = req.body.genre
            let year = req.body.year
            let lyrics = req.body.lyrics
            let user_id = req.user.user_id
            console.log(lyrics);
            console.log(user_id);
            let query = `insert into song_table (user_id, title, artist, album, genre, year, lyrics) values ('${user_id}', '${title}', '${artist}', '${album}', '${genre}', '${year}', '${lyrics}')`;
            db.query(query, (err, result) => {
                if (err) {
                    return res.status(500).send(err);
                }
                res.redirect('/');
            })
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