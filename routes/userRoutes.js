import { Router } from 'express';
import {
  updateUser,
  getUser,
  deleteUser,
  followUser,
} from '../controllers/userController.js';

const router = Router();

router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

router.route('/:id/follow').put(followUser);

export default router;
