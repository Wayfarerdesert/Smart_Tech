'use strict';
const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'smarttech'
});
dbConn.connect(function (err) {
    if (err) throw err;
    console.log("Database Connected!");
});
module.exports = dbConn;