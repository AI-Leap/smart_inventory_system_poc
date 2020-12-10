const {
  findInventories,
  addInventory
} = require('../src/Inventory');
const express = require('express');
var router = express.Router();

router.get('/find', findInventories);
router.post('/add', addInventory);

module.exports = router;