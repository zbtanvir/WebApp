// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// User sign-in
router.post('/signin', authController.signIn);

// User sign-out (optional)
router.get('/signout', authController.signOut);

module.exports = router;
