import { Router } from 'express';
import {
  signup,
  login,
  logout,
  google,
} from './../controllers/authController.js';
import {
  validationUserLogin,
  validationUserRegister,
} from '../middleware/validationMiddleware.js';

const router = Router();

router.route('/signup').post(validationUserRegister, signup);
router.route('/google').post(google);
router.route('/login').post(validationUserLogin, login);
router.route('/logout').get(logout);

export default router;
