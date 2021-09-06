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

// Delete User Controller
exports.deleteUser = async (req, res, next) => {
    try {
        if (req.body?.userId === req.params?.id || req.body?.isAdmin) {
            await User.findByIdAndDelete(req.params.id)
            return res.status(200).json("Document Deleted successfully!!")
        }
        return res.status(400).json("You can Delete only your Account!")

    } catch (error) {
        return res.status(500).json('Internal server Error!!')
    }

}

// Get Single User Controller
exports.getSingleUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        const { password, ...others } = user._doc;
        if (!user) return res.status(404).json('User Not Found!!');
        return res.status(200).json({ others })

    } catch (error) {
        return res.status(500).json('Internal server Error!!')
    }
}


// Follow User Controller
exports.followUser = async (req, res, next) => {
    try {
        if (req.body?.userId !== req.params?.id) {
            const user = await User.findById(req.params?.id)
            const currentUser = await User.findById(req.body?.userId)

            if (!user.followers.includes(req.body?.userId)) {
                await user.updateOne({ $push: { followers: req.body?.userId } })
                await currentUser.updateOne({ $push: { following: req.params?.id } })
                return res.status(200).json('User has been followed!!')
            } else {
                return res.status(403).json('You are already following this user!!')
            }
        } else {
            return res.status(403).json('You cant follow yourself!!')
        }

    } catch (error) {
        return res.status(500).json('Internal server Error!!')
    }
}


// UnFollow User Controller
exports.unFollowUser = async (req, res, next) => {
    try {
        if (req.body?.userId !== req.params?.id) {
            const user = await User.findById(req.params?.id)
            const currentUser = await User.findById(req.body?.userId)

            if (user.followers.includes(req.body?.userId)) {
                await user.updateOne({ $pull: { followers: req.body?.userId } })
                await currentUser.updateOne({ $pull: { following: req.params?.id } })
                return res.status(200).json('User has been unfollowed!!')
            } else {
                return res.status(403).json('You are already Not following this user!!')
            }
        } else {
            return res.status(403).json('You cant unfollow yourself!!')
        }

    } catch (error) {
        return res.status(500).json('Internal server Error!!')
    }
}
