const express = require('express');
const Attraction = require('../models/Attraction')
const router = express.Router();
let attractionList = []

router.get('/', function(req, res){
    Attraction.find()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });
})

module.exports = router;
