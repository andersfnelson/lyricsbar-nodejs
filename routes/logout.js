module.exports = function (app, passport) {
    app.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });
}