const express = require('express');

const attractionRoute = require('./routes/attractionRoute');
const infrastructureRoute = require('./routes/infrastructureRoute');

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use('/api/gogos', attractionRoute);
app.use('/api/infrastructure', infrastructureRoute);

module.exports = app;
