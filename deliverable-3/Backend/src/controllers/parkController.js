const Park = require('../models/parkModel')

const helpers = require('./helpers')

exports.getAllParks = async (req, res) => {
    try {
        const parks = await Park.find()
        res.status(200).json({
            status: 'success',
            length: parks.length,
            data: parks
        })
    } catch (err) {
        res.status(500).json({
            status: 'fail',
            message: err
        })
    }
}

exports.getNearestPark = async (req, res) => {
    try {
        // Get latitude and longitude of user's location
        const queryObj = { ...req.query }
        const latitude = queryObj['latitude']
        const longitude = queryObj['longitude']
        const parks = await Park.find()
        // Find the closest park
        let shortestDist = 1e10
        let closestIdx = 0
        for (let i = 0; i < parks.length; i++) {
            const dist = helpers.getDistanceFromLatLonInKm(latitude, longitude, parks[i].latitude, parks[i].longitude)
            if (dist < shortestDist) {
                shortestDist = dist
                closestIdx = i;
            }
        }
        res.status(200).json({
            status: 'success',
            data: parks[closestIdx]
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}
