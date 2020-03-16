module.exports = function (app) {
    app.get('/delete/:id', (req, res) => {
        // id from get params
        let songID = req.params.id;
        let query = `delete from song where id = ${songID}`;
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/');
        })
    })
}