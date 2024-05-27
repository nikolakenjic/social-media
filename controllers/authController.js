import { StatusCodes } from 'http-status-codes';
import User from './../models/UserModel.js';

const signup = async (req, res, next) => {
  try {
    const user = await User.create(req.body);

    res
      .status(StatusCodes.CREATED)
      .json({ message: 'Successfully created profile', user });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  res.send('login');
};

const logout = async (req, res, next) => {
  res.send('logout');
};

export { signup, login, logout };
