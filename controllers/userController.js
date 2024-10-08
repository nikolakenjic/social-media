import { StatusCodes } from 'http-status-codes';
import User from '../models/UserModel.js';
import AppError from '../utils/appError.js';
import { hashedPassword } from '../utils/passwordEncrypted.js';

// Get user
const getUser = async (req, res, next) => {
  // console.log(typeof req.params.id);
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      throw new AppError('Can not find the user', 404);
    }

    res.status(StatusCodes.OK).json({ message: 'Success', user });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// Update user
const updateUser = async (req, res, next) => {
  try {
    if (req.body.userId === req.params.id) {
      if (req.body.password) {
        const hashPwd = await hashedPassword(req.body.password);
        req.body.password = hashPwd;
      }
      const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });

      if (!updateUser) {
        throw new AppError('Can not find the user', 404);
      }

      res.status(StatusCodes.OK).json({ message: 'Success', updateUser });
    } else {
      throw new AppError('You can only update your account', 403);
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// Delete User
const deleteUser = async (req, res, next) => {
  res.send('deleteUser');
};

// Follow a user
const followUser = async (req, res, next) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);

      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { followings: req.params.id } });

        res.status(StatusCodes.OK).json({
          message: 'User has been followed',
        });
      } else {
        res.status(StatusCodes.FORBIDDEN).json({
          message: 'You already follow this user',
        });
      }
    } catch (err) {
      console.error(err);
      next(err);
    }
  } else {
    res
      .status(StatusCodes.FORBIDDEN)
      .json({ message: 'You can not follow yourself' });
  }
};

// Unfollow a user
const unFollowUser = async (req, res, next) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);

      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({ $pull: { followings: req.params.id } });

        res.status(StatusCodes.OK).json({
          message: 'User has been unfollowed',
        });
      } else {
        res.status(StatusCodes.FORBIDDEN).json({
          message: 'You dont follow this user',
        });
      }
    } catch (err) {
      console.error(err);
      next(err);
    }
  } else {
    res
      .status(StatusCodes.FORBIDDEN)
      .json({ message: 'You can not unfollow yourself' });
  }
};

// Get user by name or ID
const getUserByNameOrId = async (req, res, next) => {
  const userId = req.query.userId;
  const username = req.query.username;

  try {
    const user = userId
      ? await User.findById(userId)
      : await User.findOne({ username: username });

    if (!user) {
      throw new AppError('Can not find the user', 404);
    }

    res.status(StatusCodes.OK).json({ message: 'Success', user });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// Get Friends
const getFriends = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId);
    const friends = await Promise.all(
      user.followings.map((friendId) => {
        return User.findById(friendId);
      })
    );

    let friendList = [];

    friends.map((friend) => {
      const { _id, username, profilePicture } = friend;
      friendList.push({ _id, username, profilePicture });
    });

    res.status(StatusCodes.OK).json(friendList);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export {
  getUser,
  updateUser,
  deleteUser,
  followUser,
  unFollowUser,
  getUserByNameOrId,
  getFriends,
};
