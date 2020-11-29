const mongoose = require('mongoose');
const app = require('../app');

const nearestSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    longitude: {
        type: String,
        required: true,
    },
    latitude: {
        type: String,
        required: true,
    }
});

const Nearest = mongoose.model('Nearest', nearestSchema, "attractions");

module.exports = Nearest;
