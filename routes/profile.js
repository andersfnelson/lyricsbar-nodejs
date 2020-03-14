module.exports = {
    profile: (req, res) => {
        // username from login form
        let username = req.body.username
        res.render('profile.ejs', {
            username: username
        });
    }
}