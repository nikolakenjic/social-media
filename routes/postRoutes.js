import { Router } from 'express';
import {
  getTimeline,
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
  likeDislikePost,
  getAllUserPosts,
} from '../controllers/postController.js';
import { authenticateUser } from '../middleware/authenticateUser.js';

const router = Router();

router.route('/').post(createPost);

router.route('/timeline/:id').get(getTimeline);

router.route('/profile/:username').get(getAllUserPosts);

router.route('/:id').get(getSinglePost).patch(updatePost).delete(deletePost);

router.route('/:id/like').put(likeDislikePost);

export default router;
