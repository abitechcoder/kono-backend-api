const express = require('express');
const router = express.Router();
const testimonialController = require('../controllers/testimonialController');
const { upload } = require('../utils/fileUpload');
const { verifyToken } = require('../middlewares/verifyToken');

router.post(
  '/',
  // verifyToken,
  upload.fields([{ name: 'image', maxCount: 1 }]),
  testimonialController.createTestimonial
);

router.get('/', testimonialController.getAllTestimonials);
router.get('/:id', testimonialController.getTestimonialById);
router.put(
  '/:id',
  // verifyToken,
  upload.fields([{ name: 'image', maxCount: 1 }]),
  testimonialController.updateTestimonial
);
router.delete('/:id', testimonialController.deleteTestimonial);

module.exports = router;
