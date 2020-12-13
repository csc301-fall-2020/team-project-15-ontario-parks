const mongoose = require('mongoose');

const parkSchema = mongoose.Schema({
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

const Nearest = mongoose.model('Park', parkSchema);

module.exports = Nearest;
