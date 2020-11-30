const express = require('express');
const Nearest = require('../models/parkModel');

const parkController = require('../controllers/parkController')

const router = express.Router();

router.route('/').get(parkController.getAllParks)
router.route('/nearest').get(parkController.getNearestPark)

module.exports = router;
