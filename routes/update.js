module.exports = {
    updatePage: (req, res) => {
        // get id from get params
        let songID = req.params.id;
        let query = `select * from song where id = ${songID}`;
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.render('update.ejs', {
                song: result[0]
            });
        })
    },
    update: (req, res) => {
        // get info from form
        let title = req.body.title
        let artist = req.body.artist
        let album = req.body.album
        let genre = req.body.genre
        let year = req.body.year
        let lyrics = req.body.lyrics
        let songID = req.params.id;
        // query for updating song
        let query = `update song set title = '${title}', artist = '${artist}', album = '${album}', genre = '${genre}', year = '${year}', lyrics = '${lyrics}' where id = ${songID}`;
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            // query for selecting the song again after being updates
            let redirectquery = `select * from song where id = ${songID}`;
            db.query(redirectquery, (err2, result2) => {
                if (err2) {
                    return res.status(500).send(err2);
                }
                res.render('displaySong.ejs', {
                    song: result2[0]
                });
            })
        }
        )
    }
}