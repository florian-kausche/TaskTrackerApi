// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { getUsers, getUserById, createUser, updateUser, deleteUser, getPosts, createPost, updatePost, deletePost } = require('../controllers/userController');
const { validateUser } = require('../middlewares/validation');

// User routes
router.get('/users', getUsers);  // Get all users
router.post('/users', validateUser, createUser);  // Create a user

// GET a single user by ID
router.get('/users/:id', getUserById);

// PUT update a user by ID
router.put('/users/:id', validateUser, updateUser);

// DELETE a user by ID
router.delete('/users/:id', deleteUser);

// Post routes
router.get('/posts', getPosts);  // Get all posts
router.post('/posts', createPost);  // Create a post
router.put('/posts/:id', updatePost);  // Update a post
router.delete('/posts/:id', deletePost);  // Delete a post

module.exports = router;
