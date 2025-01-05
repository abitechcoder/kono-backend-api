const express = require('express');
const router = express.Router();
const aboutController = require('../controllers/aboutController');
const { upload } = require('../utils/fileUpload');

// Official and Chiefdom routes
router.post(
  '/',
  upload.fields([{ name: 'image', maxCount: 1 }]),
  aboutController.createOfficialAndChiefdom
);
router.get('/', aboutController.getAllOfficials);
router.get('/:id', aboutController.getOfficialById);
router.delete('/:id', aboutController.deleteOfficial);

module.exports = router;
