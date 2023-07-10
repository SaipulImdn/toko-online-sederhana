const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productCOntroller.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', productController.updateProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports= router;