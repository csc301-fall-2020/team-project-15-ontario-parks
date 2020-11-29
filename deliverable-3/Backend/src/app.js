const express = require('express');
const cors = require('cors')

const categoryRoute = require('./routes/categoryRoute')
const closestRoute = require('./routes/nearestRoute')
const attractionRoute = require('./routes/attractionRoute');
const preferenceRoute = require('./routes/preferenceRoute')

const app = express();

// Middlewares
app.use(cors())
app.use(express.json());
// Routes

// http://localhost:5000/api/preference/environment
// http://localhost:5000/api/nearest/1/1

app.use('/api/category', categoryRoute)
app.use('/api/attractions', attractionRoute);
app.use('/api/nearest', closestRoute);
app.use('/api/preference', preferenceRoute)

module.exports = app;
