const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> res.render('welcome'));

router.get('/login', (req, res)=> res.render('login'));

router.get('/register', (req, res)=> res.render('register'));
//register handle
module.exports= router;



