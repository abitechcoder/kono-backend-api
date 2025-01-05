const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');
const { upload } = require('../utils/fileUpload');
const { verifyToken } = require('../middlewares/verifyToken'); // Add this line

router.post(
  '/',
  verifyToken,
  upload.fields([{ name: 'document', maxCount: 1 }]),
  jobController.createJob
);

router.get('/', jobController.getAllJobs);
router.get('/:id', jobController.getJobById);
router.put(
  '/:id',
  verifyToken,
  upload.fields([{ name: 'document', maxCount: 1 }]),
  jobController.updateJob
);
router.delete('/:id', jobController.deleteJob);

module.exports = router;
