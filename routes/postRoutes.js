import { Router } from 'express';
import {
  getTimeline,
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
  likeDislikePost,
} from '../controllers/postController.js';

const router = Router();

router.route('/').post(createPost);

router.route('/timeline/:userId').get(getTimeline);

router.route('/:id').get(getSinglePost).patch(updatePost).delete(deletePost);

router.route('/:id/like').put(likeDislikePost);

export default router;
