const express = require('express');
const router = express.Router();
const { registerOrLogin } = require('../controller/authController');

router.post('/auth', registerOrLogin);

module.exports = router;
