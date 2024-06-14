import { body, validationResult } from 'express-validator';
import User from '../models/UserModel.js';
import AppError from '../utils/appError.js';
import { StatusCodes } from 'http-status-codes';

const validatorWithErrors = (validationValues) => {
  return [
    validationValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMsgs = errors.array().map((err) => err.msg);
        console.log(errorMsgs);

        const statusCode = errorMsgs.some((e) => e === 'Email already exist')
          ? StatusCodes.CONFLICT
          : StatusCodes.BAD_REQUEST;

        throw new AppError(errorMsgs, statusCode);
      }

      next();
    },
  ];
};

// USER VALIDATION

// Register

export const validationUserRegister = validatorWithErrors([
  body('username', 'Username is required').trim().notEmpty(),
  body('email', 'Please enter a valid email like: test@test.com')
    .trim()
    .isEmail()
    .custom(async (value) => {
      const userDoc = await User.findOne({ email: value });
      if (userDoc) {
        throw new AppError('Email already exist', StatusCodes.CONFLICT);
      }
    }),
  body('password', 'Password is required')
    .trim()
    .notEmpty()
    .isLength({ min: 6, max: 30 })
    .withMessage('Password must have min 6 and max 30 character.'),
]);

// Login
export const validationUserLogin = validatorWithErrors([
  body('email', 'Please enter a valid email like: test@test.com')
    .trim()
    .isEmail(),
  body('password', 'Password is required')
    .trim()
    .notEmpty()
    .isLength({ min: 6, max: 30 })
    .withMessage('Password must have min 6 and max 30 character.'),
]);
