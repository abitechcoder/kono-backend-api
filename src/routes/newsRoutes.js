const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');
const { upload } = require('../utils/fileUpload');
const { verifyToken } = require('../middlewares/verifyToken'); // Add this line

router.post(
  '/',
  // verifyToken,
  upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'report', maxCount: 1 },
  ]),
  newsController.createNews
);

router.get('/', newsController.getAllNews);
router.get('/:id', newsController.getNewsById);
router.put(
  '/:id',
  // verifyToken,
  upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'report', maxCount: 1 },
  ]),
  newsController.updateNews
);
router.delete('/:id', newsController.deleteNews);

module.exports = router;
