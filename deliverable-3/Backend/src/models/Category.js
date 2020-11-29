const mongoose = require('mongoose');
const app = require('../app');

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    }
});

const Category = mongoose.model('Category', categorySchema, "attractions");

module.exports = Category;