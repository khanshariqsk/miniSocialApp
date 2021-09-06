const express = require('express');
const postsController = require('../controllers/post');

const router = express.Router();
router.post('/',postsController.createPost)
router.put('/:id',postsController.updatePost)

module.exports = router;