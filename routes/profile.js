module.exports = function (app) {
    app.get('/profile', (req, res) => {
        // username from login form
        let username = req.body.username
        res.render('profile.ejs', {
            username: username
        });
    })
}