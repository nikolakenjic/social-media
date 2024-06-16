import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from 'morgan';
import { StatusCodes } from 'http-status-codes';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import cookieParser from 'cookie-parser';
import User from './models/UserModel.js';

// Google API import
import session from 'express-session';
import passport from 'passport';
import { Strategy as OAuth2Strategy } from 'passport-google-oauth2';

import AppError from './utils/appError.js';
import errorController from './middleware/errorController.js';
import { connectDB } from './db/connectDB.js';

const app = express();

// Security Middlewares
app.use(helmet());
app.use(cors());

// Google API
app.use(
  session({
    secret: '123545dasdsadasdasd',
    resave: false,
    saveUninitialized: true,
  })
);

// Setup/passport
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new OAuth2Strategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
      scope: ['profile', 'email'],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ googleId: profile.id });

        if (!user) {
          user = new User({
            googleId: profile.id,
            displayName: profile.displayName,
            email: profile.emails[0].value,
            image: profile.photos[0].value,
          });

          await user.save();
        }

        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
  message: 'Too many requests form this IP, please try again in 15mins',
});

app.use('/api/', limiter);

// Middleware
app.use(express.json());
app.use(cookieParser());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Routes
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';
import postRouter from './routes/postRoutes.js';

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/posts', postRouter);

// Errors
app.all('*', (req, res, next) => {
  next(
    new AppError(
      `Can't find ${req.originalUrl} on this server`,
      StatusCodes.NOT_FOUND
    )
  );
});

app.use(errorController);

// Running server
const port = process.env.PORT || 5050;

try {
  await connectDB(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`Server is running on a port: ${port}`);
  });
} catch (err) {
  console.error(err);
  process.exit(1);
}
