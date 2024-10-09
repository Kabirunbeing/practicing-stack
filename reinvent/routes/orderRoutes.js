// routes/orderRoutes.js
const express = require('express');
const {
    getOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder
} = require('../controllers/orderController');

const router = express.Router();

// GET all orders
router.get('/', getOrders);

// GET order by ID
router.get('/:id', getOrderById);

// POST create a new order
router.post('/', createOrder);

// PUT update an order
router.put('/:id', updateOrder);

// DELETE remove an order
router.delete('/:id', deleteOrder);

module.exports = router;
