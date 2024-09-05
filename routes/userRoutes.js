import { Router } from 'express';
import {
  updateUser,
  getUser,
  deleteUser,
  followUser,
  unFollowUser,
  getUserByNameOrId,
  getFriends,
} from '../controllers/userController.js';

const router = Router();

router.route('/').get(getUserByNameOrId);

router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

router.route('/:id/follow').put(followUser);

router.route('/:id/unfollow').put(unFollowUser);

router.route('/friends/:userId').get(getFriends);

export default router;
