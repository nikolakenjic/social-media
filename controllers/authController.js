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

const google = async (req, res, next) => {
  try {
    res.send('google');

    // res
    //   .status(StatusCodes.OK)
    //   .json({ message: 'Successfully SignUp with Google' });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log('Sanitized email:', email); // Check if $gt is removed

    const user = await User.findOne({ email });

    if (!user) {
      throw new AppError('Can not find the user', 404);
    }

    const isValidUser =
      user && (await comparePassword(password, user.password));

    if (!isValidUser) {
      throw new AppError('Password do not match', 400);
    }

    const tokenUser = { name: user.username, userId: user._id };

    const token = createJWT({ payload: tokenUser });

    const oneDay = 24 * 60 * 60 * 1000;

    res.cookie('token', token, {
      httpOnly: true,
      expires: new Date(Date.now() + oneDay),
    });

    res
      .status(StatusCodes.OK)
      .json({ message: 'Successfully created profile', user, token });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const logout = async (req, res, next) => {
  res.cookie('token', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now()),
  });

  res.status(StatusCodes.OK).json({ msg: 'user logged out!' });
};

export { signup, login, logout, google };
