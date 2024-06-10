import AppError from '../utils/appError.js';

export const protect = async (req, res, next) => {
  try {
    let token;
    // console.log(req.headers);

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      throw new AppError(
        'You are not logged in! Please log in to get access.',
        401
      );
    }

    console.log(token);

    next();
  } catch (err) {
    console.error(err);
    next(err);
  }
};
