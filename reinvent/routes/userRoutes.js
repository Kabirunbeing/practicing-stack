// routes/userRoutes.js
const express = require('express');
const {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/userController');

const router = express.Router();

// GET all users
router.get('/', getUsers);

// GET user by ID
router.get('/:id', getUserById);

// POST create a new user
router.post('/', createUser);

// PUT update a user
router.put('/:id', updateUser);

// DELETE remove a user
router.delete('/:id', deleteUser);

module.exports = router;
