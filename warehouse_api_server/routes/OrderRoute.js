const {
  findOrder,
  addToCart,
  purchaseItem,
  confirmPurchase
} = require('../src/Order');
const express = require('express');
var router = express.Router();

router.get('/find', findOrder);
router.post('/addtocart', addToCart);
router.post('/purchaseitem', purchaseItem);
router.post('/confirmpurchase', confirmPurchase);

module.exports = router;