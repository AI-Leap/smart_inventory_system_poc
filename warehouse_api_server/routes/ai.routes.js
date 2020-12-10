const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../middlewares/upload.middleware');

router.post('/', uploadMiddleware.single('image'), async (req, res) => {
  console.log(req.body);
  return res.status(200).send();
});

module.exports = router;