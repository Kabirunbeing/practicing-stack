// controllers/productController.js
const Product = require('../models/productModel');

// GET all products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// GET product by ID
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// POST create a new product
const createProduct = async (req, res) => {
    const { name, price, description, inStock } = req.body;
    
    if (!name || !price) {
        return res.status(400).json({ message: 'Name and Price are required' });
    }

    try {
        const newProduct = new Product({
            name,
            price,
            description,
            inStock
        });

        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error creating product' });
    }
};

// PUT update a product
const updateProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const { name, price, description, inStock } = req.body;
        product.name = name || product.name;
        product.price = price || product.price;
        product.description = description || product.description;
        product.inStock = inStock !== undefined ? inStock : product.inStock;

        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error updating product' });
    }
};

// DELETE remove a product
const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        await product.remove();
        res.json({ message: 'Product removed' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting product' });
    }
};

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};
