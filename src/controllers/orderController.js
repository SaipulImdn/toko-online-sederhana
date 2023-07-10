const Order = require('../models/Order');

const createOrder = async (req, res) => {
    try {
        res.json({ message: 'Order created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getOrderById = async (req, res) => {
    try {
        res.json({ message: 'Order retrieved successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const updateOrderToPaid = async (req, res) => {
    try {
        res.json({ messafe: 'Order update to paid successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal Serer Error' });
    }
};

module.exports = {
    createOrder,
    getOrderById,
    updateOrderToPaid,
};