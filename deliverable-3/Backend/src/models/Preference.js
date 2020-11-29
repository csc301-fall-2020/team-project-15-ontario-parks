const mongoose = require('mongoose');
const app = require('../app');

const preferenceSchema = new mongoose.Schema({
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
    },
    category: {
        type: Array,
        required: true,
    }
});

const Preference = mongoose.model('Preference', preferenceSchema, "attractions");

module.exports = Preference;
