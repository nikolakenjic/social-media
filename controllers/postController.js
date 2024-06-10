import { StatusCodes } from 'http-status-codes';
import Post from './../models/PostModel.js';
import User from './../models/UserModel.js';
import AppError from '../utils/appError.js';

const getTimeline = async (req, res, next) => {
  try {
    const currentUser = await User.findById(req.params.userId);

    const userPost = await Post.find({ userId: currentUser._id });
    const friendsPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );

    const allPosts = userPost.concat(...friendsPosts);
    // if (!userPost) {
    //   throw new AppError('Post not found', StatusCodes.NOT_FOUND);
    // }

    res.status(StatusCodes.OK).json({ message: 'Success', allPosts });
    // res.send('user');
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const getAllUserPosts = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.params.username });

    const allPosts = await Post.find({ userId: user._id });
    res.status(StatusCodes.OK).json({ message: 'Success', allPosts });
    // res.send('user');
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const getSinglePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      throw new AppError('Post not found', StatusCodes.NOT_FOUND);
    }

    res.status(StatusCodes.OK).json({ message: 'Success', post });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const createPost = async (req, res, next) => {
  try {
    const post = await Post.create(req.body);

    res.status(StatusCodes.CREATED).json({ message: 'Created Post', post });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const updatePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      throw new AppError('Post not found', StatusCodes.NOT_FOUND);
    }

    if (post.userId !== req.body.userId) {
      throw new AppError(
        'You can only update your post',
        StatusCodes.FORBIDDEN
      );
    }

    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res
      .status(StatusCodes.OK)
      .json({ message: 'Post updated successfully', updatedPost });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const deletePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      throw new AppError('Post not found', StatusCodes.NOT_FOUND);
    }

    if (post.userId !== req.body.userId) {
      throw new AppError(
        'You can only delete your post',
        StatusCodes.FORBIDDEN
      );
    }

    await Post.findByIdAndDelete(req.params.id);

    res.status(StatusCodes.OK).json({ message: 'Post deleted' });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const likeDislikePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      throw new AppError('Post not found', StatusCodes.NOT_FOUND);
    }

    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(StatusCodes.OK).json({ message: 'Post liked' });
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(StatusCodes.OK).json({ message: 'Post disliked' });
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export {
  getTimeline,
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
  likeDislikePost,
  getAllUserPosts,
};
