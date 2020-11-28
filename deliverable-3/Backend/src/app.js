const express = require('express');
const cors = require('cors')

const attractionRoute = require('./routes/attractionRoute');
<<<<<<< Updated upstream
const categoryRoute = require('./routes/categoryRoute')
=======
const preferenceRoute = require('./routes/preferenceRoute')
const closestRoute = require('./routes/nearestRoute')
>>>>>>> Stashed changes

const app = express();

// Middlewares
app.use(cors())
app.use(express.json());


// Routes
app.use('/api/attractions', attractionRoute);
<<<<<<< Updated upstream
app.use('/api/categories', categoryRoute)
=======
app.use('/api/preference', preferenceRoute)
app.use('/api/nearest', closestRoute);
>>>>>>> Stashed changes

module.exports = app;
