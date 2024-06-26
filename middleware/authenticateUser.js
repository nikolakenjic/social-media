import User from '../models/UserModel.js';
import AppError from '../utils/appError.js';
import { verifyJWT } from '../utils/tokenUtils.js';

export const authenticateUser = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      throw new AppError(
        'You are not logged in! Please log in to get access.',
        401
      );
    }

    const { userId } = verifyJWT({ token });

    //   Check if user still exists
    const currentUser = await User.findById(userId);
    if (!currentUser) {
      throw new AppError('Not found user', 404);
    }

    req.user = currentUser;
    next();
  } catch (err) {
    console.error(err);
    next(err);
  }
};
