import { Router } from 'express';
import { signup, login, logout } from './../controllers/authController.js';

const router = Router();

router.route('/signup').post(signup);
router.route('/login').post(login);
router.route('/logout').get(logout);

export default router;
