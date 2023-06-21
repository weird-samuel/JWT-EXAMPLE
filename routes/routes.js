const Router = require('express');

route = Router();

route.get('/', (req, res) => {
    res.render('index')
});

route.get('/register', (req, res) => {
    res.render('register')
});

route.get('/login', (req, res) => {
    res.render('login')
});

module.exports = route;