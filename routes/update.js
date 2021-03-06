module.exports = function (app) {
    app.get('/update/:id', isLoggedIn, (req, res) => {
        // get id from get params
        let songID = req.params.id;
        let query = `select * from song_table where song_id = ${songID}`;
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.render('update.ejs', {
                song: result[0],
                user: req.user
            });
        })
    }),
        app.post('/update/:id', isLoggedIn, (req, res) => {
            // get info from form
            let title = req.body.title
            let artist = req.body.artist
            let album = req.body.album
            let genre = req.body.genre
            let year = req.body.year
            let lyrics = req.body.lyrics
            let song_id = req.params.id;
            // query for updating song
            let query = `update song_table set title = '${title}', artist = '${artist}', album = '${album}', genre = '${genre}', year = '${year}', lyrics = '${lyrics}' where song_id = ${song_id}`;
            db.query(query, (err, result) => {
                if (err) { return res.status(500).send(err); }
                // query for selecting the song again after being updates
                let redirectquery = `select * from song_table where song_id = ${song_id}`;
                db.query(redirectquery, (err2, result2) => {
                    if (err2) {
                        return res.status(500).send(err2);
                    }
                    console.log(result2[0].song_id);
                    res.render('displaySong.ejs', {
                        song: result2[0],
                        user: req.user
                    });
                })
            }
            )
        })
}

// route middleware to make sure
function isLoggedIn(req, res, next) {
    // if user is auth in session
    if (req.isAuthenticated()) {
        return next();
    }
    // if not go to login
    res.redirect('/login');
}