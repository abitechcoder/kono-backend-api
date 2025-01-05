const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');
const { upload } = require('../utils/fileUpload');
const { verifyToken } = require('../middlewares/verifyToken');

router.post(
  '/',
  verifyToken,
  upload.fields([{ name: 'image', maxCount: 1 }]),
  teamController.createTeamMember
);

router.get('/', teamController.getAllTeamMembers);
router.get('/:id', teamController.getTeamMemberById);
router.put(
  '/:id',
  verifyToken,
  upload.fields([{ name: 'image', maxCount: 1 }]),
  teamController.updateTeamMemberInfo
);
router.delete('/:id', teamController.deleteTeamMember);

module.exports = router;
