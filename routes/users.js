const express = require('express');
const usersrouter = express.Router();
//user model

const User = require('../models/User') ;
//const bcrypt = require('bcryptjs')


//login

usersrouter.get('/login', (req, res)=> res.render('login'));
//register
usersrouter.get('/register', (req, res)=> res.render('register'));

// Handle the POST request for user registration
usersrouter.post('/register', async(req, res) => {
    console.log('Received POST data at /users/register');
    console.log('Form data:',req.body)
  const { name, email, password } = req.body;
    const newUser = new User({name, email, password});
    await newUser.save();
  // Add your registration logic here (e.g., store user data in DB)
  console.log('Registration data:', { name, email, password });

  res.redirect('/login'); // or whatever page you want to redirect to after successful registration
});

module.exports= usersrouter;



