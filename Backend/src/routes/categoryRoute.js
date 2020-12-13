const express = require('express');

const categoryController = require('../controllers/categoryController')

const router = express.Router();

router.route('/').get(categoryController.getAllCategories)

// router.post('/', async (req, res) => {
//   try {
//     const newCategory = await Category.create(req.body);
//     res.status(201).json({
//       status: 'success',
//       data: {
//         category: newCategory
//       }
//     })
//   } catch (err) {
//     res.status(400).json({
//       status: 'fail',
//       message: err
//     })
//   }

// })

module.exports = router;