import { Router } from 'express';
import {
  getTimeline,
  createPost,
  updatePost,
  deletePost,
  likePost,
  dislikePost,
} from '../controllers/postController.js';

const router = Router();

router.route('/').get(getTimeline).post(createPost);

router.route('/:id').patch(updatePost).delete(deletePost);

export default router;
