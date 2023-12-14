// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Create a user
router.post('/', userController.createUser);

// List all users
router.get('/', userController.getAllUsers);

// Fetch a user by ID
router.get('/:userId', userController.getUserById);

// Update a user
router.put('/:userId', userController.updateUser);

// Delete a user
router.delete('/:userId', userController.deleteUser);

module.exports = router;
