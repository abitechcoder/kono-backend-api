const express = require('express');
const router = express.Router();
const homepageController = require('../controllers/homepageController');
const { upload } = require('../utils/fileUpload');

router.post(
  '/',
  upload.fields([{ name: 'image', maxCount: 1 }]),
  homepageController.createHomepage
);
router.get('/:id', homepageController.getHomepageById);
router.put(
  '/:id',
  upload.fields([{ name: 'image', maxCount: 1 }]),
  homepageController.updateHomepage
);

module.exports = router;
