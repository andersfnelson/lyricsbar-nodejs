module.exports = function (app) {
    app.get('/likeSong/:id', (req, res) => {
        // getting song_id from params and user_id from session
        let song_id = req.params.id;
        let user_id = req.user.user_id;
        console.log('song:' + song_id + ' user: ' + user_id);

        // queries
        let isLikedQuery = `select is_liked from song_like_table where song_id = ${song_id} and user_id = ${user_id}`;
        let insertIgnoreQ = `insert ignore into song_like_table (song_id, user_id) values ('${song_id}', '${user_id}')`;
        let likeQuery = `update song_like_table set is_liked = 1 where song_id = ${song_id} and user_id = ${user_id}`;
        let unlikeQuery = `update song_like_table set is_liked = 0 where song_id = ${song_id} and user_id = ${user_id}`;
        let redirectquery = `select * from song_table where song_id = ${song_id}`;



        // inserting user and song into table if not already exists with is_liked = 0
        db.query(insertIgnoreQ, (err, result) => {
            if (err) { return res.status(500).send(err); }

            //selecting is_liked from the record of user and song
            db.query(isLikedQuery, (err2, result2) => {
                if (err2) { return res.status(500).send(err2); }

                // if is_liked is 0, change it to 1
                if (result2[0].is_liked == 0) {
                    console.log('not liked')
                    db.query(likeQuery, (err3, result3) => {
                        if (err3) { return res.status(500).send(err3); }
                        // go back to song display
                        db.query(redirectquery, (err4, result4) => {
                            if (err4) { return res.status(500).send(err4); }
                            res.render('displaySong.ejs', {
                                song: result4[0],
                                user: req.user
                            });
                        });
                    });

                    // if is_liked is 1, change to 0
                } else if (result2[0].is_liked == 1) {
                    console.log('already liked')
                    db.query(unlikeQuery, (err, result) => {
                        if (err) { return res.status(500).send(err); }
                        db.query(redirectquery, (err2, result2) => {
                            if (err2) { return res.status(500).send(err2); }
                            res.render('displaySong.ejs', {
                                song: result2[0],
                                user: req.user
                            });
                        });
                    });
                }

            });
        });

    });
}