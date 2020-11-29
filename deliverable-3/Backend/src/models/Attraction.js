const mongoose = require('mongoose');
const app = require('../app');

const attractionSchema = new mongoose.Schema({
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
    description: {
          type: String,
          required: true,
    },
    audio: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: Array,
      required: true,
    }
});

const Attraction = mongoose.model('Attraction', attractionSchema, "attractions");

module.exports = Attraction;
