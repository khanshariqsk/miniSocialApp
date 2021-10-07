const express = require('express');
const postsController = require('../controllers/post');
const multerUpload = require('../fileHandler')
const multer = require('multer');

const router = express.Router();
const upload = multer({
    storage:multerUpload.multerStorage,
    fileFilter:multerUpload.multerFilter
})
router.post('/',upload.single('file'),postsController.createPost)

router.route('/:id')
.put(postsController.updatePost)
.delete(postsController.deletePost)
.get(postsController.getAPost)

router.put('/:id/like', postsController.likePost)
router.get('/timeline/:userId', postsController.getTimeline)

module.exports = router;