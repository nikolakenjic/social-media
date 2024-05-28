import { StatusCodes } from 'http-status-codes';
import Post from './../models/PostModel.js';
import AppError from '../utils/appError.js';

const getTimeline = async (req, res, next) => {
  res.send('getTimeline');
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

const likePost = async (req, res, next) => {
  res.send('likePost');
};

const dislikePost = async (req, res, next) => {
  res.send('dislikePost');
};

export {
  getTimeline,
  createPost,
  updatePost,
  deletePost,
  likePost,
  dislikePost,
};
