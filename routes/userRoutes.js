const express = require('express');
const { body } = require('express-validator');
const { getUsers, createUser, updateUser, deleteUser } = require('../controllers/userController');
const router = express.Router();

router.get('/', getUsers);
router.post('/', 
    [
        body('name').notEmpty().withMessage('Name is required'),
        body('email').isEmail().withMessage('Valid email is required'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
        // Add other validations as needed
    ],
    createUser
);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;