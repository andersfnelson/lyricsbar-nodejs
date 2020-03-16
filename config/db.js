require('dotenv').config(); // loading environment variables
const mysql = require('mysql'); // mysql database
module.exports = function () {
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
}