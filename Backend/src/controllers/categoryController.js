const Category = require('../models/categoryModel')

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find()
        res.status(200).json({
            status: 'success',
            length: categories.length,
            data: categories
        })
    } catch (err) {
        res.status(500).json({
            status: 'fail',
            message: err
        })
    }
}

//   router.post('/', async (req, res) => {
//     try {
//       const newCategory = await Category.create(req.body);
//       res.status(201).json({
//         status: 'success',
//         data: {
//           category: newCategory
//         }
//       })
//     } catch (err) {
//       res.status(400).json({
//         status: 'fail',
//         message: err
//       })
//     }

//   })