// REQUIRMENTS
const express = require('express'); // express web framwork
const bodyParser = require('body-parser'); // parsing html body
const passport = require('passport');
const session = require("express-session"); // session stuff
const cookieParser = require('cookie-parser'); // cookie parser
const morgan = require('morgan'); // logger


const flash = require('connect-flash');
require('dotenv').config(); // loading environment variables

const db_songs = require('./config/db'); // -> db.js
db_songs.apply(); //running db.js

const app = express(); // express app init
const port = process.env.port; // port variable from .env
require("./config/passport")(passport); // -> passport.js

// middleware configuration 
app.use(express.static(__dirname + '/public/css')); // -> css folder
app.use(express.static(__dirname + '/public/js')); // -> js folder
app.use(express.static(__dirname + '/public/imgs')); // -> imgs folder (icon not implemented)
app.use(morgan('dev')); // logs every request to console
app.use(cookieParser()); // read cookies, needed for auth
app.use(bodyParser.urlencoded({ extended: true })); // UTF-8 encodeding only
app.use(bodyParser.json()); // body form data parser
app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine

// session config
app.use(session({ secret: "super secret", resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // flash messages stored in session

// routes
/* ---------------------------------------------------------------------------- */
require('./routes/homePage')(app, passport); // -> homePage.js home & search
require('./routes/addSong')(app, passport); // -> addSong.js
require('./routes/displaySong')(app, passport); // -> displaySong.js
require('./routes/update')(app, passport); // -> update.js
require('./routes/delete')(app, passport); // -> delete.js
require('./routes/signUp')(app, passport); // -> signUp.js
require('./routes/login')(app, passport); // -> signIn.js
require('./routes/profile')(app, passport); // -> profile.js
require('./routes/about')(app, passport); // -> about.js
require('./routes/logout')(app, passport); // -> logout.js

// SERVER LISTEN FUNCTION
/* ---------------------------------------------------------------------------- */
app.listen(port, () => {
    console.log(`server listening at https://<IP>:${port}`);
});
