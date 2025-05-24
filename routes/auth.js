const express = require('express');

const isAuth = require('../middleware/is-auth');

const router = express.Router();

const authController = require('../controllers/auth');
const { signupValidators, updateStatusValidators } = require('../utils/validators');

router.put('/signup', signupValidators, authController.signup);

router.post('/login', authController.login);

router.get('/status', isAuth, authController.getStatus);

router.patch('/status', isAuth, updateStatusValidators, authController.updateStatus);

module.exports = router;
