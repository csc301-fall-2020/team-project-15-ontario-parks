const express = require('express');
const Attraction = require('../models/Attraction')
const router = express.Router();
let attractionList = []

router.get('/', function(req, res){
    Attraction.find()
        .then((result) => {
            res.send(result)
            attractionList.push(result)
        })
        .catch((err) => {
            console.log(err);
        });
    return attractionList
})

module.exports = router;
