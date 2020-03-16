module.exports = function (app) {
    app.get('/addSong', (req, res) => {
        res.render('addSong.ejs');
    }),
        app.post('/addSong', (req, res) => {
            // get form data
            let title = req.body.title
            let artist = req.body.artist
            let album = req.body.album
            let genre = req.body.genre
            let year = req.body.year
            let lyrics = req.body.lyrics

            let query = `insert into song (title, artist, album, genre, year, lyrics) values ('${title}', '${artist}', '${album}', '${genre}', '${year}', '${lyrics}')`;
            db.query(query, (err, result) => {
                if (err) {
                    return res.status(500).send(err);
                }
                res.redirect('/');
            })
        });
}