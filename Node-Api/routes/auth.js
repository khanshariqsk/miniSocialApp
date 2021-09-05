const express = require('express');
const usersController = require('../controllers/user')
const router = express.Router();

router.post('/',usersController.registerUser)
router.post('/login',usersController.loginUser)
module.exports = router;