const express = require('express');
const usersController = require('../controllers/user')

const router = express.Router();
router.put('/:id', usersController.updateUser)
router.delete('/:id', usersController.deleteUser)
router.get('/:id', usersController.getSingleUser)

module.exports = router;