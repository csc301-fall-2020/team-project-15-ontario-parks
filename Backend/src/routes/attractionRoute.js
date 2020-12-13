const express = require('express');

const attractionController = require('../controllers/attractionController')

const router = express.Router();

router.route('/').get(attractionController.getAttractionsByParkAndCategory)

module.exports = router;
