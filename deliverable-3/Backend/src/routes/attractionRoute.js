const express = require('express');
const Attraction = require('../models/Attraction');
const router = express.Router();

router.get('/', function (req, res) {
  Attraction.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
