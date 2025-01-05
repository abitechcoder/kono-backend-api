const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const { upload } = require('../utils/fileUpload');
const { verifyToken } = require('../middlewares/verifyToken'); // Add this line

router.post(
  '/',
  // verifyToken,
  upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'report', maxCount: 1 },
  ]),
  projectController.createProject
);

router.get('/', projectController.getAllProjects);
router.get('/:id', projectController.getProjectById);
router.put(
  '/:id',
  // verifyToken,
  upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'report', maxCount: 1 },
  ]),
  projectController.updateProject
);
router.delete('/:id', projectController.deleteProject);

module.exports = router;
