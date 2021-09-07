const User = require('../models/user')
const bcrypt = require('bcrypt');
const Post = require('../models/post')

// Create Post Controller
exports.createPost = async (req, res, next) => {
    try {
        const post = new Post(req.body)
        const createdPost = await post.save()
        res.status(200).json({ createdPost })
    } catch (error) {
        return res.status(500).send('Internal server Error!!')
    }

}


// Update Post Controller
exports.updatePost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params?.id)
        if (!post) return res.status(404).json('Post is Not found!!')

        if (req.body?.userId === post.userId || req.body?.isAdmin) {
            await post.updateOne({ $set: req.body })
            return res.status(200).json("Post has been updated!!")
        }
        return res.status(400).json("You can Update only your Post!")

    } catch (error) {
        return res.status(500).json('Internal server Error!!')
    }

}

// Delete Post Controller
exports.deletePost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params?.id)
        if (!post) return res.status(404).json('Post is Not found!!')

        if (req.body?.userId === post.userId || req.body?.isAdmin) {
            await post.deleteOne()
            return res.status(200).json("Post Deleted successfully!!")
        }
        return res.status(400).json("You can Delete only your Post!")

    } catch (error) {
        return res.status(500).json('Internal server Error!!')
    }

}

// Like and Dislike Post Controller
exports.likePost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params?.id)
        if (!post) return res.status(404).json('Post is Not found!!')

        if (post.likes.includes(req.body?.userId)) {
            await post.updateOne({ $pull: { likes: req.body?.userId } })
            return res.status(403).json('You unliked this Post!!')
        } else {
            await post.updateOne({ $push: { likes: req.body?.userId } })
            return res.status(200).json("You liked this Post!!")
        }
    } catch (error) {
        return res.status(500).json('Internal server Error!!')
    }

}

// Like and Dislike Post Controller
exports.getAPost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params?.id)
        if (!post) return res.status(404).json('Post is Not found!!')
        res.status(200).json({ post })

    } catch (error) {
        return res.status(500).json('Internal server Error!!')
    }

}

// Timeline Post Controller
exports.getTimeine = async (req, res, next) => {
    try {
        const user = await User.findById(req.body.userId)
        if (!user) return res.status(404).json('User Not found!!')
        const userPosts = await Post.find({ userId: user._id })
        const followingPosts = await Promise.all(user.following.map(friendId => Post.find({ userId: friendId })))
        res.status(200).json(userPosts.concat(...followingPosts))

    } catch (error) {
        return res.status(500).json('Internal server Error!!')
    }

}