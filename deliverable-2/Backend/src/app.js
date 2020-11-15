const express = require('express');

const app = express();

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to Ontario Home');
});

module.exports = app;
