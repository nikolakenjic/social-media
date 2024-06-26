import { Router } from 'express';
import { signup, login, logout } from './../controllers/authController.js';
import {
  validationUserLogin,
  validationUserRegister,
} from '../middleware/validationMiddleware.js';

const router = Router();

router.route('/signup').post(validationUserRegister, signup);

router.route('/login').post(validationUserLogin, login);
router.route('/logout').get(logout);

export default router;
