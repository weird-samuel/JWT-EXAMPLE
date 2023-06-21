const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config({ path: './.env'});
const db = mysql.createConnection({
    host: process.env.DB_host,
    user: process.env.DB_user,
    password: process.env.DB_PWD,
    database: process.env.DB
});
db.connect( (error)=>{
    if (error) {
        console.log(error);
    }
    console.log('DATABASE CONNECTED...')
});

const app = express();
const port = 3000;

app.set('view_engine', 'hbs')

app.get('/', (req, res) => {
    res.send('Welcome')
});

app.listen(port, console.log(`server running on port ${port}`));