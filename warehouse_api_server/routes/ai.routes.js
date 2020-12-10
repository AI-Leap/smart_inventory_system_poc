const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../middlewares/upload.middleware');
const videoMiddleware = require('../middlewares/video.middleware');
const AIController = require('../controllers/ai.controller');

router.post('/images', uploadMiddleware.single('image'), async (req, res) => {
  console.log(req.body);
  return res.status(200).send({
    url: req.body.imageUrl,
  });
});

router.post('/videos', videoMiddleware.single('image'), async (req, res) => {
  console.log(req.body);
  return res.status(200).send({
    url: req.body.imageUrl,
  });
});

router.get('/images/:key', AIController.getImageAnalysis);
router.get('/videos/:key', AIController.getVideoAnalysis);

module.exports = router;