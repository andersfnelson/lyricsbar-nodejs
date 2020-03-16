module.exports = function (app) {
    app.get('/signUp', (req, res) => {
        res.render('signUp.ejs');
    }),
        app.post('/signUp', (req, res) => {
            // get vars from form
            let username = req.body.username;
            let email = req.body.email;
            let password = req.body.password;

            let query = `insert into user(username, email, password) values('${username}', '${email}', '${password}')`
            db.query(query, (err, result) => {
                if (err) {
                    return res.status(500).send(err);
                }
                res.redirect('/login');
            })
        })
}