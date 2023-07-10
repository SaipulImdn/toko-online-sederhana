const Order = require('../models/Order');

const createOrder = async (userId, products, shippingAddress, totalAmount) => {
    try {
        const order = await Order.create({
            user: userId,
            products,
            shippingAddress,
            totalAmount,
        });
        return order;
    } catch (error) {
        throw new Error('Failed to create order');
    }
};

module.exports = {
    createOrder,
};