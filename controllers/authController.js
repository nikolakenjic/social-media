import { StatusCodes } from 'http-status-codes';
import User from './../models/UserModel.js';
import { comparePassword, hashedPassword } from '../utils/passwordEncrypted.js';
import AppError from '../utils/appError.js';
import { createJWT } from '../utils/tokenUtils.js';

const signup = async (req, res, next) => {
  try {
    const hashPwd = await hashedPassword(req.body.password);

    req.body.password = hashPwd;

    const user = await User.create(req.body);
    const tokenUser = { name: user.username, userId: user._id };

    const token = createJWT({ payload: tokenUser });

    res
      .status(StatusCodes.CREATED)
      .json({ message: 'Successfully created profile', user, token });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      throw new AppError('Can not find the user', 404);
    }

    const isValidUser =
      user && (await comparePassword(password, user.password));

    if (!isValidUser) {
      throw new AppError('Password dont match', 400);
    }

    const tokenUser = { name: user.username, userId: user._id };

    const token = createJWT({ payload: tokenUser });

    res
      .status(StatusCodes.OK)
      .json({ message: 'Successfully created profile', user, token });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const logout = async (req, res, next) => {
  res.send('logout');
};

export { signup, login, logout };
