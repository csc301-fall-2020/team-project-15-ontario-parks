const express = require('express');
const Category = require('../models/Category');
const router = express.Router();

router.get('/', function (req, res) {
  Category.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;