const express = require('express');
const postsController = require('../controllers/post');

const router = express.Router();
router.post('/',postsController.createPost)

router.route('/:id')
.put(postsController.updatePost)
.delete(postsController.deletePost)
.get(postsController.getAPost)

router.put('/:id/like', postsController.likePost)
router.get('/timeline/:userId', postsController.getTimeline)

module.exports = router;