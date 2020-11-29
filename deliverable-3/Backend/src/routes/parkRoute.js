const express = require('express');
const Nearest = require('../models/parkModel');

const parkController = require('../controllers/parkController')

const router = express.Router();

router.route('/').get(parkController.getAllParks)
router.route('/nearest').get(parkController.getNearestPark)

router.get('/:latitude/:longitude', function (req, res) {
    Nearest.find()
        .then((result) => {
            const latitude = req.params.latitude
            const longitude = req.params.longitude

            const length = result.length
            let closest = 1e10;
            let index = 0;
            for (let i = 0; i < length; i++) {
                const dist = (result[i].latitude - latitude) ** 2 + (result[i].longitude - longitude) ** 2
                if (dist < closest) {
                    closest = dist
                    index = i;
                }
            }
            res.send(result[index]);
        })
        .catch((err) => {
            console.log(err);
        });
});

module.exports = router;
