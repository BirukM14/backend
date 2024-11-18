// Required modules
const ejs = require('ejs');
const layout = require('express-ejs-layouts');
const express = require('express');
const mongoose = require('mongoose');
const expressEjsLayouts = require('express-ejs-layouts');
const app = express();
require('dotenv').config();  // Loads environment variables from .env file

// Routes
const usersrouter = require('./routes/users');
const router = require('./routes/index');

// Access the environment variables
const dbURI = process.env.DB_URI;  // MongoDB URI from .env file
console.log(dbURI); 

// Connect to MongoDB
mongoose.connect(dbURI)  // Use the dbURI from the environment variable
  .then(() => {
    console.log('Successfully connected to MongoDB!');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });

// Middleware
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data (form data)
app.use(express.json());  // Parse JSON data (if needed)

// Set up EJS as the view engine
app.set('view engine', 'ejs');

// Use layouts for EJS views (optional, but if you're using layouts)
app.use(expressEjsLayouts);

// Register routes
app.use('/', router);
app.use('/users', usersrouter);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
