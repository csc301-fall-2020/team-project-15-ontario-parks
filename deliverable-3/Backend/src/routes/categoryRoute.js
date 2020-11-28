const express = require('express');
const Category = require('../models/Category');
const router = express.Router();

router.get('/', (req, res) => {
  Category.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        category: newCategory
      }
    })
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    })
  }

})

module.exports = router;