const express = require('express');
const usersController = require('../controllers/user')

const router = express.Router();

router.route('/:id')
.get(usersController.getSingleUser)
.delete(usersController.deleteUser)
.put(usersController.updateUser)

router.put('/:id/follow', usersController.followUser)
router.put('/:id/unfollow', usersController.unFollowUser)

module.exports = router;