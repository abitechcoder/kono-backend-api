const express = require('express');
const router = express.Router();
const galleryController = require('../controllers/galleryController');
const { upload } = require('../utils/fileUpload');
const { verifyToken } = require('../middlewares/verifyToken'); // Add this line

// Public routes (no authentication needed)
router.get('/', galleryController.getAllGallery);
router.get('/:id', galleryController.getGalleryById);
router.delete('/:id', galleryController.deleteGallery);

// Protected routes (require authentication)
router.post(
  '/',
  verifyToken, // Add authentication
  upload.fields([{ name: 'image', maxCount: 1 }, { name: 'photos' }]),
  galleryController.createGallery
);

router.put(
  '/:id',
  verifyToken, // Add authentication
  upload.fields([{ name: 'image', maxCount: 1 }]),
  galleryController.updateGallery
);

module.exports = router;
