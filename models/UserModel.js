import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    googleId: String,
    displayName: String,
    username: {
      type: String,
      required: [true, 'Please provide username'],
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: [true, 'Please provide password'],
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please provide password'],
      min: 6,
    },
    // passwordConfirm: {
    //   type: String,
    //   required: [true, 'Please confirm password'],
    //   min: 6,
    // },
    profilePicture: {
      type: String,
      default: '',
    },
    coverPicture: {
      type: String,
      default: '',
    },
    followers: {
      type: Array,
      default: [],
    },
    followings: {
      type: Array,
      default: [],
    },
    // role: {
    //   type: String,
    //   enum: ['user', 'admin'],
    //   default: 'user',
    // },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    desc: {
      type: String,
      max: 50,
    },
    city: {
      type: String,
      max: 50,
    },
    from: {
      type: String,
      max: 50,
    },
  },
  { timestamps: true }
);

UserSchema.methods.toJSON = function () {
  let obj = this.toObject();
  delete obj.password;

  return obj;
};

export default mongoose.model('User', UserSchema);
