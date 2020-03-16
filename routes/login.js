module.exports = function (app) {
    app.get('/login', (req, res) => {
        res.render('login.ejs');
    }),
        app.post('/login', (req, res) => {
            res.redirect('/profile');
        })
}