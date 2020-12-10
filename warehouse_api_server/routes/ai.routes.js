const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../middlewares/upload.middleware');
const AIController = require('../controllers/ai.controller');

router.post('/', uploadMiddleware.single('image'), async (req, res) => {
  console.log(req.body);
  return res.status(200).send();
});

router.get('/images/:key', AIController.getImageAnalysis);
router.get('/videos/:key', AIController.getVideoAnalysis);

module.exports = router;