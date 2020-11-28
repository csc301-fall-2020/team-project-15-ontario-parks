const express = require('express');

const attractionRoute = require('./routes/attractionRoute');
const categoryRoute = require('./routes/categoryRoute')

const app = express();

// Middlewares
app.use(cors())
app.use(express.json());


// Routes
app.use('/api/attractions', attractionRoute);
app.use('/api/categories', categoryRoute)

module.exports = app;
