const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/', usersController.getUsers);
router.post('/', usersController.postUsers);

router.get('/:userId', usersController.getUserById);
router.put('/:userId', usersController.putUserById);
router.delete('/:userId', usersController.deleteUserById);

module.exports = router;