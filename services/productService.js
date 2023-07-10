const Product = require('../models/Product');
 
const getAllProducts = async () => {
    try {
        const product = await Product.find();
        return Products;
    } catch (error) {
        throw new Error('Failed to fetch products');
    }
};

module.exports = {
    getAllProducts,
};