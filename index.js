const express = require('express');

const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

const route = require('./routes/routes');

const connection = require ('./models/connection')

const app = express();
const port = 3000;

app.use(express.static('assets'))

app.set('view engine', 'hbs')

app.use(route)

app.listen(port, console.log(`server running on port ${port}`));