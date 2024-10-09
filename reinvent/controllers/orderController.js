// controllers/orderController.js
const Order = require('../models/orderModel');

// GET all orders
const getOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('userId').populate('productIds');
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// GET order by ID
const getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate('userId').populate('productIds');
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.json(order);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// POST create a new order
const createOrder = async (req, res) => {
    const { userId, productIds, totalAmount } = req.body;

    if (!userId || !productIds || !totalAmount) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const newOrder = new Order({
            userId,
            productIds,
            totalAmount
        });

        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ message: 'Error creating order' });
    }
};

// PUT update an order
const updateOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        const { status } = req.body;
        order.status = status || order.status;

        const updatedOrder = await order.save();
        res.json(updatedOrder);
    } catch (error) {
        res.status(500).json({ message: 'Error updating order' });
    }
};

// DELETE remove an order
const deleteOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        await order.remove();
        res.json({ message: 'Order removed' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting order' });
    }
};

module.exports = {
    getOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder
};
