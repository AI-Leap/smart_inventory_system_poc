const {
  uploadOtherImage,
} = require('../src/Upload');
const express = require('express');
var router = express.Router();

router.get('/image', uploadOtherImage);
// router.post('/addtocart', addToCart);
// router.post('/purchaseitem', purchaseItem);

module.exports = router;