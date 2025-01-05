const express = require('express');
const router = express.Router();
const aboutController = require('../controllers/aboutController');
const { upload } = require('../utils/fileUpload');

router.post(
  '/',
  upload.fields([{ name: 'image', maxCount: 1 }]),
  aboutController.createAbout
);
router.get('/', aboutController.getAbout);
router.get('/:id', aboutController.getAboutById);
router.put(
  '/:id',
  upload.fields([{ name: 'image', maxCount: 1 }]),
  aboutController.updateAbout
);

module.exports = router;
