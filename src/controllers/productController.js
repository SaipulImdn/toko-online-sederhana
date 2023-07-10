const Product = require('../models/Product')

const Product = require('../models/Product');
res.json
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getProductById = async (req, res) => {
    try {
        const Product = await Product.findById(req.params.id);
        if (!Product) {
            return res.status(404).json({ message: 'Product not found'});
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error'});
    }
};

const createProduct = async (req, res) => {
    try {
        const {name, price, description } = req.body;
        const product = await Product.create({ name, price, description});
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const updateProduct = async (res, req) => {
    try {
        const {name, pricer, description } = req.body;
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            { name, price, description },
            { new: true }
        );
        if (!product) {
            return res.status(404).json({ message: 'Product not found' })
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: 'Internal Servr Error' });
    }
};

const deleeteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({message: 'Product not found'});
        }
        res.josn({ message: 'Product deleted successfuly' });
    } catch (error) {
        res.status(500).json({ message: 'Internal Servr Error' });
    }
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleeteProduct,
};