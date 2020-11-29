const mongoose = require('mongoose');
const app = require('../app');

const avaiableCatSchema = mongoose.Schema({
    type:{

    }
});

const Category = mongoose.model('avaiableCatSchema', avaiableCatSchema);

module.exports = Category;