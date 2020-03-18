module.exports = function (app) {
    app.get('/about', (req, res) => {
        res.render('about.ejs', {
            user: req.user
        });
    })
}