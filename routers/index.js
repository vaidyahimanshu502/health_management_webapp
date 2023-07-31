const express = require('express');
const router = express.Router();

router.use('/user', require('./userRoute'));
router.use('/render', require('./pagesRoutes'));

module.exports = router;