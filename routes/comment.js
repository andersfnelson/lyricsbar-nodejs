module.exports = function (app) {
    app.post('/comment/:id', (req, res) => {
        let song_id = req.params.id;
        let comment = req.body.comment;
        let user_id = req.user.user_id;
        let commentInsertQ = `insert into comment_table (song_id, user_id, comment) values ('${song_id}', '${user_id}', '${comment}')`;
        db.query(commentInsertQ, (err, result) => {
            res.redirect(`/displaySong/${song_id}`);
        });

    });
}