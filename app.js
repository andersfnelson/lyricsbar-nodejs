// REQUIRMENTS
const express = require('express'); // express web framwork
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

const database = require('./config/db'); // -> db.js
database.apply(); //running db.js

// routes
/* ---------------------------------------------------------------------------- */
require('./routes/homePage')(app); // -> homePage.js home & search
require('./routes/addSong')(app); // -> addSong.js
require('./routes/displaySong')(app); // -> displaySong.js
require('./routes/update')(app); // -> update.js
require('./routes/delete')(app); // -> delete.js
require('./routes/signUp')(app); // -> signUp.js
require('./routes/login')(app); // -> signIn.js
require('./routes/profile')(app); // -> profile.js
require('./routes/about')(app); // -> about.js

// SERVER LISTEN FUNCTION
/* ---------------------------------------------------------------------------- */
app.listen(port, function () {
    console.log(`server listening at https://<IP>:${port}`);
});
