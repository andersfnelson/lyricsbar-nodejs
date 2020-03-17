module.exports = function (app) {
    app.get('/displaySong/:id', (req, res) => {
        // getting id from get params
        let songID = req.params.id;
        let query = `select * from song where id = ${songID}`;
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.render('displaySong.ejs', {
                song: result[0],
                user: req.user
            });
            console.log(result);
        });
    })
}