'use strict';
const mysql = require('mysql');
require('dotenv').config();
const dbPassword = process.env.DB_PASSWORD;

const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: dbPassword,
    database: 'smarttech'
});
dbConn.connect(function (err) {
    if (err) throw err;
    console.log("Database Connected!");
});
module.exports = dbConn;