const express = require('express');
const router = express.Router();
const orderCOntroller = require('../controllers/orderCOntroller');

router.post('/', orderController.createOrder);
router.get('/:id', orderController.getOrderById);
router.put('/:id/pay', orderController.updateOrderToPaid);

module.exports  = router;