const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportsController');
const { upload } = require('../utils/fileUpload');
const { verifyToken } = require('../middlewares/verifyToken'); // Add this line

router.post(
  '/',
  verifyToken,
  upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'document', maxCount: 1 },
  ]),
  reportController.createReport
);

router.get('/', reportController.getAllReports);
router.get('/:id', reportController.getReportById);
router.put(
  '/:id',
  verifyToken,
  upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'document', maxCount: 1 },
  ]),
  reportController.updateReport
);
router.delete('/:id', reportController.deleteReport);

module.exports = router;
