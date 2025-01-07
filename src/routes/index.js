const express = require('express');
const router = express.Router();
const homepageRoutes = require('./homepageRoutes');
const projectRoutes = require('./projectRoutes');
const newsRoutes = require('./newsRoutes');
const testimonialRoutes = require('./testimonialRoutes');
const aboutRoutes = require('./aboutRoutes');
const officialRoutes = require('./officialRoutes');
const policyRoutes = require('./policyRoutes');

// const galleryRoutes = require('./galleryRoutes');
// const partnerRoutes = require('./partnerRoutes');
// const teamRoutes = require('./teamRoutes');
// const jobRoutes = require('./jobRoutes');
// const programRoutes = require('./programRoutes');

router.use('/home', homepageRoutes);
router.use('/projects', projectRoutes);
router.use('/news', newsRoutes);
router.use('/testimonials', testimonialRoutes);
router.use('/about', aboutRoutes);
router.use('/official', officialRoutes);
router.use('/policy', policyRoutes);

// router.use('/gallery', galleryRoutes);
// router.use('/partners', partnerRoutes);
// router.use('/team', teamRoutes);
// router.use('/job', jobRoutes);
// router.use('/programs', programRoutes);

module.exports = router;
