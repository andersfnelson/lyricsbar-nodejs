module.exports = function (app) {
    app.get('/displaySong/:id', (req, res) => {
        // getting id from get params
        let song_id = req.params.id;
        console.log(req.user);
        let songQ = `select * from song_table where song_id = ${song_id}`;
        let commentQ = `select * from comment_table where song_id = ${song_id}`;
        db.query(songQ, (err, result) => {
            if (err) { return res.status(500).send(err); }
            db.query(commentQ, (err2, result2) => {
                if (err2) { return res.status(500).send(err); }
                res.render('displaySong.ejs', {
                    song: result[0],
                    user: req.user,
                    comments: result2
                });
            });

            console.log(result);
        });
    });

}