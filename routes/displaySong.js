module.exports = {
    displaySong: (req, res) => {
        // getting id from get params
        let songID = req.params.id;
        let query = `select * from song where id = ${songID}`;
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.render('displaySong.ejs', {
                song: result[0]
            });
            console.log(result);
        });
    }
}