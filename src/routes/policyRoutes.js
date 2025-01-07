const express = require('express');
const router = express.Router();
const policyController = require('../controllers/policyController');
const { upload } = require('../utils/fileUpload');
// const { verifyToken } = require('../middlewares/verifyToken');

router.post(
  '/',
  // verifyToken,
  upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'document', maxCount: 1 },
  ]),
  policyController.createPolicy
);

router.get('/', policyController.getPolicies);
router.get('/:id', policyController.getPolicyById);
router.put(
  '/:id',
  // verifyToken,
  upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'document', maxCount: 1 },
  ]),
  policyController.updatePolicy
);
router.delete('/:id', policyController.deletePolicy);

module.exports = router;
