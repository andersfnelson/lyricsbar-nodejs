module.exports = {
    homePage: (req, res) => {
        let query = "select id, title, artist, album, genre, year from song"; // query database to get all the players
        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            // render homPage.ejs with var songs
            res.render('homePage.ejs', {
                songs: result
            });
        });
    },
    searchResults: (req, res) => {
        // getting the search from the req
        let search = req.body.search
        let query = `select * from song where title or artist or album or genre or year or lyrics like '%${search}%'`;
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            // render homepage with var
            res.render('homePage.ejs', {
                songs: result
            });
        })
    }
};
