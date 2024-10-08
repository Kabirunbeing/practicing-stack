// routes/productRoutes.js
const express = require('express');
const {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/productController');

const router = express.Router();

// GET all products
router.get('/', getProducts);

// GET product by ID
router.get('/:id', getProductById);

// POST create a new product
router.post('/', createProduct);

// PUT update a product
router.put('/:id', updateProduct);

// DELETE remove a product
router.delete('/:id', deleteProduct);

module.exports = router;
