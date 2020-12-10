const express = require('express');
const router = express.Router();

const OrderController = require('../controllers/order.controller');

router.post('/', OrderController.createOrder);
router.get('/', OrderController.getOrders);
router.patch('/:id', OrderController.updateOrderStatus);
router.get('/:email', OrderController.getOrdersByEmail);

module.exports = router;
