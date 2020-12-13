const express = require('express');
const cors = require('cors')

const categoryRoute = require('./routes/categoryRoute')
const parkRoute = require('./routes/parkRoute')
const attractionRoute = require('./routes/attractionRoute');

const app = express();

// Middlewares
app.use(cors())
app.use(express.json());
// Routes
app.use('/api/categories', categoryRoute)
app.use('/api/parks', parkRoute);
app.use('/api/attractions', attractionRoute);


module.exports = app;
