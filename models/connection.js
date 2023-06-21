const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_host,
    user: process.env.DB_user,
    password: process.env.DB_PWD,
    database: process.env.DB
});
connection.connect((error) => {
    if (error) {
        console.log(error);
    }
    console.log('DATABASE CONNECTED...')
});

module.exports = connection