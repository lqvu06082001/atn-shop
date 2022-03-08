const express = require('express');
const router = express.Router();

const siteController = require('../Controllers/SiteController');

router.use('/search', siteController.search)
router.use('/contact', siteController.contact)
router.use('/:slug', siteController.error)
router.use('/', siteController.index)



module.exports = router;
