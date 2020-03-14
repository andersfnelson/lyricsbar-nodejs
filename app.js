// REQUIRMENTS
const express = require('express'); // express web framwork
const mysql = require('mysql'); // mysql database
const bodyParser = require('body-parser'); // parsing html body
require('dotenv').config(); // loading environment variables

const app = express(); // express app init
const port = process.env.port; // port variable from .env

// middleware configuration 
app.use(express.static(__dirname + '/public/css')); // -> css folder
app.use(express.static(__dirname + '/public/js')); // -> js folder
app.use(express.static(__dirname + '/public/imgs')); // -> imgs folder (icon not implemented)
app.use(bodyParser.urlencoded({ extended: false })); // UTF-8 encodeding only
app.use(bodyParser.json()); // body form data parser
app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine

// mysql db connection
/* the mysql.createConnection function takes in a configuration
    object which contains host, user, password and the database name. */
/* ---------------------------------------------------------------------------- */
const db = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.db
});
// connect to database
db.connect((err) => { if (err) { throw err; } console.log('Connected to database'); });
global.db = db;

// home route & search
/* ---------------------------------------------------------------------------- */
const { homePage, searchResults } = require('./routes/homePage'); // -> homePage.js
app.get('/', homePage);
app.post('/', searchResults)

// add song route
/* ---------------------------------------------------------------------------- */
const { addSongPage, addSong } = require('./routes/addSong'); // -> addSong.js
app.get('/addSong', addSongPage);
app.post('/addSong', addSong);

// display song route
/* ---------------------------------------------------------------------------- */
const { displaySong } = require('./routes/displaySong'); // -> displaySong.js
app.get('/displaySong/:id', displaySong);

// update song route
/* ---------------------------------------------------------------------------- */
const { updatePage, update } = require('./routes/update'); // -> update.js
app.get('/update/:id', updatePage);
app.post('/update/:id', update);

// delete song route
/* ---------------------------------------------------------------------------- */
const { deleteSong } = require('./routes/delete'); // -> delete.js
app.get('/delete/:id', deleteSong);

// sign up route
/* ---------------------------------------------------------------------------- */
const { signUpPage, signUp } = require('./routes/signUp'); // -> signUp.js
app.get('/signUp', signUpPage);
app.post('/signUp', signUp);

// sign in route
/* ---------------------------------------------------------------------------- */
const { signInPage } = require('./routes/signIn'); // -> signIn.js
app.get('/signIn', signInPage);

// profile route
/* ---------------------------------------------------------------------------- */
const { profile } = require('./routes/profile'); // -> profile.js
app.post('/profile', profile);

// about page route
/* ---------------------------------------------------------------------------- */
const { about } = require('./routes/about'); // -> about.js
app.get('/about', about);


// SERVER LISTEN FUNCTION
/* ---------------------------------------------------------------------------- */
app.listen(port, function () {
    console.log(`server listening at https://<IP>:${port}`);
});
